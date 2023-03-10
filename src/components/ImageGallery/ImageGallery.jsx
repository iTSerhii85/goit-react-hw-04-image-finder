import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from "components/Loader/Loader";
import { LoadMoreButton } from "components/LoadMoreButton/LoadMoreButton";
import { useState, useEffect } from "react";
import { fetchPictures } from "./fetchPictures";

import { ImageGalleryList } from "./ImageGallery.style";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { NextLoader } from 'components/Loader/NextLoader';
import { Modal } from 'components/Modal/Modal';

export const ImageGallery =({ searchValue})=> {
  const [pictures, setPictures] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(null);
  const [totalHits, setTotalHits] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (searchValue) {
      setStatus('pending');
      setPage(1);
      setPictures(null);

      fetchPictures(searchValue, 1)
      .then(obj =>{
        if (obj.data.hits.length !== 0) {
          setPictures(obj.data.hits);
          setStatus('resolved');
          setTotalHits(obj.data.totalHits);
        } else {
          toast.info('There are no images for this request, please try another one!!!');
          setStatus('idle');
          return;
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected')
      })
    }
  }, [searchValue]);

  const LoadMore=()=>{
    setStatus('pending');
 
      fetchPictures(searchValue, page +1)
      .then(obj =>{
        if (obj.data.hits.length !== 0) {
          setPictures(prevState => [...prevState, ...obj.data.hits])
        }})
      .then(setStatus('resolved'))
      .then(setPage(prevState => prevState +1))
      .catch(error => {
        setError(error);
        setStatus('rejected')
      });
  }

  const handleShowModal=(largeImageURL)=>{
    setShowModal(largeImageURL)
  }

  const handleCloseModal=()=>{
    setShowModal(null)
  }

    if (status === 'idle') {
      return (<h1>Enter the name of the picture</h1>);
    };

    if (status === 'pending') {
      return (
        <>
          {pictures && 
            <>
              <ImageGalleryList>
                <ImageGalleryItem pictures={pictures} showModal={handleShowModal} />
              </ImageGalleryList>
              <NextLoader/>
            </>
          }
          {!pictures && <Loader/>}
        </>
      );
    }

    if (status === 'rejected') {
      return (
        <div>
          <h1>Oops, something went wrong, try again</h1>
          <p>{error}</p>
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryList>
            <ImageGalleryItem pictures={pictures} showModal={handleShowModal} />
          </ImageGalleryList>
          {pictures.length < totalHits && <LoadMoreButton onLoadMore={LoadMore} />}
          {showModal && <Modal imgUrl={showModal} CloseModal={handleCloseModal} />}
        </>
      );
    }
  };

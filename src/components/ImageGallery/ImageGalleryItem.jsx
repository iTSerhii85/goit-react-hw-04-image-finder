// import { Component } from "react";
import { ImageGalleryListItem, Img } from "./ImageGallery.style";

export const ImageGalleryItem = ({ pictures, showModal }) => {
 return(
  <>
    {pictures.map(picture => {
    return (
      <ImageGalleryListItem key={picture.id}>
        <Img
          src={picture.webformatURL}
          alt={picture.tags}
          onClick={()=> showModal(picture.largeImageURL)}
        />
      </ImageGalleryListItem>
    )})}
  </>
 )
};
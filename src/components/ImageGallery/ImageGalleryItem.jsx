import { Modal } from "components/Modal/Modal";
import { useState } from "react";
import { ImageGalleryListItem, Img } from "./ImageGallery.style";

export const ImageGalleryItem = ({ pictures }) => {
  const [showModal, setShowModal] = useState(null);

  const handleCloseModal=()=>{
    setShowModal(null)
  };

 return(
  <>
    {pictures.map(picture => {
    return (
      <ImageGalleryListItem key={picture.id}>
        <Img
          src={picture.webformatURL}
          alt={picture.tags}
          onClick={()=> setShowModal(picture.largeImageURL)}
        />
      </ImageGalleryListItem>
    )})}
    {showModal && <Modal imgUrl={showModal} CloseModal={handleCloseModal} />}
  </>
 )
};
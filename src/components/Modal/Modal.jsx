import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalImg, ModalWindow, Overlay } from "./Modal.style"

const modalRoot = document.querySelector('#modal-root');

export const Modal =({imgUrl, CloseModal})=> {

    useEffect(() => {
        const handleKeyDown = evt => {
            if (evt.code === 'Escape') {CloseModal()}
        };

        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [CloseModal]);

    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            CloseModal();
        }
    };
    

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalWindow >
                <ModalImg src={imgUrl} alt="picture" />
            </ModalWindow>
        </Overlay>,
        modalRoot
    )
}
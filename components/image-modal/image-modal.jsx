import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

import './image-modal.css';

export const ImageModal = ({ image, showImage, setShowImage }) => {
    const handleClose = () => setShowImage(false);

    return (
        <Modal
            centered
            size="lg"
            className="image-modal"
            show={showImage}
            onHide={handleClose}
        >
            <Modal.Body closeButton className="image-modal-img-container">
                <Image src={image} />
            </Modal.Body>
        </Modal>
    );
};

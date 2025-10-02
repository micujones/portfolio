import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

import { WorkModal } from './work-modal';
import { ImageModal } from '../image-modal/image-modal';

export const WorkCardView = ({ project }) => {
    // Modals
    const [show, setShow] = useState(false);
    const [showImage, setShowImage] = useState(false);

    // handleClose functions are handled in WorkModal & ImageModal
    const handleShow = () => setShow(true);
    const handleShowImage = () => setShowImage(true);

    return (
        <>
            <Card className="scroll-card">
                <div className="card-img-container">
                    <Card.Img
                        variant="top"
                        src={
                            project.image
                                ? project.image
                                : 'https://images.icon-icons.com/3261/PNG/512/github_logo_icon_206752.png'
                        }
                        // className={
                        //     project.title === 'Most Watched List'
                        //         ? 'card-img-horizontal'
                        //         : project.title === 'Movie API'
                        //         ? 'card-img-horizontal'
                        //         : 'card-img-vertical'
                        // }
                        className="card-img"
                        onClick={handleShowImage}
                    />
                </div>
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className="read-more-btn" onClick={handleShow}>
                        <span class="material-symbols-outlined icon">
                            read_more{' '}
                        </span>
                        Read more
                    </button>
                </Card.Footer>
            </Card>
            <WorkModal project={project} show={show} setShow={setShow} />
            <ImageModal
                image={project.image}
                showImage={showImage}
                setShowImage={setShowImage}
            />
        </>
    );
};

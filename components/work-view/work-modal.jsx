import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './work-view.css';

export const WorkModal = ({ project, show, setShow }) => {
    const [badges, setBadges] = useState(
        project.tools.map((tool) => (
            <span className="tool-shield">
                <a href={tool.link}>
                    <img
                        src={tool.badge}
                        alt={`The shield for the ${tool.name}`}
                    />
                </a>
            </span>
        ))
    );

    const [gallery, setGallery] = useState(
        project.gallery.map((image) => (
            <div className="square-image-container">
                <img src={image.url} alt={`${image.description}`} />
                <p className="screenshot-caption">{image.description}</p>
            </div>
        ))
    );

    const handleClose = () => setShow(false);

    return (
        <Modal
            size="lg"
            centered
            className="work-modal"
            show={show}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>{project.title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{project.description}</p>

                <b>Tools:</b>
                <div className="badges-container">{badges}</div>
                <div className="added-details">
                    <p>{project.additionalRemarks}</p>
                    {project.gallery.length > 0 ? ( // If there are images in the object
                        <>
                            <p style={{ marginTop: '16px' }}>
                                <b>Gallery:</b>
                            </p>
                            <div
                                className="scroll-list gallery"
                                style={{ gap: '16px' }}
                            >
                                {gallery}
                            </div>
                        </>
                    ) : null}
                </div>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'space-between' }}>
                <div className="project-links">
                    <button className="btn">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            style={{
                                display: 'flex',
                                alignItems: 'end',
                                textDecoration: 'none',
                                gap: '8px',
                            }}
                        >
                            Repo{''}
                            <span class="material-symbols-outlined">
                                open_in_new
                            </span>
                        </a>
                    </button>
                    {project.liveLink ? (
                        <button className="btn">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    alignItems: 'end',
                                    textDecoration: 'none',
                                    gap: '8px',
                                }}
                            >
                                Live
                                <span class="material-symbols-outlined">
                                    link
                                </span>
                            </a>
                        </button>
                    ) : null}
                </div>
            </Modal.Footer>
        </Modal>
    );
};

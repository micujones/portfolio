import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

import { WorkModal } from './work-modal';

export const WorkCardView = ({ project }) => {
    // Modal
    const [show, setShow] = useState(false);
    // handleClose function is handled in WorkModal
    const handleShow = () => setShow(true);

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
                        className={
                            project.title === 'Most Watched List'
                                ? 'card-img-horizontal'
                                : 'card-img-vertical'
                        }
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
        </>
    );
};

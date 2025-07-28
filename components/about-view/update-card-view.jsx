import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

import ProgressBar from 'react-bootstrap/ProgressBar';

import './about-view.css';

export const UpdateCardView = ({ projects }) => {
    const [updateCards, setUpdateCards] = useState(
        projects.map((project) => (
            <Card className="updates-card-container">
                <Card.Body className="updates-card-body">
                    <Card.Title>{project.title}</Card.Title>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg={project.stageBadgeVar}>
                            {project.stage}
                        </Badge>
                        <Badge bg={project.priorityBadgeVar}>
                            {project.priority}
                        </Badge>
                    </Stack>
                    <ProgressBar
                        variant={
                            project.now <= 15
                                ? 'danger'
                                : project.now > 15 && project.now <= 80
                                ? 'warning'
                                : 'success'
                        }
                        now={project.now}
                    />
                    <Card.Text>{project.description}</Card.Text>
                    {project.githubLink.length > 0 ? (
                        <Button href={project.githubLink} variant="primary">
                            Repo
                        </Button>
                    ) : null}
                </Card.Body>
            </Card>
        ))
    );
    return <>{updateCards}</>;
};

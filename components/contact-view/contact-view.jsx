import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './contact-view.css';

export const ContactView = () => {
    return (
        <>
            <div id="page-hero-container">
                <h2>Let's Connect</h2>
                <div className="social-links">
                    <a href="https://github.com/micujones" target="_blank">
                        <img src="/icons/github-icon.svg" alt="GitHub logo" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/michael-jones-ii-1ba921236/"
                        target="_blank"
                    >
                        <img
                            src="/icons/linkedin-icon.svg"
                            alt="LinkedIn logo"
                        />
                    </a>
                </div>
            </div>
            <div className="form-container">
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Col>
                        <Col>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" />
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            style={{ minHeight: '100px' }}
                        />
                    </Form.Group>
                    <Button className="btn" type="submit">
                        Send
                    </Button>
                </Form>
            </div>
        </>
    );
};

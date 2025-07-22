import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Components
import { MessageSuccessView } from './message-success-view';
import { ContactViewHeader } from './contact-view-header';
import { SendingMessage } from './sending-message';

import './contact-view.css';

export const ContactView = () => {
    const [name, setName] = useState('');

    const [state, handleSubmit, reset] = useForm('xldljrap', {
        data: { subject: `${name} wants to connect!` },
    });
    if (state.submitting)
        return (
            <>
                <ContactViewHeader />
                <SendingMessage />
            </>
        );
    if (state.succeeded) {
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return (
            <>
                <ContactViewHeader />
                <MessageSuccessView />
            </>
        );
    }

    return (
        <>
            <ContactViewHeader />
            <div className="form-container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            name="name"
                            type="text"
                            onInput={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                required
                                id="email"
                                name="email"
                                type="email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                name="phone"
                                type="tel"
                                // pattern="/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/" VALIDATE LATER
                            />
                            {/* <ValidationError
                                prefix="Phone"
                                field="phone"
                                errors={state.errors}
                            /> */}
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            required
                            id="message"
                            name="message"
                            as="textarea"
                            style={{ minHeight: '100px' }}
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </Form.Group>
                    <Button
                        className="btn"
                        type="submit"
                        disabled={state.submitting}
                    >
                        Send
                    </Button>
                </Form>
            </div>
        </>
    );
};

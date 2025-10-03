import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router';

import './navbar-view.css';

export const NavbarView = () => {
    return (
        <Navbar
            expand="lg"
            data-bs-theme="dark"
            className="bg-body-tertiary"
            sticky="top"
        >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar-menu">
                        <Nav.Link>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                to="/work"
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                Work
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                Contact
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                About
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

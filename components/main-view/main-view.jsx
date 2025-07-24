import React, { useEffect, useState } from 'react';

// Navigation
import { Routes, Route } from 'react-router';
import { NavbarView } from '../navbar-view/navbar-view.jsx';

// Components
import { TitleView } from '../title-view/title-view.jsx';
import { WorkView } from '../work-view/work-view.jsx';
import { ContactView } from '../contact-view/contact-view.jsx';

// Bootstrap imports
import Container from 'react-bootstrap/Container';

export const MainView = () => {
    const [currentPage, setCurrentPage] = useState('title');

    const renderTitleView = () => {
        setCurrentPage('title');
    };
    const renderWorkView = () => {
        setCurrentPage('work');
    };

    const renderContactView = () => {
        setCurrentPage('contact');
    };

    return (
        <>
            <NavbarView />
            <Routes>
                <Route index element={<TitleView />} />
                <Route path="work" element={<WorkView />} />
                <Route path="contact" element={<ContactView />} />

                {/* <Route path="about" element={<AboutView />} /> */}
            </Routes>
            {/* <div className="navbar">
                <a
                    onClick={renderTitleView}
                    style={{ margin: 0, cursor: 'pointer' }}
                >
                    Home
                </a>
                <a
                    onClick={renderWorkView}
                    style={{ margin: 0, cursor: 'pointer' }}
                >
                    Work
                </a>
                <a
                    onClick={renderContactView}
                    style={{ margin: 0, cursor: 'pointer' }}
                >
                    Contact
                </a>
            </div>
            {currentPage === 'work' ? (
                <WorkView />
            ) : currentPage === 'contact' ? (
                <ContactView />
            ) : (
                <TitleView />
            )} */}
        </>
    );
};

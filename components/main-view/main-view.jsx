import React, { useEffect, useState } from 'react';
import { TitleView } from '../title-view/title-view.jsx';
import { WorkView } from '../work-view/work-view.jsx';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import { ContactView } from '../contact-view/contact-view.jsx';

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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '32px',
                    height: '80px',
                    backgroundColor: 'transparent',
                    color: 'var(--clr-primary-a50)',
                }}
            >
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
            )}
        </>
    );
};

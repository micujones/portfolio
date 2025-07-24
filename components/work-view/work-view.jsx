import React, { useEffect, useState } from 'react';
import { WorkCardView } from './work-card-view';
import { projectData } from '../../src/project-data';

import './work-view.css';

export const WorkView = () => {
    const [grid, setGrid] = useState(
        projectData.map((project) => <WorkCardView project={project} />)
    );
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // https://www.dhiwise.com/post/react-get-screen-width-everything-you-need-to-know
    }, []);

    return (
        <>
            <div className="page-hero-container">
                <h2>Work</h2>
            </div>
            <div
                className={`${
                    window.innerWidth >= 750
                        ? 'scroll-list'
                        : 'mobile-scroll-list'
                }`}
            >
                {grid}
            </div>
        </>
    );
};

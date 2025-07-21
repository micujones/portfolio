import React, { useState } from 'react';
import { WorkCardView } from './work-card-view';
import { projectData } from '../../src/project-data';

export const WorkView = () => {
    const [grid, setGrid] = useState(
        projectData.map((project) => <WorkCardView project={project} />)
    );

    return (
        <>
            <div id="page-hero-container">
                <h2>Work</h2>
            </div>
            <div className="scroll-list">{grid}</div>
        </>
    );
};

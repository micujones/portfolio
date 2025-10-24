import 'animate.css';
import './animation.css';
import '/src/index.css';

import fs from 'fs';

export const TitleView = () => {
    const filePath = 'src/assets/Jones-Michael-Resume.pdf';
    const writeResumeFile = () => {};
    return (
        <>
            <div id="title-container">
                <h1 class="home-title animate__animated animate__slideInDown">
                    Mike Jones
                </h1>
                <h2 class="subtitle animate__animated animate__fadeIn animate__delay-1s">
                    Full-Stack Web Developer
                </h2>
                <p class="title-caption animate__animated animate__fadeIn animate__delay-1s">
                    Eager to bring creativity, problem-solving, and a
                    user-centric approach to educational technology.
                </p>
                {/* <a
                    href="/src/assets/Jones-Michael-Resume.pdf"
                    download="Michael-Jones-CV.pdf"
                >
                    <button type="button">Download CV</button>
                </a> */}
            </div>
        </>
    );
};

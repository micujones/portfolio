import { useState } from 'react';
import { galleryImages } from '/src/gallery-images';

import { projectUpdates } from '/src/project-updates';
import { UpdateCardView } from './update-card-view';
import './about-view.css';

import portrait from '/src/assets/portrait.jpg';

export const AboutView = () => {
    const portraitPlaceholder =
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const [gallery, setGallery] = useState(
        galleryImages.map((image) => (
            <div>
                <div className="gallery-image-container">
                    <img src={image.src} />
                </div>
                <p className="gallery-caption">{image.caption}</p>
            </div>
        ))
    );

    return (
        <>
            <div className="about-title-section">
                <div className="page-hero-container">
                    <h2>About Mike</h2>{' '}
                </div>
                <div className="content-container">
                    <div className="portrait-container">
                        <img
                            src={portrait}
                            alt="Portraite of Mike"
                            className="portrait-img"
                        />
                    </div>
                    <div className="bio-container">
                        <p className="bio-text">
                            Developer by trade; learner at heart. My background
                            is in secondary literary education and I've recently
                            have made the shift to web development. I am elated
                            to build applications that make even minute
                            differences. For the disadvantaged, for families,
                            for the future.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="section-title-container">
                    <h1 className="section-title">Updates</h1>
                    <h4 className="subtitle">what i'm working on...</h4>
                </div>
                <div className="about-updates-section">
                    <UpdateCardView projects={projectUpdates} />
                </div>
            </div>
            <div>
                <div className="section-title-container">
                    <h1 className="section-title">Gallery</h1>
                    <h4 className="subtitle">some snapshots of my life.</h4>
                </div>

                <div className="about-images-section">{gallery}</div>
            </div>
        </>
    );
};

// Navigation
import { Routes, Route } from 'react-router';
import { NavbarView } from '../navbar-view/navbar-view.jsx';

// Components
import { TitleView } from '../title-view/title-view.jsx';
import { WorkView } from '../work-view/work-view.jsx';
import { ContactView } from '../contact-view/contact-view.jsx';
import { AboutView } from '../about-view/about-view.jsx';
import { FooterView } from '../footer-view/footer-view.jsx';

export const MainView = () => {
    return (
        <>
            <NavbarView />
            <Routes>
                <Route index element={<TitleView />} />
                <Route path="/work" element={<WorkView />} />
                <Route path="/contact" element={<ContactView />} />
                <Route path="/about" element={<AboutView />} />
            </Routes>
            <FooterView />
        </>
    );
};

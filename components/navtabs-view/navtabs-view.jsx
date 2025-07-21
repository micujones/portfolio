import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const NavTabs = ({ setCurrentPage }) => {
    const renderClickedPage = (pageTitle) => {
        setCurrentPage(pageTitle.toLowerCase());
    };

    return (
        <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab
                eventKey="home"
                title="Home"
                onClick={renderClickedPage('title')}
            ></Tab>
            <Tab
                eventKey="work"
                title="Work"
                onClick={renderClickedPage('work')}
            ></Tab>
            <Tab
                eventKey="contact"
                title="Contact"
                onClick={renderClickedPage('contact')}
            ></Tab>
        </Tabs>
    );
};

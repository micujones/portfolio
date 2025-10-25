import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router';
import './index.css';
import { App } from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/* <HashRouter basename="/portfolio">
            <App />
        </HashRouter> */}
    </StrictMode>
);

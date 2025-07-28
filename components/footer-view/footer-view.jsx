import { BsLinkedin } from 'react-icons/bs';
import { IoLogoGithub } from 'react-icons/io';

export const FooterView = () => {
    return (
        <footer>
            <p>Follow me</p>
            <div className="social-links">
                <a href="https://github.com/micujones" target="_blank">
                    <IoLogoGithub size="1.5em" />
                </a>
                <a
                    href="https://www.linkedin.com/in/michael-jones-ii-1ba921236/"
                    target="_blank"
                >
                    <BsLinkedin size="1.5em" />
                </a>
            </div>
        </footer>
    );
};

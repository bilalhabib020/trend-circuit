import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return (
        <footer className="pb-0" id="footer">
            
                <p className="mb-0 mt-2">Made by Bilal Habib <a className="text-light" target="_blank" href="https://github.com/bilalhabib020"><FontAwesomeIcon icon={faSquareGithub} /></a></p>
            
        </footer>
    );
}

export default Footer;
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer id="contact">
            <div className="footer-item">
                <h2 className="footer-heading">Sviatoslav "ageless" Kulieshov</h2>
                <p className="footer-desc">Please reach out if you have any questions! I would gladly jump on a video call to speak with you!</p>
            </div>
            <ul className="footer-links-list links-wrapper">
                <li className="footer-links-list-item"><Link to="https://www.linkedin.com/in/agelesskid/"><FontAwesomeIcon icon={faLinkedin} className="fa-2x"/></Link></li>
                <li className="footer-links-list-item"><Link to="https://github.com/agelesskid"><FontAwesomeIcon icon={faGithub} className="fa-2x"/></Link></li>
                <li className="footer-links-list-item"><Link to="https://t.me/agelesskid"><FontAwesomeIcon icon={faTelegram} className="fa-2x"/></Link></li>
            </ul>
        </footer>
    )
}

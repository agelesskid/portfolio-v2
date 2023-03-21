import { useState } from "react"
import windowTracker from "../utils/windowTracker"

export default function Header() {

    const [navPosition, setNavPosition] = useState('-250px')
    let windowWidth = windowTracker()

    function openNav() {
        setNavPosition(0)
    }

    function closeNav() {
        setNavPosition('-250px')
    }

    const styles = {
        right: navPosition
    }

    const navBar = (
        <nav style={styles}>
            {windowWidth < 700 && <i className="fa-solid fa-xmark fa-2x fa-inverse" onClick={closeNav}></i>}
            <ul>
                <li><a href="#home" className="nav-link" onClick={windowWidth < 700 ? closeNav : undefined}>Home</a></li>
                <li><a href="#about" className="nav-link" onClick={windowWidth < 700 ? closeNav : undefined}>About</a></li>
                <li><a href="#projects" className="nav-link" onClick={windowWidth < 700 ? closeNav : undefined}>Projects</a></li>
                <li><a href="#contact" className="nav-link" onClick={windowWidth < 700 ? closeNav : undefined}>Contact</a></li>
                <li><a href="https://u24.gov.ua/">Support Ukraine</a></li>
            </ul>
        </nav>
    )

    return (
        <header>
            <h2 className="logo">{"<Ageless />"}</h2>
            {windowWidth < 700 && <i className="fa-solid fa-bars fa-2x fa-inverse" onClick={openNav}></i>}
            {navBar}
        </header>
    )
}
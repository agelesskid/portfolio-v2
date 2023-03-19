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

    const navBar = 
        <nav style={styles}>
            {windowWidth < 700 && <i className="fa-solid fa-xmark fa-2x fa-inverse" onClick={closeNav}></i>}
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="help">
                    <a href="https://u24.gov.ua/">Support Ukraine</a>
                </li>
            </ul>
        </nav>

    return (
        <header>
            <h2 className="logo">{"<Ageless />"}</h2>
            {windowWidth < 700 && <i className="fa-solid fa-bars fa-2x fa-inverse" onClick={openNav}></i>}
            {navBar}
        </header>
    )
}
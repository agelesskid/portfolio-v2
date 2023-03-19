import { useState } from "react"
import { Link } from "react-router-dom"
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
                <li><Link to="#home">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#work">Work</Link></li>
                <li><Link to="#contact">Contact</Link></li>
                <li className="help">
                    <Link to="https://u24.gov.ua/">Support Ukraine</Link>
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
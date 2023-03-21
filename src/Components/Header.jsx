import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons"
import windowTracker from "../utils/windowTracker"

export default function Header() {

    const [navPosition, setNavPosition] = useState('-250px')
    const location = useLocation()
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

    const navBarList = (
        location.pathname === '/'
            ? (
                <ul>
                    <li><Link to="/#home" className="nav-link" onClick={windowWidth < 700 ? closeNav : undefined}>Home</Link></li>
                    <li><Link to="/#about" className="nav-link" onClick={windowWidth < 700 ? closeNav : undefined}>About</Link></li>
                    <li><Link to="/#projects" className="nav-link" onClick={windowWidth < 700 ? closeNav : undefined}>Projects</Link></li>
                    <li><Link to="/#contact" className="nav-link" onClick={windowWidth < 700 ? closeNav : undefined}>Contact</Link></li>
                    <li><Link to="https://u24.gov.ua/">Support Ukraine</Link></li>
                </ul>
            ) 
            : (
                <ul>
                    <li><Link to="/" className="nav-link" onClick={windowWidth < 700 ? closeNav : undefined}>Home</Link></li>
                    <li><Link to="https://u24.gov.ua/">Support Ukraine</Link></li>
                </ul>
            )
    )

    const navBar = (
        <nav style={styles}>
            {windowWidth < 700 && <FontAwesomeIcon icon={faXmark} className="fa-2x fa-inverse" onClick={closeNav}/>}
            {navBarList}
        </nav>
    )

    return (
        <header>
            <h2 className="logo">{"<Ageless />"}</h2>
            {windowWidth < 700 && <FontAwesomeIcon icon={faBars} className="fa-2x fa-inverse" onClick={openNav}/>}
            {navBar}
        </header>
    )
}
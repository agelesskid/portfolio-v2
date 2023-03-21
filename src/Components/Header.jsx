import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
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

    const navBarList = useLocation().pathname === '/'
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

    function NavBar(){
        return (
            <nav style={styles}>
                {windowWidth < 700 && <i className="fa-solid fa-xmark fa-2x fa-inverse" onClick={closeNav}></i>}
                {navBarList}
            </nav>
        )
    } 

    return (
        <header>
            <h2 className="logo">{"<Ageless />"}</h2>
            {windowWidth < 700 && <i className="fa-solid fa-bars fa-2x fa-inverse" onClick={openNav}></i>}
            <NavBar />
        </header>
    )
}
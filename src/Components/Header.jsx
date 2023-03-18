import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <h2 className="logo">{"<Ageless />"}</h2>
            <nav>
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
        </header>
    )
}
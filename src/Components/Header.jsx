export default function Header() {
    return (
        <header>
            <h2 className="logo">{"<Ageless />"}</h2>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li className="help"><a href="https://u24.gov.ua/">Support Ukraine</a></li>
                </ul>
            </nav>
        </header>
    )
}
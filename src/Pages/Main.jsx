import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Home from "../Components/Home"
import About from "../Components/About"

export default function Main() {
    return (
        <>
            <Header />
            <main>
                <Home />
                <About />
            </main>
            <Footer />
        </>
    )
}
import { useEffect, useState } from "react"

export default function windowTracker() {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return windowWidth
}

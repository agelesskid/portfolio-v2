import { Link } from "react-router-dom"
import { useName } from "../Hooks/useName"

export default function Project({data}) {
    return (
        <li className="project">
            <Link to={`/project/${data.id}`}>
                <img src={`.${data.img}`} alt={`${useName(data.name)} site image`} />
            </Link>
        </li>
    ) 
}
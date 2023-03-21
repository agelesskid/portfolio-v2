import { Link } from "react-router-dom"

export default function Project({data}) {
    return (
        
            <li className="project">
                <Link to={`/project/${data.name.replace(/ /g,'-').toLowerCase()}`}>
                    <img src={`.${data.img}`} alt={`${data.name} site image`} />
                </Link>
            </li>
        
    ) 
}
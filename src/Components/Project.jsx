export default function Project({data}) {
    return (
        <li className="project">
            <img src={`.${data.img}`} alt={`${data.name} site image`} />
        </li>
    )
}
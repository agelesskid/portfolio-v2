import { useContext } from "react"
import { Context } from "../Context"
import Project from "./Project"

export default function Projects() {

    const {projectsArr} = useContext(Context)

    const projectsEl = projectsArr.map(project=>{
        return (
            <Project key={project.id} data={project}/>
        )
    })

    return (
        <section id="projects">
            <h2 className="projects-main-heading section-main-heading">My projects</h2>
            <ul className="projects-wrapper">
                {projectsEl}
            </ul>
        </section>
    )
}
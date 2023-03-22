import { useContext, useEffect, useState } from "react"
import { Context } from "../Context"
import { useName } from "../Hooks/useName"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function ProjectPage() {

    const [projectObj, setProjectObj] = useState(null)
    const [content, setContent] = useState(<></>)
    const {projectsArr} = useContext(Context)
    const separator = '/project/'
    const projectId = location.pathname.slice(location.pathname.indexOf(separator) + separator.length)

    useEffect(()=>{
        setProjectObj(projectsArr.find(project=>project.id == projectId))
        if(projectObj){
            const {gif, name, short_desc, github_url, live_url, figma_url, full_desc, languages} = projectObj
            const languagesEl = languages.map(item=><li key={nanoid()} className="section-list-item"><p>{item}</p></li>)
            setContent(
                <>
                    <section id="project-home" style={{background: `url(${gif}) center top / cover no-repeat`}}>
                        <h1 className="project-main-heading page-main-heading heading-shadow">{useName(name)}</h1>
                        <h2 className="project-secondary-heading page-secondary-heading heading-shadow">{short_desc}</h2>
                    </section>
                    <section id="project-about">
                        <div className="section-items-wrapper">
                            <div className="section-wrapper-item overview-wrapper">
                                <h3 className="section-overview-heading section-secondary-heading">Project overview:</h3>
                                <p className="section-main-desc">{full_desc}</p>
                                <ul className="links-wrapper">
                                    <li><Link to={github_url}><FontAwesomeIcon icon={faGithub} className="fa-lg"/>GitHub</Link></li>
                                    <li><Link to={live_url}><FontAwesomeIcon icon={faLightbulb} className="fa-lg"/>Live</Link></li>
                                    {figma_url && <li><Link to={figma_url}><FontAwesomeIcon icon={faFigma} className="fa-lg"/>Figma</Link></li>}
                                </ul>
                            </div>
                            <div className="section-wrapper-item languages-wrapper">
                                <h3 className="section-languages-heading section-secondary-heading">Languages:</h3>
                                <ul className="section-languages-list">
                                    {languagesEl}
                                </ul>
                            </div>
                        </div>
                    </section>
                </>
            )
        }
    }, [projectObj])

    return (
        <>
            <Header />
            <main>
                {content}
            </main>
            <Footer />
        </>
    )
}
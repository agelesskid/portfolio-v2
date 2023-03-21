import projects_data from "./data/proejcts_data";
import { nanoid } from "nanoid"
import { createContext, useEffect, useState } from "react";
const Context = createContext()

function ContextProvider(props){
    const [projectsArr, setProjectsArr] = useState([])

    useEffect(()=>{
        setProjectsArr(projects_data)
        setProjectsArr(prevArr=>prevArr.map((project, index)=>({
            key:nanoid(),
            id: index,
            ...project,
        })))
    }, [])
    
    return (
        <Context.Provider value={{projectsArr}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
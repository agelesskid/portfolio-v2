import projects_data from "./data/proejcts_data";
import { createContext, useEffect, useState } from "react";
const Context = createContext()

function ContextProvider(props){
    const [projectsArr, setProjectsArr] = useState([])
    
    useEffect(()=>{
        setProjectsArr(projects_data)
    }, [])

    return (
        <Context.Provider value={{projectsArr}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
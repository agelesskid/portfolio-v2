import { Routes, Route } from "react-router-dom"
import Main from "./Pages/Main"
import ProjectPage from "./Pages/ProjectPage"
import ScrollToHashElement from "./Components/ScrollToHashElement";

export default function App() {
  return (
    <>
      <ScrollToHashElement />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
      </Routes>
    </>
    
  )
}
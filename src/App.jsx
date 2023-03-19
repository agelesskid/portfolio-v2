import { Routes, Route } from "react-router-dom"
import Main from "./Pages/Main"
import Project from "./Pages/Project"

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/project/:projectName" element={<Project />} />
    </Routes>
  )
}
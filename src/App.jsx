import React, { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout"
import Filieres from "./pages/Filieres"
import Parcours from "./pages/Parcours"
import Campus from "./pages/Campus"
import Admission from "./pages/Admission"
import Carriere from "./pages/Carriere"
import Inscription from "./pages/Inscription"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ pathname ])

  return (
    <Routes>
     <Route path="/" element={<Layout />} >
        <Route index element={<Home/>} />
        <Route path="filieres" element={<Filieres/>} />
        <Route path="Parcours" element={<Parcours />} />
        <Route path="campus" element={<Campus />} />
        <Route path="admission" element={<Admission />} />
        <Route path="carriere" element={<Carriere />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
     </Route>
    </Routes>
  )
}

export default App

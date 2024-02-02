import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import About from "./components/About"


import './App.css'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <div className='bg'>
        <Routes>
          <Route exact path="/portfolio/" element={<Home />} />
          <Route exact path="/portfolio/about" element={<About />} />
          <Route exact path='/portfolio/contact' element={<Contact />} />
          <Route exact path='/portfolio/portfolio' element={<Portfolio />} />
          <Route exact path='/portfolio/resume' element={<Resume />} />
          <Route exact path='/portfolio/skills' element={<Skills />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

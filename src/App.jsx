import { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { IoCodeSlash, IoFolder, IoPerson, IoMail, IoSunny  } from "react-icons/io5";
import Home from './Home'
import About from './About'
import Project from './Project'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black text-white ">
        <nav className="flex gap-5 mt-4 border border-black dark:border-white rounded-full px-4 py-2 sticky top-5">
          <button 
            className="navBtn"
            onClick={() => setActiveSection('home')}
          >
            <FaHome />
          </button>
          <button 
            className="navBtn"
            onClick={() => setActiveSection('about')}
          >
            <IoPerson />
          </button>

          <button 
            className="navBtn"
            onClick={() => setActiveSection('projects')}
          >
            <IoFolder />
          </button>
          <button 
            className="navBtn"
            onClick={() => setActiveSection('contact')}
          >
            <IoMail />
          </button>

          

        </nav>

        {activeSection === 'home' && (
          <Home setActiveSection={setActiveSection} />
        )}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Project />}
        {activeSection === 'contact' && <Contact />}
    </div>
  )
}

export default App
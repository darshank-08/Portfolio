import { useState, useEffect } from 'react'
import { FaHome } from "react-icons/fa";
import { IoFolder, IoPerson, IoMail } from "react-icons/io5";
import Home from './Home'
import About from './About';
import Project from './Project'
import Contact from './Contact';

const VALID_SECTIONS = ['home', 'about', 'projects', 'contact']

const getSectionFromHash = () => {
  const hash = window.location.hash.replace('#', '')
  return VALID_SECTIONS.includes(hash) ? hash : 'home'
}

function App() {
  const [activeSection, setActiveSectionState] = useState(getSectionFromHash)

  useEffect(() => {
    
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home')
    }

    const handleHashChange = () => {
      setActiveSectionState(getSectionFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const setActiveSection = (section) => {
    if (window.location.hash.replace('#', '') === section) return
    window.location.hash = section
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-black text-white ">
        <nav className="flex gap-5 mt-4 border border-black dark:border-white rounded-full px-4 py-2 sticky top-5">
          <button
            className={`navBtn ${activeSection === 'home' ? 'text-yellow-300' : ''}`}
            onClick={() => setActiveSection('home')}
          >
            <FaHome />
          </button>
          <button
            className={`navBtn ${activeSection === 'about' ? 'text-yellow-300' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            <IoPerson />
          </button>

          <button
            className={`navBtn ${activeSection === 'projects' ? 'text-yellow-300' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            <IoFolder />
          </button>
          <button
            className={`navBtn ${activeSection === 'contact' ? 'text-yellow-300' : ''}`}
            onClick={() => setActiveSection('contact')}
          >
            <IoMail />
          </button>
        </nav>

        {activeSection === 'home' && (
          <Home setActiveSection={setActiveSection} />
        )}
        {activeSection === 'about' && <About setActiveSection={setActiveSection} />}
        {activeSection === 'projects' && <Project />}
        {activeSection === 'contact' && <Contact />}
    </div>
  )
}

export default App
import { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { IoCodeSlash, IoFolder, IoPerson, IoMail, IoSunny  } from "react-icons/io5";
import Home from './Home'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center dark:bg-gray-950 dark:text-white">
        <nav className="flex gap-5 mt-4 border border-black dark:border-white rounded-full px-4 py-2 sticky top-5">
          <button className="navBtn"><FaHome /></button>
          <button className="navBtn"><IoPerson  /></button>
          <button className="navBtn"><IoCodeSlash  /></button>
          <button className="navBtn"><IoFolder  /></button>
          <button className="navBtn"><IoMail  /></button>

          <p className="text-2xl">|</p>
          <button 
            className="text-xl px-2 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            onClick={() => {
              document.documentElement.classList.toggle('dark');
            }}
          >
            <IoSunny />
          </button>
        </nav>

        <Home />
    </div>
  )
}

export default App
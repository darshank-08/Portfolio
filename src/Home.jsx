import React from 'react'
import { FaGithub } from "react-icons/fa";


const Home = ({ setActiveSection }) => {

  const Lang = [
    {"icon" : "https://www.svgrepo.com/show/452234/java.svg"},
    {"icon" : "https://img.icons8.com/?size=96&id=l75OEUJkPAk4&format=png"},
    {"icon" : "https://img.icons8.com/?size=96&id=108784&format=png"},
    {"icon" : "https://img.icons8.com/?size=96&id=J6KcaRLsTgpZ&format=png"},   
  ]

    const lib = [
      {"icon" : "https://img.icons8.com/?size=96&id=90519&format=png"},
      {"icon" : "https://img.icons8.com/?size=160&id=asWSSTBrDlTW&format=png"},
      {"icon" : "https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png"},
      {"icon" : "https://img.icons8.com/?size=96&id=38561&format=png"},
      {"icon" : "https://img.icons8.com/?size=96&id=pHS3eRpynIRQ&format=png"},
      {"icon" : "https://img.icons8.com/?size=96&id=bosfpvRzNOG8&format=png"},
      {"icon" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH7lqf8hcQQZn_MHivrEGqW-yPngvFqtatii9Ss2XPiQ&s=10"},
    ]

    const other = [
      {"icon" : "https://img.icons8.com/?size=96&id=33039&format=png"},
      {"icon" : "https://img.icons8.com/?size=96&id=zQjzFjPpT2Ek&format=png"},
      {"icon" : "https://img.icons8.com/?size=96&id=ka3InxFU3QZa&format=png"},
      {"icon" : "https://img.icons8.com/?size=96&id=20906&format=png"},
      {"icon" : "https://img.icons8.com/?size=160&id=EPbEfEa7o8CB&format=png"},
      
    ]

    
  return (
    <div className="mt-4 min-h-screen flex flex-col items-center justify-start dark:bg-black dark:text-white">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center relative min-w-full min-h-[200px] mt-6">
            <h1 className="text-5xl md:text-7xl font-Space-Grotesk font-bold text-center leading-tight">
              BUILDING
              <br />
              <span className="
                inline-block
                mt-2
                rotate-[-2deg]
                bg-gray-200
                dark:bg-slate-400
                px-4
                py-1
                text-blue-700
              ">
                THE_FUTURE
              </span>
            </h1>
        </div>

        {/* Tagline */}
        <section className="flex items-center gap-2 mt-8 max-w-2xl px-4">
            <p className='text-red-600 font-bold text-xl'>|</p>
            <p className='text-base md:text-[17px]'>
              Building scalable Software systems with clean architecture and real-world impact.
            </p>
        </section>

      {/* Main Content - Code Card & Bio */}
      <section className="m-12 flex lg:flex-row gap-8 lg:gap-12 items-center lg:items-start max-w-7xl px-4">
            {/* Code Card */}
            <div className="relative w-fit ">
              <div className="absolute inset-0 bg-blue-600 translate-x-3 translate-y-3 rounded-sm"></div>
              <div className="absolute inset-0 border-4 border-yellow-400 translate-x-2 translate-y-2 rounded-sm"></div>

              <div className="
                relative
                bg-[#111111]
                text-yellow-400
                w-full
                max-w-[400px]
                p-4
                border-2
                border-black
                shadow-2xl
                rotate-[-1deg]
                rounded-sm
              ">
                {/* Fake Window Dots */}
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>

                <div className="text-sm md:text-base font-mono leading-7">
                  <p>const Developer = {"{"}</p>
                  <p className="ml-4">
                    name: <span className="text-white">"Darshan Karagir"</span>,
                  </p>
                  <p className="ml-4">
                    role: <span className="text-white">"Backend Developer"</span>,
                  </p>
                  <p className="ml-4">
                    philosophy:
                    <span className="text-white"> "Clean code, solid foundations"</span>,
                  </p>
                  <p className="ml-4">skills: [</p>
                  <p className="ml-8 text-white">"RESTful APIs",</p>
                  <p className="ml-8 text-white">"Database Design",</p>
                  <p className="ml-8 text-white">"Problem Solving"</p>
                  <p className="ml-4">],</p>
                  <p className="ml-4">execute: function() {"{"}</p>
                  <p className="ml-8 text-white">return this.build_the_future();</p>
                  <p className="ml-4">{"}"}</p>
                  <p>{"};"}</p>
                  <br />
                  <p className="text-yellow-300">Developer.execute();</p>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="max-w-xl flex flex-col gap-10 justify-between">

              {/* About */}
              <div>
                <h1
                  className="
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-black uppercase text-gray-100 relative inline-block mb-8
                  "
                >
                  WHO_I_AM
                  <span className="absolute left-0 bottom-1 w-full h-2 bg-red-500 -z-10"></span>
                </h1>

                <div className="space-y-6 text-gray-300 text-base md:text-lg leading-8 md:leading-9">
                  <p>
                    I'm a backend-focused developer who enjoys building APIs,
                    designing scalable systems, and solving algorithmic problems.
                  </p>

                  <p>
                    Currently exploring Java, Spring Boot, databases, and system
                    design while sharpening my problem-solving skills through
                    LeetCode and real-world projects. 
                  </p>

                  {/* Card 1 */}
                  <div className="flex items-center gap-2 text-[#f0fdf4]">
                    <img
                      src="/src/assets/leetcode.svg" 
                      alt="LeetCode"
                      className="w-6 h-6"
                    />
                    <p className= "text-[1.3rem]">
                      Solved <span className='leading-none'>100+</span> Leetcode & GFG 
                    </p>
                  </div>
                </div>

                <p className= "text-[1.2rem] font-semibold mt-7 text-amber-50">🟢 Open to work</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-5">

                <button onClick={() => setActiveSection("projects")}
                  className=" px-6 py-3 bg-yellow-300 text-black font-bold uppercase border-2 shadow-[4px_4px_0px_0px_#fefbee] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200 cursor-pointer border-amber-100"
                >
                  View Projects →
                </button>

                <button onClick={() => window.open("/Resume.pdf", "_blank")}
                  className=" px-6 py-3 bg-black text-white font-bold uppercase
                    border-2 border-white shadow-[4px_4px_0px_0px_#fff] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200 cursor-pointer"
                >
                  Resume 
                </button>

              </div>

            </div>
        </section>

        <div className="w-full mt-20 mb-10">
          <h2 className='text-2xl font-gummy uppercase'>skills :</h2>
        </div>
        
        <section className="w-full mx-auto p-8 border-2 md:border-b-4 border-gray-900">

          {/* programing Languages */}
          <div className="mb-10">

            <div className="flex items-center mb-5">
              <h3 className="font-mono uppercase tracking-[0.2em] text-xs md:text-sm">
                programing Languages:
              </h3>
            </div>

            <div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-x-6 gap-y-8 place-items-center"
            >
              {Lang.map((lang) => (
                <div
                  key={`backend-${lang.name}`}
                  className="group flex items-center justify-center w-20 h-20 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#f0fdf4]"
                >
                  <img
                    src={lang.icon}
                    alt={lang.name}
                    className=" w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* Frameworks & Libraries */}
          <div className="mb-10">

            <div className="flex items-center mb-5">
              <h3 className="font-mono uppercase tracking-[0.2em] text-xs md:text-sm">
                frameworks & libraries:
              </h3>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-x-6 gap-y-8 place-items-center" >
              {lib.map((lang) => (
                <div
                  key={`backend-${lang.name}`}
                  className="group flex items-center justify-center w-20 h-20 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:bg-gray-100"
                >
                  <img
                    src={lang.icon}
                    alt={lang.name}
                    className=" w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* Cloud & other  */}
          <div className="">

            <div className="flex items-center mb-5">
              <h3 className="font-mono uppercase tracking-[0.2em] text-xs md:text-sm">
                Could & other:
              </h3>
            </div>

            <div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-x-6 gap-y-8 place-items-center"
            >
              {other.map((lang) => (
                <div
                  key={`backend-${lang.name}`}
                  className="group flex items-center justify-center w-20 h-20 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:bg-gray-100"
                >
                  <img
                    src={lang.icon}
                    alt={lang.name}
                    className=" w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              ))}
            </div>

          </div>

        </section>

        <section className="min-w-5/6 my-12">
          <div className="w-5/6 mt-18 mb-12">
            <h2 className='text-2xl font-gummy uppercase'>Projects Preview:</h2>
          </div>

          <div className='flex gap-4'>

            {/* scoutIQ */}
            <div className="relative bg-[#171717] border border-zinc-700 rounded-2xl pt-10 px-6 pb-6 max-w-sm">
              <img
                src="https://p7.hiclipart.com/preview/278/313/158/2014-fifa-world-cup-football-adidas-brazuca-world-cup.jpg"
                alt="ScoutIQ"
                className="absolute -top-6 left-6 w-12 h-12 bg-[#171717] rounded-full p-1"
              />

              <h3 className="text-[1.7rem] font-pixel mb-3">
                ScoutIQ
              </h3>

              <p className="text-zinc-300 leading-7 text-sm">
                "A football scouting platform that helps users explore player data,
                compare performance, and follow the top five European leagues."
              </p>

              <div className='flex items-center justify-start gap-4 mt-4'>

                <a
                  href="https://scout-iq-psi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    rounded-md
                    bg-[#238636]
                    border
                    border-[#2ea043]
                    text-white
                    text-sm
                    font-semibold
                    transition-colors
                    duration-150
                    hover:bg-[#2c974b]
                    active:bg-[#238636]
                    focus:outline-none
                    focus:ring-offset-2
                    focus:ring-offset-[#0d1117]
                  "
                >
                  Live Demo
                </a>

                <a href="https://github.com/darshank-08/scout-IQ-Backend" target="_blank" rel="noreferrer"
                className="w-10 h-10 p-1 flex items-center justify-center hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  <FaGithub className="w-full h-full" />
                </a>
              </div>
            </div>

            {/* Urban Rides */}

            <div className="relative bg-[#171717] border border-zinc-700 rounded-2xl pt-10 px-6 pb-6 max-w-sm">
              <img
                src="https://img.magnific.com/free-vector/hand-drawn-muscle-car-illustration_23-2149432254.jpg?semt=ais_hybrid&w=740&q=80"
                alt="ScoutIQ"
                className="absolute -top-6 left-6 w-12 h-12 bg-[#171717] rounded-full p-2"
              />

              <h3 className="text-[1.7rem] font-pixel mb-3">
                Urban Rides
              </h3>

              <p className="text-zinc-300 leading-7 text-sm">
                "Full-stack car rental application that built for both renters and vehicle owners, with car listing, booking, and management features."
              </p>

              <div className='flex items-center justify-start gap-4 mt-4'>

                <a
                  href="https://urban-rides-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    rounded-md
                    bg-[#238636]
                    border
                    border-[#2ea043]
                    text-white
                    text-sm
                    font-semibold
                    transition-colors
                    duration-150
                    hover:bg-[#2c974b]
                    active:bg-[#238636]
                    focus:outline-none
                    focus:ring-offset-2
                    focus:ring-offset-[#0d1117]
                  "
                >
                  Live Demo
                </a>

                <a href="https://github.com/darshank-08/urban-ride-website" target="_blank" rel="noreferrer"
                className="w-10 h-10 p-1 flex items-center justify-center hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  <FaGithub className="w-full h-full" />
                </a>
              </div>
            </div>

            {/* CineScope */}

            <div className="relative bg-[#171717] border border-zinc-700 rounded-2xl pt-10 px-6 pb-6 max-w-sm">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjse9DpWitkoMkQYUcgU9lvG9-6rf7xCFw3V4tFtrxyrMjNka5fNXZu2U&s=10"
                alt="ScoutIQ"
                className="absolute -top-6 left-6 w-12 h-12 bg-[#171717] rounded-full p-2"
              />

              <h3 className="text-[1.7rem] font-pixel mb-3">
                CineScope
              </h3>

              <p className="text-zinc-300 leading-7 text-sm">
                "A movie and entertainment platform for discovering films, TV shows, and anime, with watchlists, and detailed content information."
              </p>

              <div className='flex items-center justify-start gap-4 mt-4'>

                <a
                  href="https://darshank-08.github.io/Cine_Scope/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    rounded-md
                    bg-[#238636]
                    border
                    border-[#2ea043]
                    text-white
                    text-sm
                    font-semibold
                    transition-colors
                    duration-150
                    hover:bg-[#2c974b]
                    active:bg-[#238636]
                    focus:outline-none
                    focus:ring-offset-2
                    focus:ring-offset-[#0d1117]
                  "
                >
                  Live Demo
                </a>

                <a href="https://github.com/darshank-08/Cine_Scope" target="_blank" rel="noreferrer"
                className="w-10 h-10 p-1 flex items-center justify-center hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  <FaGithub className="w-full h-full" />
                </a>
              </div>
            </div>
          </div>
        </section>

{/* 
        <footer className='mt-16 flex min-w-full'>
          <div className='bg-[#1d293d] text-amber-100 flex min-w-full gap-7 justify-center align-center p-4 py-5 text-sm md:text-base'>
            <p className='text-[1.2rem]'><a href="https://leetcode.com/u/DarshanKaragir/" target="_blank" rel="noopener noreferrer">LeetCode</a></p>
            <p className='text-[1.2rem]'><a href="https://www.linkedin.com/in/darshan-karagir/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p className='text-[1.2rem]'><a href="https://github.com/darshank-08" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p className='text-[1.2rem]'><a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">Resume</a></p>
          </div>
        </footer> */}
    </div>
  )
}

export default Home
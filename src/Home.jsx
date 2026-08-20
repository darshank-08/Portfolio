import React, { useEffect, useRef, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

const Home = ({ setActiveSection }) => {
  const Lang = [
    { name: 'Java', icon: "https://www.svgrepo.com/show/452234/java.svg" },
    { name: 'Python', icon: "https://img.icons8.com/?size=96&id=l75OEUJkPAk4&format=png" },
    { name: 'JavaScript', icon: "https://img.icons8.com/?size=96&id=108784&format=png" },
    { name: 'SQL', icon: "https://img.icons8.com/?size=96&id=J6KcaRLsTgpZ&format=png" },
  ]

  const lib = [
    { name: 'Springboot', icon: "https://img.icons8.com/?size=96&id=90519&format=png" },
    { name: 'React', icon: "https://img.icons8.com/?size=160&id=asWSSTBrDlTW&format=png" },
    { name: 'Tailwind', icon: "https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png" },
    { name: 'Postgres', icon: "https://img.icons8.com/?size=96&id=38561&format=png" },
    { name: 'Redis', icon: "https://img.icons8.com/?size=96&id=pHS3eRpynIRQ&format=png" },
    { name: 'MongoDB', icon: "https://img.icons8.com/?size=96&id=bosfpvRzNOG8&format=png" },
    { name: 'REST API', icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
  ]

  const other = [
    { name: 'AWS', icon: "https://img.icons8.com/?size=96&id=33039&format=png" },
    { name: 'Claude', icon: "https://img.icons8.com/?size=96&id=zQjzFjPpT2Ek&format=png" },
    { name: 'GPT', icon: "https://img.icons8.com/?size=96&id=ka3InxFU3QZa&format=png" },
    { name: 'Git', icon: "https://img.icons8.com/?size=96&id=20906&format=png" },
    { name: 'Postman', icon: "https://img.icons8.com/?size=160&id=EPbEfEa7o8CB&format=png" },
  ]

  const previewProjects = [
    {
      title: 'Scout IQ',
      type: 'Full-Stack System',
      image: '/SQ.png',
      description: 'A football scouting platform for exploring player data, comparing performance, and following the top five European leagues.',
      stack: ['React', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com/darshank-08/scout-IQ-Backend',
      live: 'https://scout-iq-psi.vercel.app/',
    },
    {
      title: 'Urban Rides',
      type: 'Full-Stack System',
      image: '/UR.png',
      description: 'A full-stack car rental app built for both renters and vehicle owners, with listing, booking, and management features.',
      stack: ['React', 'Spring Boot', 'MongoDB'],
      github: 'https://github.com/darshank-08/urban-ride-website',
      live: 'https://urban-rides-website.vercel.app/',
    },
    {
      title: 'CineScope',
      type: 'Frontend Showcase',
      image: '/Cinescope.png',
      description: 'A movie & entertainment platform for discovering films, TV shows, and anime, with watchlists and detailed content info.',
      stack: ['React', 'CSS'],
      github: 'https://github.com/darshank-08/Cine_Scope',
      live: 'https://darshank-08.github.io/Cine_Scope/',
    },
  ]

  // Scroll-reveal hook shared by both sections
  const useReveal = (threshold = 0.1) => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      const node = ref.current
      if (!node) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(node)
          }
        },
        { threshold }
      )
      observer.observe(node)
      return () => observer.disconnect()
    }, [threshold])

    return [ref, visible]
  }

  const [skillsRef, skillsVisible] = useReveal(0.05)
  const [previewRef, previewVisible] = useReveal(0.05)

  // Reusable skill-chip category block
  const SkillCategory = ({ label, accent, items, startIndex }) => (
    <div className="mb-8 md:mb-10">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <span className="w-1 h-5 rounded-full shrink-0" style={{ background: accent }}></span>
        <h3 className="font-mono uppercase tracking-[0.2em] text-xs md:text-sm text-gray-400">
          {label}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {items.map((item, i) => (
          <div
            key={item.name + i}
            style={{ transitionDelay: skillsVisible ? `${(startIndex + i) * 60}ms` : '0ms' }}
            className={`
              group flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg
              border border-white/10 bg-[#111111]
              transition-all duration-500 ease-out
              hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]
              ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <img
              src={item.icon}
              alt={item.name}
              loading="lazy"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
            />
            <span
              className="font-mono text-[11px] sm:text-xs uppercase tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-x-hidden dark:bg-black dark:text-white">

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center relative w-full px-4 mt-8 sm:mt-10 md:mt-6">
            <h1 className="text-[2.75rem] leading-[1.05] xs:text-5xl sm:text-6xl md:text-7xl font-Space-Grotesk font-bold text-center">
              BUILDING
              <br />
              <span className="
                inline-block
                mt-2
                rotate-[-2deg]
                bg-gray-200
                dark:bg-slate-400
                px-3 py-1 sm:px-4
                text-blue-700
              ">
                THE_FUTURE
              </span>
            </h1>
        </div>

        {/* Tagline */}
        <section className="flex items-start sm:items-center gap-2 mt-6 sm:mt-8 max-w-2xl px-4 text-center sm:text-left">
            <p className='text-red-600 font-bold text-xl leading-none hidden sm:block'>|</p>
            <p className='text-sm sm:text-base md:text-[17px] leading-relaxed'>
              Building scalable Software systems with clean architecture and real-world impact.
            </p>
        </section>

      {/* Main Content - Code Card & Bio */}
      <section className="w-full max-w-7xl mt-10 mb-8 md:my-12 flex flex-col lg:flex-row gap-10 sm:gap-8 lg:gap-12 items-center justify-center lg:items-start px-4 sm:px-6">

            {/* Code Card */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] shrink-0 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-blue-600 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-sm"></div>
              <div className="absolute inset-0 border-4 border-yellow-400 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 rounded-sm"></div>

              <div className="
                relative
                bg-[#111111]
                text-yellow-400
                w-full
                p-4 sm:p-5
                border-2
                border-black
                shadow-2xl
                rotate-0 sm:rotate-[-1deg]
                rounded-sm
                overflow-x-auto
              ">
                {/* Fake Window Dots */}
                <div className="flex gap-2 mb-6 sm:mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>

                <div className="text-[13px] sm:text-sm md:text-base font-mono leading-6 sm:leading-7 whitespace-pre">
                  <p>const Developer = {"{"}</p>
                  <p className="ml-4">
                    name: <span className="text-white">"Darshan Karagir"</span>,
                  </p>
                  <p className="ml-4">
                    role: <span className="text-white">"Full-Stack Developer"</span>,
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
            <div className="w-full max-w-xl flex flex-col gap-8 sm:gap-10 justify-between">

              {/* About */}
              <div>
                <h1
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-black uppercase text-gray-100 relative inline-block mb-6 sm:mb-8
                  "
                >
                  WHO_I_AM
                  <span className="absolute left-0 bottom-1 w-full h-2 bg-red-500 -z-10"></span>
                </h1>

                <div className="space-y-5 sm:space-y-6 text-gray-300 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9">
                  <p>
                    I'm a backend-leaning full-stack developer who enjoys building APIs,
                    designing scalable systems &amp; engaging UIs, and solving algorithmic problems.
                  </p>

                  <p>
                    Currently exploring Java, Spring Boot, React, Databases, and System
                    Design while sharpening my problem-solving skills through
                    LeetCode and real-world projects.
                  </p>

                  {/* LeetCode stat */}
                  <div className="flex items-center gap-2 text-[#f0fdf4]">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png"
                      alt="LeetCode"
                      loading="lazy"
                      className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                    />
                    <p className="text-base sm:text-[1.3rem]">
                      Solved <span className='leading-none'>120+</span> LeetCode &amp; GFG problems
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-[1.2rem] font-semibold mt-6 sm:mt-7 text-amber-50">🟢 Open to work</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row flex-wrap gap-4 sm:gap-5">

                <button
                  onClick={() => setActiveSection("projects")}
                  className="px-6 py-3 bg-yellow-300 text-black font-bold uppercase border-2 border-amber-100 shadow-[4px_4px_0px_0px_#fefbee] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none active:translate-y-0 active:translate-x-0 active:shadow-none transition-all duration-200 cursor-pointer text-sm sm:text-base"
                >
                  View Projects →
                </button>

                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black text-white font-bold uppercase text-center border-2 border-white shadow-[4px_4px_0px_0px_#fff] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none active:translate-y-0 active:translate-x-0 active:shadow-none transition-all duration-200 cursor-pointer text-sm sm:text-base"
                >
                  Resume
                </a>

              </div>

            </div>
        </section>

        {/* Skills Section */}
        <section
          ref={skillsRef}
          className="w-full max-w-6xl mt-6 mb-12 sm:mb-16 px-4 sm:px-6"
        >
          <h2 className="font-Space-Grotesk font-black uppercase text-2xl sm:text-3xl md:text-4xl relative inline-block mb-8 sm:mb-10">
            TECH_STACK
            <span className="absolute left-0 bottom-1 w-full h-2 bg-cyan-400 -z-10"></span>
          </h2>

          <SkillCategory label="Languages" accent="#facc15" items={Lang} startIndex={0} />
          <SkillCategory label="Frameworks & Libraries" accent="#60a5fa" items={lib} startIndex={Lang.length} />
          <SkillCategory label="Cloud & Other" accent="#22d3ee" items={other} startIndex={Lang.length + lib.length} />
        </section>

        {/* Projects Preview */}
        <section
          ref={previewRef}
          className="w-full max-w-6xl my-8 sm:my-12 px-4 sm:px-6"
        >
          <h2 className="font-Space-Grotesk font-black uppercase text-2xl sm:text-3xl md:text-4xl relative inline-block mb-8 sm:mb-10">
            PROJECTS_PREVIEW
            <span className="absolute left-0 bottom-1 w-full h-2 bg-green-400 -z-10"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {previewProjects.map((project, i) => (
              <div
                key={project.title}
                style={{ transitionDelay: previewVisible ? `${i * 120}ms` : '0ms' }}
                className={`
                  group relative bg-[#171717] border border-zinc-700 rounded-2xl overflow-hidden
                  transition-all duration-700 ease-out
                  hover:-translate-y-1 hover:border-zinc-500
                  ${previewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
              >
                {/* Screenshot */}
                <div className="h-36 sm:h-40 overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      w-full h-full object-cover
                      grayscale contrast-[1.05]
                      transition-all duration-700 ease-out
                      group-hover:grayscale-0
                    "
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-2">
                    {project.type}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-6 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-gray-400 border border-white/15 rounded-full px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1 text-sm text-gray-100 font-medium"
                    >
                      <span className="border-b border-transparent group-hover/link:border-current transition-all duration-200">
                        Live Demo
                      </span>
                      <LuArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="text-gray-500 hover:text-gray-200 transition-colors duration-200"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:mt-10">
            <button
              onClick={() => setActiveSection && setActiveSection('projects')}
              className="px-6 py-3 bg-black text-white font-bold uppercase border-2 border-white shadow-[4px_4px_0px_0px_#fff] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none active:translate-y-0 active:translate-x-0 active:shadow-none transition-all duration-200 cursor-pointer text-sm sm:text-base"
            >
              View All Projects →
            </button>
          </div>
        </section>
    </div>
  )
}

export default Home
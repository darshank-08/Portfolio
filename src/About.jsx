import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

const useReveal = (threshold = 0.15) => {
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

const PFP =
  '/PFP.jpg'

const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/darshank-08', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/darshan-karagir/', label: 'LinkedIn' },
]

const journey = [
  {
    year: '2023',
    title: 'Started the CS foundation',
    desc: 'Started programming with C and built a strong foundation in programming fundamentals and problem-solving. Studied core CS subjects including DBMS, Operating Systems, and Computer Networks.',
  },
  {
    year: '2024',
    title: 'Went full-stack',
    desc: 'Built several end-to-end applications using Spring Boot and React, gaining hands-on experience across frontend and backend development. Over time, I found myself particularly drawn to backend engineering and building scalable server-side systems.',
  },
  {
    year: '2025',
    title: 'Shipped real projects',
    desc: 'Built and deployed ScoutIQ, Urban Rides, and CineScope, taking each project from initial idea to a fully functional, working product.',
  },
  {
    year: '2026 — Now',
    title: 'Deep in DSA + System Design',
    desc: '110+ DSA problems solved and counting — continuously strengthening data structures, algorithms, and problem-solving skills for Technical interviews.',
  },
]

const About = ({ setActiveSection }) => {
  const [heroRef, heroVisible] = useReveal()
  const [storyRef, storyVisible] = useReveal()
  const [currentRef, currentVisible] = useReveal()
  const [journeyRef, journeyVisible] = useReveal(0.05)
  const [eduRef, eduVisible] = useReveal()

  return (
    <div className="min-h-screen flex flex-col items-center justify-start dark:bg-black dark:text-white px-4">
      {/* Section Hero */}
      <div
        ref={heroRef}
        className={`
          w-full max-w-5xl mt-10 mb-6 transition-all duration-700 ease-out
          ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <h1 className="text-4xl md:text-6xl font-Space-Grotesk font-black uppercase relative inline-block">
          THE_STORY
          <span className="absolute left-0 bottom-1 w-full h-2 bg-blue-500 -z-10"></span>
        </h1>
        <p className="text-gray-400 font-mono text-sm md:text-base mt-4">
          {'// a little more than the 30 second pitch'}
        </p>
      </div>

      {/* Story + Profile card */}
      <section
        ref={storyRef}
        className={`
          w-full max-w-5xl grid md:grid-cols-3 gap-8 mb-10
          transition-all duration-700 ease-out delay-100
          ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <div className="md:col-span-2 space-y-5 text-gray-300 text-base md:text-lg leading-8">
          <p>
            I started out just wanting to build things that worked properly — no
            big philosophy, just an interest in what happens after you hit
            submit. That curiosity turned into a real pull toward backend
            development: APIs, databases, and the parts of an app most people
            never see but always notice when they're broken.
          </p>
          <p>
            These days I spend most of my time with Java and Spring Boot on the
            backend, with enough React on the frontend to build and ship a
            project end-to-end. I treat DSA practice as training for the kind of
            thinking backend work actually needs — breaking a messy problem down
            until it's simple enough to trust.
          </p>
        </div>

        {/* Profile card — photo + quick links */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-blue-600 translate-x-2 translate-y-2 rounded-sm"></div>
          <div className="relative bg-[#111111] border-2 border-white/80 rounded-sm p-6 flex flex-col items-center text-center">
            <img
              src={PFP}
              alt="Darshan Karagir"
              className="w-25 h-25 rounded-full object-cover border-2  mb-4"
            />
            <h3 className="font-bold text-lg text-gray-100">Darshan Karagir</h3>
            <p className="text-gray-500 text-xs font-mono mt-1 mb-5">
              backend-focused · full-stack capable
            </p>

            <div className="flex gap-5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-300 hover:text-yellow-300 hover:-translate-y-1 transition-all duration-200"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      

{/* Journey timeline + Currently sidebar */}
<section ref={journeyRef} className="w-full max-w-5xl mb-16">
  <h2 className="text-2xl font-gummy uppercase mb-10">The_Journey :</h2>

  <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
    {/* Timeline */}
    <div className="relative border-l-2 border-white/20 ml-3 flex-1">
      {journey.map((step, i) => (
        <div
          key={step.year}
          className={`
            relative pl-8 pb-10 last:pb-0
            transition-all duration-700 ease-out
            ${journeyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
          `}
          style={{ transitionDelay: journeyVisible ? `${i * 120}ms` : '0ms' }}
        >
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-black"></div>
          <p className="font-mono text-xs text-yellow-300 mb-1">{step.year}</p>
          <h3 className="text-lg md:text-xl font-bold uppercase text-gray-100">
            {step.title}
          </h3>
          <p className="text-gray-400 mt-1 text-sm md:text-base max-w-2xl">
            {step.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Currently — sticky sidebar on large screens */}
    <div
      ref={currentRef}
      className={`
        lg:sticky lg:top-24 h-fit shrink-0
        transition-all duration-700 ease-out
        ${currentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      <div className="relative w-full md:w-fit">
        <div className="absolute inset-0 bg-yellow-400 translate-x-2 translate-y-2 rounded-sm"></div>
        <div className="relative bg-[#111111] border-2 border-white/80 rounded-sm p-5 font-mono text-sm min-w-[260px]">
          <p className="text-gray-500 mb-3">{'/* currently */'}</p>
          <ul className="space-y-2 text-gray-200">
            <li><span className="text-yellow-300">→</span> Grinding DSA (100+ solved)</li>
            <li><span className="text-yellow-300">→</span> System design fundamentals</li>
            <li><span className="text-yellow-300">→</span> Prepping for SDE interviews</li>
          </ul>
          <p className="text-green-400 mt-4">status: open_to_work ✅</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Education + beyond code */}
      <section
        ref={eduRef}
        className={`
          w-full max-w-5xl grid md:grid-cols-2 gap-6 mb-20
          transition-all duration-700 ease-out
          ${eduVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        {/* Education card */}
        <div className="bg-[#171717] border border-zinc-700 rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Education</p>
          <h3 className="text-lg font-bold text-gray-100">Bachelor's of Computer Applications</h3>
          <p className="text-gray-400 text-sm mt-1">Dr Ghali College • 2023 – 2026</p>
          <p className='text-gray-400 text-sm mt-1 flex items-center gap-1'><MdOutlineLocationOn /> Gadhinglaj, Maharashtra.</p>
        </div>

        {/* Beyond code card */}
        <div className="bg-[#171717] border border-zinc-700 rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Beyond code</p>
          <h3 className="text-lg font-bold text-gray-100">Football, games & movies/TV shows</h3>
          <p className="text-gray-400 text-sm mt-1">
            A guy who can't live without football. That's how I got the idea for "ScoutIQ". Love watching movies & playing games in my free time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-wrap gap-5 mb-24">
        <button
          onClick={() => setActiveSection && setActiveSection('projects')}
          className="px-6 py-3 bg-yellow-300 text-black font-bold uppercase border-2 shadow-[4px_4px_0px_0px_#fefbee] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200 cursor-pointer border-amber-100"
        >
          See My Work →
        </button>
        <button
          onClick={() => setActiveSection && setActiveSection('contact')}
          className="px-6 py-3 bg-black text-white font-bold uppercase border-2 border-white shadow-[4px_4px_0px_0px_#fff] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200 cursor-pointer"
        >
          Get In Touch
        </button>
      </div>
    </div>
  )
}

export default About

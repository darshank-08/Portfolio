import React, { useEffect, useRef, useState } from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";


const ACCENT = '#c9a24c'

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

const projects = [
  {
    index: '01',
    title: 'Scout IQ',
    type: 'Full-Stack System',
    image: '/SQ.png',
    description:
      'A scalable web application for football scouting and player statistics — built to handle large datasets and surface real-time insights across performance comparisons, team dynamics, and scouting reports.',
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS'],
    github: 'https://github.com/darshank-08/scout-IQ-Backend',
    live: 'https://scout-iq-psi.vercel.app/',
  },
  {
    index: '02',
    title: 'CineScope',
    type: 'Frontend Showcase',
    image: '/Cinescope.png',
    description:
      'A movie & TV discovery app for exploring a huge library of titles and finding your next watch — built with a focus on speed, clarity, and a genuinely usable browsing experience.',
    stack: ['React', 'CSS', 'Vercel'],
    github: 'https://github.com/darshank-08/Cine_Scope',
    live: 'https://darshank-08.github.io/Cine_Scope/',
  },
  {
    index: '03',
    title: 'Urban Rides',
    type: 'Full-Stack System',
    image: '/UR.png',
    description:
      'A full-stack car rental platform for renters and owners alike. Renters browse, filter, and book cars for trips lasting days or weeks with secure payments built in; owners get their own tools to list vehicles and manage bookings.',
    stack: ['React', 'Spring Boot', 'MongoDB', 'Vercel'],
    github: 'https://github.com/darshank-08/urban-ride-website',
    live: 'https://urban-rides-website.vercel.app/',
  },
]

const ProjectRow = ({ project, reversed }) => {
  const [ref, visible] = useReveal(0.1)

  return (
    <div
      ref={ref}
      className={`
        grid md:grid-cols-2 gap-10 md:gap-16 items-center py-16
        border-t border-white/10 first:border-t-0
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* Image */}
      <div className={`group relative overflow-hidden ${reversed ? 'md:order-2' : 'md:order-1'}`}>
        <span
          className="absolute top-4 left-4 z-10 font-mono text-xs tracking-widest text-white/70 bg-black/60 backdrop-blur-sm px-2 py-1"
        >
          N°{project.index}
        </span>
        <div className="aspect-[5/3] w-full overflow-hidden bg-[#111111]">
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full h-full object-cover
              grayscale-0 contrast-[1.05]
              transition-all duration-700 ease-out
              group-hover:scale-100
            "
          />
        </div>
      </div>

      {/* Text */}
      <div className={reversed ? 'md:order-1' : 'md:order-2'}>
        <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: ACCENT }}>
          {project.type}
        </p>

        <h3 className="font-playfair text-4xl md:text-5xl font-bold text-gray-100 mb-5">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 max-w-md mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-gray-400 border border-white/15 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-gray-100 font-medium"
          >
            <span className="border-b border-transparent group-hover/link:border-current transition-all duration-200">
              View Live
            </span>
            <LuArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-100 transition-colors duration-200"
          >
            <FaGithub className="w-4 h-4" />
            <span className="border-b border-transparent group-hover/link:border-current transition-all duration-200">
              Source
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

const Project = () => {
  const [heroRef, heroVisible] = useReveal()

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10">
      {/* Header */}
      <div
        ref={heroRef}
        className={`
          max-w-5xl mx-auto pt-20 pb-4
          transition-all duration-700 ease-out
          ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-gray-500 mb-6">
          Index — 2023 / 2026
        </p>
        <h1 className="font-playfair text-5xl md:text-7xl leading-[1.05] text-gray-100">
          Case studies in
          <br />
          <span style={{ color: ACCENT }}>scalable systems.</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg mt-8 max-w-xl leading-7">
          A closer look at three projects — how each one is built, what it
          solves, and the tradeoffs behind it.
        </p>
      </div>

      {/* Case study rows */}
      <div className="max-w-5xl mx-auto mt-10">
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} reversed={i % 2 === 1} />
        ))}
      </div>

      {/* Closing link */}
      <div className="max-w-5xl mx-auto border-t border-white/10 py-14 flex justify-center">
        <a
          href="https://github.com/darshank-08"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase text-gray-400 hover:text-gray-100 transition-colors duration-200"
        >
          See more on GitHub
          <LuArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </div>
  )
}

export default Project

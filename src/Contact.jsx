import React, { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'


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

const EMAIL = 'karagirdarshan1@example.com'
const LINKS = [
  {
    label: 'GitHub',
    value: '@darshank-08',
    href: 'https://github.com/darshank-08',
    icon: FaGithub,
    color: '#f0f6fc',
  },
  {
    label: 'LinkedIn',
    value: 'Darshan Karagir',
    href: 'https://www.linkedin.com/in/darshan-karagir/',
    icon: FaLinkedin,
    color: '#0A66C2',
  },
  {
    label: 'LeetCode',
    value: 'DarshanKaragir',
    href: 'https://leetcode.com/u/DarshanKaragir/',
    icon: SiLeetcode,
    color: '#FFA116',
  },
]

const Contact = () => {
  const [heroRef, heroVisible] = useReveal()
  const [cardsRef, cardsVisible] = useReveal(0.05)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start dark:bg-black dark:text-white px-4">
      {/* Hero */}
      <div
        ref={heroRef}
        className={`
          w-full max-w-4xl mt-10 mb-4 transition-all duration-700 ease-out
          ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <h1 className="text-4xl md:text-6xl font-Space-Grotesk font-black uppercase relative inline-block">
          LETS_CONNECT
          <span className="absolute left-0 bottom-1 w-full h-2 bg-red-500 -z-10"></span>
        </h1>
        <p className="text-gray-400 font-mono text-sm md:text-base mt-4">
          {'// currently open to SDE roles — usually reply within a day'}
        </p>
      </div>

      {/* Email — the main CTA */}
      <div
        className={`
          w-full max-w-4xl mt-8 mb-10 transition-all duration-700 ease-out delay-100
          ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <div className="relative w-full md:w-fit">
          <div className="absolute inset-0 bg-blue-600 translate-x-2 translate-y-2 rounded-sm"></div>
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 bg-[#111111] border-2 border-black rounded-sm p-5 md:pr-8">
            <div className="flex items-center gap-3">
              <HiOutlineMail className="w-7 h-7 text-yellow-300 shrink-0" />
              <span className="font-mono text-base md:text-lg text-gray-100 break-all">
                {EMAIL}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 bg-yellow-300 text-black text-sm font-bold uppercase border-2 border-amber-100 shadow-[3px_3px_0px_0px_#fefbee] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200 cursor-pointer"
              >
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
              <a
                href={`mailto:${EMAIL}`}
                className="px-4 py-2 bg-black text-white text-sm font-bold uppercase border-2 border-white shadow-[3px_3px_0px_0px_#fff] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200 cursor-pointer"
              >
                Send Mail
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social links */}
      <section
        ref={cardsRef}
        className="w-full max-w-4xl grid sm:grid-cols-3 gap-5 mb-16"
      >
        {LINKS.map((link, i) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative bg-[#171717] border border-zinc-700 rounded-2xl p-5
                flex flex-col gap-3
                hover:-translate-y-1 hover:border-zinc-500
                transition-all duration-300 ease-out
                ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: cardsVisible ? `${i * 100}ms` : '0ms' }}
            >
              <Icon
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                style={{ color: link.color }}
              />
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  {link.label}
                </p>
                <p className="text-gray-100 font-medium">{link.value}</p>
              </div>
            </a>
          )
        })}
      </section>

      {/* Resume + status */}
      <div className="flex flex-wrap items-center gap-6 mb-24">
        <button
          onClick={() => window.open('/Resume.pdf', '_blank')}
          className="px-6 py-3 bg-yellow-300 text-black font-bold uppercase border-2 border-amber-100 shadow-[4px_4px_0px_0px_#fefbee] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200 cursor-pointer"
        >
          Download Resume
        </button>
        <p className="text-[1.1rem] font-semibold text-amber-50">🟢 Open to work</p>
      </div>
    </div>
  )
}

export default Contact

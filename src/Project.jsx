import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";


const Project = () => {

    const SQ = [
        {icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png"},
        {icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1280px-Spring_Boot.svg.png?_=20230616230349"},
        {icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1280px-Postgresql_elephant.svg.png?_=20080116191800"},
        {icon : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redis-icon.svg"},
        {icon : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.svg"},
    ]

    const CineScope = [
        {icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png"},
        {icon : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.svg"},
        {icon : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.svg"}

    ]
  return (
    <div className="p-3 min-w-screen">
        <div className=" min-w-full flex flex-col p-5">
            <h1 className="text-8xl font-bold mb-4 dark:text-amber-300">Selected <br /> Works</h1>
            <p className="text-lg max-w-[50%] dark:text-amber-50">
                A collection of projects where I design and build scalable, high-performance systems—focused on clean architecture, reliability, and real-world use cases.
            </p>
            {/* <hr className="border border-gray-400 max-w-[50%] mt-2" /> */}
        </div>

        <section className='min-w-full p-5'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* scout-IQ */}
                <div className="flex flex-col md:col-span-2 border-2 border-black shadow-[5px_5px_0_#f5d03d] dark:border-amber-50 bg-white dark:bg-black overflow-hidden">
                    {/* Project Image */}
                    <div className="h-[350px] border-b-2 border-black dark:border-amber-50">
                        <img
                        className="w-full h-full object-cover"
                        src="/src/assets/SQ.png"
                        alt="Scout IQ"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 md:p-6">
                        <div className="flex gap-3 items-center mb-5">
                        {SQ.map((t) => (
                            <div
                            key={t.name}
                            className="w-11 h-11 border border-black dark:border-amber-50 p-2 bg-white dark:bg-gray-900"
                            title={t.name}
                            >
                            <img
                                src={t.icon}
                                alt={t.name}
                                className="w-full h-full object-contain"
                            />
                            </div>
                        ))}
                        </div>

                        <h1 className="w-fit text-3xl md:text-5xl  font-['Roboto_Slab'] font-bold bg-black text-amber-300 px-3 py-1 leading-tight">
                        Scout IQ
                        </h1>

                        {/* Description */}
                        <p className="mt-4 text-gray-950 dark:text-gray-300 max-w-2xl">
                        A scalable web application built for Scouting & Players statistics. This project is designed to handle large datasets and provide real-time insights into players performance & comparisons, team dynamics, and scouting reports. It leverages modern web technologies to ensure a responsive and user-friendly experience.
                        </p>

                        {/* Bottom Row */}
                        <div className="mt-auto pt-12 flex items-end justify-between">
                            <p className="text-sm font-black uppercase tracking-widest text-black dark:text-white">
                                01 / Full Stack System
                            </p>

                            <div className="flex gap-3">
                                <a href="https://github.com/darshank-08/scout-IQ-Backend" target="_blank" rel="noreferrer"
                                    className="w-10 h-10 p-1 border-2 border-black dark:border-amber-50 flex items-center justify-center hover:translate-x-1 hover:-translate-y-1 transition-transform"
                                >
                                    <FaGithub className="w-full h-full" />
                                </a>
                                <a href="https://scout-iq-psi.vercel.app/" target="_blank" rel="noreferrer"
                                    className="w-10 h-10 border-2 border-amber-50 bg-gray-950 text-amber-50 font-bold dark:border-amber-50 dark:bg-amber-50 dark:text-gray-950 flex items-center justify-center hover:translate-x-1 hover:-translate-y-1 transition-transform"
                                >
                                    <LuArrowUpRight />
                                </a>
                            </div>
                        
                        </div>
                    </div>
                </div>

                {/* CineScope */}
                <div className="md:col-span-1 border border-black shadow-[5px_5px_0_#f5d03d] dark:border-amber-50">
                    <div className="h-[300px] border-b-2 border-black dark:border-amber-50">
                        <img
                        className="w-full h-full object-cover"
                        src="/src/assets/Cinescope.png"
                        alt="CineScope"
                        />
                    </div>

                    <div className="flex flex-col flex-1 p-5 md:p-6">
                        <div className="flex gap-3 items-center mb-5">
                        {CineScope.map((t) => (
                            <div
                            key={t.name}
                            className="w-11 h-11 border border-black dark:border-amber-50 p-2 bg-white dark:bg-gray-900"
                            title={t.name}
                            >
                            <img
                                src={t.icon}
                                alt={t.name}
                                className="w-full h-full object-contain"
                            />
                            </div>
                        ))}
                        </div>

                        <h1 className="w-fit text-3xl md:text-4xl  font-['Roboto_Slab'] font-bold bg-black text-amber-300 px-3 py-1 leading-tight">
                        CineScope
                        </h1>

                        {/* Description */}
                        <p className="mt-4 text-gray-950 dark:text-gray-300 max-w-2xl">
                        A movie & TV show discovery web application that allows users to explore a vast collection of movies and TV shows. Helping users find their next favorite entertainment. The application is designed with a focus on user experience and performance.
                        </p>

                        {/* Bottom Row */}
                        <div className="mt-auto pt-12 flex items-end justify-between">
                            <p className="text-sm font-black uppercase tracking-widest text-black dark:text-white">
                                02 / Frontend 
                            </p>

                            <div className="flex gap-3 ">
                                <a href="https://github.com/darshank-08/Cine_Scope" target="_blank" rel="noreferrer"
                                    className="w-10 h-10 p-1 border-2 border-black dark:border-amber-50 flex items-center justify-center hover:translate-x-1 hover:-translate-y-1 transition-transform"
                                >
                                    <FaGithub className="w-full h-full" />
                                </a>
                                <a href="https://darshank-08.github.io/Cine_Scope/" target="_blank" rel="noreferrer"
                                    className="w-10 h-10 border-2 border-amber-50 bg-gray-950 text-amber-50 font-bold dark:border-amber-50 dark:bg-amber-50 dark:text-gray-950 flex items-center justify-center hover:translate-x-1 hover:-translate-y-1 transition-transform"
                                >
                                    <LuArrowUpRight />
                                </a>
                            </div>
                        
                        </div>
                    </div>

                </div>

                {/* Row 2: 33% + 66% */}
                <div className="md:col-span-1 border border-black shadow-[5px_5px_0_#f5d03d] dark:border-amber-50">nf</div>
                <div className="md:col-span-2 border border-black shadow-[5px_5px_0_#f5d03d] dark:border-amber-50">kj</div>
            </div>
        </section>
        
    </div>
  )
}

export default Project
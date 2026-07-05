import React from 'react'

const Home = () => {
  return (
    <div className="mt-4 min-h-screen flex flex-col items-center justify-start dark:bg-gray-950 dark:text-white">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center relative min-w-screen min-h-[200px] mt-6">
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
      <section className="mt-12 flex  lg:flex-row gap-8 lg:gap-12 items-center lg:items-start max-w-7xl px-4">
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
            <div className="max-w-xl">
              <h1 className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                uppercase
                text-gray-900
                dark:text-gray-100
                relative
                inline-block
                mb-8
              ">
                WHO_I_AM
                <span className="
                  absolute
                  left-0
                  bottom-1
                  w-full
                  h-2
                  bg-red-500
                  -z-10
                "></span>
              </h1>

              <p className="
                text-gray-700
                dark:text-gray-300
                text-base
                md:text-lg
                leading-8
                md:leading-9
              ">
                Full Stack Developer specializing in Java and React. I build backend services 
                with Spring Boot, create REST APIs, and develop frontend interfaces that 
                consume them.

                I work with SQL and NoSQL databases, deploy applications on cloud platforms, 
                and follow microservices architecture. I focus on writing clean code and 
                building systems that solve actual problems.
              </p>

              <button className="
                mt-10
                uppercase
                text-blue-600
                dark:text-blue-400
                font-bold
                tracking-wider
                border-b-2
                border-blue-600
                dark:border-blue-400
                hover:gap-4
                transition-all
                duration-300
                flex
                items-center
                gap-2
                hover:cursor-pointer
              ">
                Read more →
              </button>
            </div>
        </section>

        <section className="min-w-5/6 mt-16 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-space-grotesk">
              
              {/* Card 1 */}
              <div className="border-2 font-semibold text-gray-900 bg-amber-50 dark:border-white p-6 ">
                <img
                  src="/src/assets/leetcode.svg"
                  alt="LeetCode"
                  className="w-10 h-10 mb-6"
                />
                <h2 className="text-6xl leading-none">
                  80+
                </h2>
                <p className= "mt-2 uppercase tracking-widest">
                  Leetcode & GFG solved
                </p>
              </div>

              {/* Card 2 */}
              <div className="border-2 font-semibold border-black text-gray-900 dark:border-white bg-amber-300 p-6">
                <img
                  src="/src/assets/processor.svg"
                  alt="LeetCode"
                  className="w-10 h-10 mb-6"
                />
                <h2 className="text-6xl leading-none">
                  99.9%
                </h2>
                <p className="mt-3 uppercase tracking-widest">
                  System_Uptime
                </p>
              </div>

              {/* Card 3 */}
              <div className="border-2 font-semibold border-black bg-orange-400 text-amber-50 dark:border-white p-6">
                <img
                  src="/src/assets/bug.svg"
                  alt="LeetCode"
                  className="w-10 h-10 mb-6"
                />
                <h2 className="text-6xl font-semibold leading-none font-space-grotesk">
                  0
                </h2>
                <p className="mt-3 uppercase tracking-widest">
                  Tolerence_for_Bugs
                </p>
              </div>

            </div>
          </div>
        </section>

        <footer className='mt-16 flex min-w-full'>
          <div className='bg-gray-800 text-amber-100 flex min-w-full gap-7 justify-center align-center p-4 py-5 text-sm md:text-base dark:bg-amber-50 *:dark:text-gray-900 '>
            <p><a href="https://leetcode.com/u/DarshanKaragir05/" target="_blank" rel="noopener noreferrer">LeetCode</a></p>
            <p><a href="https://www.linkedin.com/in/darshan-karagir/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/darshank-08" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p><a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">Resume</a></p>
          </div>
        </footer>
    </div>
  )
}

export default Home
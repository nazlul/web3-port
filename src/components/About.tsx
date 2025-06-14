'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  UserIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  HeartIcon
} from 'lucide-react'

const MagneticCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative group overflow-hidden rounded-xl bg-slate-700 p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-transparent before:absolute before:inset-0 before:rounded-xl before:content-[''] before:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(99,102,241,0.15),transparent_40%)] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="relative z-10 bg-slate-800/50 py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            ref={ref}
            className="relative"
          >
            <div className="absolute inset-0 rotate-3 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500" />
             <div className="relative -rotate-3 transform rounded-lg transition-transform duration-500 hover:rotate-0">
              <MagneticCard>
              <h3 className="mb-4 text-2xl font-bold">Who I Am</h3>
              
              <p className="mb-4 text-gray-300">
                I'm a <span className='text-[#0b4bed]'>Web Developer</span> who loves crafting clean, responsive UIs that feel smooth and look great. I focus on the little interactions that make a site feel alive, and I enjoy turning ideas into something real with code and design.
              </p>
              <p className="text-gray-300">
                Lately, I've been diving into the world of blockchain and building frontend experiences for web3 apps. When I'm not coding, I'm exploring new design trends, messing around with creative side projects, or contributing to open-source. Always learning, always building.
              </p></MagneticCard>
              </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 gap-6"
          >
            <motion.div variants={itemVariants}>
              <MagneticCard>
                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-blue-500/20 p-3">
                    <UserIcon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Personal Touch</h3>
                    <p className="text-gray-300">
                      I approach every project with care and personality — no copy-paste templates, just thoughtful design and development.
                    </p>
                  </div>
                </div>
              </MagneticCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <MagneticCard>
                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-blue-500/20 p-3">
                    <BriefcaseIcon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Real-World Projects</h3>
                    <p className="text-gray-300">
                      I'm still early in my career, but I focus on writing clean, maintainable code and building projects that solve real problems.
                    </p>
                  </div>
                </div>
              </MagneticCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <MagneticCard>
                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-purple-500/20 p-3">
                    <GraduationCapIcon className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Always Learning</h3>
                    <p className="text-gray-300">
                      I'm constantly picking up new tools, keeping up with the latest frontend tech, and pushing myself to grow as a developer.
                    </p>
                  </div>
                </div>
              </MagneticCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <MagneticCard>
                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-blue-500/20 p-3">
                    <HeartIcon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Passionate Creator</h3>
                    <p className="text-gray-300">
                      I love building web experiences that are not only functional, but also feel smooth, modern, and enjoyable to use.
                    </p>
                  </div>
                </div>
              </MagneticCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

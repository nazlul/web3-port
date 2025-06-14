import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  const typingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const text = 'I create amazing web experiences.';
    const typingElement = typingRef.current;
    if (!typingElement) return;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        typingElement.textContent = text.substring(0, i + 1) + '|';
        i++;
      } else {
        typingElement.textContent = text;
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);
  return <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-5xl w-full text-center md:text-left">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-6">
          <span className="text-lg md:text-xl text-purple-400">Hello, I'm</span>
        </motion.div>
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Creative Developer
          </span>
        </motion.h1>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="text-xl md:text-3xl mb-8 text-gray-300 h-10" ref={typingRef}>
          |
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.5
      }} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium transition-transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 border border-purple-500 rounded-full text-white font-medium transition-all hover:bg-purple-500/10">
            Contact Me
          </a>
        </motion.div>
      </div>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 2
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="mb-2">Scroll Down</span>
          <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
            <motion.div animate={{
            y: [0, 12, 0],
            opacity: [0, 1, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }} className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </a>
      </motion.div>
    </section>;
};
export default Hero;
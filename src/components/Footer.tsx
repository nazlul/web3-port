import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, ArrowUpIcon } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-slate-900 relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <motion.button initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} onClick={scrollToTop} className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full mb-8 transform hover:scale-110 transition-transform shadow-lg shadow-purple-500/20" aria-label="Scroll to top">
            <ArrowUpIcon size={24} className="text-white" />
          </motion.button>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Portfolio
          </motion.div>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="flex space-x-4 mb-8">
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors" aria-label="GitHub">
              <GithubIcon size={20} className="text-white" />
            </a>
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors" aria-label="Twitter">
              <TwitterIcon size={20} className="text-white" />
            </a>
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} className="text-white" />
            </a>
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors" aria-label="Instagram">
              <InstagramIcon size={20} className="text-white" />
            </a>
          </motion.div>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.6
        }} className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </motion.div>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.8
        }} className="text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <p className="mt-1">Designed & Built with ❤️</p>
          </motion.div>
        </div>
      </div>
    </footer>;
};
export default Footer;
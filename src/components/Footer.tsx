'use client';

import { motion } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';
import { FaTelegram, FaDiscord, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#fffde8] relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={scrollToTop}
            className="bg-gradient-to-r from-[#a9170a] to-[#831010] p-3 rounded-full mb-8 transform hover:scale-110 transition-transform shadow-lg shadow-purple-500/20"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon size={24} className="text-[#fffde8]" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold bg-gradient-to-r from-[#a9170a] to-[#831010] bg-clip-text text-transparent mb-6"
          >
            Portfolio
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4 mb-8"
          >
            <a
              href="https://t.me/freesapien"
              target="_blank"
              className="bg-[#a9170a] p-4 rounded-full hover:bg-[#831010] transition-colors"
              aria-label="Telegram"
            >
              <FaTelegram size={30} className="text-white" />
            </a>

            <a
              href="https://x.com/DegenNaz_"
              target="_blank"
              className="bg-[#a9170a] p-4 rounded-full hover:bg-[#831010] transition-colors"
              aria-label="X"
            >
              <FaXTwitter  size={30} className="text-white" />
            </a>

            <div className="group relative">
              <div
                className="bg-[#a9170a] p-4 rounded-full hover:bg-[#831010] transition-colors cursor-default"
                aria-label="Discord"
              >
                <FaDiscord  size={30} className="text-white" />
              </div>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                Id: nazlul
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-[#a9170a] hover:text-[#831010] transition-colors capitalize"
              >
                {item}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center text-gray-400 text-sm"
          >
            <p>&copy; {new Date().getFullYear()} Degen Naz. All rights reserved.</p>
            <p className="mt-1">Designed & Built with ❤️</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

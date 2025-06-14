import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  const linkVariants = {
    hidden: {
      opacity: 0,
      y: -10
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%'
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  return <motion.header initial="hidden" animate="visible" variants={navbarVariants} className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-[#fffde8] shadow-lg' : 'bg-[transparent]'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className={`text-2xl font-bold   ${isScrolled ? 'text-[#a9170a]' : 'text-[#fffde8]'}`}>
            Portfolio
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => <motion.a key={link.name} href={link.href} custom={i} variants={linkVariants} initial="hidden" animate="visible" className={`focus:outline-none hover:text-[#a90a0a] ${isScrolled ? 'text-[#6a1414] hover:text-[#a90a0a]' : 'text-[#fffde8] hover:text-[#faf4b6]'}`}>
                {link.name}
              </motion.a>)}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#fffde8] focus:outline-none">
              {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <motion.nav initial="closed" animate={isMobileMenuOpen ? 'open' : 'closed'} variants={mobileMenuVariants} className="md:hidden absolute top-full left-0 w-full bg-slate-800 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[#fffde8] hover:text-[#f9f2aa] transition-colors duration-300 py-2">
                {link.name}
              </a>)}
          </div>
        </div>
      </motion.nav>
    </motion.header>;
};
export default Navbar;
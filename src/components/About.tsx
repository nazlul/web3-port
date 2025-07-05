'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShieldCheckIcon,
  GlobeIcon,
  Code2Icon,
  HeartIcon,
} from 'lucide-react';
import MagneticCard from '../components/ui/MagneticCard';
import { useIsMobile } from '../hooks/useIsMobile';

const About = () => {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: isMobile ? 0.05 : 0.1,
    rootMargin: isMobile ? '-5% 0px -5% 0px' : '-2% 0px -2% 0px',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 4 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.6 },
    },
  };

  return (
    <section id="about" className="relative z-10 bg-[#fffde8]/80 py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.5 : 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-[#a9170a] to-[#831010] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-[#fffde8]" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 min-h-[40vh]">
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -10 }}
            animate={inView || isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: isMobile ? 0.5 : 0.8 }}
            ref={ref}
            className="relative"
          >
            <div className="absolute inset-0 rotate-3 rounded-lg bg-[#B8B1A8]" />
            <div className="relative -rotate-3 transform rounded-lg transition-transform duration-500 hover:rotate-0">
              <MagneticCard>
                <h3 className="mb-4 text-2xl font-bold text-[#fffde8]">Who I Am</h3>
                <p className="mb-4 text-[#fffde8]">
                  I’m a <span className="text-black font-bold">Web3 dev</span> building smooth, secure dApps. From DeFi dashboards to NFT mints, I bring blockchain apps to life.
                </p>
                <p className="text-[#fffde8]">
                  Focused on user-first design, React + TypeScript, and wallet integrations. I work with Next.js, wagmi, viem, and ethers — always exploring the decentralized future.
                </p>
              </MagneticCard>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView || isMobile ? 'visible' : 'hidden'}
            className="grid grid-cols-1 gap-6"
          >
            {[
              {
                icon: <ShieldCheckIcon className="text-[#fffde8]" size={24} />,
                title: <span className="text-[#fffde8]">Secure by Design</span>,
                text: 'Keeping wallets and data safe with best practices.'
              },
              {
                icon: <GlobeIcon className="text-[#fffde8]" size={24} />,
                title: <span className="text-[#fffde8]">Decentralized Focus</span>,
                text: 'Making blockchain apps easy and enjoyable.'
              },
              {
                icon: <Code2Icon className="text-[#fffde8]" size={24} />,
                title: <span className="text-[#fffde8]">Modern Stack</span>,
                text: 'Next.js, Tailwind, TypeScript, wagmi & friends.'
              },
              {
                icon: <HeartIcon className="text-[#fffde8]" size={24} />,
                title: <span className="text-[#fffde8]">Web3 Native</span>,
                text: 'Building and believing in the decentralized future.'
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <MagneticCard>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-lg bg-[#fffde8]/20 p-3">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                      <p className="text-[#fffde8]">{item.text}</p>
                    </div>
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

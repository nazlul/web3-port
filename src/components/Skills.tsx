import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MagneticCard from './ui/MagneticCard';
type SkillCategory = 'frontend' | 'backend' | 'tools';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');
  const skillCategories: Record<SkillCategory, { name: string; level: number }[]> = {
    frontend: [{
      name: 'React',
      level: 90
    }, {
      name: 'JavaScript',
      level: 85
    }, {
      name: 'TypeScript',
      level: 80
    }, {
      name: 'HTML/CSS',
      level: 95
    }, {
      name: 'Tailwind CSS',
      level: 88
    }, {
      name: 'Framer Motion',
      level: 75
    }],
    backend: [{
      name: 'Node.js',
      level: 82
    }, {
      name: 'Express',
      level: 80
    }, {
      name: 'MongoDB',
      level: 75
    }, {
      name: 'GraphQL',
      level: 70
    }, {
      name: 'REST APIs',
      level: 85
    }, {
      name: 'Firebase',
      level: 78
    }],
    tools: [{
      name: 'Git',
      level: 88
    }, {
      name: 'Webpack',
      level: 75
    }, {
      name: 'Docker',
      level: 65
    }, {
      name: 'Figma',
      level: 80
    }, {
      name: 'VS Code',
      level: 92
    }, {
      name: 'Jest',
      level: 72
    }]
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  const barVariants = {
    hidden: {
      width: 0
    },
    visible: (level: any) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    })
  };
  const tabs = [{
    id: 'frontend',
    label: 'Frontend'
  }, {
    id: 'backend',
    label: 'Backend'
  }, {
    id: 'tools',
    label: 'Tools & Others'
  }];
  return <section id="skills" className="py-20 px-4 bg-[#fffde8] relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-[#a9170a] to-[#831010] bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#a9170a] to-[#831010] mx-auto mb-6"></div>
        </motion.div>
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id as SkillCategory)} className={`px-6 py-2 rounded-full text-[white] font-medium transition-all ${activeTab === tab.id ? 'bg-gradient-to-r from-[#a9170a] to-[#831010] shadow-lg' : 'bg-[#B8B1A8] hover:bg-[#bca78d]'}`}>
                            {tab.label}
                          </button>)}
          </div>
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid gap-6">
            {skillCategories[activeTab].map((skill, index) => <motion.div key={index} variants={itemVariants} className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-[#a9170a]">{skill.name}</span>
                  <span className="text-[#a9170a]">{skill.level}%</span>
                </div>
                <div className="h-3 bg-[#B8B1A8] rounded-full overflow-hidden">
                  <motion.div custom={skill.level} variants={barVariants} className={`h-full rounded-full ${activeTab === 'frontend' ? 'bg-gradient-to-r from-[#a9170a] to-[#831010]' : activeTab === 'backend' ? 'bg-gradient-to-r from-[#a9170a] to-[#831010]' : 'bg-gradient-to-r from-[#a9170a] to-[#831010]'}`} />
                </div>
              </motion.div>)}
          </motion.div>
        </div>
        <MagneticCard>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} 
      className="rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-center">
            Skills Overview
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="skill-overview">
              <div className="relative mb-4 mx-auto w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#334155" strokeWidth="8" />
                  <motion.circle cx="50" cy="50" r="45" fill="none" stroke="url(#frontendGradient)" strokeWidth="8" strokeDasharray="283" strokeDashoffset="283" strokeLinecap="round" animate={inView ? {
                  strokeDashoffset: 283 - 283 * 0.85
                } : {
                  strokeDashoffset: 283
                }} transition={{
                  duration: 1.5,
                  delay: 0.2
                }} />
                  <defs>
                    <linearGradient id="frontendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fffde8" />
                      <stop offset="100%" stopColor="#f7f0a3" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                  85%
                </div>
              </div>
              <h4 className="text-center text-lg font-medium mb-2">Frontend</h4>
              <p className="text-center text-gray-400 text-sm">
                Modern UI with React
              </p>
            </div>
            <div className="skill-overview">
              <div className="relative mb-4 mx-auto w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#334155" strokeWidth="8" />
                  <motion.circle cx="50" cy="50" r="45" fill="none" stroke="url(#backendGradient)" strokeWidth="8" strokeDasharray="283" strokeDashoffset="283" strokeLinecap="round" animate={inView ? {
                  strokeDashoffset: 283 - 283 * 0.78
                } : {
                  strokeDashoffset: 283
                }} transition={{
                  duration: 1.5,
                  delay: 0.4
                }} />
                  <defs>
                    <linearGradient id="backendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fffde8" />
                      <stop offset="100%" stopColor="#f7f0a3" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                  78%
                </div>
              </div>
              <h4 className="text-center text-lg font-medium mb-2">Backend</h4>
              <p className="text-center text-gray-400 text-sm">
                Node.js & API Development
              </p>
            </div>
            <div className="skill-overview">
              <div className="relative mb-4 mx-auto w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#334155" strokeWidth="8" />
                  <motion.circle cx="50" cy="50" r="45" fill="none" stroke="url(#toolsGradient)" strokeWidth="8" strokeDasharray="283" strokeDashoffset="283" strokeLinecap="round" animate={inView ? {
                  strokeDashoffset: 283 - 283 * 0.8
                } : {
                  strokeDashoffset: 283
                }} transition={{
                  duration: 1.5,
                  delay: 0.6
                }} />
                  <defs>
                    <linearGradient id="toolsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fffde8" />
                      <stop offset="100%" stopColor="#f7f0a3" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                  80%
                </div>
              </div>
              <h4 className="text-center text-lg font-medium mb-2">Tools</h4>
              <p className="text-center text-gray-400 text-sm">
                DevOps & Design Tools
              </p>
            </div>
          </div>
        </motion.div>
        </MagneticCard>
      </div>
    </section>;
};
export default Skills;
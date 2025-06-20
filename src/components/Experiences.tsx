'use client';

import { motion } from 'framer-motion';

const experiences = [
  'Nine – Collab Manager/Alpha Hunter',
  'Degen Alpa – Collab Manager/Alpha Hunter',
  'Flipguard – Community Guard',
  'Freelance - Blockchain Frontend Developer',
  'Currently working as Frontend Developer at DotHeal',
  <>
    Achieved over <span className="text-[#4b0e0e] font-semibold">$70,000</span> worth in NFT whitelists
  </>,
];

const Experiences = () => {
  return (
    <section id="experiences" className="bg-[#fffde8] py-20 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-4xl font-bold text-[#a9170a]"
        >
          Experiences
        </motion.h2>

        <ul className="space-y-4 text-left text-[#a9170a] font-semibold text-2xl max-w-xl mx-auto">
          {experiences.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <span className="mr-2 mt-1">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experiences;

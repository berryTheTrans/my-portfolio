import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-start space-y-8 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm md:text-base font-medium tracking-wider text-slate-400 mb-4 block">
            HELLO, I AM
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight font-serif mb-6">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-400 font-light max-w-2xl leading-tight">
            {PERSONAL_INFO.title}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-400 max-w-xl leading-relaxed"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
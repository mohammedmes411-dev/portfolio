import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#05050f]">
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Photo Section (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Decorative lines behind */}
            <div className="absolute -left-6 top-10 w-16 h-1 bg-cyan-400 -rotate-45 rounded-full blur-[1px]" />
            <div className="absolute -left-10 top-16 w-20 h-1 bg-purple-500 -rotate-45 rounded-full blur-[1px]" />
            
            {/* Main Image Container */}
            <div className="relative">
              <img
                src="/photo_final.jpg"
                alt="Mohammed Mesbahi"
                className="w-[280px] md:w-[320px] lg:w-[400px] h-auto object-contain rounded-2xl"
              />
            </div>

            {/* Decorative lines in front */}
            <div className="absolute -right-8 bottom-12 w-20 h-1 bg-cyan-400 -rotate-45 rounded-full blur-[1px] z-20" />
            <div className="absolute -right-4 bottom-6 w-16 h-1 bg-purple-500 -rotate-45 rounded-full blur-[1px] z-20" />
          </motion.div>

          {/* Text Section (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-left"
          >
            <motion.p
              className="text-cyan-400 font-mono text-sm tracking-[0.2em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              &lt; BIENVENUE SUR MON PORTFOLIO /&gt;
            </motion.p>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-2 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent block pb-2">
                Mohammed
              </span>
              <span className="text-white block uppercase">
                MESBAHI
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 space-y-2"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Étudiant Ingénieur en Génie Informatique &amp; IA
              </p>
              <p className="text-xl md:text-2xl text-blue-500 font-semibold">
                Développeur Full-Stack
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a
                href="https://github.com/mohammedmes411-dev"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaGithub size={40} />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-mesbahi-66542639a"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={40} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

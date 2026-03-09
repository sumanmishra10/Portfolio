import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-background/80 z-10" />
        <img 
          src="/assets/sumanp.png" 
          alt="Suman Mishra Background" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
      </motion.div>

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-primary font-medium tracking-wide text-lg sm:text-xl"
          >
            Hello, I am
          </motion.h2>

          <motion.h1 
            className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Suman Mishra
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-3xl text-text-muted max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full-Stack <span className="text-white font-medium">.NET Developer</span>
          </motion.p>
          
          <motion.p
            className="text-base sm:text-lg text-text-muted/80 max-w-2xl mx-auto pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crafting enterprise-scale applications with responsive UI, maintainable components, and optimized database architectures.
          </motion.p>

          <motion.div 
            className="flex justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-white hover:text-primary transition-colors duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-surface border border-white/10 text-white font-medium hover:bg-white/10 transition-colors duration-300 backdrop-blur-md"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

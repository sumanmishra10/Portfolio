import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass p-10 md:p-16 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Professional <span className="text-primary">Summary</span>
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
              <p className="text-lg text-text-muted leading-relaxed">
                I am a Full-stack Software Developer with experience in startups, enterprises, and freelance projects. I specialize in web and mobile app development, system architecture, and optimization.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                My technical philosophy involves robust database design (RDBMS & NoSQL), efficient cloud deployment (IIS, VPS), and rigorous performance tuning. I thrive on creating solutions that are not just functional, but scalable and performant.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full" />
              
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-2 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-4xl font-black text-white">3+</h3>
                <p className="text-sm text-text-muted uppercase tracking-wider font-medium">Years Experience</p>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-2 transform hover:-translate-y-2 transition-transform duration-300 mt-8">
                <h3 className="text-4xl font-black text-white">10+</h3>
                <p className="text-sm text-text-muted uppercase tracking-wider font-medium">Enterprise Projects</p>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-2 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-4xl font-black text-white">Full</h3>
                <p className="text-sm text-text-muted uppercase tracking-wider font-medium">Stack Expertise</p>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-2 transform hover:-translate-y-2 transition-transform duration-300 mt-8">
                <h3 className="text-4xl font-black text-white">Web</h3>
                <p className="text-sm text-text-muted uppercase tracking-wider font-medium">& Mobile Apps</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor in Information Management (BIM)',
    institution: 'Kantipur College of Management and Information Technology, Kathmandu',
    period: 'Completed',
  },
  {
    degree: '+2 Management',
    institution: 'Shikshadeep College, Biratnagar',
    period: 'Completed',
  },
  {
    degree: 'School Leaving Certificate',
    institution: 'Eden National Secondary Boarding School, Biratnagar',
    period: 'Completed',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Educational <span className="text-primary">Background</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass p-6 md:p-8 rounded-2xl flex items-start gap-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-shadow border border-white/5 hover:border-primary/30"
            >
              <div className="hidden sm:flex flex-shrink-0 w-14 h-14 rounded-full bg-primary/20 items-center justify-center border border-primary/30">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{edu.degree}</h3>
                <h4 className="text-base md:text-lg font-medium text-text-muted mt-2">{edu.institution}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'XmartPoint Technologies',
    role: 'Software Developer (.NET Full-Stack)',
    period: 'March 2024 – Present',
    description: [
      'Enterprise-scale full-stack development with responsive UI and maintainable components.',
      'Configurable systems, workflow-driven approvals, and multi-database handling.',
      'Database schema design, queries, stored procedures, background services, performance tuning.',
      'Banking and financial domain expertise.',
    ],
  },
  {
    company: 'MR Axis Human Capital Pvt Ltd',
    role: 'Full-Stack Developer (Freelance)',
    period: '2025',
    description: [
      'Developed portfolio website using React and Cloudflare.',
      'Gained freelance delivery, client communication, and full-stack development experience.',
    ],
  },
  {
    company: 'Medipro',
    role: 'Flutter Developer Intern',
    period: 'Oct 2023 – Jan 2024',
    description: [
      'Developed mobile application using Flutter for Hospital Management System.',
      'Worked with backend team for API integration and data handling.',
      'Implemented form validation, state management, and UI optimization.',
      'Gained experience in healthcare workflow automation and mobile app architecture.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:border-l-0">
          {/* Central line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-primary/30 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[35px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-6 w-12 h-12 rounded-full bg-surface border-4 border-background flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:bg-primary transition-colors">
                    <Briefcase size={20} className="text-primary group-hover:text-white" />
                  </div>

                  {/* Content card */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
                      <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-text-muted mt-1">{exp.company}</h4>
                      
                      <ul className={`mt-6 space-y-3 text-text-muted/90 ${isEven ? 'md:text-right md:list-none' : 'list-disc pl-5'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

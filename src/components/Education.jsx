import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';

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
    <section id="education" className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Learning path" title="Educational" highlight="Background" />

        <div className="relative mt-4 space-y-6">
          <div className="absolute bottom-0 left-[2.1rem] top-0 hidden w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent sm:block" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6 }}
              className="glass shine relative flex items-start gap-6 rounded-2xl border border-white/[0.07] p-6 transition-colors duration-300 hover:border-primary/35 md:p-8"
            >
              <div className="hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/15 sm:flex">
                <GraduationCap className="text-primary" size={26} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-bold tracking-tight text-white md:text-2xl">
                    {edu.degree}
                  </h3>
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                    {edu.period}
                  </span>
                </div>
                <h4 className="mt-2 text-sm font-medium text-text-muted md:text-base">{edu.institution}</h4>
              </div>

              <span className="hidden font-mono text-xs text-text-muted/30 md:block">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

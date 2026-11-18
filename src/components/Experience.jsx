import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';
import SectionHeading from './SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="band line-t py-20 sm:py-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          intro="Three years of shipping financial software — from a mobile internship to owning full-stack feature delivery for enterprise lending products."
        />

        <div className="mt-14">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group grid gap-5 border-t border-[color:var(--line)] py-9 transition-colors duration-500 hover:bg-ink/[0.02] md:grid-cols-[210px_minmax(0,1fr)_minmax(0,220px)] md:gap-10 ${
                index === experiences.length - 1 ? 'border-b' : ''
              }`}
            >
              <div>
                <p className="label muted">{exp.period}</p>
                {exp.current && (
                  <span className="label-xs mt-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                    Current
                  </span>
                )}
                <p className="label-xs muted mt-3 leading-relaxed">{exp.meta}</p>
              </div>

              <div>
                <h3 className="display text-[clamp(1.5rem,2.4vw,2.1rem)]">{exp.role}</h3>
                <p className="muted mt-1 text-sm">{exp.company}</p>
                <ul className="muted mt-4 space-y-2 text-[14px] leading-relaxed">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-px w-3 flex-shrink-0 bg-current opacity-40" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap content-start gap-2 md:justify-end">
                {exp.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

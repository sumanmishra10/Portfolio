import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data';
import SectionHeading from './SectionHeading';
import StackStrip from './StackStrip';

const Skills = () => {
  return (
    <section id="skills" className="band line-t py-20 sm:py-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <SectionHeading
          label="Expertise"
          title="Showcasing my arsenal"
          intro="Five things I do well, and the tools behind each of them — used daily on production systems rather than side projects."
        />

        <div className="mt-14">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group grid gap-3 border-t border-[color:var(--line)] py-7 transition-colors duration-500 last:border-b hover:bg-ink/[0.02] md:grid-cols-[80px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-8"
            >
              <span className="label muted">{index + 1}.0</span>

              <h3 className="display text-[clamp(1.5rem,2.5vw,2rem)]">{service.title}</h3>

              <div>
                <p className="muted text-[14px] leading-relaxed">{service.body}</p>
                <p className="label-xs mt-3">{service.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <StackStrip />
        </div>
      </div>
    </section>
  );
};

export default Skills;

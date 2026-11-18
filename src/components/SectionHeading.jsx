import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ label, title, intro, className = '' }) => {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="label flex items-center gap-4"
      >
        <span className="h-px w-10 bg-current opacity-40" />
        {label}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="display mt-6 text-[clamp(2rem,4.6vw,3.6rem)]"
      >
        {title}
      </motion.h2>

      {intro && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="muted mt-6 max-w-xl text-[15px] leading-relaxed"
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;

import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, highlight, subtitle, align = 'center' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`flex max-w-3xl flex-col ${isCenter ? 'mx-auto items-center text-center' : 'items-start text-left'}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary"
        >
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '5rem', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className={`mt-6 h-1 rounded-full bg-gradient-to-r from-primary via-sky-400 to-indigo-400 ${isCenter ? 'mx-auto' : ''}`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`mt-6 text-base leading-relaxed text-text-muted sm:text-lg ${isCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;

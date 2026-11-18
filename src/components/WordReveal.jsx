import React from 'react';
import { motion } from 'framer-motion';

const WordReveal = ({ text, as = 'h2', className = '', delay = 0, stagger = 0.055 }) => {
  const Tag = motion[as] || motion.h2;

  return (
    <Tag className={className}>
      {text.split(' ').map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.16em] align-bottom -mb-[0.16em]"
        >
          <motion.span
            initial={{ y: '115%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.95, delay: delay + index * stagger, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {word}
          </motion.span>
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </Tag>
  );
};

export default WordReveal;

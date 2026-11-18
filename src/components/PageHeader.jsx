import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ label, title, intro }) => {
  return (
    <section className="band vgrid pb-14 pt-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="label flex items-center gap-4"
        >
          <span className="h-px w-10 bg-current opacity-40" />
          {label}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="display display-tight mt-6 max-w-[18ch] text-[clamp(2.6rem,6.4vw,5rem)]"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="muted mt-6 max-w-xl text-[15px] leading-relaxed"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;

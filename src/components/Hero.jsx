import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const headline = 'Full-Stack .NET Developer Building Banking Systems That Ship'.split(' ');

const Hero = () => {
  return (
    <section id="top" className="band vgrid relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-16">
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="label flex items-center gap-4 pt-10 sm:pt-14"
        >
          <span className="h-px w-10 bg-current opacity-40" />
          Software Engineer — Kathmandu, Nepal
        </motion.div>

        <h1 className="display relative mt-7 max-w-[18ch] text-[clamp(2.5rem,6.1vw,5.4rem)]">
          {headline.map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              <motion.span
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>{' '}
            </Fragment>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="muted mt-7 max-w-md text-[15px] leading-relaxed"
        >
          Three years of building and shipping software — enterprise lending platforms, workflow-driven banking systems,
          and mobile apps that work in the field. C#, ASP.NET Core, React and tuned SQL.
        </motion.p>
      </div>

      {/* Arch portrait */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 right-0 hidden w-[38%] max-w-[520px] md:block lg:w-[34%]"
      >
        <div className="relative overflow-hidden rounded-t-[999px] border border-[color:var(--line)] border-b-0">
          <img
            src="/assets/sumanp.png"
            alt="Suman Mishra"
            className="h-[52vh] max-h-[500px] w-full object-cover object-top grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1 }}
        className="relative z-20 mx-auto mt-14 w-full max-w-[1500px] px-5 sm:px-8"
      >
        <div className="line-t flex flex-wrap items-center justify-between gap-3 bg-cream py-5">
          <span className="label muted flex items-center gap-2">
            Scroll to explore
            <ArrowDown size={12} className="animate-bounce" />
          </span>
          <span className="label muted">Open to contract &amp; remote work</span>
          <span className="label muted hidden sm:block">Portfolio — 2026</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

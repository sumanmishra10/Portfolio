import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '../router';

const quote = 'Good software is measured by what still works after launch.'.split(' ');

const themes = [
  {
    title: 'Owning a feature end to end',
    body: 'How a requirement becomes a schema, an API, a screen and a deployment — and why the hand-offs matter more than the code.',
  },
  {
    title: 'Banking software at scale',
    body: 'Workflow-driven approvals, audit trails and multi-database reporting: the discipline financial systems quietly demand.',
  },
  {
    title: 'Designing for the next developer',
    body: 'Readable schemas, predictable APIs and components that outlive their author. Maintainability is a feature, not a chore.',
  },
];

const Speaking = () => {
  return (
    <section id="speaking" className="band-dark relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="label flex items-center gap-4">
          <span className="h-px w-10 bg-current opacity-40" />
          Speaking
        </div>

        <blockquote className="mt-8 max-w-4xl">
          <p className="display text-[clamp(1.9rem,4.6vw,3.6rem)]">
            {quote.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="mr-[0.24em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="muted mt-6 max-w-2xl text-[15px] leading-relaxed"
        >
          Most days look ordinary: a standup, a stubborn bug, a migration that needs one more test, a conversation that
          turns a vague requirement into a clean schema. I like that rhythm. Writing software taught me to be
          comfortable being wrong in public, to ask better questions before writing better code, and to ship small
          honest improvements instead of waiting for a perfect moment that never arrives.
        </motion.p>

        <div className="mt-12 grid gap-px bg-[color:var(--line)] md:grid-cols-3">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="bg-ink p-6 sm:p-7"
            >
              <span className="label-xs muted">0{index + 1}</span>
              <h3 className="display mt-4 text-xl sm:text-2xl">{theme.title}</h3>
              <p className="muted mt-3 text-[14px] leading-relaxed">{theme.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="label mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[color:var(--line)] pt-7">
          <span className="muted">Open to mentoring and team sessions</span>
          <Link to="/contact" className="flex items-center gap-2 transition-colors hover:text-clay">
            Let&rsquo;s trade notes
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Speaking;

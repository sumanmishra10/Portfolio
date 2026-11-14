import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, MessagesSquare, Sparkles, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';

const quoteWords =
  "Perfection isn't a destination you arrive at — it's the habit of caring about the details nobody will ever notice.".split(
    ' '
  );

const themes = [
  {
    icon: MessagesSquare,
    title: 'Owning a Feature End to End',
    body: 'How a requirement becomes a schema, an API, a screen, and a deployment — and why the hand-offs matter more than the code.',
    tag: 'Product thinking',
  },
  {
    icon: Code2,
    title: 'Banking Software at Scale',
    body: 'Workflow-driven approvals, audit trails, multi-database reporting and the discipline that financial systems quietly demand.',
    tag: 'Enterprise .NET',
  },
  {
    icon: Sparkles,
    title: 'Designing for the Next Developer',
    body: 'Readable schemas, predictable APIs and components that survive their author. Maintainability as a feature, not a chore.',
    tag: 'Craft',
  },
];

const Speaking = () => {
  return (
    <section id="speaking" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -right-32 top-16 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Speaking"
          title="Words on"
          highlight="Craft"
          subtitle="Ideas I keep returning to — in code reviews, mentoring sessions, and long conversations with teams about how good software actually gets made."
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
          {/* Quote panel */}
          <motion.blockquote
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10"
          >
            <span
              aria-hidden="true"
              className="font-display absolute -right-2 -top-10 select-none text-[10rem] font-black leading-none text-white/[0.04]"
            >
              &rdquo;
            </span>

            <div className="mb-6 flex items-center gap-2">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">On perfection</span>
            </div>

            <p className="font-display relative text-xl font-medium leading-snug text-white sm:text-2xl md:text-[1.7rem]">
              {quoteWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.035 }}
                  className="mr-[0.28em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-indigo-500 text-xs font-bold text-white">
                SM
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Suman Mishra</p>
                <p className="text-xs text-text-muted">Software Engineer · .NET Full-Stack</p>
              </div>
            </div>
          </motion.blockquote>

          {/* Themes */}
          <div className="space-y-4">
            {themes.map(({ icon: Icon, title, body, tag }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="glass group rounded-2xl border border-white/[0.07] p-5 transition-colors duration-300 hover:border-primary/40 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:-rotate-6">
                    <Icon size={19} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold tracking-tight text-white">{title}</h3>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-text-muted/70">
                        {tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted/90">{body}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Life as an engineer */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="glass mt-8 grid gap-8 rounded-3xl p-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-10"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">The quiet part</span>
            <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-white">
              Life as a software engineer
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Most days look ordinary: a standup, a stubborn bug, a migration that needs one more test, a conversation
              that turns a vague requirement into a clean schema.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-text-muted/90">
              I like that rhythm. Writing software has taught me to be comfortable being wrong in public, to ask better
              questions before writing better code, and to ship small honest improvements instead of waiting for a
              perfect moment that never arrives.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                Let's trade notes
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <span className="inline-flex items-center gap-2 text-xs text-text-muted/70">
                <Users size={14} className="text-primary" />
                Open to mentoring and team sessions
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speaking;

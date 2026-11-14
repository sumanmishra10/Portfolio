import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Mail, MousePointer2, Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';

const roles = [
  { lead: 'Software Engineer', accent: '.NET Full-Stack' },
  { lead: 'Banking Systems', accent: 'Specialist' },
  { lead: 'React &', accent: 'Flutter Builder' },
  { lead: 'Database', accent: 'Performance Tuner' },
];

const floatingChips = [
  { label: 'ASP.NET Core', position: 'left-4 top-[30%]', delay: 0 },
  { label: 'React', position: 'right-6 top-[24%]', delay: 1.4 },
  { label: 'MSSQL', position: 'left-12 bottom-[26%]', delay: 2.2 },
  { label: 'Flutter', position: 'right-10 bottom-[30%]', delay: 3 },
];

const nameWords = ['Suman', 'Mishra'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32">
      {/* Parallax portrait backdrop */}
      <motion.div style={{ y: backgroundY, scale: heroScale }} className="absolute inset-0 z-0">
        <img
          src="/assets/sumanp.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.18] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </motion.div>

      {/* Animated glow orbs */}
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute inset-0 z-0">
        <div className="animate-float absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[110px]" />
        <div
          className="animate-float absolute bottom-1/4 right-1/4 h-[30rem] w-[30rem] rounded-full bg-indigo-500/15 blur-[130px]"
          style={{ animationDelay: '1.5s' }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium text-primary backdrop-blur-md"
          >
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
            Available for new opportunities
            <Sparkles size={13} className="text-primary/80" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-sm uppercase tracking-[0.35em] text-text-muted"
          >
            Hello, I am
          </motion.h2>

          {/* Letter-by-letter name */}
          <h1 className="font-display mt-4 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[5.75rem]">
            <span className="sr-only">Suman Mishra</span>
            <span aria-hidden="true">
            {nameWords.map((word, wordIndex) => (
              <span key={word} className="mr-3 inline-block whitespace-nowrap sm:mr-5">
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${word}-${charIndex}`}
                    initial={{ opacity: 0, y: 70, rotateX: -85 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.3 + (wordIndex * 5 + charIndex) * 0.045,
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block drop-shadow-[0_10px_40px_rgba(59,130,246,0.25)]"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
            </span>
          </h1>

          {/* Rotating role */}
          <div className="mt-6 flex min-h-[3rem] items-center justify-center sm:min-h-[3.5rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -22, filter: 'blur(8px)' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl font-light text-text-muted sm:text-3xl"
              >
                {roles[roleIndex].lead}{' '}
                <span className="text-gradient-static font-semibold">{roles[roleIndex].accent}</span>
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted/80 sm:text-lg"
          >
            I build enterprise banking platforms — loan origination, disbursement and customer portals — with C#,
            ASP.NET Core, React and carefully tuned SQL.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Magnetic
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-[0_0_45px_-10px_rgba(59,130,246,0.95)] transition-colors duration-300 hover:bg-white hover:text-primary"
            >
              View Work
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Magnetic>

            <Magnetic
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Contact Me
              <Mail size={18} className="transition-transform duration-300 group-hover:rotate-6" />
            </Magnetic>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted/70"
          >
            <span>3 years full-stack</span>
            <span className="h-1 w-1 rounded-full bg-primary/60" />
            <span>Banking &amp; fintech</span>
            <span className="h-1 w-1 rounded-full bg-primary/60" />
            <span>Kathmandu, Nepal</span>
            <span className="h-1 w-1 rounded-full bg-primary/60" />
            <span>Remote-ready · UAE · EU · US</span>
          </motion.div>
        </div>
      </div>

      {/* Floating tech chips */}
      {floatingChips.map((chip) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
          transition={{
            opacity: { delay: 1.1 + chip.delay * 0.15, duration: 0.6 },
            scale: { delay: 1.1 + chip.delay * 0.15, duration: 0.6 },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: chip.delay * 0.4 },
          }}
          className={`absolute z-10 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-text-muted backdrop-blur-md lg:flex ${chip.position}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {chip.label}
        </motion.div>
      ))}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted/70">Scroll</span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
        <MousePointer2 size={12} className="text-text-muted/40" />
      </motion.div>
    </section>
  );
};

export default Hero;

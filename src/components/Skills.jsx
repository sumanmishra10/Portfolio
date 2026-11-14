import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const stack = [
  { name: 'C#', icon: '/assets/skills/csharp.svg' },
  { name: '.NET', icon: '/assets/skills/dotnet.svg' },
  { name: 'React', icon: '/assets/skills/react.svg' },
  { name: 'JavaScript', icon: '/assets/skills/javascript.svg' },
  { name: 'Tailwind CSS', icon: '/assets/skills/tailwind.svg' },
  { name: 'Flutter', icon: '/assets/skills/flutter.svg' },
  { name: 'SQL Server', icon: '/assets/skills/sqlserver.svg' },
  { name: 'PostgreSQL', icon: '/assets/skills/postgresql.svg' },
  { name: 'Git', icon: '/assets/skills/git.svg' },
  { name: 'Cloudflare', icon: '/assets/skills/cloudflare.svg' },
];

const alsoUsing = [
  'ASP.NET MVC',
  'REST APIs',
  'Background Services',
  'Riverpod',
  'Dio',
  'Hive',
  'jQuery',
  'IIS / VPS',
  'TFS',
  'Workflow Automation',
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Toolbox"
          title="What I"
          highlight="Do"
          subtitle="Three years of shipping production software — from database schema to mobile app. This is the stack I reach for every day."
        />

        <div className="mt-14 flex gap-8 xl:gap-12">
          {/* Vertical section label */}
          <div className="hidden shrink-0 flex-col items-center justify-center gap-5 xl:flex">
            <span className="h-24 w-[3px] rounded-full bg-gradient-to-b from-primary to-transparent" />
            <span
              className="font-display text-sm font-bold uppercase text-white"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.55em' }}
            >
              Skills
            </span>
            <span className="h-24 w-[3px] rounded-full bg-gradient-to-t from-primary/60 to-transparent" />
          </div>

          {/* Logo grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
              {stack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 26, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 5) * 0.07 + Math.floor(index / 5) * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative flex h-36 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-transparent transition-colors duration-300 hover:border-primary/45 sm:h-40"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <img
                    src={tech.icon}
                    alt=""
                    width="64"
                    height="64"
                    loading="lazy"
                    decoding="async"
                    className="relative h-14 w-14 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
                  />

                  <span className="relative text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted transition-colors duration-300 group-hover:text-white sm:text-[11px]">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Supporting stack */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 border-t border-white/[0.08] pt-7"
            >
              <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted/50">
                Also in the toolbox
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {alsoUsing.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-text-muted transition-colors duration-300 hover:border-primary/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Building2, CheckCircle2, Download } from 'lucide-react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    company: 'XmartPoint Technologies',
    initials: 'XP',
    role: 'Software Developer (.NET Full-Stack)',
    period: 'Jan 2024 – Present',
    current: true,
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'PostgreSQL', 'React'],
    points: [
      'Develop and maintain enterprise-scale full-stack applications for banking and financial operations, including loan origination, disbursement, and customer-facing public portals.',
      'Build configurable, workflow-driven systems for approval processes and business automation with multi-database handling.',
      'Design database schemas, write complex queries and stored procedures, and tune performance on SQL Server and PostgreSQL.',
      'Implement background and scheduling services, and integrate REST APIs across application components and databases.',
      'Improve reliability through debugging, refactoring, code review, and deployment on IIS/VPS with Cloudflare.',
    ],
  },
  {
    company: 'MR Axis Human Capital Pvt. Ltd.',
    initials: 'MR',
    role: 'Freelance Full-Stack Developer',
    period: '2025',
    tags: ['React', 'Cloudflare', 'Delivery'],
    points: [
      'Developed and deployed a responsive portfolio website using React and Cloudflare.',
      'Owned the delivery lifecycle end to end — requirements, implementation, deployment, and direct client communication.',
    ],
  },
  {
    company: 'Medipro',
    initials: 'MD',
    role: 'Flutter Developer Intern',
    period: 'Oct 2023 – Jan 2024',
    tags: ['Flutter', 'REST APIs', 'State Management'],
    points: [
      'Developed a Flutter-based Hospital Management System mobile app with patient and appointment modules.',
      'Integrated REST APIs and handled data flow between the mobile client and backend services.',
      'Implemented form validation, state management, and UI optimization with the backend team.',
    ],
  },
];

const Experience = () => {
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 70%', 'end 60%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-24">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.35fr)] lg:gap-20 lg:px-8">
        {/* Sticky intro */}
        <div className="self-start lg:sticky lg:top-28">
          <SectionHeading
            align="left"
            eyebrow="Career"
            title="Professional"
            highlight="Journey"
            subtitle="Three years of shipping financial software — from internship to owning full-stack feature delivery."
          />

          <div className="mt-8 space-y-3">
            {[
              ['2023', 'Mobile development internship'],
              ['2024', 'Joined banking product team'],
              ['2025', 'Freelance delivery + enterprise scale'],
            ].map(([year, label], index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.12, duration: 0.55 }}
                className="flex items-center gap-3"
              >
                <span className="w-11 font-mono text-xs text-primary">{year}</span>
                <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                <span className="text-xs text-text-muted">{label}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="/assets/Suman_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Download size={16} />
            Download full CV
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* Timeline */}
        <div ref={railRef} className="relative">
          <div className="absolute bottom-0 left-[19px] top-2 w-px bg-white/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-primary via-sky-400 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
          />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14"
              >
                {/* Node */}
                <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-background">
                  <span className="absolute inset-0 rounded-xl bg-primary/15 blur-md" />
                  <Building2 size={16} className="relative text-primary" />
                  {exp.current && (
                    <span className="animate-pulse-dot absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
                  )}
                </div>

                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                  className="glass shine group relative overflow-hidden rounded-2xl border border-white/[0.07] p-6 transition-colors duration-300 hover:border-primary/40 sm:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-indigo-500/20 font-mono text-[11px] font-bold text-white">
                        {exp.initials}
                      </span>
                      <span className="text-sm font-medium text-text-muted">{exp.company}</span>
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${
                        exp.current
                          ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                          : 'border-white/10 bg-white/[0.04] text-text-muted'
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="font-display mt-4 text-lg font-bold tracking-tight text-white sm:text-xl">
                    {exp.role}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-text-muted/90">
                        <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted transition-colors group-hover:border-primary/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-4xl font-black text-white/[0.03]">
                    0{experiences.length - index}
                  </span>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

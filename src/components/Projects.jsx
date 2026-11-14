import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, Server, Smartphone, LayoutDashboard, ArrowUpRight, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import SectionHeading from './SectionHeading';

const featured = {
  title: 'XmartCredit Mobile App',
  description:
    'A credit and loan-services mobile app built in Flutter: OTP login, task approvals, pre-approval and credit-card appraisal flows, site inspection with geolocation, and document upload.',
  highlights: [
    'Layered repository / view-model architecture',
    'Token-expiry interception on every authenticated call',
    'Offline caching with Hive for low-connectivity field work',
  ],
  tags: ['Flutter', 'Riverpod', 'Dio', 'Hive', 'Fintech'],
  icon: Smartphone,
};

const projects = [
  {
    title: 'Loan Origination System',
    description:
      'Developed loan processing workflows and business functionality backed by stored procedures and query optimization.',
    tags: ['ASP.NET MVC', 'C#', 'SQL Server'],
    icon: Database,
  },
  {
    title: 'Disbursement System',
    description: 'Automated loan disbursement workflows with status tracking and stage-based business rules.',
    tags: ['ASP.NET', 'C#', 'SQL Server'],
    icon: LayoutDashboard,
  },
  {
    title: 'Loan Public Portal',
    description: 'Built a public-facing portal that delivers loan status and information through secure backend APIs.',
    tags: ['ASP.NET', 'REST APIs', 'SQL Server'],
    icon: Server,
  },
  {
    title: 'Hospital Management System',
    description: 'Developed patient and appointment management modules with API integration and state management.',
    tags: ['Flutter', 'REST APIs', 'State Management'],
    icon: Smartphone,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 90, damping: 18 } },
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title="Featured"
            highlight="Projects"
            subtitle="Enterprise lending platforms and mobile products I've architected, built and shipped."
          />

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="https://github.com/sumanmishra10"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-primary/50 hover:text-primary md:self-auto"
          >
            View GitHub
            <ExternalLink size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <TiltCard className="glass shine overflow-hidden rounded-3xl border border-primary/25 p-7 sm:p-9" max={5}>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  <Sparkles size={12} />
                  Flagship build
                </span>

                <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-text-muted/90">{featured.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative rounded-2xl border border-white/[0.07] bg-background/40 p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/20 blur-2xl" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted/70">
                  What I built
                </span>
                <ul className="mt-4 space-y-3">
                  {featured.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-muted/90">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div key={project.title} variants={cardVariants}>
                <TiltCard className="glass shine h-full rounded-3xl border border-white/[0.07] p-8 transition-colors duration-500 hover:border-primary/40">
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.06 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-primary/10 transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                    >
                      <Icon className="text-primary" size={26} />
                    </motion.div>
                    <span className="font-mono text-xs text-text-muted/40">
                      {String(index + 2).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display mt-6 flex items-center gap-2 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </h3>

                  <p className="mt-3 flex-grow leading-relaxed text-text-muted/90">{project.description}</p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted transition-colors duration-300 group-hover:border-primary/30 group-hover:text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

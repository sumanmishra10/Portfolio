import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Workflow, Gauge, Database } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Counter from './Counter';

const stats = [
  { value: 3, suffix: '+', label: 'Years Full-Stack' },
  { value: 5, suffix: '', label: 'Flagship Products' },
  { value: 20, suffix: '+', label: 'Technologies' },
  { text: 'Full', label: 'Stack Ownership' },
];

const highlights = [
  { icon: Landmark, label: 'Banking Systems' },
  { icon: Workflow, label: 'Workflow Automation' },
  { icon: Gauge, label: 'Performance Tuning' },
  { icon: Database, label: 'Multi-Database Design' },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Who I am" title="Professional" highlight="Summary" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass mt-14 rounded-3xl p-8 md:p-14"
        >
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-text-muted">
                I'm a Software Engineer with three years of full-stack experience in .NET, focused on enterprise banking
                systems, workflow automation and database design. I've delivered loan origination, disbursement and
                customer portal platforms using C#, ASP.NET Core/MVC, React and SQL Server/PostgreSQL.
              </p>
              <p className="text-lg leading-relaxed text-text-muted">
                I care about the parts users never see: schema design, stored procedures, background and scheduling
                services, and the query that has to stay fast at scale. I integrate REST APIs end to end and deploy on
                IIS/VPS behind Cloudflare.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {highlights.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-text-muted transition-colors hover:border-primary/40 hover:text-white"
                  >
                    <Icon size={14} className="text-primary" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs text-text-muted/70">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to remote contract or full-time roles with UAE, EU and US overlap.
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-5">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-[70px]" />

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`glass relative rounded-2xl p-6 ${index % 2 === 1 ? 'mt-6' : ''}`}
                >
                  <span className="absolute right-4 top-3 font-mono text-[10px] text-primary/40">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-4xl font-black text-white">
                    {stat.value !== undefined ? <Counter to={stat.value} suffix={stat.suffix} /> : stat.text}
                  </h3>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                    {stat.label}
                  </p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/50 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

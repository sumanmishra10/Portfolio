import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Counter from './Counter';

const stats = [
  { value: 3, suffix: '+', label: 'Years building' },
  { value: 5, suffix: '', label: 'Products shipped' },
  { value: 20, suffix: '+', label: 'Technologies' },
];

const About = () => {
  return (
    <section id="about" className="band-dark relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-t-[240px] border border-[color:var(--line)]">
              <img
                src="/assets/sumanp.png"
                alt="Suman Mishra"
                className="h-[380px] w-full object-cover object-top grayscale sm:h-[460px]"
              />
            </div>
            <div className="label-xs mt-5 flex justify-between">
              <span className="muted">Kathmandu, Nepal</span>
              <span className="muted">Since 2023</span>
            </div>
          </motion.div>

          <div className="self-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="label flex items-center gap-4"
            >
              <span className="h-px w-10 bg-current opacity-40" />
              About
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="display mt-6 text-[clamp(1.7rem,3.1vw,2.7rem)]"
            >
              I build complete products — the interface your customers touch, the systems behind it, and the
              deployment that puts it online.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-7 space-y-4 text-[15px] leading-relaxed"
            >
              <p className="muted">
                Software Engineer with three years of full-stack experience in .NET, focused on enterprise banking
                systems, workflow automation and database design. I have delivered loan origination, disbursement and
                customer portal platforms using C#, ASP.NET Core/MVC, React and SQL Server/PostgreSQL.
              </p>
              <p className="muted">
                I care about the parts users never see: schema design, stored procedures, background and scheduling
                services, and the query that has to stay fast at scale. Fluent English, and available for remote work
                with reliable overlap across UAE, EU and US time zones.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[color:var(--line)] pt-7">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                >
                  <p className="display text-3xl sm:text-4xl">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="label-xs muted mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="/assets/Suman_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-2 border-b border-[color:var(--line)] pb-1 text-sm transition-colors hover:border-current"
            >
              Read the full CV
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

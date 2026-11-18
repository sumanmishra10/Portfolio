import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDownToLine } from 'lucide-react';
import WordReveal from '../components/WordReveal';
import SectionHeading from '../components/SectionHeading';
import StackStrip from '../components/StackStrip';
import SiteFooter from '../components/SiteFooter';
import Counter from '../components/Counter';
import { Link } from '../router';
import { experiences, education, services } from '../data';

const meta = [
  ['Name', 'Suman Mishra'],
  ['Role', 'Software Engineer'],
  ['Focus', '.NET · React · Flutter'],
  ['Experience', '3+ years'],
  ['Location', 'Kathmandu, Nepal'],
];

const stats = [
  { value: 3, suffix: '+', label: 'Years building' },
  { value: 5, suffix: '', label: 'Products shipped' },
  { value: 20, suffix: '+', label: 'Technologies' },
];

const AboutPage = () => {
  const headRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: headRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <>
      {/* ---------- Head ---------- */}
      <section ref={headRef} className="band vgrid pb-16 pt-32">
        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="label flex items-center gap-4"
          >
            <span className="h-px w-10 bg-current opacity-40" />
            About
          </motion.div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:gap-16">
            <div>
              <WordReveal
                as="h1"
                text="Hey, I’m Suman Mishra"
                className="display display-tight text-[clamp(2.6rem,5.4vw,4.5rem)]"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="muted mt-8 max-w-lg text-[15px] leading-relaxed"
              >
                I started in management and information systems, then went deep into the code. Today I build
                enterprise banking software by day and my own products in between — interfaces people enjoy, APIs that
                hold up under load, and releases that go out on time.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="muted mt-4 max-w-lg text-[15px] leading-relaxed"
              >
                Most of my work is in English, across time zones, held to the same standard every time: readable
                schemas, predictable APIs and deployments I would be happy to inherit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.72 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium text-cream transition-colors duration-300 hover:bg-clay"
                >
                  Let&rsquo;s talk
                </Link>
                <a
                  href="/assets/Suman_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[13px]"
                >
                  <span className="ulink">Download CV</span>
                  <ArrowDownToLine size={15} className="opacity-60 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div style={{ y: portraitY }}>
                <div className="overflow-hidden rounded-t-[240px] border border-[color:var(--line)]">
                  <img
                    src="/assets/sumanp.png"
                    alt="Suman Mishra"
                    className="h-[380px] w-full object-cover object-top grayscale sm:h-[440px]"
                  />
                </div>
              </motion.div>
              <p className="label-xs muted mt-4 flex justify-between">
                <span>Suman Mishra</span>
                <span>Kathmandu, Nepal</span>
              </p>
            </motion.div>
          </div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[color:var(--line)] pt-8 sm:grid-cols-3 lg:grid-cols-5"
          >
            {meta.map(([label, value]) => (
              <div key={label}>
                <dt className="label-xs muted">{label}</dt>
                <dd className="mt-2 text-[14px]">{value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className="band line-t py-20 sm:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
            <div>
              <p className="label muted">Philosophy</p>
              <WordReveal
                as="h2"
                text="I learned to code for the skill and stayed for the problems."
                className="display mt-6 text-[clamp(1.8rem,3.4vw,2.9rem)]"
              />
            </div>

            <div>
              <p className="text-[15px] leading-relaxed">
                Years in, I still like the part where a vague requirement becomes a schema, an API and a screen someone
                can actually use. Web, mobile, back end, deployment — whatever the project needs to stand on its own
                once it is live.
              </p>
              <p className="muted mt-4 text-[15px] leading-relaxed">
                I care about the parts users never see: stored procedures, background jobs, query plans and the
                hand-over notes that let the next developer ship without calling me.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[color:var(--line)] pt-7">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <p className="display text-3xl sm:text-4xl">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="label-xs muted mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 text-sm">
                <span className="ulink">Got a project that needs building?</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section className="band line-t py-20 sm:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <SectionHeading label="Experience" title="Where I have worked" />

          <div className="mt-12">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group grid gap-4 border-t border-[color:var(--line)] py-8 transition-colors duration-500 hover:bg-ink/[0.02] md:grid-cols-[56px_minmax(0,1fr)_190px] md:gap-8 lg:grid-cols-[56px_minmax(0,1.3fr)_200px_130px] ${
                  index === experiences.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="label muted">0{index + 1}</span>

                <div>
                  <h3 className="display text-[clamp(1.4rem,2.2vw,1.9rem)]">{exp.company}</h3>
                  <p className="muted mt-1 text-sm">{exp.role}</p>
                  <p className="muted mt-3 max-w-xl text-[14px] leading-relaxed">{exp.points[0]}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="label muted md:pt-1">{exp.period}</span>

                <span className="label-xs muted md:pt-1 md:text-right">{exp.meta}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <section className="band line-t py-20 sm:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <SectionHeading label="Education" title="Where I studied" />

          <div className="mt-12">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: index * 0.07 }}
                className={`group grid gap-3 border-t border-[color:var(--line)] py-7 transition-colors duration-500 hover:bg-ink/[0.02] md:grid-cols-[56px_minmax(0,1fr)_minmax(0,1fr)] md:items-baseline md:gap-8 ${
                  index === education.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="label muted">0{index + 1}</span>
                <h3 className="display text-[clamp(1.3rem,2vw,1.7rem)]">{item.degree}</h3>
                <p className="muted text-[14px] leading-relaxed">{item.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="band-dark py-20 sm:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <SectionHeading
            label="Expertise"
            title="Go beyond the ticket"
            intro="Five things I do well, and the tools behind each of them — used daily on production systems rather than side projects."
          />

          <div className="mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group grid gap-3 border-t border-[color:var(--line)] py-7 transition-colors duration-500 hover:bg-cream/[0.03] md:grid-cols-[80px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-8 last:border-b"
              >
                <span className="label muted">{index + 1}.0</span>
                <h3 className="display text-[clamp(1.4rem,2.3vw,1.9rem)]">{service.title}</h3>
                <div>
                  <p className="muted text-[14px] leading-relaxed">{service.body}</p>
                  <p className="label-xs mt-3">{service.tech}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <StackStrip dark />
          </div>
        </div>
      </section>

      {/* ---------- CTA + footer ---------- */}
      <section className="band-dark line-t pt-20 sm:pt-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          <WordReveal
            as="h2"
            text="Better today than yesterday."
            className="display display-tight max-w-[16ch] text-[clamp(2.4rem,6vw,4.6rem)]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="muted mt-6 max-w-md text-[15px] leading-relaxed"
          >
            If that is the standard your project needs, let&rsquo;s talk about what you are building and what is
            getting in the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Link
              to="/contact"
              className="rounded-full border border-cream/40 px-6 py-3 text-[13px] font-medium transition-colors duration-300 hover:bg-cream hover:text-ink"
            >
              Let&rsquo;s talk
            </Link>
            <a href="mailto:beingsuman10@gmail.com" className="text-[13px]">
              <span className="ulink">beingsuman10@gmail.com</span>
            </a>
          </motion.div>

          <SiteFooter />
        </div>
      </section>
    </>
  );
};

export default AboutPage;

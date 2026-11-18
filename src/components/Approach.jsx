import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const steps = [
  {
    title: 'Scope before code',
    body: 'We agree on what ships first: the data model, the screens, and the workflow behind them. Ambiguity gets expensive later, so it gets resolved now.',
  },
  {
    title: 'Visible progress',
    body: 'A working build every week, not a status report. You can click through it, question it, and redirect it while changing course is still cheap.',
  },
  {
    title: 'Clean handover',
    body: 'Readable source, documented deployment, and infrastructure you control. If another developer opens this project in a year, they should be able to ship.',
  },
];

const Approach = () => {
  return (
    <section className="band-dark relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
            <SectionHeading
              label="Approach"
              title="Clear scope. Visible progress. Clean handoff."
              intro="I work like a partner rather than a ticket queue — the same care for the schema as for the spacing on a screen."
            />
          </div>

          <div>
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="grid grid-cols-[52px_minmax(0,1fr)] gap-4 border-t border-[color:var(--line)] py-6 last:border-b"
              >
                <span className="label-xs muted pt-1">0{index + 1}</span>
                <div>
                  <h3 className="text-base font-medium">{step.title}</h3>
                  <p className="muted mt-2 text-[14px] leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;

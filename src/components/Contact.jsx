import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Github, Instagram, Linkedin, Facebook, Send } from 'lucide-react';
import SiteFooter from './SiteFooter';

const socials = [
  { href: 'https://github.com/sumanmishra10', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/suman-mishra-a52999369/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/whysumann/', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/__suman.mishra__/', icon: Instagram, label: 'Instagram' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);

    window.location.href = `mailto:beingsuman10@gmail.com?subject=${subject}&body=${body}`;
    setStatus('sent');
    window.setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="band-dark relative overflow-hidden pt-20 sm:pt-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <div>
            <div className="label flex items-center gap-4">
              <span className="h-px w-10 bg-current opacity-40" />
              Contact
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="display display-tight mt-6 text-[clamp(2.4rem,6vw,4.6rem)]"
            >
              Let&rsquo;s build something that lasts.
            </motion.h2>

            <p className="muted mt-6 max-w-md text-[15px] leading-relaxed">
              Open to contract and full-time roles, remote or in Kathmandu. If you have a product that needs a
              full-stack engineer who also handles the deployment, let&rsquo;s talk.
            </p>

            <div className="mt-10 space-y-4">
              <a href="mailto:beingsuman10@gmail.com" className="group flex items-center gap-3 text-[17px] sm:text-xl">
                <span className="ulink">beingsuman10@gmail.com</span>
                <ArrowUpRight size={16} className="opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="tel:+9779820344113" className="block text-[17px] sm:text-xl">
                <span className="ulink">+977 9820344113</span>
              </a>
              <p className="label muted pt-2">Kathmandu, Nepal</p>
            </div>

            <div className="mt-9 flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] transition-colors duration-300 hover:bg-cream hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="name" className="label-xs muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="field mt-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="label-xs muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="field mt-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="label-xs muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are you building?"
                  className="field mt-2 resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-[13px] font-medium transition-colors duration-300 hover:bg-cream hover:text-ink"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={status}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      {status === 'sent' ? <Check size={15} /> : <Send size={15} />}
                      {status === 'sent' ? 'Email app opened' : 'Send message'}
                    </motion.span>
                  </AnimatePresence>
                </button>
                <span className="label-xs muted">Opens your mail app, pre-filled</span>
              </div>
            </form>
          </div>
        </div>

        <SiteFooter />
      </div>
    </section>
  );
};

export default Contact;

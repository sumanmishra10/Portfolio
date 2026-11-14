import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Send, Facebook, Instagram, Check, Loader2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Magnetic from './Magnetic';

const socials = [
  { href: 'https://github.com/sumanmishra10', icon: Github, label: 'GitHub', hover: 'hover:bg-white hover:text-black' },
  { href: 'https://linkedin.com/in/suman-mishra-a52999369/', icon: Linkedin, label: 'LinkedIn', hover: 'hover:bg-[#0077b5] hover:border-[#0077b5]' },
  { href: 'https://www.facebook.com/whysumann/', icon: Facebook, label: 'Facebook', hover: 'hover:bg-[#1877F2] hover:border-[#1877F2]' },
  { href: 'https://www.instagram.com/__suman.mishra__/', icon: Instagram, label: 'Instagram', hover: 'hover:bg-[#E4405F] hover:border-[#E4405F]' },
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

    setStatus('sending');

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);

    window.setTimeout(() => {
      window.location.href = `mailto:beingsuman10@gmail.com?subject=${subject}&body=${body}`;
      setStatus('sent');
      window.setTimeout(() => setStatus('idle'), 6000);
    }, 500);
  };

  return (
    <section id="contact" className="relative overflow-hidden pb-12 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-96 w-full max-w-2xl -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's"
          highlight="Connect"
          subtitle="Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
        />

        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-12 md:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <a
              href="mailto:beingsuman10@gmail.com"
              className="group flex items-center gap-5 rounded-2xl border border-transparent p-3 transition-colors hover:border-white/10 hover:bg-white/[0.03]"
            >
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/15 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                <Mail className="text-primary" size={22} />
              </span>
              <span>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Email
                </span>
                <span className="block break-all text-base font-medium text-white transition-colors group-hover:text-primary sm:text-lg">
                  beingsuman10@gmail.com
                </span>
                <span className="block break-all text-sm text-text-muted/70">suman6mishra@gmail.com</span>
              </span>
            </a>

            <a
              href="tel:+9779820344113"
              className="group flex items-center gap-5 rounded-2xl border border-transparent p-3 transition-colors hover:border-white/10 hover:bg-white/[0.03]"
            >
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/15 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                <Phone className="text-primary" size={22} />
              </span>
              <span>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Phone
                </span>
                <span className="block text-base font-medium text-white transition-colors group-hover:text-primary sm:text-lg">
                  +977 9820344113
                </span>
              </span>
            </a>

            <div className="flex items-center gap-5 p-3">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <MapPin className="text-primary" size={22} />
              </span>
              <span>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Location
                </span>
                <span className="block text-base font-medium text-white sm:text-lg">Kathmandu, Nepal</span>
              </span>
            </div>

            <div className="flex gap-3 border-t border-white/10 pt-6">
              {socials.map(({ href, icon: Icon, label, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-text-muted transition-colors duration-300 hover:text-white ${hover}`}
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative overflow-hidden rounded-3xl p-7 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

            <form className="relative space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-text-muted/50 transition-all duration-300 focus:border-primary focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-primary/25"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-text-muted/50 transition-all duration-300 focus:border-primary focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-primary/25"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-text-muted/50 transition-all duration-300 focus:border-primary focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-primary/25"
                  placeholder="Hi Suman, I think we need a design system for our products..."
                />
              </div>

              <Magnetic
                as="button"
                type="submit"
                disabled={status !== 'idle'}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-primary/90 disabled:opacity-80"
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
                    {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
                    {status === 'sent' && <Check size={18} />}
                    {status === 'idle' && <Send size={18} />}
                    {status === 'sending' ? 'Opening mail…' : status === 'sent' ? 'Email app opened' : 'Send Message'}
                  </motion.span>
                </AnimatePresence>
              </Magnetic>

              <p className="text-center text-xs text-text-muted/60">
                This opens your mail app with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Suman Mishra. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

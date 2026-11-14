import React, { useEffect, useState } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Speaking', href: '#speaking' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const GithubIcon = ({ size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.5-1.59 6.5-7.17a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0 .15-3.7s-1.2-.4-3.9 1.4a13.38 13.38 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0 .15 3.7 5.5 5.5 0 0 0-1.5 3.8c0 5.58 3.3 6.82 6.5 7.17a4.8 4.8 0 0 0-1 3.03v4" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'border-b border-white/10 bg-background/75 py-3 backdrop-blur-xl'
          : 'border-b border-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <motion.span
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="text-primary"
          >
            <Code2 />
          </motion.span>
          <span>
            Suman<span className="text-primary">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]"
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-white' : 'text-text-muted hover:text-white'}`}>
                  {link.name}
                </span>
              </a>
            );
          })}

          <a
            href="/assets/Suman_Resume.pdf"
            download
            className="ml-3 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <Download size={16} /> Resume
          </a>

          <a
            href="https://github.com/sumanmishra10"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-muted transition-all hover:border-white hover:bg-white hover:text-black"
            title="GitHub"
          >
            <GithubIcon />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileMenuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
              className="flex flex-col gap-1 px-4 pb-6 pt-4"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="rounded-xl px-3 py-3 text-base font-medium text-text-muted transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="/assets/Suman_Resume.pdf"
                download
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white transition-all hover:bg-white hover:text-black"
              >
                <Download size={16} /> Download Resume
              </motion.a>

              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="mt-4 flex justify-center border-t border-white/10 pt-4"
              >
                <a
                  href="https://github.com/sumanmishra10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-muted transition-all hover:bg-white hover:text-black"
                  title="GitHub"
                >
                  <GithubIcon />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

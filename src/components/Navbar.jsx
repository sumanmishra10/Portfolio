import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] =  useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight group">
          <Code2 className="text-primary group-hover:rotate-12 transition-transform" />
          <span>Suman<span className="text-primary">.dev</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/assets/Suman_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
          >
            <Download size={16} /> Resume
          </a>
          <a
            href="https://github.com/sumanmishra10"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.5-1.59 6.5-7.17a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0 .15-3.7s-1.2-.4-3.9 1.4a13.38 13.38 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0 .15 3.7 5.5 5.5 0 0 0-1.5 3.8c0 5.58 3.3 6.82 6.5 7.17a4.8 4.8 0 0 0-1 3.03v4"></path></svg>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-text-muted hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/assets/Suman_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 mt-4 px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all"
              >
                <Download size={16} /> Download Resume
              </a>
              <div className="flex gap-4 justify-center mt-4 border-t border-white/10 pt-4">
                <a
                  href="https://github.com/sumanmishra10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.5-1.59 6.5-7.17a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0 .15-3.7s-1.2-.4-3.9 1.4a13.38 13.38 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0 .15 3.7 5.5 5.5 0 0 0-1.5 3.8c0 5.58 3.3 6.82 6.5 7.17a4.8 4.8 0 0 0-1 3.03v4"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

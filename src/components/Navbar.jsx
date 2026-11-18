import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, usePath } from '../router';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Journey', href: '/#experience' },
  { name: 'Work', href: '/work' },
  { name: 'Expertise', href: '/#skills' },
  { name: 'Speaking', href: '/#speaking' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [time, setTime] = useState('');
  const path = usePath();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kathmandu',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const update = () => setTime(formatter.format(new Date()));
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [path]);

  const isActive = (href) => {
    if (href.startsWith('/#')) return path === '/' && activeSection === href.slice(2);
    return path === href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 hairline ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md' : 'bg-cream/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/25 font-serif text-[13px] leading-none">
            SM
          </span>
          <span className="label tracking-[0.28em]">Suman Mishra</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="group relative text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.name}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-ink transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="label-xs hidden text-ink/55 xl:block">{time} Nepal</span>
          <Link
            to="/contact"
            className="hidden rounded-full border border-ink/30 px-5 py-2 text-[12px] font-medium transition-all duration-300 hover:bg-ink hover:text-cream sm:block"
          >
            Let&rsquo;s Talk
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-cream lg:hidden"
          >
            <nav className="flex flex-col px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-ink/10 py-3.5 font-serif text-2xl last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-full border border-ink/30 py-2.5 text-center text-sm"
              >
                Let&rsquo;s Talk
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

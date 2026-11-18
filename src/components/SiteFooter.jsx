import React from 'react';
import { Link } from '../router';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Speaking', href: '/#speaking' },
  { name: 'Contact', href: '/contact' },
];

const SiteFooter = () => {
  return (
    <footer className="mt-20 border-t border-[color:var(--line)] pt-10">
      <div className="grid gap-10 pb-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
        <div>
          <p className="display text-2xl">Suman Mishra</p>
          <p className="muted mt-2 max-w-xs text-[13px] leading-relaxed">
            Software Engineer — .NET full-stack, banking systems, React and Flutter products.
          </p>
        </div>

        <div>
          <p className="label-xs muted">Explore</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="text-[13px] text-cream/80 transition-colors hover:text-cream">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-xs muted">Elsewhere</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="https://github.com/sumanmishra10"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-cream/80 transition-colors hover:text-cream"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/suman-mishra-a52999369/"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-cream/80 transition-colors hover:text-cream"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="/assets/Suman_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-cream/80 transition-colors hover:text-cream"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="label-xs muted flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--line)] py-6">
        <span>© {new Date().getFullYear()} Suman Mishra — All rights reserved</span>
        <span>Photography: Pexels &amp; Flickr contributors</span>
        <span>Built with React &amp; Vite — Portfolio 2026</span>
      </div>
    </footer>
  );
};

export default SiteFooter;

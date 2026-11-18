import React, { useEffect, useState } from 'react';

const listeners = new Set();

const notify = () => listeners.forEach((listener) => listener());

const scrollToHash = (hash) => {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'auto' });
    return;
  }

  window.setTimeout(() => {
    const element = document.getElementById(hash);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
};

export const navigate = (to) => {
  const [target, hash] = to.split('#');

  if (window.location.pathname !== target || window.location.hash.replace('#', '') !== (hash || '')) {
    window.history.pushState({}, '', to);
  }

  notify();
  scrollToHash(hash);
};

export const usePath = () => {
  const [path, setPath] = useState(() => window.location.pathname || '/');

  useEffect(() => {
    const update = () => setPath(window.location.pathname || '/');
    listeners.add(update);
    window.addEventListener('popstate', update);
    return () => {
      listeners.delete(update);
      window.removeEventListener('popstate', update);
    };
  }, []);

  return path;
};

export const Link = ({ to, children, onClick, ...rest }) => {
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

    if (to.startsWith('#')) {
      event.preventDefault();
      onClick?.(event);
      scrollToHash(to.slice(1));
      return;
    }

    event.preventDefault();
    onClick?.(event);
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

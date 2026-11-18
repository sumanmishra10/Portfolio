import React, { useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { usePath } from './router';

const titles = {
  '/': 'Suman Mishra — Software Engineer, .NET Full-Stack',
  '/work': 'Work — Suman Mishra',
  '/about': 'About — Suman Mishra',
  '/contact': 'Contact — Suman Mishra',
};

function App() {
  const path = usePath();

  useEffect(() => {
    document.title = titles[path] || titles['/'];
  }, [path]);

  let page = <Home />;
  if (path === '/work') page = <WorkPage />;
  else if (path === '/about') page = <AboutPage />;
  else if (path === '/contact') page = <ContactPage />;

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>{page}</main>
      <BackToTop />
    </div>
  );
}

export default App;

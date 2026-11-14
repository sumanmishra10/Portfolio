import React from 'react';
import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Speaking from './components/Speaking';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-text">
      <Background />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Speaking />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;

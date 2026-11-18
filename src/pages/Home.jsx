import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Approach from '../components/Approach';
import Skills from '../components/Skills';
import Speaking from '../components/Speaking';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects limit={3} />
      <Approach />
      <Skills />
      <Speaking />
      <Contact />
    </>
  );
};

export default Home;

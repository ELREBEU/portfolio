import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import ToolsMarquee from '../components/ToolsMarquee';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Skills />
      <ToolsMarquee />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;

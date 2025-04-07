import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <FAQ />
    </>
  );
}
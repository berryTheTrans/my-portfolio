import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-background text-slate-300 min-h-screen font-sans selection:bg-white selection:text-black">
      <main className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 pb-12">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
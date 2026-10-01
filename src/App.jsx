import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import QRCodeSection from './components/QRCodeSection';
import Footer from './components/Footer';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full opacity-10 z-0 transition-transform duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)',
          left: mousePos.x - 250,
          top: mousePos.y - 250,
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <QRCodeSection />
      <Footer />
    </div>
  );
}

export default App;

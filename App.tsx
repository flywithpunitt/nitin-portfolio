
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './constants';
import StickyCallButton from './components/StickyCallButton';
import PortfolioCard from './components/PortfolioCard';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-500/30 selection:text-white">
      <StickyCallButton />

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-20">
          
          {/* Profile Photo Area */}
          <div className="relative flex-shrink-0 group">
            {/* The soft halo glow around the image */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/40 via-purple-600/40 to-blue-500/40 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-[#0a0a0a] shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] bg-neutral-900">
              <img
                src="/nitin.jpeg"
                alt="Nitin"
                className="w-full h-full object-cover  brightness-110 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
          </div>

          {/* Bio Info Area */}
          <div className="text-center md:text-left relative z-10 flex-1">
            {/* Professional Badges */}
            <div className="mb-6 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em] shadow-inner backdrop-blur-sm">
                Video Editor
              </span>
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-purple-400 text-[10px] font-bold uppercase tracking-[0.25em] shadow-inner backdrop-blur-sm">
                Graphic Designer
              </span>
            </div>
            

            {/* Main Heading with Blue Dot */}
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter text-white leading-none">
              Nitin<span className="text-blue-500">.</span>
            </h1>

            {/* Description with specific bolds as requested */}
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed">
              Crafting premium visual stories through <span className="text-white font-bold">expert video editing</span> and <span className="text-white font-bold">bold graphic design</span>.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="tel:+918287484910" 
                className="px-10 py-4 bg-white text-black font-extrabold text-sm uppercase tracking-widest rounded-[1.25rem] hover:bg-gray-100 transition-all active:scale-95 shadow-2xl shadow-white/5"
              >
                Call Now
              </a>
              <button 
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-extrabold text-sm uppercase tracking-widest rounded-[1.25rem] hover:bg-white/5 hover:border-white/40 transition-all active:scale-95"
              >
                View Work
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <main id="work" className="px-6 md:px-12 lg:px-24 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-baseline gap-4 md:gap-8">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Selected Work</h2>
            <div className="h-[2px] flex-1 bg-white/5 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {PORTFOLIO_DATA.map((category) => (
              <PortfolioCard
                key={category.type}
                category={category}
              />
            ))}
          </div>
        </div>
      </main>

{/* Cinematic Footer */}
<footer className="relative bg-[#050505] px-6 pt-32 pb-20 overflow-hidden">

  {/* Massive ghost text */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <h1 className="text-[18vw] font-black tracking-tight text-white/[0.025] select-none">
      MEENITIN
    </h1>
  </div>

  <div className="relative max-w-7xl mx-auto flex flex-col gap-24">

    {/* Top section */}
    <div className="flex flex-col md:flex-row justify-between gap-20">

      {/* Left: statement */}
      <div className="max-w-xl">
        <p className="text-white text-2xl md:text-3xl font-medium leading-tight">
          I design and build visuals
          <span className="block text-gray-500 mt-3">
            that don’t beg for attention —
            they earn it.
          </span>
        </p>
      </div>

      {/* Right: contact + links */}
      <div className="flex flex-col gap-10">

        {/* Highlighted contact */}
        <div className="flex flex-col gap-4">
          <a
            href="mailto:heynitin01@gmail.com"
            className="text-white text-lg font-semibold tracking-wide hover:opacity-80 transition"
          >
            heynitin01@gmail.com
          </a>

          <a
            href="tel:+918287484910"
            className="text-white text-lg font-semibold tracking-wide hover:opacity-80 transition"
          >
            +91&nbsp;82874&nbsp;84910
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-6 text-gray-400 text-sm font-medium uppercase tracking-widest">
          {[
            {
              label: "Instagram",
              href: "https://www.instagram.com/meenitin",
            },
            { label: "YouTube", href: "https://www.youtube.com/@mrnit3" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 hover:text-white transition-colors duration-300"
            >
              <span className="h-px w-8 bg-white/20 group-hover:w-14 transition-all duration-300" />
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-10 text-gray-500 text-[11px] uppercase tracking-[0.4em]">
      <span>© {new Date().getFullYear()} Meenitin</span>
      <span className="opacity-60">Designed & Built with Intent</span>
    </div>
  </div>
</footer>



    </div>
  );
};

export default App;

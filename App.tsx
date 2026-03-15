import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from './constants';
import StickyCallButton from './components/StickyCallButton';
import PortfolioCard from './components/PortfolioCard';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] selection:bg-blue-500/20 selection:text-white overflow-x-hidden">

      {/* Cursor glow that follows mouse */}
      <div
        className="fixed pointer-events-none z-0 transition-transform duration-75"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <StickyCallButton />

      {/* ─── NAVBAR ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#030303]/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between">
          <span className="text-white font-black text-lg tracking-tighter">
            mee<span className="text-blue-500">nitin</span>
          </span>
          <div className="flex items-center gap-6">
            {/* Mail icon → opens Gmail */}
            <a
              href="mailto:heynitin01@gmail.com"
              title="heynitin01@gmail.com"
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-xs uppercase tracking-widest hidden md:block">Mail</span>
            </a>

            <a
              href="tel:+918287484910"
              className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Call
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <header ref={heroRef} className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden">

        {/* Background noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }} />

        {/* Ambient orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

        {/* Horizontal rule lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-white/[0.03]" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-white/[0.03]" />
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/[0.025]" />

        {/* Big ghost number */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.015] select-none leading-none pointer-events-none">
          01
        </div>

        <div className="max-w-7xl mx-auto w-full pt-24 pb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24">

            {/* LEFT — Profile */}
            <div className="relative flex-shrink-0 group">
              {/* Rotating border animation */}
              <div className="absolute -inset-1 rounded-full animate-spin-slow pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0deg, rgba(59,130,246,0.5) 60deg, transparent 120deg)',
                  animationDuration: '8s',
                }}
              />
              <div className="absolute -inset-[3px] rounded-full bg-[#030303]" />
              <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/10"
                style={{ boxShadow: '0 0 60px rgba(59,130,246,0.15), inset 0 0 40px rgba(0,0,0,0.4)' }}>
                <img
                  src="/nitin.jpeg"
                  alt="Nitin"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 brightness-[1.05] group-hover:brightness-110 transition-all duration-1000"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/40 via-transparent to-transparent" />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f0f0f] border border-white/10 shadow-xl whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">Available for work</span>
              </div>
            </div>

            {/* RIGHT — Bio */}
            <div className="flex-1 space-y-8">
              {/* Skill pills */}
              <div className="flex flex-wrap gap-3">
                {['Video Editor', 'Graphic Designer', 'Visual Storyteller'].map((skill) => (
                  <span key={skill} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Name */}
              <div>
                <h1 className="text-[clamp(5rem,14vw,11rem)] font-black tracking-tighter leading-[0.9] text-white">
                  Nitin<span className="text-blue-500">.</span>
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-lg">
                Crafting premium visual stories through{' '}
                <span className="text-white font-semibold">expert video editing</span>{' '}
                and <span className="text-white font-semibold">bold graphic design</span>.
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-8 py-4 border-y border-white/5">
                {[
                  { num: '50+', label: 'Projects' },
                  { num: '3+', label: 'Years exp.' },
                  { num: '100%', label: 'Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black text-white">{stat.num}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+918287484910"
                  className="group flex items-center gap-3 px-8 py-3.5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-2xl shadow-white/10"
                >
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href="mailto:heynitin01@gmail.com"
                  className="group flex items-center gap-3 px-8 py-3.5 bg-transparent border border-white/15 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/5 hover:border-white/30 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Email Me
                </a>
                <button
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3.5 bg-transparent border border-white/8 text-gray-400 font-black text-xs uppercase tracking-widest rounded-2xl hover:text-white hover:border-white/20 active:scale-95 transition-all duration-200"
                >
                  View Work ↓
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white animate-pulse" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-white">Scroll</span>
        </div>
      </header>

      {/* ─── SELECTED WORK ─── */}
      <main id="work" className="relative px-6 md:px-12 lg:px-24 py-32">
        {/* Section background accent */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.04), transparent)' }} />

        <div className="max-w-7xl mx-auto relative">
          {/* Section header */}
          <div className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-[0.3em] mb-3">Portfolio</p>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                Selected<br />Work<span className="text-blue-500">.</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed">
              A curated showcase of video edits and graphic design work crafted for clients and personal projects.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PORTFOLIO_DATA.map((category, idx) => (
              <div key={category.type} className="group relative">
                {/* Card glow on hover */}
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.1))' }} />
                <PortfolioCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ─── SERVICES STRIP ─── */}
      <section className="border-y border-white/5 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {[
            {
              icon: (
                <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              ),
              title: 'Video Editing',
              desc: 'Cinematic cuts, colour grading, motion graphics & reels for YouTube, Instagram & brand campaigns.',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              ),
              title: 'Graphic Design',
              desc: 'Logos, brand identities, thumbnails, social media kits — pixel-perfect visual systems built to impress.',
            },
            {
              icon: (
                <svg className="w-7 h-7 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              ),
              title: 'Content Strategy',
              desc: 'Cohesive visual language across all platforms that builds recognition and grows your audience.',
            },
          ].map((svc) => (
            <div key={svc.title} className="group flex gap-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center group-hover:border-white/15 transition-colors duration-300">
                {svc.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1.5">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="relative px-6 md:px-12 lg:px-24 py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(59,130,246,0.07), transparent)' }} />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-[10px] text-blue-500 font-bold uppercase tracking-[0.3em] mb-6">Let's create</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
            Got a project in mind?
          </h2>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed">
            Whether it's a short film, a brand revamp, or a killer YouTube intro — let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918287484910"
              className="px-10 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-gray-100 active:scale-95 transition-all shadow-2xl shadow-white/10"
            >
              Call +91 82874 84910
            </a>
            <a
              href="mailto:heynitin01@gmail.com"
              className="px-10 py-4 border border-white/15 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/5 hover:border-white/30 active:scale-95 transition-all"
            >
              heynitin01@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative border-t border-white/5 px-6 md:px-12 lg:px-24 pt-20 pb-12 overflow-hidden">
        {/* Ghost text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h1 className="text-[15vw] font-black tracking-tighter text-white/[0.015] select-none whitespace-nowrap">
            MEENITIN
          </h1>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
            {/* Brand */}
            <div>
              <div className="text-white font-black text-3xl tracking-tighter mb-4">
                mee<span className="text-blue-500">nitin</span><span className="text-blue-500">.</span>
              </div>
              <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
                Visuals built with intent.
                <br />Not just to look good — to work.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-20">
              <div>
                <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em] mb-5">Contact</p>
                <div className="flex flex-col gap-3">
                  <a href="mailto:heynitin01@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors group flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    heynitin01@gmail.com
                  </a>
                  <a href="tel:+918287484910" className="text-gray-400 text-sm hover:text-white transition-colors group flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    +91 82874 84910
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em] mb-5">Follow</p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/meenitin' },
                    { label: 'YouTube', href: 'https://www.youtube.com/@mrnit3' },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-blue-500 transition-all duration-300 overflow-hidden" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 text-gray-600 text-[10px] uppercase tracking-[0.3em]">
            <span>© {new Date().getFullYear()} Meenitin — All rights reserved</span>
            <span>Designed & Built with Intent</span>
          </div>
        </div>
      </footer>

      {/* Spin animation for profile ring */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;

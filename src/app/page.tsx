import React from 'react';

export default function PortfolioPage() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen font-sans">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-900 font-bold flex items-center justify-center">TO</div>
          <div>
            <h1 className="font-bold text-lg leading-none">Tobias Obura</h1>
            <p className="text-xs text-amber-400">EDUCATION LEADER</p>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-amber-400">About</a>
          <a href="#subjects" className="hover:text-amber-400">Subjects</a>
          <a href="#dashboard" className="hover:text-amber-400">Dashboard</a>
          <a href="#services" className="hover:text-amber-400">Services</a>
          <a href="#systems" className="hover:text-amber-400">Systems & Innovation</a>
          <a href="#contact" className="hover:text-amber-400">Contact</a>
        </div>
        <a href="https://wa.me/254781276173" className="bg-amber-500 text-slate-900 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-amber-400">
          Get in Touch
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-slate-800 text-amber-400 text-xs px-3 py-1 rounded-full mb-4">
            Education Leader & EdTech Strategist • Nairobi
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Empowering <span className="text-amber-400">Educators.</span><br />
            Transforming <span className="text-amber-400">Lives.</span>
          </h2>
          <p className="text-slate-400 text-base mb-6">
            Deputy Principal (Academics) & Head of Cambridge Section at Consolata School. Founder of NextGen Learners Hub.
            Building future-ready, learner-centred educational ecosystems.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-md">Economics (0455)</span>
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-md">Business Studies (0450)</span>
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-md">IGCSE / CBC / JSS</span>
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-md">AECS Systems Architect</span>
          </div>
          <div className="flex gap-4">
            <a href="#contact" className="bg-amber-500 text-slate-900 font-semibold px-6 py-3 rounded-lg text-sm">Book Consultation</a>
            <a href="#services" className="border border-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-lg text-sm hover:bg-slate-800">Explore Systems</a>
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-slate-900/60 p-4 rounded-xl">
              <p className="text-3xl font-bold text-amber-400">122</p>
              <p className="text-xs text-slate-400 mt-1">Cambridge Learners</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl">
              <p className="text-3xl font-bold text-amber-400">95%</p>
              <p className="text-xs text-slate-400 mt-1">Fee Recovery Rate</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl">
              <p className="text-3xl font-bold text-amber-400">4,150+</p>
              <p className="text-xs text-slate-400 mt-1">GlassBox Logs</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl">
              <p className="text-3xl font-bold text-amber-400">100%</p>
              <p className="text-xs text-slate-400 mt-1">Digital AECS Clearance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems & Innovations Section */}
      <section id="systems" className="px-8 py-16 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-2 text-amber-400">Institutional Systems & Architectural Projects</h3>
          <p className="text-slate-400 text-sm mb-8">Custom Google Workspace & Web App deployments engineered for Consolata School and regional platforms.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* AECS System */}
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <div className="text-amber-400 font-semibold text-xs mb-2">PROPOSAL & SANDBOX ACTIVE</div>
              <h4 className="text-lg font-bold text-white mb-2">Automated Exit Clearance System (AECS)</h4>
              <p className="text-slate-400 text-xs mb-4">
                100% paperless 6-stage sequential workflow (Class Teacher ➔ Labs ➔ Sports ➔ Library ➔ Accounts ➔ Head of Section) with automated letterhead PDF certificate generation.
              </p>
              <a href="https://docs.google.com/document/d/1y0PSWrZ1Hegx5d2UGLDhzmPItfrY2gBUydi21VbMONw/edit" className="text-amber-400 text-xs font-semibold hover:underline">
                View Proposal Doc →
              </a>
            </div>

            {/* GlassBox System */}
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <div className="text-amber-400 font-semibold text-xs mb-2">AWARD-WINNING SYSTEM</div>
              <h4 className="text-lg font-bold text-white mb-2">GlassBox Behaviour Engineering</h4>
              <p className="text-slate-400 text-xs mb-4">
                Two-tier governance model tracking 42,000+ Poa points across 94 teachers. Core driver for Great Place to School Leadership Innovation Award 2026.
              </p>
              <span className="text-slate-400 text-xs">4.34 Positive Ratio</span>
            </div>

            {/* Speed Stacking Kenya */}
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <div className="text-amber-400 font-semibold text-xs mb-2">PE & COGNITIVE PLATFORM</div>
              <h4 className="text-lg font-bold text-white mb-2">Speed Stacking Kenya</h4>
              <p className="text-slate-400 text-xs mb-4">
                Vercel-deployed web infrastructure coordinating sport stacking, bilateral motor skills, and timing leaderboards for East African schools.
              </p>
              <a href="https://speed-stacking-kenya.vercel.app" className="text-amber-400 text-xs font-semibold hover:underline">
                Visit Platform →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © 2026 Tobias Obura. Deputy Principal & Head of Cambridge Section, Consolata School. All rights reserved.
      </footer>
    </div>
  );
}

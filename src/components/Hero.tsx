import React from 'react';
import { GraduationCap, Mail, Terminal, Sparkles, ChevronRight, BookOpen, Cpu, Award } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-teal-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Top Nav */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="bg-teal-500/10 p-2 rounded-xl border border-teal-500/20">
            <GraduationCap className="w-6 h-6 text-teal-400" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">Tobias Otieno Obura</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-slate-300 font-medium">
          <a href="#leadership" className="hover:text-teal-400 transition">Leadership</a>
          <a href="#experience" className="hover:text-teal-400 transition">Experience</a>
          <a href="#edtech" className="hover:text-teal-400 transition">EdTech Systems</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
        </div>
      </nav>

      {/* Main Hero Banner */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-950/80 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
            <span>Deputy Principal & Head of Cambridge Section</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Bridging Academic Excellence & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">EdTech Innovation</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Educational Leader, Cambridge Curriculum Specialist, and Founder of <strong className="text-teal-300">NextGen Learners Hub</strong> based in Nairobi, Kenya[cite: 1]. Specializing in Cambridge section scaling, automated score portals, and institutional governance[cite: 1].
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg shadow-teal-500/20 transition transform hover:-translate-y-0.5">
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
            <a href="#edtech" className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-xl flex items-center gap-2 transition">
              <Terminal className="w-4 h-4 text-teal-400" /> View Systems Architecture
            </a>
          </div>
        </div>

        {/* Hero Card */}
        <div className="md:col-span-5 bg-slate-800/50 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 space-y-5 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Executive Snapshot</h3>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
              <BookOpen className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Consolata School, Nairobi</p>
                <p className="text-xs text-slate-400">Deputy Principal & Head of Cambridge Section[cite: 1]</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
              <Cpu className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">NextGen Learners Hub</p>
                <p className="text-xs text-slate-400">Founder & CEO — IGCSE Digital Architecture[cite: 1]</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
              <Award className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Cambridge Curriculum Lead</p>
                <p className="text-xs text-slate-400">IGCSE Economics (0455) & Business Studies (0450)[cite: 1]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

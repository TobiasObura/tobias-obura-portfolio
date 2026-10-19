import React from 'react';
import { GraduationCap, Mail, Terminal, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-20 text-center md:text-left grid md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-2 space-y-6">
        <div className="inline-flex items-center gap-2 bg-teal-950/60 border border-teal-500/30 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Deputy Principal & Head of Cambridge Section
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Transforming Education Through Leadership & Systems Engineering
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Educational Leader, Cambridge Curriculum Specialist, and Founder of <strong className="text-teal-300">NextGen Learners Hub</strong> based in Nairobi, Kenya[cite: 1]. Pioneering digital transformation in school governance, teacher coaching, and automated assessment architectures[cite: 1].
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#contact" className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition">
            <Mail className="w-4 h-4" /> Get in Touch
          </a>
          <a href="#edtech" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg flex items-center gap-2 transition">
            <Terminal className="w-4 h-4" /> Explore Systems
          </a>
        </div>
      </div>

      <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4 shadow-xl">
        <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">Core Leadership Roles</h3>
        <ul className="space-y-3 text-sm text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-teal-400">✓</span>
            <span><strong>Deputy Principal & Head of Cambridge:</strong> Consolata School[cite: 1]</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400">✓</span>
            <span><strong>Founder & CEO:</strong> NextGen Learners Hub[cite: 1]</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400">✓</span>
            <span><strong>Secretary General:</strong> Amboo Professionals Group[cite: 1]</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400">✓</span>
            <span><strong>IGCSE Specialist:</strong> Economics (0455) & Business Studies (0450)[cite: 1]</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

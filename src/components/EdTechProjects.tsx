import React from 'react';
import { Terminal, BarChart3, Globe, Award } from 'lucide-react';

export default function EdTechProjects() {
  return (
    <section id="edtech" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Systems & Innovations</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-teal-400 font-bold">
            <Terminal className="w-5 h-5" /> Consolata Subject Selection Web App
          </div>
          <p className="text-sm text-slate-300">
            Custom Google Apps Script application enabling Grade 9 students and parents to seamlessly review, select, and register career pathways and Grade 10 subject combinations[cite: 1].
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-teal-400 font-bold">
            <BarChart3 className="w-5 h-5" /> Teacher Marklist & Assessment Portal
          </div>
          <p className="text-sm text-slate-300">
            Automated score entry system connecting web forms directly into Google Sheets marklists, accelerating exam result processing and diagnostic tracking[cite: 1].
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-teal-400 font-bold">
            <Globe className="w-5 h-5" /> Pamoja Pay Financial Tracker
          </div>
          <p className="text-sm text-slate-300">
            Digital contribution management workflow using Google Workspace integrations designed for community groups and project transparency[cite: 1].
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-teal-400 font-bold">
            <Award className="w-5 h-5" /> GreenFlames Bioethanol Strategy
          </div>
          <p className="text-sm text-slate-300">
            Corporate profile, bioethanol refilling pitch deck, and operational model developed for Horse Power Ventures' clean energy initiatives[cite: 1].
          </p>
        </div>
      </div>
    </section>
  );
}

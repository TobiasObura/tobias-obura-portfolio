import React from 'react';
import { GraduationCap, Code, Users } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Pillars of Expertise</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-800/60 border border-slate-700 p-8 rounded-2xl space-y-4">
          <GraduationCap className="w-8 h-8 text-teal-400" />
          <h3 className="text-xl font-bold text-white">Cambridge Leadership</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Successfully launched and expanded Cambridge Lower Secondary and IGCSE programs[cite: 1]. Specializing in curriculum mapping, timetabling, subject option selection, and parental engagement[cite: 1].
          </p>
        </div>

        <div className="bg-slate-800/60 border border-slate-700 p-8 rounded-2xl space-y-4">
          <Code className="w-8 h-8 text-teal-400" />
          <h3 className="text-xl font-bold text-white">EdTech Systems Architecture</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Engineered web applications utilizing Google Apps Script, Claude Code, Vercel, and NextGen Learners Hub[cite: 1]. Streamlining marklists, score entries, parental consent, and student exit clearances[cite: 1].
          </p>
        </div>

        <div className="bg-slate-800/60 border border-slate-700 p-8 rounded-2xl space-y-4">
          <Users className="w-8 h-8 text-teal-400" />
          <h3 className="text-xl font-bold text-white">Pedagogical Development</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Facilitator for high-impact teacher professional development incorporating techniques like <em>Cold Call</em>, <em>Right is Right</em>, and <em>Turn and Talk</em>[cite: 1]. Keynote speaker at Tufunzeni Teacher Summits[cite: 1].
          </p>
        </div>
      </div>
    </section>
  );
}

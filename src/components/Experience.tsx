import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Leadership Experience</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="bg-slate-800/40 border border-slate-700/80 rounded-2xl p-8 space-y-4">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <div>
              <h3 className="text-xl font-bold text-white">Deputy Principal & Head of Cambridge Section</h3>
              <p className="text-teal-400 font-medium">Consolata School — Nairobi, Kenya[cite: 1]</p>
            </div>
            <span className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full font-mono">Sep 2025 – Present[cite: 1]</span>
          </div>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
            <li>Mapped out and executed the initial launch of Cambridge Lower Secondary and IGCSE cohorts (Years 7, 8, and 10)[cite: 1].</li>
            <li>Engineered custom Web Apps for Grade 9 pathway options, teacher bulk mark entries, and parental consent forms[cite: 1].</li>
            <li>Coordinated virtual candidate screening, scoring matrices, and recruitment workflows for international teaching staff[cite: 1].</li>
            <li>Led school initiatives resulting in recognition across Moral & Innovative Leadership and Global Competence at the 6th Edition Great Places to School Competition[cite: 1].</li>
          </ul>
        </div>

        <div className="bg-slate-800/40 border border-slate-700/80 rounded-2xl p-8 space-y-4">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <div>
              <h3 className="text-xl font-bold text-white">Founder & Chief Executive Officer</h3>
              <p className="text-teal-400 font-medium">NextGen Learners Hub[cite: 1]</p>
            </div>
            <span className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full font-mono">Apr 2025 – Present[cite: 1]</span>
          </div>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
            <li>Engineered digital learning architectures and self-paced courses for Cambridge IGCSE subjects[cite: 1].</li>
            <li>Deployed <strong>Pathway Compass</strong>, a decision guidance platform for Grade 9 students selecting career tracks[cite: 1].</li>
            <li>Authored Phase I grant proposal for the international TOOLS Competition targeting learning engineering scalability[cite: 1].</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

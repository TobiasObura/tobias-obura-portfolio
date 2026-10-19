import React from 'react';

export default function Metrics() {
  return (
    <section className="bg-slate-800/40 border-y border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-extrabold text-teal-400">Years 7–11</div>
          <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Cambridge Programme Framework[cite: 1]</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-teal-400">0455 / 0450</div>
          <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">IGCSE Econ & Business Mastered[cite: 1]</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-teal-400">10+ Apps</div>
          <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Google Apps Script Web Platforms[cite: 1]</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-teal-400">Top 3</div>
          <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Great Places to School Awards[cite: 1]</div>
        </div>
      </div>
    </section>
  );
}

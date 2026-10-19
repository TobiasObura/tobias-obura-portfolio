import React from 'react';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import Leadership from '@/components/Leadership';
import Experience from '@/components/Experience';
import EdTechProjects from '@/components/EdTechProjects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <Hero />
      <Metrics />
      <Leadership />
      <Experience />
      <EdTechProjects />
      <Contact />
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Tobias Otieno Obura. All rights reserved.</p>
      </footer>
    </main>
  );
}

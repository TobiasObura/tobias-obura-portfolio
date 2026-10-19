import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
      <p className="text-slate-300 max-w-xl mx-auto mb-8">
        Open to educational leadership collaborations, Cambridge curriculum consultations, and EdTech partnerships.
      </p>
      <div className="flex justify-center gap-6">
        <a href="mailto:tobias@example.com" className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition">
          <Mail className="w-4 h-4" /> Send Email
        </a>
      </div>
    </section>
  );
}

import React from 'react';

export default function FullPortfolioPage() {
  return (
    <div className="bg-[#0b1329] text-slate-100 min-h-screen font-sans">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0b1329]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-lg">TO</div>
          <div>
            <h1 className="font-bold text-slate-100 text-base leading-none">Tobias Obura</h1>
            <p className="text-[11px] text-amber-400 font-medium tracking-wide">EDUCATION LEADER</p>
          </div>
        </div>
        <div className="hidden lg:flex gap-6 text-xs text-slate-300 font-medium">
          <a href="#about" className="hover:text-amber-400">About</a>
          <a href="#leadership" className="hover:text-amber-400">Leadership Philosophy</a>
          <a href="#subjects" className="hover:text-amber-400">Teaching Subjects</a>
          <a href="#portal" className="hover:text-amber-400">Student Portal</a>
          <a href="#systems" className="hover:text-amber-400">Systems & AECS</a>
          <a href="#services" className="hover:text-amber-400">Services</a>
          <a href="#pricing" className="hover:text-amber-400">Pricing</a>
          <a href="#faq" className="hover:text-amber-400">FAQ</a>
        </div>
        <div className="flex gap-3">
          <a href="tel:+254781276173" className="hidden sm:inline-flex items-center border border-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs hover:bg-slate-800">
            📞 Call
          </a>
          <a href="https://wa.me/254781276173" className="bg-amber-500 text-slate-950 font-semibold px-4 py-1.5 rounded-lg text-xs hover:bg-amber-400">
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 bg-slate-800/80 text-amber-400 text-xs px-3 py-1.5 rounded-full border border-slate-700 mb-6">
            🌐 Education Leader & EdTech Strategist • Nairobi, Kenya
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 leading-tight mb-6">
            Empowering <span className="text-amber-400">Educators.</span><br />
            Transforming <span className="text-amber-400">Lives.</span>
          </h1>
          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-2xl">
            Award-winning Deputy Principal (Academics) & Head of Cambridge Section at Consolata School. Founder & CEO of NextGen Learners Hub. Delivering expert online tuition in <strong className="text-amber-400">Economics, Business Studies & Geography</strong> while architecting enterprise school management systems.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold px-3 py-1 rounded-md">Economics (0455)</span>
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold px-3 py-1 rounded-md">Business Studies (0450)</span>
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold px-3 py-1 rounded-md">Geography</span>
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-md">IGCSE / CBC / JSS</span>
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-md">EdTech Architect</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/254781276173" className="bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm hover:bg-amber-400 transition">
              📅 Book Consultation
            </a>
            <a href="#services" className="border border-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-slate-800 transition">
              Explore Services →
            </a>
          </div>
        </div>

        {/* Hero Card & Quick Metrics */}
        <div className="lg:col-span-5 bg-slate-900/90 p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-28 h-28 mx-auto mb-4 relative rounded-2xl overflow-hidden border-2 border-amber-500 shadow-xl">
              <img src="/profile.jpg" alt="Tobias Obura - Education Leader" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">Tobias Obura</h3>
            <p className="text-xs text-amber-400">Education Leader & EdTech Strategist</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
              <p className="text-3xl font-extrabold text-amber-400">122</p>
              <p className="text-[11px] text-slate-400 mt-1">Cambridge Learners</p>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
              <p className="text-3xl font-extrabold text-amber-400">95%</p>
              <p className="text-[11px] text-slate-400 mt-1">Fee Recovery Rate</p>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
              <p className="text-3xl font-extrabold text-amber-400">4,150+</p>
              <p className="text-[11px] text-slate-400 mt-1">GlassBox Observations</p>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
              <p className="text-3xl font-extrabold text-amber-400">100%</p>
              <p className="text-[11px] text-slate-400 mt-1">Digital AECS Clearance</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-slate-900/40 border-t border-slate-800 max-w-7xl mx-auto rounded-3xl my-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 bg-slate-800 p-8 rounded-3xl border border-slate-700">
            <div className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold px-3 py-1 rounded-full w-max mb-4">
              About Tobias Obura
            </div>
            <h3 className="text-2xl font-bold mb-4">Building Future-Ready Educational Ecosystems</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Tobias Obura is an accomplished education leader, curriculum designer, EdTech strategist, and online tutor with a strong track record in building future-ready, learner-centred educational ecosystems. Serving as Deputy Principal (Academics) & Head of Cambridge at Consolata School, he blends strategic vision with hands-on technical execution.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-300">
              <div>✔ Economics, Business & Geography</div>
              <div>✔ School Leadership & Governance</div>
              <div>✔ Curriculum & Instructional Design</div>
              <div>✔ EdTech Integration & AI in Education</div>
              <div>✔ Google Workspace Systems</div>
              <div>✔ Founding Member - Tufunzeni.org</div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
              <p className="text-2xl font-bold text-amber-400">1000+</p>
              <p className="text-xs text-slate-400">Educators Trained Across Kenya</p>
            </div>
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
              <p className="text-2xl font-bold text-amber-400">10+ Years</p>
              <p className="text-xs text-slate-400">Leadership & Teaching Excellence</p>
            </div>
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
              <p className="text-2xl font-bold text-amber-400">3 Core Subjects</p>
              <p className="text-xs text-slate-400">Economics, Business Studies & Geography</p>
            </div>
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
              <p className="text-2xl font-bold text-amber-400">100% Online</p>
              <p className="text-xs text-slate-400">Tuition & Self-Paced Learning</p>
            </div>
            <div className="sm:col-span-2 bg-amber-500/10 border border-amber-500/20 p-6 rounded-2xl text-amber-300 text-sm italic">
              "Technology isn't replacing teachers—it's empowering them. By embracing AI in education, we create more meaningful learning experiences."
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Systems & Proposal Updates */}
      <section id="systems" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold px-3 py-1 rounded-full">
            Institutional Systems Architecture
          </span>
          <h2 className="text-3xl font-bold mt-3 text-slate-100">Live Systems & Leadership Proposals</h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">Custom digital management systems engineered for Consolata School and regional EdTech initiatives.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* AECS Clearance System */}
          <div className="bg-slate-900/90 p-8 rounded-3xl border border-amber-500/40 relative shadow-xl">
            <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
              New Proposal & Sandbox
            </span>
            <h3 className="text-xl font-bold text-amber-400 mb-2">Automated Exit Clearance System (AECS)</h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              A 100% paperless clearance infrastructure replacing manual physical forms. Auto-routes through a 6-stage sequential pipeline: <em>Class Teacher ➔ Labs ➔ Sports/PE ➔ Library ➔ Accounts ➔ Section Head</em>.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 mb-6">
              <li>• Parent Portal with Student Adm No lookup</li>
              <li>• Auto-generated signed PDF letterhead certificates</li>
              <li>• Automatic LMS roster removal & Principal alerts</li>
              <li>• Sandbox Test Adm No: <strong>CC9999</strong></li>
            </ul>
            <a href="https://docs.google.com/document/d/1y0PSWrZ1Hegx5d2UGLDhzmPItfrY2gBUydi21VbMONw/edit" className="inline-block bg-amber-500 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl hover:bg-amber-400 transition">
              Read Proposal Briefing →
            </a>
          </div>

          {/* GlassBox Behaviour Engineering */}
          <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-800 shadow-xl">
            <span className="bg-slate-800 text-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
              Award Winner 2026
            </span>
            <h3 className="text-xl font-bold text-slate-100 mt-3 mb-2">GlassBox Behaviour Engineering</h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              Two-tier data governance model for 200+ contributors across 7 school sections. Directly maps student actions to Consolata Values, CBE Competencies, and Cambridge Learner Attributes.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 mb-6">
              <li>• <strong>94 Active Teachers</strong> submitting real-time logs</li>
              <li>• <strong>4,152 Total Observations</strong> logged</li>
              <li>• <strong>42,198 Poa Points</strong> awarded (4.34 Positive Ratio)</li>
              <li>• Great Place to School Leadership Innovation Award Lead</li>
            </ul>
          </div>

          {/* Speed Stacking Kenya */}
          <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-800 shadow-xl">
            <span className="bg-slate-800 text-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
              PE & Cognitive App
            </span>
            <h3 className="text-xl font-bold text-slate-100 mt-3 mb-2">Speed Stacking Kenya Platform</h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              Web application deployed on Vercel to coordinate sport stacking across East African schools, fostering bilateral motor coordination, quickness, and focus.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 mb-6">
              <li>• WSSA-aligned motor-cognitive modules</li>
              <li>• Digital timing leaderboards & school registration</li>
              <li>• Vercel serverless architecture</li>
            </ul>
            <a href="https://speed-stacking-kenya.vercel.app" className="inline-block border border-slate-700 text-amber-400 text-xs font-bold px-4 py-2 rounded-xl hover:bg-slate-800 transition">
              Visit Live App →
            </a>
          </div>
        </div>
      </section>

      {/* Teaching Subjects */}
      <section id="subjects" className="px-6 py-20 bg-slate-900/30 border-t border-slate-800 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold px-3 py-1 rounded-full">Teaching Subjects</span>
          <h2 className="text-3xl font-bold text-slate-100 mt-3">Expert Tuition in Key Subjects</h2>
          <p className="text-slate-400 text-sm mt-2">Specialized online tutoring aligned with Cambridge IGCSE, CBC, and JSS curricula.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center font-bold text-lg mb-4">📊</div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Economics (0455)</h3>
            <p className="text-slate-300 text-xs mb-4">Master economic principles, market dynamics, and global financial systems.</p>
            <ul className="text-xs text-slate-400 space-y-1 mb-6">
              <li>• Microeconomics & Macroeconomics</li>
              <li>• Market Structures & Competition</li>
              <li>• International Trade & Development</li>
              <li>• Monetary & Fiscal Policy</li>
            </ul>
            <a href="https://wa.me/254781276173?text=Enquire%20Economics" className="block text-center bg-slate-700 hover:bg-amber-500 hover:text-slate-950 font-bold py-2 rounded-xl text-xs transition">Enroll Now →</a>
          </div>

          <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center font-bold text-lg mb-4">💼</div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Business Studies (0450)</h3>
            <p className="text-slate-300 text-xs mb-4">Develop essential business acumen and entrepreneurial skills for the modern world.</p>
            <ul className="text-xs text-slate-400 space-y-1 mb-6">
              <li>• Business Organization & Management</li>
              <li>• Marketing & Human Resources</li>
              <li>• Finance & Accounting Basics</li>
              <li>• Operations & Strategy</li>
            </ul>
            <a href="https://wa.me/254781276173?text=Enquire%20Business" className="block text-center bg-slate-700 hover:bg-amber-500 hover:text-slate-950 font-bold py-2 rounded-xl text-xs transition">Enroll Now →</a>
          </div>

          <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700">
            <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center font-bold text-lg mb-4">🌍</div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Geography</h3>
            <p className="text-slate-300 text-xs mb-4">Explore physical and human geography with a focus on environmental awareness.</p>
            <ul className="text-xs text-slate-400 space-y-1 mb-6">
              <li>• Physical Geography & Landforms</li>
              <li>• Human Geography & Population</li>
              <li>• Environmental Management</li>
              <li>• GIS & Modern Mapping</li>
            </ul>
            <a href="https://wa.me/254781276173?text=Enquire%20Geography" className="block text-center bg-slate-700 hover:bg-amber-500 hover:text-slate-950 font-bold py-2 rounded-xl text-xs transition">Enroll Now →</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold px-3 py-1 rounded-full">Services</span>
          <h2 className="text-3xl font-bold text-slate-100 mt-3">Comprehensive Education Solutions</h2>
          <p className="text-slate-400 text-sm mt-2">Specialized consulting for educational transformation, school leadership, and EdTech integration.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-slate-100 mb-2">Curriculum Design</h4>
            <p className="text-xs text-slate-400 mb-4">Expert curriculum development for Cambridge IGCSE, CBC, and JSS frameworks.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-slate-100 mb-2">EdTech Strategy</h4>
            <p className="text-xs text-slate-400 mb-4">Digital transformation consulting to modernize school operations and LMS tools.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-slate-100 mb-2">School Leadership</h4>
            <p className="text-xs text-slate-400 mb-4">Strategic guidance for educational institutions to improve performance and fee collection.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-slate-100 mb-2">NextGen Learners Hub</h4>
            <p className="text-xs text-slate-400 mb-4">Virtual learning platform offering Cambridge-aligned self-paced courses and Socratic AI (Nex).</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-slate-100 mb-2">Agile Data Analytics</h4>
            <p className="text-xs text-slate-400 mb-4">Cost-effective digital solutions helping schools make data-driven decisions with dynamic dashboards.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-slate-100 mb-2">Google Workspace Integration</h4>
            <p className="text-xs text-slate-400 mb-4">Complete Google Workspace for Education migrations, App Script web apps, and staff training.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-800 text-center text-xs text-slate-500 bg-slate-950">
        <p className="text-slate-300 font-bold mb-2">Tobias Obura — Education Leader, Curriculum Designer & EdTech Strategist</p>
        <p className="mb-4">Consolata School (Nairobi) • NextGen Learners Hub • Tufunzeni.org</p>
        <p>© 2026 Tobias Obura. All rights reserved.</p>
      </footer>
    </div>
  );
}

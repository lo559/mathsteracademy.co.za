/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Award, Calculator, Flame, Map, Heart, PieChart, Users, AlertCircle, Compass } from 'lucide-react';

export const SyllabusExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'senior' | 'fet'>('fet');

  const seniorSubjects = [
    {
      name: 'Mathematics',
      icon: Calculator,
      isPrivateOnly: true,
      desc: 'Focused one-on-one sessions to fill core mathematical gaps, build numeric fluency, and prepare learners for high school algebra.',
      topics: ['Fractions & Decimals', 'Integers & Exponents', 'Algebraic Expressions', 'Simple Euclidean Geometry', 'BODMAS & Operational Order'],
      gradesText: 'Grades 4–8'
    },
    {
      name: 'Natural Sciences',
      icon: Flame,
      desc: 'Building scientific inquiry. Covers physics, chemistry, biology, and earth sciences designed for school tests.',
      topics: ['Matter & Materials', 'Life & Living Systems', 'Energy & Change', 'Planet Earth & Beyond', 'Scientific Method'],
      gradesText: 'Grades 4–8'
    },
  ];

  const fetSubjects = [
    {
      name: 'Mathematics',
      icon: Calculator,
      desc: 'Comprehensive algebraic modeling, euclidean proofs, and core calculus designed to maximize final National Senior Certificate results.',
      topics: ['Functions & Graphs', 'Euclidean Geometry & Proofs', 'Trigonometry & Identities', 'Differential Calculus', 'Probability & Stats'],
      gradesText: 'Grades 9–12'
    },
    {
      name: 'Maths Literacy',
      icon: Compass,
      desc: 'Developing mathematical skills applied to practical, real-life financial planning, measurements, and contextual data analysis.',
      topics: ['Finance & Taxation', 'Measurement (Area & Volume)', 'Mapwork and Scales', 'Data Handling & Probability', 'Business Interest Plans'],
      gradesText: 'Grades 10–12'
    },
    {
      name: 'Physical Sciences',
      icon: Flame,
      desc: 'In-depth conceptual mastering of physics mechanics, chemical structures, stoichiometry, and electricity formulas.',
      topics: ['Newtonian Mechanics', 'Organic Chemistry', 'Chemical Equilibrium', 'Electrodynamics', 'Rates of Reaction'],
      gradesText: 'Grades 10–12'
    },
    {
      name: 'Geography',
      icon: Map,
      desc: 'Synthesizing climatology, geomorphology, economic activities in SA, and advanced map-work GIS practical computations.',
      topics: ['Climatology & Synoptic Maps', 'Geomorphology & Drainage', 'Population & Rural Settlement', 'GIS & Map Calculations'],
      gradesText: 'Grades 10–12'
    },
    {
      name: 'Life Sciences',
      icon: Heart,
      desc: 'Fostering deep comprehension of biological concepts, genetics, organic reproduction, and human homeostasis.',
      topics: ['DNA & Protein Synthesis', 'Genetics & Inheritance', 'Evolution & Natural Selection', 'Environmental Homeostasis'],
      gradesText: 'Grades 10–12'
    },
    {
      name: 'Accounting',
      icon: PieChart,
      desc: 'Mastery of financial ledger records, balance sheets, reconciliations, income statements, and business audit evaluations.',
      topics: ['Ledger & Trial Balances', 'Year-End Adjustments', 'Balance Sheets & Cash Flow', 'Internal Controls & Auditing'],
      gradesText: 'Grades 10–12'
    },
  ];

  const currentSubjects = activeTab === 'senior' ? seniorSubjects : fetSubjects;

  return (
    <div className="space-y-8 select-none">
      {/* Category Tabs */}
      <div className="flex justify-center">
        <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50 flex w-full max-w-md shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab('senior')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'senior'
                ? 'bg-academy-blue text-white shadow-md'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            Grades 4–8 (Senior Phase)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('fet')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'fet'
                ? 'bg-academy-blue text-white shadow-md'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Book className="w-4 h-4" />
            Grades 9–12 (FET Phase)
          </button>
        </div>
      </div>

      {/* Curriculum Highlight Badge */}
      <div className="bg-gradient-to-r from-academy-blue/5 to-academy-gold/5 border border-academy-blue/10 rounded-2xl p-4 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
        <div className="h-12 w-12 shrink-0 bg-academy-gold/10 text-academy-gold border border-academy-gold/20 rounded-xl flex items-center justify-center font-bold">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <span className="font-sans font-extrabold text-sm text-academy-blue uppercase tracking-wider">CAPS Curriculum Covered</span>
            <span className="px-2 py-0.5 bg-academy-gold text-slate-900 text-[10px] font-bold rounded-full">IEB Support Available</span>
          </div>
          <p className="text-slate-500 text-xs mt-1 leading-relaxed">
            All teaching aligns with the South African National CAPS guidelines. Dedicated IEB exam structure support is available on custom request.
          </p>
        </div>
      </div>

      {/* Subject cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentSubjects.map((sub, index) => {
            const IconComponent = sub.icon;
            return (
              <div
                key={sub.name}
                className="bg-white rounded-3xl border border-slate-200/40 p-6 md:p-7 hover:shadow-xl hover:border-academy-gold/20 group transition-all duration-300 flex flex-col justify-between space-y-5 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-academy-blue group-hover:bg-academy-blue group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      {sub.gradesText}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-heading text-lg font-bold text-slate-800 flex items-center gap-1.5">
                      {sub.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">{sub.desc}</p>
                  </div>

                  {/* Private Badge alert */}
                  {'isPrivateOnly' in sub && sub.isPrivateOnly && (
                    <div className="p-2.5 bg-amber-50/50 border border-amber-200/50 text-amber-800 text-[11px] rounded-xl flex items-start gap-1.5 leading-normal">
                      <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                      <div>
                        <span className="font-semibold text-amber-900">Private Sessions Only</span>
                        <p className="text-slate-500 text-[10px]">Grades 4-8 math is conducted as premium 1-on-1 to accelerate gap repairs.</p>
                      </div>
                    </div>
                  )}

                  {/* Core Topics Checklist */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">Major CAPS Subtopics:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {sub.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#assessment"
                    className="w-full text-center block text-xs bg-slate-50 hover:bg-academy-blue hover:text-white border border-slate-100 font-bold py-2.5 rounded-xl text-slate-700 transition"
                  >
                    Request Academic Review
                  </a>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

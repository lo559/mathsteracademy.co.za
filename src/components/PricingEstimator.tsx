/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, Calendar, ArrowRight, Star, HelpCircle } from 'lucide-react';

export const PricingEstimator: React.FC = () => {
  const [gradeGroup, setGradeGroup] = useState<'primary' | 'senior' | 'matric'>('senior'); // primary: 4-8, senior: 9-10, matric: 11-12
  const [sessionsPerWeek, setSessionsPerWeek] = useState<number>(2);

  // Core pricing matrices mapping
  const getClassroomPriceRange = () => {
    switch (gradeGroup) {
      case 'primary': return { min: 250, max: 320, note: 'R250–R320/month' };
      case 'senior': return { min: 320, max: 400, note: 'R320–R400/month' };
      case 'matric': return { min: 400, max: 470, note: 'R400–R470/month' };
    }
  };

  const getPrivatePriceRange = () => {
    switch (gradeGroup) {
      case 'primary': return { rate: 150, note: 'R150/hour' };
      case 'senior': return { rate: 220, note: 'R220/hour' };
      case 'matric': return { rate: 300, note: 'R300/hour' };
    }
  };

  const classroomPrice = getClassroomPriceRange();
  const privatePrice = getPrivatePriceRange();

  // Inclusions for plans
  const classroomInclusions = [
    'Small classroom circles only (max 10 learners)',
    '1 to 3 organized hours per week at Lofentse Girls High',
    'Full physical workbook and diagnostic reports',
    'Comprehensive exam technique and past papers review',
    'Online supplementary support channels online',
  ];

  const privateInclusions = [
    'Strictly 1-on-1 private attention (highest focus)',
    'Flexible calendar schedules built around school activities',
    'Customized speed of tutoring, bridging fundamental gaps',
    'In-person tutoring and complete online home support links',
    'Direct WhatsApp contact line with assigned subject specialist',
  ];

  return (
    <div className="space-y-8 select-none">
      {/* Parameter selection panel */}
      <div className="bg-white rounded-3xl border border-slate-200/55 p-5 md:p-6 shadow-sm max-w-xl mx-auto space-y-5">
        <h4 className="text-center font-heading text-base font-bold text-slate-800">
          Personalise Tutoring Estimations
        </h4>

        {/* Grade group selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Select Learner Year Circle:
          </label>
          <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
            {[
              { id: 'primary', title: 'Grades 4–8' },
              { id: 'senior', title: 'Grades 9–10' },
              { id: 'matric', title: 'Grades 11–12' },
            ].map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setGradeGroup(g.id as any)}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  gradeGroup === g.id
                    ? 'bg-academy-blue text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {g.title}
              </button>
            ))}
          </div>
        </div>

        {/* Weekly frequency slider */}
        <div className="space-y-2 pt-1">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold uppercase tracking-wider text-slate-400">Weekly Contact Count:</span>
            <span className="font-sans font-bold text-academy-blue bg-academy-blue/5 border border-academy-blue/10 px-2.5 py-1 rounded-full">
              {sessionsPerWeek} Session{sessionsPerWeek > 1 ? 's' : ''} / week
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="3"
            value={sessionsPerWeek}
            onChange={(e) => setSessionsPerWeek(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-academy-blue outline-none"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-bold px-0.5">
            <span>1 Session (Foundational)</span>
            <span>2 Sessions (Optimal)</span>
            <span>3 Sessions (Advanced Review)</span>
          </div>
        </div>
      </div>

      {/* Main Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {/* CARD 1: Group Classroom monthly */}
        <div className="bg-white rounded-3xl border border-slate-200/50 p-6 md:p-8 hover:border-academy-gold/25 transition-all duration-300 relative flex flex-col justify-between space-y-6 shadow-sm">
          <div>
            <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-5">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Option A</span>
                <h4 className="font-heading text-lg md:text-xl font-extrabold text-slate-800 mt-1">Classroom Learning</h4>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-slate-400 block">Est. Range</span>
                <span className="font-sans text-xl md:text-2xl font-black text-academy-blue">{classroomPrice.note}</span>
              </div>
            </div>

            {/* Inclusions list */}
            <ul className="space-y-3">
              {classroomInclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5 pt-4">
            <a
              href="#assessment"
              className="block text-center w-full bg-academy-blue hover:bg-academy-blue/95 text-white font-sans font-bold py-3.5 px-4 text-xs rounded-xl shadow-md transition"
            >
              Check Group Availability
            </a>
            <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
              <Info className="w-3.5 h-3.5" /> Pricing depends on grade, subject, and group size.
            </p>
          </div>
        </div>

        {/* CARD 2: Private hourly sessions (Gold Premium card) */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-academy-blue rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-academy-gold/[0.04] transition-all duration-300 relative flex flex-col justify-between space-y-6 shadow-md text-white">
          <div className="absolute top-4 right-4 bg-academy-gold text-slate-900 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-sm flex items-center gap-1">
            <Star className="w-3 h-3 fill-slate-900" /> Most Popular
          </div>

          <div>
            <div className="flex justify-between items-start border-b border-slate-800 pb-4 mb-5">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Option B</span>
                <h4 className="font-heading text-lg md:text-xl font-extrabold text-white mt-1">Private Sessions</h4>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-400 block">Est. Rate</span>
                <span className="font-sans text-xl md:text-2xl font-black text-academy-gold">{privatePrice.note}</span>
              </div>
            </div>

            {/* Inclusions list */}
            <ul className="space-y-3">
              {privateInclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5 pt-4">
            <a
              href="#assessment"
              className="block text-center w-full bg-academy-gold hover:bg-academy-gold/90 text-slate-900 font-sans font-extrabold py-3.5 px-4 text-xs rounded-xl shadow-lg transition"
            >
              Book Private Tutor Slots
            </a>
            <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-400" /> Free custom schedules allocated on assessment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

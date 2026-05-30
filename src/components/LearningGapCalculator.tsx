/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, BarChart2, Calculator, ArrowRight, RefreshCw, Layers, Zap, Star } from 'lucide-react';

export const LearningGapCalculator: React.FC = () => {
  const [gradeGroup, setGradeGroup] = useState<'primary' | 'high'>('high');
  const [currentMark, setCurrentMark] = useState<number>(55);
  const [testAnxiety, setTestAnxiety] = useState<number>(3); // 1 to 5
  const [homeworkStruggle, setHomeworkStruggle] = useState<number>(3); // 1 to 5
  const [wordProblems, setWordProblems] = useState<number>(3); // 1 to 5
  const [calculated, setCalculated] = useState(false);

  // Results calculation
  const getResults = () => {
    // Basic heuristics to determine gaps
    const gapScore = Math.max(15, 100 - currentMark);
    const conceptualGap = Math.round(gapScore * (0.35 + (homeworkStruggle / 10)));
    const examSpeedGap = Math.round(gapScore * (0.25 + (testAnxiety / 10)));
    const applicationGap = Math.round(gapScore * (0.4 + (wordProblems / 10)));

    // Ensure they clip to reasonable levels
    const clamp = (val: number) => Math.min(95, Math.max(10, val));

    // Calculate passing score buffer
    const targetMark = Math.min(95, currentMark + Math.round(gapScore * 0.6));

    let focusArea = 'Algebraic Foundations & Equations';
    let recommendation = '';

    if (gradeGroup === 'primary') {
      if (wordProblems >= 4) {
        focusArea = 'Word Problems & Mathematical Models';
        recommendation = 'Work on abstract translation cards, step-by-step ratio analysis, and visual schemas.';
      } else if (homeworkStruggle >= 4) {
        focusArea = 'Conceptual Arithmetic & Fractions';
        recommendation = 'Strengthen foundational denominator logic, decimals, and basic mental calculations.';
      } else {
        focusArea = 'Multiplication, Division, & Problem Structures';
        recommendation = 'Structured gap revision covering operational order (BODMAS) and long algebra basics.';
      }
    } else {
      // High School
      if (currentMark < 50) {
        focusArea = 'Euclidean Geometry & Algebraic Fractions';
        recommendation = 'Rebuild geometric theorem rules, proofs, and factorisation tools from the ground up.';
      } else if (wordProblems >= 4) {
        focusArea = 'Analytical Geometry & Trigonometry';
        recommendation = 'Rigorous mapping of identities, functions worksheets, and graphical projection practice.';
      } else {
        focusArea = 'Differential Calculus & Trigonometric Functions';
        recommendation = 'Focus on exam past paper techniques, limits, and high-weighted algebraic questions.';
      }
    }

    return {
      conceptual: clamp(conceptualGap),
      examSpeed: clamp(examSpeedGap),
      application: clamp(applicationGap),
      targetMark,
      focusArea,
      recommendation,
      estimatedHours: Math.round(gapScore * 0.75),
    };
  };

  const results = getResults();

  return (
    <div className="w-full bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
      {/* Decorative math symbol overlay */}
      <div className="absolute top-2 right-4 text-emerald-500/5 select-none font-sans text-9xl pointer-events-none font-extrabold font-mono">
        f(x)
      </div>
      <div className="absolute bottom-2 left-4 text-academy-gold/5 select-none font-sans text-9xl pointer-events-none font-extrabold font-mono">
        ∑
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="p-1 px-2.5 bg-academy-gold/10 text-academy-gold border border-academy-gold/20 text-[10px] font-bold rounded-full tracking-widest uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Diagnostic Tool
            </span>
          </div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
            Identify Learner Gaps Now
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Analyze exam hurdles, school marks, and syllabus alignment in real time.
          </p>
        </div>
        <div className="flex bg-slate-800 p-1.5 rounded-xl border border-slate-700/60 shrink-0">
          <button
            type="button"
            onClick={() => setGradeGroup('primary')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${
              gradeGroup === 'primary' ? 'bg-academy-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Grades 4–8
          </button>
          <button
            type="button"
            onClick={() => setGradeGroup('high')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${
              gradeGroup === 'high' ? 'bg-academy-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Grades 9–12
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Form Controls */}
        <div className="space-y-6">
          {/* Current Average Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-slate-800/40 p-3.5 rounded-2xl border border-slate-800">
              <span className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-academy-gold" /> Current Subject Average:
              </span>
              <span className="font-sans text-2xl font-extrabold text-academy-gold">{currentMark}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="95"
              value={currentMark}
              onChange={(e) => {
                setCurrentMark(parseInt(e.target.value));
                setCalculated(true);
              }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-academy-gold focus:outline-none"
            />
            <div className="flex justify-between text-[10px] font-semibold text-slate-500 uppercase tracking-widest px-1">
              <span>Need Help (20%)</span>
              <span>Passing (50%)</span>
              <span>Advanced (85%+)</span>
            </div>
          </div>

          {/* Core Diagnostic Slider Questions */}
          <div className="space-y-4 bg-slate-800/20 p-5 rounded-2xl border border-slate-800/65">
            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">Answer 3 Study Habits:</h4>

            {/* Anxiety Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Exam Stress & Anxiety</span>
                <span className="text-academy-gold font-bold font-mono">Level {testAnxiety}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={testAnxiety}
                onChange={(e) => {
                  setTestAnxiety(parseInt(e.target.value));
                  setCalculated(true);
                }}
                className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-academy-blue"
              />
              <div className="flex justify-between text-[9px] text-slate-500 font-medium font-sans">
                <span>Calm under pressure</span>
                <span>Time out / Blank in test</span>
              </div>
            </div>

            {/* Homework Struggle Slider */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Difficulty Working independently</span>
                <span className="text-academy-gold font-bold font-mono">Level {homeworkStruggle}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={homeworkStruggle}
                onChange={(e) => {
                  setHomeworkStruggle(parseInt(e.target.value));
                  setCalculated(true);
                }}
                className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-academy-blue"
              />
              <div className="flex justify-between text-[9px] text-slate-500 font-medium font-sans">
                <span>Solves quickly alone</span>
                <span>Gets stuck, gives up</span>
              </div>
            </div>

            {/* Word Problems / Theorems Slider */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Struggles with Word Problems / Proofs</span>
                <span className="text-academy-gold font-bold font-mono">Level {wordProblems}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={wordProblems}
                onChange={(e) => {
                  setWordProblems(parseInt(e.target.value));
                  setCalculated(true);
                }}
                className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-academy-blue"
              />
              <div className="flex justify-between text-[9px] text-slate-500 font-medium font-sans">
                <span>Understands steps</span>
                <span>Can't translate equations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Visualizer */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 md:p-6 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
              <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                <BarChart2 className="w-4 h-4 text-academy-gold" /> Estimated Academic Gaps:
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Auto-calculating</span>
            </div>

            <div className="space-y-3.5">
              {/* Gap Item 1 */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-300">Foundational Concepts Gap</span>
                  <span className={`${results.conceptual > 55 ? 'text-rose-400' : results.conceptual > 35 ? 'text-amber-400' : 'text-emerald-400'} font-bold`}>
                    {results.conceptual}% Gap {results.conceptual > 55 ? '(Critical)' : results.conceptual > 35 ? '(Moderate)' : '(Stable)'}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${results.conceptual > 55 ? 'bg-rose-500' : results.conceptual > 35 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${results.conceptual}%` }}
                    transition={{ type: 'spring', stiffness: 60 }}
                  />
                </div>
              </div>

              {/* Gap Item 2 */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-300">Exam Speed & Structure Gap</span>
                  <span className={`${results.examSpeed > 55 ? 'text-rose-400' : results.examSpeed > 35 ? 'text-amber-400' : 'text-emerald-400'} font-bold`}>
                    {results.examSpeed}% Gap {results.examSpeed > 55 ? '(Critical)' : results.examSpeed > 35 ? '(Moderate)' : '(Stable)'}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${results.examSpeed > 55 ? 'bg-rose-500' : results.examSpeed > 35 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${results.examSpeed}%` }}
                    transition={{ type: 'spring', stiffness: 60 }}
                  />
                </div>
              </div>

              {/* Gap Item 3 */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-300">Real-World Application & Word Problems Gap</span>
                  <span className={`${results.application > 55 ? 'text-rose-400' : results.application > 35 ? 'text-amber-400' : 'text-emerald-400'} font-bold`}>
                    {results.application}% Gap {results.application > 55 ? '(Critical)' : results.application > 35 ? '(Moderate)' : '(Stable)'}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${results.application > 55 ? 'bg-rose-500' : results.application > 35 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${results.application}%` }}
                    transition={{ type: 'spring', stiffness: 60 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Target mark buffer & strategic advice */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 bg-academy-gold/10 border border-academy-gold/20 text-academy-gold rounded-xl flex items-center justify-center font-sans font-bold">
                +{results.targetMark - currentMark}%
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Recommended Target Average</span>
                <span className="text-sm font-bold text-white">Raise to <span className="text-academy-gold font-extrabold">{results.targetMark}%</span> using capsule revision</span>
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-3 text-xs leading-relaxed text-slate-300">
              <p className="flex items-center gap-1.5 mb-1 text-academy-gold font-semibold uppercase text-[10px] tracking-wider">
                <Star className="w-3.5 h-3.5 text-academy-gold" /> Key Gap Area:
              </p>
              <h5 className="font-semibold text-slate-100 text-xs mb-1 bg-slate-950 p-2 rounded border border-slate-800/60 inline-block">{results.focusArea}</h5>
              <p className="text-xs text-slate-400">{results.recommendation}</p>
            </div>
          </div>

          <div className="flex gap-2.5 pt-1">
            <a
              href="#assessment"
              className="w-full bg-academy-gold text-slate-900 font-sans font-bold text-center py-2.5 rounded-xl hover:bg-academy-gold/90 text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              Book Placement Review
              <ArrowRight className="w-3.5 h-3.5 text-slate-900" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

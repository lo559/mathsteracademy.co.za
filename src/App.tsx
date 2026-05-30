/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  GraduationCap, 
  MapPin, 
  Clock, 
  Users, 
  BookOpen, 
  ChevronRight, 
  Phone, 
  Star, 
  Check, 
  Compass, 
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  HelpCircle,
  Globe,
  Award,
  Sparkles,
  BookMarked
} from 'lucide-react';

// Relative Assets Imports
import heroImg from './assets/images/hero_classroom_1780084474634.png';
import galleryImg1 from './assets/images/tutor_teaching_1780084493919.png';
import galleryImg2 from './assets/images/students_group_1780084512742.png';
import galleryImg3 from './assets/images/academic_focus_1780084542700.png';

// Components Imports
import { Logo } from './components/Logo';
import { AssessmentWizard } from './components/AssessmentWizard';
import { LearningGapCalculator } from './components/LearningGapCalculator';
import { SyllabusExplorer } from './components/SyllabusExplorer';
import { PricingEstimator } from './components/PricingEstimator';
import { Lightbox } from './components/Lightbox';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Gallery Lightbox states
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Counter states (with simulation on visible)
  const [counts, setCounts] = useState({
    students: 1530,
    subjects: 2,
    passRate: 75,
    weekly: 40
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Incremental count simulator to make statistics feel active
    const timer = setTimeout(() => {
      setCounts({
        students: 1850,
        subjects: 8,
        passRate: 98,
        weekly: 120
      });
    }, 800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const galleryItems = [
    { url: galleryImg1, title: 'In-Depth Circle Theorems & Logic Whiteboards', category: 'Classrooms' },
    { url: galleryImg2, title: 'Small Group Chemistry Exercises & Collaboration', category: 'Tutoring Sessions' },
    { url: galleryImg3, title: 'Advanced Trigonometric Graph Paper Mechanics', category: 'Revision Guides' },
  ];

  const features = [
    { id: '1', title: 'Small Classes', description: 'Strict limit of 8-10 learners per circle allows our coaches to see where students lose focus.', iconName: 'Users' },
    { id: '2', title: 'Personal Attention', description: 'Dynamic diagnosis plans that bridge prior grade weaknesses and gaps before building higher topics.', iconName: 'Sparkles' },
    { id: '3', title: 'CAPS Curriculum', description: 'Aligned 100% with CAPS guidelines. Targeted worksheets for both CAPS and requested IEB curriculums.', iconName: 'GraduationCap' },
    { id: '4', title: 'Progress Tracking', description: 'Comprehensive monthly grade progress, workbook updates, and exam diagnostics keeping parents fully in the loop.', iconName: 'BookMarked' },
    { id: '5', title: 'Exam Techniques', description: 'Drill sessions on previous national examination boards, pacing tools, and specific mark estimation training.', iconName: 'Award' },
    { id: '6', title: 'Online & In-Person', description: 'Attend high-vibe physical reviews at our Lofentse High campus or hybrid online consultation rooms.', iconName: 'Globe' },
  ];

  const testimonials = [
    {
      id: '1',
      name: 'Simphiwe Cele',
      role: 'Parent (Orlando East)',
      text: 'My daughter’s maths mark went from 42% to 71% in just two terms. She gained massive exam confidence under the tutors’ guidance.',
      stars: 5,
      date: 'May 2026'
    },
    {
      id: '2',
      name: 'Lerato Mabena',
      role: 'Grade 11 Student (Diepkloof)',
      text: 'I used to get stuck on euclidean geometry proofs. The small groups helped me ask questions without feeling embarrassed. Excellent teachers.',
      stars: 5,
      date: 'April 2026'
    },
    {
      id: '3',
      name: 'Sello Moloi',
      role: 'Parent (Soweto)',
      text: 'Mathster Academy takes its job seriously. Their exam technique tutoring helped my son pass his grade 12 accounting and science tests smoothly.',
      stars: 5,
      date: 'March 2026'
    }
  ];

  const differentFeatures = [
    { title: 'Located Conveniently', text: 'Safe, secure environment at the historic Lofentse Girls High, Soweto, close to major routes.' },
    { title: 'Small Groups Only', text: 'No crowded tutor halls. Limits are capped to secure active attention per learner.' },
    { title: 'Focus on fixing gaps', text: 'We diagnose foundational mathematics cracks and fix them first before moving forward.' },
    { title: 'Exam technique training', text: 'Time allocation management, keyword focus, and how to write exactly what markers reward.' },
    { title: 'Flexible pricing models', text: 'Plans tailored precisely around subject selections, scheduling frequencies, and budget boundaries.' },
    { title: 'Multiple subjects', text: 'Mathematics, physical sciences, accounting, biology, and geographical GIS mapwork details in one center.' },
    { title: 'Online + physical learning', text: 'Dynamic in-person classroom tutoring backed fully by digitized homework portal helplines.' },
    { title: '7 Days a Week Support', text: 'Stuck on school homework? Peer support networks and WhatsApp tutors answer urgent questions always.' }
  ];

  return (
    <div className="min-h-screen flex flex-col relative text-slate-700 bg-slate-50 overflow-x-hidden">
      {/* Scroll Progress indicator */}
      <motion.div 
        className="scroll-progress" 
        style={{ scaleX: scrollYProgress }} 
      />

      {/* Floating WhatsApp Action Trigger */}
      <a
        href="https://wa.me/27790164996?text=Hi%20Mathster%20Academy!%20I%20would%20like%20to%20enquire%20about%20tutoring%20for%20my%20child."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 border border-emerald-400 text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition hover:scale-105 active:scale-95 group"
        id="whatsapp-trigger"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-white font-semibold text-xs transition-all tracking-wider duration-300 group-hover:max-w-xs group-hover:mr-2">
          Chat on WhatsApp
        </span>
        <MessageCircle className="w-6.5 h-6.5 text-white" />
      </a>

      {/* STICKY TOP NAVIGATION BAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200/50 py-3 shadow-md' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#hero" className="cursor-pointer">
            <Logo variant="compact" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <a href="#about" className="text-xs uppercase tracking-widest font-extrabold text-slate-600 hover:text-academy-blue transition-colors">About</a>
            <a href="#subjects" className="text-xs uppercase tracking-widest font-extrabold text-slate-600 hover:text-academy-blue transition-colors">Subjects</a>
            <a href="#pricing" className="text-xs uppercase tracking-widest font-extrabold text-slate-600 hover:text-academy-blue transition-colors">Pricing</a>
            <a href="#gallery" className="text-xs uppercase tracking-widest font-extrabold text-slate-600 hover:text-academy-blue transition-colors">Inside Gallery</a>
            <a href="#contact" className="text-xs uppercase tracking-widest font-extrabold text-slate-600 hover:text-academy-blue transition-colors">Contact</a>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:block">
            <a
              href="#assessment"
              className="bg-academy-blue border border-academy-blue/20 text-white hover:bg-academy-blue/95 font-sans font-bold text-xs py-3 px-5 rounded-xl shadow-md transition-all cursor-pointer inline-block"
            >
              Free Assessment Booking
            </a>
          </div>

          {/* Mobile Hamburguer trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-academy-blue focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Screen */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col space-y-4 md:hidden"
          >
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-slate-700 hover:text-academy-blue"
            >
              Why Choose Us
            </a>
            <a
              href="#subjects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-slate-700 hover:text-academy-blue"
            >
              Subjects We Tutor
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-slate-700 hover:text-academy-blue"
            >
              Pricing Estimator
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-slate-700 hover:text-academy-blue"
            >
              Inside Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-slate-700 hover:text-academy-blue"
            >
              Get In Touch
            </a>
            <div className="pt-2">
              <a
                href="#assessment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-academy-blue text-white font-sans font-bold py-3.5 px-4 text-xs rounded-xl shadow-md transition inline-block cursor-pointer"
              >
                Book Free Assessment
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* 1. HERO SECTION (Above the Fold) */}
      <section
        id="hero"
        className="relative pt-24 md:pt-36 pb-16 md:pb-24 overflow-hidden math-grid flex items-center min-h-[90vh]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-slate-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 p-1.5 px-3 bg-academy-blue/5 border border-academy-blue/10 rounded-full text-[10px] md:text-xs font-bold text-academy-blue uppercase tracking-wider mx-auto lg:mx-0">
                <Sparkles className="w-3.5 h-3.5 text-academy-gold fill-academy-gold" /> SA's Premium Tutoring Hub
              </div>

              {/* Bold modern serif headline */}
              <h1 className="font-heading text-3.5xl md:text-5xl lg:text-6xl font-black text-academy-blue leading-tight tracking-tight">
                Boost Your Marks in <span className="relative inline-block text-slate-900">
                  Maths, Science
                  <svg className="absolute left-0 -bottom-1 w-full h-2.5 text-academy-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span> & More <span className="text-academy-gold">&#8211;</span> <span className="font-sans font-black italic text-academy-blue">Gr 4 to Gr 12</span>
              </h1>

              {/* Subheadline body */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                In-person and online tutoring designed to help students understand faster, improve confidence, and achieve better marks. Fully aligned to the CAPS curriculum.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#assessment"
                  className="bg-academy-gold text-slate-900 border border-academy-gold font-sans font-extrabold text-sm py-4 px-8 rounded-xl shadow-lg shadow-academy-gold/10 hover:bg-academy-gold/90 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Free Assessment <ArrowRight className="w-4 h-4 text-slate-900 font-bold" />
                </a>
                <a
                  href="#subjects"
                  className="bg-white hover:bg-slate-50 text-slate-700 font-sans font-bold border border-slate-200 py-4 px-8 rounded-xl shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  View Subjects We Tutor
                </a>
              </div>

              {/* Trust badges checklist */}
              <div className="pt-4 border-t border-slate-200/60 max-w-xl mx-auto lg:mx-0">
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    '✓ CAPS Focused',
                    '✓ Small Groups (Max 10)',
                    '✓ Exam Preparation',
                    '✓ Experienced Tutor Panel',
                  ].map((badge) => (
                    <div key={badge} className="flex items-center gap-2.5 text-xs text-slate-700 font-bold tracking-wide">
                      <span className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                      <span>{badge.replace('✓', '').trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual back glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-academy-blue/20 to-academy-gold/10 rounded-3xl blur-3xl -z-10 transform scale-105" />

                {/* Hero Main picture with floating effects and borders */}
                <div className="relative border-4 border-white rounded-3xl overflow-hidden shadow-2xl transition hover:rotate-1 duration-500">
                  <img
                    src={heroImg}
                    alt="Mathster Academy Learning Session"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover min-h-[300px]"
                  />
                  {/* Subtle grading tag overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5 text-white">
                    <span className="text-[10px] text-academy-gold uppercase font-extrabold tracking-widest block mb-1">Live Tutoring</span>
                    <p className="text-xs text-slate-200">Interactive school reviews held Saturdays & afternoons.</p>
                  </div>
                </div>

                {/* Floating Interactive Category Badges */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-5 -right-5 bg-white border border-slate-200 p-3 rounded-2xl shadow-xl flex items-center gap-2 shrink-0 max-w-[210px]"
                >
                  <div className="h-8 w-8 bg-academy-gold/10 text-academy-gold border border-academy-gold/20 rounded-xl flex items-center justify-center font-bold font-mono text-sm shrink-0">7d</div>
                  <div>
                    <span className="font-extrabold text-[11px] block text-slate-800 leading-none">7 Days a Week</span>
                    <span className="text-[9px] text-slate-500">Continuous tutor helpline support</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-1/2 -left-8 bg-white border border-slate-200 p-3 rounded-2xl shadow-xl flex items-center gap-2 shrink-0 max-w-[210px]"
                >
                  <div className="h-8 w-8 bg-academy-blue/10 text-academy-blue border border-academy-blue/20 rounded-xl flex items-center justify-center font-bold shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-[11px] block text-slate-800 leading-none">Online & In-Person</span>
                    <span className="text-[9px] text-slate-500">Dynamic dual-option learning</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-6 -right-3 bg-white border border-slate-200 p-3 rounded-2xl shadow-xl flex items-center gap-2 shrink-0 max-w-[220px]"
                >
                  <div className="h-8 w-8 bg-emerald-100 text-emerald-800 border border-emerald-200/50 rounded-xl flex items-center justify-center font-bold shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-[11px] block text-slate-800 leading-none">Small Sessions</span>
                    <span className="text-[9px] text-slate-500">Maximized individual spotlight attention</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -bottom-16 -left-3 bg-slate-900 border border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 shrink-0 max-w-[210px] text-white"
                >
                  <div className="h-8 w-8 bg-academy-gold/20 text-academy-gold border border-academy-gold/20 rounded-xl flex items-center justify-center font-bold shrink-0">
                    <Star className="w-4 h-4 fill-academy-gold" />
                  </div>
                  <div>
                    <span className="font-extrabold text-[11px] block text-white leading-none">Private Tutoring</span>
                    <span className="text-[9px] text-slate-400">1-on-1 focus option available</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTDOWN BANNER (Counters Section) */}
      <section className="bg-academy-blue text-white py-10 relative z-10 shadow-lg select-none border-y border-academy-blue/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Students Helped', value: `${counts.students}+`, iconName: 'Users' },
              { label: 'Core Subjects Covered', value: `${counts.subjects}+`, iconName: 'BookMarked' },
              { label: 'Examination Pass Rate', value: `${counts.passRate}%`, iconName: 'Award' },
              { label: 'Classes Weekly', value: `${counts.weekly}+`, iconName: 'Clock' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1.5 p-2 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm">
                <span className="font-mono text-3xl md:text-4.5xl font-extrabold text-academy-gold tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-white/70 uppercase tracking-widest text-[9px] md:text-[10px] font-bold block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-20 md:py-28 bg-white relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50/50 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative Title */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-[10px] font-bold uppercase tracking-widest text-academy-gold bg-academy-gold/10 px-3 py-1 rounded-full inline-block">
                Academic Commitment
              </span>
              <h2 className="font-heading text-3xl md:text-4.5xl font-black text-academy-blue leading-tight tracking-tight">
                Why Students & Parents Choose Mathster Academy
              </h2>
              <div className="h-1.5 w-16 bg-academy-gold rounded-full" />
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Mathster Academy helps learners build strong academic foundations through focused tutoring, exam preparation, and gap-filling strategies. We don’t just reteach school work — we help students understand concepts deeply and answer exam papers correctly.
              </p>
              
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100/60 flex items-start gap-3.5 shadow-sm">
                <Award className="text-academy-gold h-6 w-6 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Our Tutoring Blueprint</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    We evaluate the current year average, formulate targeted capsule worksheets, and assign qualified subject specialists for consistent guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Features Cards Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="p-6 bg-slate-50/50 border border-slate-200/40 rounded-3xl shadow-sm hover:shadow-md hover:border-academy-blue/15 transition-all duration-300 relative group"
                  >
                    <div className="h-10 w-10 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center text-academy-blue group-hover:bg-academy-blue group-hover:text-white transition-all duration-300 mb-4">
                      {feature.iconName === 'Users' && <Users className="w-5 h-5" />}
                      {feature.iconName === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                      {feature.iconName === 'GraduationCap' && <GraduationCap className="w-5 h-5" />}
                      {feature.iconName === 'BookMarked' && <BookMarked className="w-5 h-5" />}
                      {feature.iconName === 'Award' && <Award className="w-5 h-5" />}
                      {feature.iconName === 'Globe' && <Globe className="w-5 h-5" />}
                    </div>
                    <h4 className="font-heading text-base font-bold text-slate-800 mb-1.5 transition">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC GAP CALCULATOR SECTION (Added Value Advanced Feature) */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative flex items-center">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 math-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
          <div className="max-w-xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold text-academy-gold tracking-widest uppercase">
              Parent & Student Diagnostic Lab
            </span>
            <h2 className="font-heading text-3xl md:text-4.5xl font-black text-white tracking-tight">
              Instant Academic Gap Estimator
            </h2>
            <div className="h-1 bg-academy-gold w-12 mx-auto rounded-full" />
            <p className="text-xs text-slate-400">
              Input current test marks and identify core conceptual, processing, and speed hurdles immediately.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <LearningGapCalculator />
          </div>
        </div>
      </section>

      {/* 3. SUBJECTS SECTION */}
      <section id="subjects" className="py-20 md:py-28 bg-slate-50 relative select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-academy-blue bg-academy-blue/5 border border-academy-blue/10 px-3 py-1 rounded-full">
              Syllabus Curriculums
            </span>
            <h2 className="font-heading text-3xl md:text-4.5xl font-black text-slate-800 leading-tight tracking-tight">
              What We Tutor
            </h2>
            <div className="h-1 w-12 bg-academy-gold mx-auto rounded-full" />
            <p className="text-sm text-slate-500 max-w-lg mx-auto">
              Focused tutoring options aligned with South African CAPS guidelines. Supported topics in Science, Technology, Geography, and Math formats.
            </p>
          </div>

          <SyllabusExplorer />
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-academy-gold bg-academy-gold/10 px-3 py-1 rounded-full">
              Roadmap To Success
            </span>
            <h2 className="font-heading text-3xl md:text-4.5xl font-black text-slate-800 leading-tight tracking-tight">
              Four Easy Steps to Improvement
            </h2>
            <div className="h-1 w-12 bg-academy-gold mx-auto rounded-full" />
            <p className="text-sm text-slate-500">
              We focus on building long-term learning habits instead of just memorizing test answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: '01', title: 'Free Assessment', desc: 'Quick diagnostic evaluation to identify learning weaknesses and core concept gaps.' },
              { step: '02', title: 'Choose Learning Style', desc: 'Match learner targets on in-person physical small classrooms or private hourly tutors.' },
              { step: '03', title: 'Weekly Tutoring', desc: 'Structured revision worksheets, continuous past question reviews, and school homework guidelines.' },
              { step: '04', title: 'Track Improvement', desc: 'Structured progress loops and intensive exam preparation reviews to push final marks.' },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="bg-slate-50 border border-slate-200/40 p-6 md:p-7 rounded-3xl relative overflow-hidden shadow-sm hover:border-academy-gold/25 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Background Stamp */}
                <span className="absolute -top-7 -right-3 font-sans text-9.5xl font-black text-slate-200/40 select-none leading-none pointer-events-none">
                  {item.step}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="h-10 w-10 bg-academy-blue text-white rounded-xl flex items-center justify-center font-sans font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-extrabold text-slate-800 mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section id="pricing" className="py-20 md:py-28 bg-slate-50 relative select-none border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-academy-blue bg-academy-blue/5 border border-academy-blue/10 px-3 py-1 rounded-full">
              Financial Integrity
            </span>
            <h2 className="font-heading text-3xl md:text-4.5xl font-black text-slate-800 leading-tight tracking-tight">
              Affordable Tutoring Options
            </h2>
            <div className="h-1 w-12 bg-academy-gold mx-auto rounded-full" />
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Get premium academy attention without huge private costs. Estimate your budgets beneath:
            </p>
          </div>

          <PricingEstimator />
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-20 md:py-28 bg-white relative font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-academy-gold bg-academy-gold/10 px-3 py-1 rounded-full">
              Guaranteed Outcomes
            </span>
            <h2 className="font-heading text-3xl md:text-4.5xl font-black text-slate-800 leading-tight tracking-tight">
              What Parents & Students Say
            </h2>
            <div className="h-1 w-12 bg-academy-gold mx-auto rounded-full" />
            <p className="text-sm text-slate-500">
              Transforming academic performance across GP and Gauteng schools. Read our stories:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-slate-50 border border-slate-200/45 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Rating star grid */}
                  <div className="flex gap-1 text-academy-gold">
                    {Array.from({ length: test.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-academy-gold text-academy-gold" />
                    ))}
                  </div>

                  {/* Body text quotes */}
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed italic">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-5 border-t border-slate-200/40 mt-5">
                  <div>
                    <span className="font-bold text-xs text-slate-800 block">{test.name}</span>
                    <span className="text-[10px] text-slate-500 block">{test.role}</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 font-bold bg-white border border-slate-100 p-1 px-1.5 rounded-lg">
                    {test.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION (Inside Academy) */}
      <section id="gallery" className="py-20 md:py-28 bg-slate-50 relative select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-academy-blue bg-academy-blue/5 border border-academy-blue/10 px-3 py-1 rounded-full">
              Academy Snapshot
            </span>
            <h2 className="font-heading text-3xl md:text-4.5xl font-black text-slate-800 leading-tight tracking-tight">
              Inside Mathster Academy
            </h2>
            <div className="h-1 w-12 bg-academy-gold mx-auto rounded-full" />
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              Real classrooms, practical revision, energetic focus, and targeted in-person collaboration.
            </p>
          </div>

          {/* Masonry image grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((img, index) => (
              <div
                key={img.url}
                onClick={() => {
                  setLightboxIndex(index);
                  setIsLightboxOpen(true);
                }}
                className="group relative bg-white border border-slate-200/30 rounded-3xl overflow-hidden cursor-zoom-in shadow-sm hover:shadow-xl hover:border-academy-gold/20 transition-all duration-500"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  {/* Subtle grading overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] text-academy-gold font-extrabold uppercase tracking-widest block mb-1">
                      {img.category}
                    </span>
                    <h5 className="font-heading text-sm font-bold text-white line-clamp-2">
                      {img.title}
                    </h5>
                  </div>
                </div>

                <div className="p-4 bg-white flex justify-between items-center group-hover:bg-slate-50 transition border-t border-slate-100">
                  <div>
                    <span className="text-[9px] font-bold text-academy-blue uppercase tracking-widest block">
                      {img.category}
                    </span>
                    <h5 className="font-bold text-xs text-slate-700 truncate max-w-[210px]">
                      {img.title}
                    </h5>
                  </div>
                  <div className="h-6 w-6 rounded-lg bg-slate-50 text-slate-500 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-academy-blue group-hover:text-white transition">
                    +
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY WE’RE DIFFERENT SECTION */}
      <section className="py-20 md:py-28 bg-white relative border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-academy-gold bg-academy-gold/10 px-3 py-1 rounded-full">
              Our Edge
            </span>
            <h2 className="font-heading text-3xl md:text-4.5xl font-black text-slate-800 leading-tight tracking-tight">
              Why Mathster Academy Stand Out
            </h2>
            <div className="h-1 w-12 bg-academy-gold mx-auto rounded-full" />
            <p className="text-sm text-slate-500">
              Combining classic curriculum logic with energetic, responsive mentoring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentFeatures.map((dif, idx) => (
              <div
                key={dif.title}
                className="bg-slate-50/55 p-6 rounded-3xl border border-slate-200/45 hover:border-academy-blue/15 shadow-sm transition group"
              >
                <div className="h-9 w-9 bg-academy-blue text-white group-hover:bg-academy-gold group-hover:text-slate-900 rounded-xl flex items-center justify-center font-sans font-extrabold text-xs mb-4.5 transition">
                  {idx + 1}
                </div>
                <h4 className="font-heading text-sm font-extrabold text-slate-800 mb-1.5 leading-snug">
                  {dif.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{dif.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT DETAILS & ASSESSMENT BOOKING SECTION */}
      <section id="contact" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/45 relative scroll-mt-20">
        <div className="absolute inset-0 math-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Info Column & Map */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div id="assessment" className="space-y-6 scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-widest text-academy-blue bg-academy-blue/5 border border-academy-blue/10 px-3 py-1 rounded-full inline-block">
                  Get Integrated Support
                </span>
                <h2 className="font-heading text-3xl md:text-3.5xl lg:text-4.5xl font-black text-slate-800 leading-tight tracking-tight">
                  Book Your Free Assessment
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">
                  Let us evaluate your learner. Diagnostic reviews take place in-person Saturday mornings or weekday afternoons. Pick a slots model on the planner.
                </p>

                {/* Contact numbers column */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3.5 card rounded-2xl bg-white p-4 border border-slate-200/50 shadow-sm">
                    <Phone className="text-academy-gold h-5.5 w-5.5 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Contact Number / WhatsApp Support</span>
                      <a href="tel:0790164996" className="font-sans text-base font-bold text-slate-800 block hover:text-academy-blue pr-2">079 016 4996</a>
                      <a href="tel:0698130470" className="font-sans text-base font-bold text-slate-800 block hover:text-academy-blue border-t border-slate-100 mt-1 pt-1">069 813 0470</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 card rounded-2xl bg-white p-4 border border-slate-200/50 shadow-sm">
                    <Clock className="text-academy-blue h-5.5 w-5.5 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Academic Hours</span>
                      <span className="font-bold text-sm text-slate-700 block mt-0.5">Weekday afternoons & Saturdays</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 card rounded-2xl bg-white p-4 border border-slate-200/50 shadow-sm">
                    <MapPin className="text-academy-blue h-5.5 w-5.5 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Physical Academy Location</span>
                      <span className="font-bold text-sm text-slate-700 block mt-0.5">Lofentse Girls High School Campus</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Styled Maps Embed Placeholder */}
              <div className="bg-white rounded-3xl border border-slate-200/50 p-4 shadow-sm relative overflow-hidden flex-1 min-h-[220px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-academy-blue/5 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-1.5 relative z-10">
                  <span className="text-[9px] font-bold text-academy-blue uppercase tracking-widest block bg-academy-blue/5 border border-academy-blue/10 px-2 py-0.5 rounded-md inline-block">Google Maps Indicator</span>
                  <h4 className="font-heading text-sm font-extrabold text-slate-800">Lofentse Girls High, Soweto</h4>
                  <p className="text-[10px] text-slate-500">Orlando East, Soweto, Greater Johannesburg, 1804</p>
                </div>

                <div className="h-28 bg-slate-100 rounded-2xl border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden select-none">
                  {/* Styled vector grid map representation */}
                  <div className="absolute inset-x-0 bottom-4 text-center text-slate-200/60 font-mono font-bold leading-normal tracking-wide transform scale-150 pointer-events-none select-none">
                    MAP GRID ROUTE
                  </div>
                  {/* Mock coordinate lines */}
                  <svg className="absolute inset-0 h-full w-full opacity-35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,40 Q40,60 100,20 T200,80 T300,10" stroke="#1E355E" strokeWidth="1.5" />
                    <circle cx="210" cy="50" r="14" fill="#C6922E" fillOpacity="0.15" stroke="#C6922E" strokeWidth="2" className="animate-ping" />
                    <circle cx="210" cy="50" r="5" fill="#C6922E" stroke="#1E355E" strokeWidth="1.5" />
                  </svg>
                  <div className="relative z-10 text-center space-y-1">
                    <span className="font-extrabold text-[11px] text-academy-blue">Tutoring Offices (Saturdays & Afternoons)</span>
                    <a
                      href="https://maps.google.com/?q=Lofentse+Girls+High+School+Soweto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-academy-gold font-bold underline hover:opacity-95"
                    >
                      Open in External Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Wizard Column */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <AssessmentWizard onSuccess={() => {}} />
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 text-white pt-16 pb-10 select-none relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-10 mb-10">
            {/* Colon 1: Branding */}
            <div className="md:col-span-5 space-y-6">
              <Logo variant="compact" light={true} className="justify-start inline-flex" />
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
                South African academic tutoring academy offering standard-focused, CAPS-aligned physical and online tutoring for Grades 4 through 12, building educational foundations saturdays and afternoons.
              </p>
              <div className="text-xs text-slate-500 font-mono">
                Physical Center: Lofentse Girls High School campus, Soweto
              </div>
            </div>

            {/* Colon 2: Quick Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
                <li><a href="#about" className="hover:text-academy-gold transition">Why Choose Our Academy</a></li>
                <li><a href="#subjects" className="hover:text-academy-gold transition">Core Subjects We Tutor</a></li>
                <li><a href="#pricing" className="hover:text-academy-gold transition">Tuition Rate Estimator</a></li>
                <li><a href="#gallery" className="hover:text-academy-gold transition">Interactive Gallery Preview</a></li>
                <li><a href="#assessment" className="hover:text-academy-gold transition">Book Diagnostic Assessment</a></li>
              </ul>
            </div>

            {/* Colon 3: Subjects lists */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">Academic Focus Areas</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex justify-between"><span>Grade 4-8 Foundation Maths</span> <span className="text-[10px] text-amber-500 uppercase font-bold shrink-0">Private Only</span></li>
                <li>Grade 4-8 Natural Sciences</li>
                <li>Grade 9-12 FET Applied Mathematics</li>
                <li>Grade 10-12 Physical Sciences & Chemistry</li>
                <li>Grade 10-12 Financial Accounting</li>
                <li>Grade 10-12 Geography & Mapwork GIS</li>
              </ul>
            </div>
          </div>

          {/* Copyright foot */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4 text-slate-500 text-[11px] font-sans">
            <div>
              &copy; {new Date().getFullYear()} Mathster Academy. All Rights Reserved. Fully CAPs Aligned Tutoring Program.
            </div>
            <div className="space-x-4">
              <a href="#about" className="hover:text-slate-400 transition">Terms of Service</a>
              <span>&middot;</span>
              <a href="#about" className="hover:text-slate-400 transition">Privacy Protocols</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Active Lightbox modal rendering */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={galleryItems}
        currentIndex={lightboxIndex}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
}

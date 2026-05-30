/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Mail, BookOpen, AlertCircle, CheckCircle, GraduationCap, Clock, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';

interface AssessmentWizardProps {
  onSuccess: () => void;
}

export const AssessmentWizard: React.FC<AssessmentWizardProps> = ({ onSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: '',
    phone: '',
    email: '',
    subject: '',
    style: '', // 'classroom' | 'private' | 'undecided'
    dayPreference: '', // 'afternoons' | 'saturdays' | 'flexible'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const grades = Array.from({ length: 9 }, (_, i) => `Grade ${i + 4}`);

  const subjects = [
    'Mathematics',
    'Maths Literacy',
    'Natural Sciences',
    'Physical Sciences',
    'Geography',
    'Life Sciences',
    'Accounting',
  ];

  const validateStep = (currentStep: number) => {
    const tempErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.grade) tempErrors.grade = 'Please select a grade.';
      if (!formData.subject) tempErrors.subject = 'Please select a subject of focus.';
    } else if (currentStep === 2) {
      if (!formData.style) tempErrors.style = 'Please select a learning style.';
      if (!formData.dayPreference) tempErrors.dayPreference = 'Please select a convenient time.';
    } else if (currentStep === 3) {
      if (!formData.parentName.trim()) tempErrors.parentName = "Parent's full name is required.";
      if (!formData.studentName.trim()) tempErrors.studentName = "Learner's full name is required.";
      if (!formData.phone.trim()) {
        tempErrors.phone = 'Phone number is required.';
      } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
        tempErrors.phone = 'Please enter a valid South African phone number (e.g., 0790164996).';
      }
      if (!formData.email.trim()) {
        tempErrors.email = 'Email address is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address.';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    // Simulate API request to capture booking
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setCompleted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-academy-gold/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-academy-blue/5 blur-3xl rounded-full pointer-events-none" />

      {/* Progress Header */}
      <div className="bg-gradient-to-r from-academy-blue to-academy-blue/95 p-6 md:p-8 text-white">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-academy-gold uppercase text-[11px] font-bold tracking-widest block mb-1">
              Assessment Booking
            </span>
            <h3 className="font-heading text-xl md:text-2xl font-bold">
              Secure Your Free Lesson Review
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-white/70 block uppercase">Step</span>
            <span className="font-sans text-2xl font-bold text-academy-gold">{completed ? '✓' : `${step}/3`}</span>
          </div>
        </div>

        {/* Steps indicator */}
        <div className="relative h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-academy-gold"
            initial={{ width: '0%' }}
            animate={{ width: completed ? '100%' : `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {!completed ? (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* STEP 1: Academic Profile */}
              {step === 1 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h4 className="text-slate-800 font-semibold text-lg flex items-center gap-2">
                      <GraduationCap className="text-academy-blue h-5 w-5" />
                      Tell us about the learner
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Identify academic levels so we prepare the correct revision materials.
                    </p>
                  </div>

                  {/* Grade Selector */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Grade Level</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                      {grades.map((grade) => (
                        <button
                          key={grade}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, grade }));
                            if (errors.grade) setErrors((prev) => ({ ...prev, grade: '' }));
                          }}
                          className={`py-3 px-2 rounded-xl text-xs md:text-sm font-medium border text-center transition-all ${
                            formData.grade === grade
                              ? 'bg-academy-blue text-white border-academy-blue shadow-md'
                              : 'bg-slate-50 text-slate-700 border-slate-200/60 hover:bg-slate-100'
                          }`}
                        >
                          {grade}
                        </button>
                      ))}
                    </div>
                    {errors.grade && (
                      <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.grade}
                      </p>
                    )}
                  </div>

                  {/* Subject Focus */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Core Focus Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-700 font-medium focus:ring-2 focus:ring-academy-blue/30 focus:border-academy-blue outline-none transition"
                    >
                      <option value="">Select a subject...</option>
                      {subjects.map((sub) => (
                        <option key={sub} value={sub}>
                          {sub} {sub === 'Mathematics' && formData.grade && parseInt(formData.grade.replace(/^\D+/g, '')) <= 8 ? '(Gr 4–8 Private Sessions Only)' : ''}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 2: Preferences */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h4 className="text-slate-800 font-semibold text-lg flex items-center gap-2">
                      <BookOpen className="text-academy-blue h-5 w-5" />
                      Learning preferences
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Pick preferred scheduling structures and tutoring environments.
                    </p>
                  </div>

                  {/* Learning Style */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-slate-700">Preferred Lesson Format</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'classroom', title: 'Classroom Group', desc: 'Interactive lessons at our academy' },
                        { id: 'private', title: 'Private Tutoring', desc: 'Dedicated 1-on-1 focus support' },
                        { id: 'undecided', title: 'Help Me Select', desc: 'Discuss during assessment' },
                      ].map((style) => (
                        <div
                          key={style.id}
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, style: style.id }));
                            if (errors.style) setErrors((prev) => ({ ...prev, style: '' }));
                          }}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            formData.style === style.id
                              ? 'bg-academy-blue/5 border-academy-blue shadow-sm'
                              : 'bg-slate-50/50 border-slate-200/65 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-slate-800">{style.title}</span>
                            <div
                              className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${
                                formData.style === style.id ? 'border-academy-blue bg-academy-blue' : 'border-slate-300 bg-white'
                              }`}
                            >
                              {formData.style === style.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1">{style.desc}</p>
                        </div>
                      ))}
                    </div>
                    {errors.style && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.style}
                      </p>
                    )}
                  </div>

                  {/* Timing Preference */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-slate-700">Convenient Scheduling</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'afternoons', title: 'Weekday Afternoons', desc: 'Monday to Friday' },
                        { id: 'saturdays', title: 'Saturdays', desc: 'Morning or lunchtime session' },
                        { id: 'flexible', title: 'Highly Flexible', desc: 'Discuss customized times' },
                      ].map((time) => (
                        <div
                          key={time.id}
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, dayPreference: time.id }));
                            if (errors.dayPreference) setErrors((prev) => ({ ...prev, dayPreference: '' }));
                          }}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            formData.dayPreference === time.id
                              ? 'bg-academy-blue/5 border-academy-blue shadow-sm'
                              : 'bg-slate-50/50 border-slate-200/65 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-academy-gold" />
                            <span className="font-semibold text-sm text-slate-800">{time.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1">{time.desc}</p>
                        </div>
                      ))}
                    </div>
                    {errors.dayPreference && (
                      <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.dayPreference}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 3: Connect Details */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h4 className="text-slate-800 font-semibold text-lg flex items-center gap-2">
                      <User className="text-academy-blue h-5 w-5" />
                      Contact Details
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Our academic program directors will contact you to align schedules.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Parent Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Parent/Guardian Full Name</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                          <User className="w-4.5 h-4.5" />
                        </span>
                        <input
                          type="text"
                          name="parentName"
                          placeholder="e.g. Sipho Nkosi"
                          value={formData.parentName}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl pl-11 pr-4 py-3 text-slate-700 focus:ring-2 focus:ring-academy-blue/30 focus:border-academy-blue outline-none transition"
                        />
                      </div>
                      {errors.parentName && (
                        <p className="text-rose-500 text-[11px] mt-0.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.parentName}
                        </p>
                      )}
                    </div>

                    {/* Student Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Learner Full Name</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                          <GraduationCap className="w-4.5 h-4.5" />
                        </span>
                        <input
                          type="text"
                          name="studentName"
                          placeholder="e.g. Lerato Nkosi"
                          value={formData.studentName}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl pl-11 pr-4 py-3 text-slate-700 focus:ring-2 focus:ring-academy-blue/30 focus:border-academy-blue outline-none transition"
                        />
                      </div>
                      {errors.studentName && (
                        <p className="text-rose-500 text-[11px] mt-0.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.studentName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">WhatsApp / Contact Phone</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                          <Phone className="w-4.5 h-4.5" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="e.g. 079 016 4996"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl pl-11 pr-4 py-3 text-slate-700 focus:ring-2 focus:ring-academy-blue/30 focus:border-academy-blue outline-none transition"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-rose-500 text-[11px] mt-0.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Email Address</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                          <Mail className="w-4.5 h-4.5" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          placeholder="e.g. parent@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl pl-11 pr-4 py-3 text-slate-700 focus:ring-2 focus:ring-academy-blue/30 focus:border-academy-blue outline-none transition"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-rose-500 text-[11px] mt-0.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Summary Callout */}
                  <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-3 text-[12px] text-slate-600 mt-2">
                    <MapPin className="text-academy-blue h-5 w-5 shrink-0" />
                    <div>
                      <span className="font-semibold block text-slate-800">Physical Assessment Location:</span>
                      Lofentse Girls High, Orlando, Soweto. Tutors available Saturdays & afternoons.
                    </div>
                  </div>
                </form>
              )}

              {/* Controls */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-xl text-slate-600 hover:bg-slate-100 transition"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-academy-blue text-white hover:bg-academy-blue/95 flex items-center gap-1.5 px-6 py-3 text-sm font-semibold rounded-xl shadow-md cursor-pointer transition"
                  >
                    Continue <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-academy-gold text-slate-900 font-bold hover:bg-academy-gold/90 border border-academy-gold flex items-center gap-2 px-8 py-3.5 text-sm rounded-xl shadow-md cursor-pointer transition disabled:opacity-50"
                  >
                    {isSubmitting ? 'Scheduling...' : 'Confirm Assessment'}
                    <Calendar className="w-4 h-4 text-slate-900" />
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-8 px-4 space-y-6"
            >
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-heading text-2xl font-bold text-slate-800">Assessment Scheduled Successfully!</h4>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-800">{formData.parentName}</span>. We've reserved a free placement analysis profile code for <span className="font-semibold text-slate-800">{formData.studentName}</span> ({formData.grade}) in <span className="font-semibold text-slate-800">{formData.subject}</span>.
                </p>
              </div>

              {/* Dashboard summary detail */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 text-left text-sm max-w-md mx-auto space-y-3">
                <h5 className="font-semibold text-xs uppercase text-slate-500 tracking-wider">Next Step Schedule Checklist</h5>
                <div className="space-y-2 text-slate-600 text-xs">
                  <p className="flex items-start gap-2">
                    <span className="w-4 h-4 bg-academy-blue/10 text-academy-blue rounded-full flex items-center justify-center font-bold font-sans shrink-0 mt-0.5">1</span>
                    An academy counselor will call/WhatsApp you at <span className="font-medium text-slate-800">{formData.phone}</span> within 2 hours.
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-4 h-4 bg-academy-blue/10 text-academy-blue rounded-full flex items-center justify-center font-bold font-sans shrink-0 mt-0.5">2</span>
                    A free diagnostic pack was compiled and a verification link emailed to <span className="font-medium text-slate-800">{formData.email}</span>.
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-4 h-4 bg-academy-blue/10 text-academy-blue rounded-full flex items-center justify-center font-bold font-sans shrink-0 mt-0.5">3</span>
                    Assessment sessions take place at <span className="font-semibold text-academy-blue">Lofentse Girls High School</span>, Orlando.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setCompleted(false);
                    setStep(1);
                    setFormData({
                      parentName: '',
                      studentName: '',
                      grade: '',
                      phone: '',
                      email: '',
                      subject: '',
                      style: '',
                      dayPreference: '',
                    });
                  }}
                  className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl transition"
                >
                  Schedule Another Assessment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

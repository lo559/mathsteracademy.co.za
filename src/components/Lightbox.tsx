/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; title: string; category: string }[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrev,
  onNext,
}) => {
  // Lock body scroll when overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop glassmorphism background overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-zoom-out"
        />

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative max-w-5xl w-full flex flex-col items-center justify-center z-10 space-y-4"
        >
          {/* Header toolbar */}
          <div className="w-full flex justify-between items-center text-white px-2">
            <div>
              <span className="text-[10px] font-bold text-academy-gold uppercase tracking-widest bg-white/10 px-2.5 py-0.5 rounded-full mb-1 inline-block">
                {currentImage.category}
              </span>
              <h4 className="font-heading text-lg font-bold text-white leading-tight">
                {currentImage.title}
              </h4>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Main Stage */}
          <div className="relative w-full flex items-center justify-center min-h-[40vh] max-h-[70vh] group bg-black/40 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Sliding Image */}
            <motion.img
              key={currentImage.url}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              src={currentImage.url}
              alt={currentImage.title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[66vh] object-contain rounded-2xl p-1"
            />

            {/* Left Hand Indicator */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-4 p-3 bg-black/60 hover:bg-academy-gold hover:text-slate-900 border border-white/10 rounded-full transition opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Right Hand Indicator */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={onNext}
                className="absolute right-4 p-3 bg-black/60 hover:bg-academy-gold hover:text-slate-900 border border-white/10 rounded-full transition opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Indicators dots */}
          <div className="flex gap-2 justify-center">
            {images.map((img, idx) => (
              <button
                key={img.url}
                onClick={() => {}}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'w-6 bg-academy-gold' : 'w-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

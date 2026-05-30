/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  variant?: 'compact' | 'full' | 'icon';
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', light = false }) => {
  const primaryColor = light ? '#FFFFFF' : '#1E355E';
  const accentColor = '#C6922E'; // Gold
  const silverColor = light ? '#E4E4E7' : '#71717A';

  // SVGs for the academic symbols
  const renderSymbols = (size: number) => {
    const scale = size / 100;
    return (
      <svg
        width={size}
        height={size * 0.55}
        viewBox="0 0 160 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Fibonacci Spiral (Left, Golden) */}
        <g transform="translate(15, 10) scale(0.65)" className="opacity-95">
          {/* Fibonacci boxes and arc */}
          <rect x="0" y="0" width="55" height="55" rx="2" stroke={accentColor} strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
          <rect x="55" y="0" width="34" height="34" rx="2" stroke={accentColor} strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
          <path
            d="M 0 55 A 55 55 0 0 1 55 0 A 34 34 0 0 0 55 34 A 21 21 0 0 1 34 55"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="34" cy="34" r="2" fill={accentColor} />
        </g>

        {/* Ruler (Square backing) */}
        <path
          d="M 105 18 L 132 45 L 85 45 Z"
          stroke={silverColor}
          strokeWidth="1.5"
          fill={`${silverColor}15`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Ruler marks */}
        <line x1="88" y1="45" x2="88" y2="41" stroke={silverColor} strokeWidth="1" />
        <line x1="93" y1="45" x2="93" y2="42" stroke={silverColor} strokeWidth="1" />
        <line x1="98" y1="45" x2="98" y2="41" stroke={silverColor} strokeWidth="1" />
        <line x1="103" y1="45" x2="103" y2="42" stroke={silverColor} strokeWidth="1" />
        <line x1="108" y1="45" x2="108" y2="41" stroke={silverColor} strokeWidth="1" />
        <line x1="113" y1="45" x2="113" y2="42" stroke={silverColor} strokeWidth="1" />
        <line x1="118" y1="45" x2="118" y2="41" stroke={silverColor} strokeWidth="1" />
        <line x1="123" y1="45" x2="123" y2="42" stroke={silverColor} strokeWidth="1" />

        {/* Compass (Center, Silver) */}
        <g transform="translate(62, 12)">
          {/* Compass Handle */}
          <circle cx="15" cy="4" r="2.5" fill={silverColor} />
          <rect x="14" y="4" width="2" height="10" rx="1" fill={silverColor} stroke={primaryColor} strokeWidth="0.5" />
          {/* Compass Hinge Pin */}
          <circle cx="15" cy="14" r="3.5" fill={primaryColor} stroke={silverColor} strokeWidth="1.5" />
          <circle cx="15" cy="14" r="1.5" fill={silverColor} />
          {/* Left Leg */}
          <path d="M 13.5 14 L 3 46 L 5 46.5 L 14.5 14" fill={silverColor} />
          <circle cx="3" cy="46" r="1" fill={primaryColor} />
          {/* Right Leg */}
          <path d="M 16.5 14 L 27 46 L 25 46.5 L 15.5 14" fill={silverColor} />
          <circle cx="27" cy="46" r="1.5" fill={accentColor} />
          {/* Adjusting thread wheel */}
          <rect x="10" y="24" width="10" height="2" rx="0.5" fill={silverColor} />
          <line x1="6" y1="25" x2="24" y2="25" stroke={silverColor} strokeWidth="0.75" />
          {/* Drawn circle arc */}
          <path d="M -3 36 A 25 25 0 0 0 33 36" stroke={silverColor} strokeWidth="1" strokeDasharray="3 3" fill="none" />
        </g>

        {/* Molecules/Science Graph (Right background) */}
        <g transform="translate(48, 5) scale(0.85)">
          {/* Connection Lines */}
          <line x1="60" y1="20" x2="80" y2="15" stroke={silverColor} strokeWidth="1.5" />
          <line x1="80" y1="15" x2="95" y2="30" stroke={silverColor} strokeWidth="1.5" />
          <line x1="80" y1="15" x2="85" y2="40" stroke={silverColor} strokeWidth="1.5" />
          <line x1="60" y1="20" x2="52" y2="38" stroke={silverColor} strokeWidth="1.5" />
          {/* Nodes */}
          <circle cx="60" cy="20" r="5" fill={silverColor} stroke={primaryColor} strokeWidth="1" />
          <circle cx="80" cy="15" r="7.5" fill={silverColor} stroke={primaryColor} strokeWidth="1.25" />
          <circle cx="95" cy="30" r="4.5" fill={silverColor} stroke={primaryColor} strokeWidth="1" />
          <circle cx="85" cy="40" r="5.5" fill={silverColor} stroke={primaryColor} strokeWidth="1" />
          <circle cx="52" cy="38" r="4.5" fill={silverColor} stroke={primaryColor} strokeWidth="1" />
        </g>

        {/* Atom Symbol (Bottom Right, Orbiting Theme) */}
        <g transform="translate(115, 48) scale(0.95)" className="animate-[spin_12s_linear_infinite]">
          {/* Central Nucleus */}
          <circle cx="15" cy="15" r="3.5" fill={accentColor} />
          <circle cx="13" cy="13" r="2" fill={silverColor} />
          {/* Orbit Ring 1 */}
          <ellipse cx="15" cy="15" rx="15" ry="4" transform="rotate(30 15 15)" stroke={silverColor} strokeWidth="1" fill="none" />
          {/* Orbit Ring 2 */}
          <ellipse cx="15" cy="15" rx="15" ry="4" transform="rotate(-30 15 15)" stroke={accentColor} strokeWidth="1" fill="none" />
          {/* Orbit Ring 3 */}
          <ellipse cx="15" cy="15" rx="15" ry="4" transform="rotate(90 15 15)" stroke={primaryColor} strokeWidth="1" fill="none" />
          {/* Electron items */}
          <circle cx="2" cy="7" r="1.5" fill={accentColor} />
          <circle cx="28" cy="23" r="1.5" fill={silverColor} />
          <circle cx="18" cy="0" r="1.2" fill={primaryColor} />
        </g>
      </svg>
    );
  };

  const renderText = () => {
    return (
      <div className="flex flex-col items-center justify-center leading-none text-center">
        {/* MATHSTER BRAND */}
        <span
          className="font-heading text-2xl md:text-3.5xl font-extrabold tracking-wide uppercase transition-all duration-300"
          style={{
            color: primaryColor,
            textShadow: light ? '0 1px 4px rgba(0,0,0,0.1)' : '0 1px 2px rgba(30, 53, 94, 0.15)',
            letterSpacing: '0.07em'
          }}
        >
          Mathster
        </span>
        {/* ACADEMY SUB-BRANDED FOOTING */}
        <span
          className="font-sans text-[10px] md:text-xs font-bold tracking-[0.45em] uppercase text-center mt-1 select-none pr-[-0.45em] inline-block"
          style={{ color: accentColor }}
        >
          Academy
        </span>
      </div>
    );
  };

  if (variant === 'icon') {
    return (
      <div className={`p-1.5 rounded-xl border border-academy-gold/20 bg-white/60 backdrop-blur-md shadow-sm inline-block ${className}`}>
        {renderSymbols(48)}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="h-10 w-16 overflow-hidden flex items-center justify-center bg-white/40 p-1.5 rounded-lg border border-slate-200/50">
          {renderSymbols(48)}
        </div>
        <div className="flex flex-col items-start leading-none justify-center">
          <span className="font-heading text-lg md:text-xl font-extrabold tracking-wide uppercase" style={{ color: primaryColor }}>
            Mathster
          </span>
          <span className="font-sans text-[8px] md:text-[9px] font-bold tracking-[0.35em] uppercase" style={{ color: accentColor }}>
            Academy
          </span>
        </div>
      </div>
    );
  }

  // Full stack logo
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <div className="transform hover:scale-105 transition-transform duration-500 flex justify-center items-center">
        {renderSymbols(130)}
      </div>
      {renderText()}
    </div>
  );
};

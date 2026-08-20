import React from 'react';

interface DomestoLogoProps {
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
}

export const DomestoLogo: React.FC<DomestoLogoProps> = ({
  variant = 'color',
  showSubtitle = true,
  className = '',
  iconOnly = false,
  size = 'md',
  layout = 'horizontal'
}) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-[#201E50]';
  const subColor = variant === 'light' ? 'text-slate-300' : 'text-[#201E50]';
  
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  }[size];

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl'
  }[size];

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-[13px]'
  }[size];

  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col items-center text-center gap-2' : 'items-center gap-3'} select-none ${className}`}>
      {/* Brand Icon - 3-Petal Crown Emblem with Red Base */}
      <div className={`relative flex-shrink-0 ${iconDimensions}`}>
        <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <defs>
            {/* Left Petal: Cyan / Teal Gradient */}
            <linearGradient id="domestoCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00B4D8" />
              <stop offset="100%" stopColor="#0077B6" />
            </linearGradient>

            {/* Center Petal: Bright Green Gradient */}
            <linearGradient id="domestoGreen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8BC34A" />
              <stop offset="100%" stopColor="#558B2F" />
            </linearGradient>

            {/* Right Petal: Lime / Yellow-Green Gradient */}
            <linearGradient id="domestoLime" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DCE775" />
              <stop offset="100%" stopColor="#9E9D24" />
            </linearGradient>
          </defs>

          {/* Left Wing Petal - Cyan/Teal */}
          <path d="M 22 34 L 56 68 L 38 68 L 18 46 Z" fill="url(#domestoCyan)" />

          {/* Center Peak Petal - Bright Leaf Green */}
          <path d="M 60 14 L 40 68 L 80 68 Z" fill="url(#domestoGreen)" />

          {/* Right Wing Petal - Lime Green */}
          <path d="M 98 34 L 102 46 L 82 68 L 64 68 Z" fill="url(#domestoLime)" />

          {/* Bottom Foundation Bar - Crimson Red */}
          <rect x="26" y="74" width="68" height="6" rx="3" fill="#E53935" />
        </svg>
      </div>

      {/* Brand Typography */}
      {!iconOnly && (
        <div className={`flex flex-col leading-tight ${layout === 'vertical' ? 'items-center' : 'items-start'}`}>
          <span className={`font-black tracking-[0.12em] uppercase font-sans ${titleSizes} ${textColor}`}>
            DOMESTO
          </span>
          {showSubtitle && (
            <span className={`font-bold tracking-[0.32em] uppercase text-opacity-90 ${subtitleSizes} ${subColor}`}>
              HOME SERVICES
            </span>
          )}
        </div>
      )}
    </div>
  );
};


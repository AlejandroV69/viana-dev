import React from 'react';

const SectionHeading = ({ badge, title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3 ${centered ? 'justify-center' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 text-base md:text-lg max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

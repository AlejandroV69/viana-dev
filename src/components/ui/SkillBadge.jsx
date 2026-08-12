import React from 'react';

const SkillBadge = ({ name, level, icon, highlight }) => {
  return (
    <div
      className={`group relative p-4 rounded-xl transition-all duration-300 flex items-center gap-3.5 border ${
        highlight
          ? 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-950/20'
          : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
      }`}
    >
      <div className={`p-2.5 rounded-lg flex items-center justify-center ${
        highlight ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-slate-800 text-slate-300'
      }`}>
        <span className="material-symbols-outlined text-xl">{icon || 'code'}</span>
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
          {name}
        </h4>
        <p className="text-xs text-slate-400 font-mono mt-0.5">{level}</p>
      </div>

      {highlight && (
        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"></span>
      )}
    </div>
  );
};

export default SkillBadge;

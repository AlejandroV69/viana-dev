import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'hold' | 'exit'

  useEffect(() => {
    // Enter -> Hold
    const holdTimer = setTimeout(() => setPhase('hold'), 400);
    // Hold -> Exit
    const exitTimer = setTimeout(() => setPhase('exit'), 1200);
    // Complete
    const completeTimer = setTimeout(() => onComplete(), 1800);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 transition-opacity duration-500 ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div
        className={`flex flex-col items-center gap-4 transition-all duration-500 ${
          phase === 'enter'
            ? 'opacity-0 scale-90'
            : phase === 'hold'
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-110'
        }`}
      >
        {/* Logo Icon */}
        <div className="relative">
          <span className="font-mono text-5xl font-bold text-cyan-400 select-none">&lt;/&gt;</span>
          <div className="absolute -inset-4 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-100 tracking-tight">
            Alejandro<span className="text-cyan-400">.dev</span>
          </h1>
          <p className="text-xs font-mono text-slate-500 mt-1">Loading portfolio...</p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: phase === 'enter' ? '0%' : phase === 'hold' ? '90%' : '100%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

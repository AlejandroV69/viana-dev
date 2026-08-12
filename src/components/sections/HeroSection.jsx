import React from 'react';
import alejandroFoto from '../../assets/alejandro.jpg';
import { useTypewriter, useParallax } from '../../hooks/useScrollEffects';
import AnimatedCounter from '../ui/AnimatedCounter';

const HeroSection = () => {
  const { displayText, isComplete } = useTypewriter(
    'Frontend Developer & Ingeniero de Sistemas',
    50,
    300
  );
  const parallaxOffset = useParallax(0.25);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Background Glow Effect with Parallax */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/10 to-purple-600/20 rounded-full blur-[120px] pointer-events-none will-change-transform"
        style={{ transform: `translate(-50%, calc(-50% + ${parallaxOffset}px))` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponible para proyectos & trabajo remoto
            </div>

            {/* Main Headline with Typewriter */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1] min-h-[2.4em] sm:min-h-[2.2em]">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              {!isComplete && (
                <span className="inline-block w-[3px] h-[0.9em] bg-cyan-400 ml-1 animate-blink align-middle"></span>
              )}
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Soy <span className="text-slate-200 font-semibold">Alejandro Viana</span>. Creo aplicaciones web de alto rendimiento combinando React, Tailwind CSS y Supabase con flujos de desarrollo asistidos por Inteligencia Artificial.
            </p>

            {/* CTAs & Action buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center gap-2 group"
              >
                Ver Mis Proyectos
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>

              <a
                href="/Curriculum%20Alejandro.pdf"
                download="Curriculum_Alejandro_Viana.pdf"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all duration-200 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg text-cyan-400">download</span>
                Descargar CV
              </a>

              <a
                href="https://wa.me/584143156352?text=Hola%20Alejandro%2C%20he%20visto%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                WhatsApp
              </a>
            </div>

            {/* Key Quick Stats with Animated Counters */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono">
                  <AnimatedCounter value={3} suffix="+" />
                </p>
                <p className="text-xs text-slate-400 font-medium">Proyectos En Vivo</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono">
                  <AnimatedCounter value={6} suffix="+" />
                </p>
                <p className="text-xs text-slate-400 font-medium">Tecnologías</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono">
                  <AnimatedCounter value={100} suffix="%" />
                </p>
                <p className="text-xs text-slate-400 font-medium">Compromiso UX</p>
              </div>
            </div>

          </div>

          {/* Right Profile Photo */}
          <div className="relative w-full max-w-md lg:max-w-none lg:w-96 flex-shrink-0">
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-4 backdrop-blur-xl shadow-2xl overflow-hidden group">
              
              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-cyan-500/30">
                <img
                  src={alejandroFoto}
                  alt="Alejandro Viana"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-left">
                  <p className="text-xs font-mono text-cyan-400">@AlejandroV69</p>
                  <p className="text-sm font-bold text-slate-100">Alejandro Viana</p>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Perfil Verificado
                </span>
                <span className="text-emerald-400">ONLINE</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

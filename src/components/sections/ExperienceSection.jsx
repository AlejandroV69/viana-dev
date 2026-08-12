import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import { experienceData } from '../../data/experience';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Trayectoria"
            title="Experiencia Profesional & Logros"
            subtitle="Recorrido demostrable creando soluciones digitales y perfeccionando el arte del desarrollo web."
          />
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-slate-800 to-transparent -translate-x-1/2"></div>

          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <div
                  className={`relative flex flex-col sm:flex-row items-start ${
                    idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_10px_#38bdf8] z-10"></div>

                  {/* Content Box */}
                  <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                          {exp.period}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{exp.company}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>

                      <div className="pt-2 space-y-1">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

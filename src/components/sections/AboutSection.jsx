import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Sobre mí"
            title="Ingeniería de Software centrada en la Experiencia de Usuario"
            subtitle="Combino pensamiento estructurado de ingeniería con sensibilidad estética visual para construir productos web memorables."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Mi Filosofía */}
          <ScrollReveal delay={0}>
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors space-y-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">palette</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Diseño UI/UX de Alto Nivel</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No se trata solo de hacer que algo se vea bonito, sino de hacer que la interacción sea intuitiva, rápida y sin fricción. Creo en interfaces limpias, accesibles y con micro-interacciones sutiles.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Arquitectura Frontend */}
          <ScrollReveal delay={150}>
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors space-y-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Frontend Robusto y Limpio</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dominio moderno de React, manejo de estado escalable y optimización de rendimiento en el cliente. Código modular, legible y fácil de mantener a largo plazo.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Integración de IA & Innovación */}
          <ScrollReveal delay={300}>
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors space-y-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">auto_awesome</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Desarrollo Impulsado por IA</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Aprovecho flujos de trabajo avanzados asistidos por IA y APIs de LLMs para prototipar rápidamente, optimizar procesos de desarrollo y crear productos verdaderamente inteligentes.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

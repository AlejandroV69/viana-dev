import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import SkillBadge from '../ui/SkillBadge';
import ScrollReveal from '../ui/ScrollReveal';
import { skillsData } from '../../data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Tech Stack"
            title="Habilidades Técnicas & Herramientas"
            subtitle="Las tecnologías reales con las que desarrollo aplicaciones escalables, interactivas y con excelente UX."
          />
        </ScrollReveal>

        <div className="space-y-12">
          {/* Frontend Column */}
          <ScrollReveal>
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Desarrollo Frontend & UI
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillsData.frontend.map((skill, i) => (
                  <SkillBadge key={i} {...skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Backend & DB Column */}
          <ScrollReveal delay={150}>
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                Backend, BaaS & Integración de APIs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillsData.backendAndDb.map((skill, i) => (
                  <SkillBadge key={i} {...skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Tools & Workflow */}
          <ScrollReveal delay={300}>
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Deploy, Visualización & Herramientas IA
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillsData.toolsAndIa.map((skill, i) => (
                  <SkillBadge key={i} {...skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

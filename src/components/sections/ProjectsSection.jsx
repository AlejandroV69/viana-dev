import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import ScrollReveal from '../ui/ScrollReveal';
import { projectsData, categoriesData } from '../../data/projects';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Proyectos Destacados"
            title="Trabajo Real que Genera Resultados"
            subtitle="Una selección de aplicaciones web, dashboards e interfaces interactivas construidas con un estándar Senior de UX/UI."
          />
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {categoriesData.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/40">
      {/* Visual Image Banner */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        {/* Category Pill */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-mono font-medium rounded-full bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/20">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2.5 text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.metrics.map((metric, i) => (
                <span key={i} className="inline-flex items-center text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
                  ⚡ {metric}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer & Tech Tags */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors font-medium"
            >
              <span className="material-symbols-outlined text-base">code</span>
              Código Fuente
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/link"
            >
              Demo En Vivo
              <span className="material-symbols-outlined text-base group-hover/link:translate-x-0.5 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

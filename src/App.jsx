import React, { useState, useEffect, useRef } from 'react';
import manosDeVueltaImg from './assets/manos_de_vuelta.png';
import tamanacoImg from './assets/tamanaco.jpg';
import alejandroImg from './assets/alejandro.jpg';

function App() {
  const projectsData = [
    {
      title: "Hotel Tamanaco - Sistema de Satisfacción",
      description: "Sistema premium de encuestas y dashboard administrativo para el Hotel Tamanaco, con selector telefónico global y panel con Supabase Auth.",
      tags: ["React 18", "Vite", "Tailwind CSS", "Supabase", "React Router DOM v6"],
      status: "En vivo",
      image: tamanacoImg,
      codeLink: "https://github.com/AlejandroV69/sistema-satisfaccion-tamanaco",
      demoLink: "https://sistema-satisfaccion-tamanaco-edua09fe3.vercel.app/"
    },
    {
      title: "Manos de Vuelta",
      description: "Plataforma solidaria en Venezuela para solicitar o donar alimentos, medicinas e insumos médicos dentro de su comunidad con contacto directo por WhatsApp.",
      tags: ["React", "Supabase", "Tailwind", "WhatsApp API"],
      status: "En vivo",
      image: manosDeVueltaImg,
      codeLink: "https://github.com/AlejandroV69/Manos_de_Vuelta",
      demoLink: "https://manos-de-vuelta.vercel.app"
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', etc.

  // Sections list for scroll tracking
  const sections = ['inicio', 'proyectos', 'sobre-mi', 'contacto'];

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      setFormStatus('error');
      return;
    }
    // Simulate successful API call
    setFormStatus('success');
    setFormData({ nombre: '', correo: '', mensaje: '' });
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  // Smooth scroll
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy and fade-in animations on mount
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible classes for fade-in scroll animation
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-4');

          // Update active navigation link
          if (sections.includes(entry.target.id)) {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    const elements = document.querySelectorAll('section');
    elements.forEach((el) => {
      // Initialize hidden states for nice entry animations
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-outline-variant/10">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleNavClick(e, 'inicio')}>
            <span className="material-symbols-outlined text-primary select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
              terminal
            </span>
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
              Alejandro.dev
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-stack-lg">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={(e) => handleNavClick(e, sec)}
                className={`font-label-md text-label-md transition-all duration-200 capitalize ${activeSection === sec
                  ? 'text-primary font-bold active-glow-text'
                  : 'text-on-surface-variant hover:text-primary'
                  }`}
              >
                {sec === 'sobre-mi' ? 'Sobre Mí' : sec}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-on-surface p-2 transition-all active:scale-95 cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined select-none">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 nav-blur border-b border-outline-variant/15 flex flex-col items-center py-6 gap-4 animate-fade-in">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={(e) => handleNavClick(e, sec)}
                className={`w-full text-center py-2 font-label-md text-label-md transition-all capitalize ${activeSection === sec
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-primary'
                  }`}
              >
                {sec === 'sobre-mi' ? 'Sobre Mí' : sec}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative pt-24">
        {/* Hero Section */}
        <section
          id="inicio"
          className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-[707px] flex flex-col md:flex-row items-center justify-center gap-12 py-section-gap"
        >
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible para nuevos retos
            </div>

            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-gradient leading-tight">
              Hola, soy Alejandro
            </h1>

            <p className="font-headline-md text-headline-md text-primary font-medium">
              Frontend Developer &amp; Estudiante de Ingeniería de Sistemas
            </p>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
              Construyendo interfaces interactivas y eficientes con las últimas tecnologías. Me especializo en crear experiencias digitales fluidas y orientadas al usuario.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={(e) => handleNavClick(e, 'proyectos')}
                className="w-full sm:w-auto bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md py-3 px-8 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20 cursor-pointer"
              >
                Ver Proyectos
              </button>
              <a
                href="/Curriculum%20Alejandro.pdf"
                download="Curriculum_Alejandro_Viana.pdf"
                className="w-full sm:w-auto text-center border border-outline-variant hover:border-primary text-on-surface font-label-md text-label-md py-3 px-8 rounded-lg transition-all duration-200 hover:bg-primary/5 cursor-pointer"
              >
                Descargar CV
              </a>
              <div className="flex items-center gap-2 ml-0 sm:ml-4">
                <button
                  onClick={() => alert('Proyecto en React de Alejandro')}
                  className="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                  title="Código de este sitio"
                >
                  <span className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                    code
                  </span>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Enlace copiado al portapapeles!');
                  }}
                  className="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                  title="Compartir portafolio"
                >
                  <span className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                    share
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden relative border border-outline-variant/30 active-glow">
              <img
                className="w-full h-full object-cover"
                alt="Alejandro's Profile Picture"
                src={alejandroImg}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="proyectos"
          className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-2">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Proyectos Destacados</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <p className="text-on-surface-variant font-label-md text-label-md">Explora mis últimos trabajos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto justify-center">
            {projectsData.map((project, idx) => (
              <div key={idx} className="glass-card rounded-xl overflow-hidden flex flex-col glow-hover transition-all duration-300 group">
                <div className="h-56 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={`${project.title} UI Mockup`}
                    src={project.image}
                  />
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full border border-outline-variant/30 text-primary font-label-sm text-label-sm select-none">
                      {project.status}
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <h3 className="font-headline-md text-headline-md text-on-surface">{project.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md text-left">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-md bg-surface-container text-primary font-label-sm text-label-sm border border-outline-variant/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4 mt-auto">
                    <button
                      onClick={() => {
                        if (project.codeLink && project.codeLink !== '#') {
                          window.open(project.codeLink, '_blank', 'noopener,noreferrer');
                        } else {
                          alert(`Redireccionando al repositorio de GitHub de ${project.title}... (Simulado)`);
                        }
                      }}
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-outline-variant hover:bg-primary/10 hover:border-primary transition-all text-on-surface font-label-md text-label-md cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] select-none">code</span> Código
                    </button>
                    <button
                      onClick={() => {
                        if (project.demoLink && project.demoLink !== '#') {
                          window.open(project.demoLink, '_blank', 'noopener,noreferrer');
                        } else {
                          alert(`Demo en vivo de ${project.title} (Simulado)`);
                        }
                      }}
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary-container/20 text-primary border border-primary/30 hover:bg-primary-container transition-all text-on-primary-container font-label-md text-label-md cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] select-none">visibility</span> Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="bg-surface-container-low/50 py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center space-y-12">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Stack Tecnológico</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none">
                <span className="material-symbols-outlined text-4xl text-primary select-none">javascript</span>
                <span className="font-label-sm text-label-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none">
                <span className="material-symbols-outlined text-4xl text-primary select-none">data_object</span>
                <span className="font-label-sm text-label-sm">React</span>
              </div>
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none">
                <span className="material-symbols-outlined text-4xl text-primary select-none">css</span>
                <span className="font-label-sm text-label-sm">Tailwind</span>
              </div>
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none">
                <span className="material-symbols-outlined text-4xl text-primary select-none">integration_instructions</span>
                <span className="font-label-sm text-label-sm">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none">
                <span className="material-symbols-outlined text-4xl text-primary select-none">account_tree</span>
                <span className="font-label-sm text-label-sm">Git</span>
              </div>
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none">
                <span className="material-symbols-outlined text-4xl text-primary select-none">database</span>
                <span className="font-label-sm text-label-sm">Supabase</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Mí Section */}
        <section
          id="sobre-mi"
          className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square glass-card rounded-2xl p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, #8ed5ff 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  ></div>
                </div>
                <div className="text-center space-y-4 relative z-10">
                  <span className="material-symbols-outlined text-6xl text-primary mb-4 block select-none">engineering</span>
                  <div className="font-display-lg-mobile text-primary font-bold">10</div>
                  <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                    Ingeniería de Sistemas (Último Semestre)
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Sobre Mí</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-left">
                Soy un apasionado <span className="text-primary font-medium">Ingeniero de Sistemas en formación</span> enfocado en la calidad de código, refactorización y resolución de problemas lógicos.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-left">
                Mi enfoque combina la rigurosidad técnica de la ingeniería con la creatividad del desarrollo frontend. Siempre busco aprender nuevas herramientas que me permitan construir soluciones escalables y centradas en el usuario.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-surface-container-high border border-outline-variant/20 text-left">
                  <h4 className="text-primary font-bold font-label-md text-label-md mb-1">Misión</h4>
                  <p className="text-on-surface-variant text-sm">Crear código limpio y eficiente.</p>
                </div>
                <div className="p-4 rounded-lg bg-surface-container-high border border-outline-variant/20 text-left">
                  <h4 className="text-primary font-bold font-label-md text-label-md mb-1">Pasión</h4>
                  <p className="text-on-surface-variant text-sm">Interfaces minimalistas y fluidas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <section
          id="contacto"
          className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="max-w-2xl mx-auto space-y-8 relative z-10">
              <div className="text-center space-y-4">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">¿Tienes un proyecto en mente?</h2>
                <p className="text-on-surface-variant font-body-md text-body-md">Estoy disponible para colaboraciones o consultas técnicas.</p>
              </div>

              {formStatus === 'success' && (
                <div className="bg-secondary/10 border border-secondary text-secondary px-4 py-3 rounded-xl text-center font-label-md text-label-md animate-pulse">
                  ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-error/10 border border-error text-error px-4 py-3 rounded-xl text-center font-label-md text-label-md">
                  Por favor, rellena todos los campos antes de enviar.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="font-label-sm text-label-sm text-on-surface-variant px-1">Nombre</label>
                    <input
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-on-surface"
                      placeholder="Tu nombre"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="font-label-sm text-label-sm text-on-surface-variant px-1">Correo</label>
                    <input
                      name="correo"
                      value={formData.correo}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-on-surface"
                      placeholder="tu@email.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <label className="font-label-sm text-label-sm text-on-surface-variant px-1">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-on-surface"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-on-primary font-bold font-label-md text-label-md rounded-xl hover:scale-[1.01] active:scale-[0.98] transition-all shadow-xl shadow-primary/10 cursor-pointer"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant/10 bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto gap-stack-md">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-headline-md text-headline-md font-bold text-on-surface">Alejandro.dev</span>
            <p className="font-body-md text-body-md text-on-surface-variant/60 font-label-sm text-label-sm">
              © 2026 Alejandro.dev. Engineered for performance.
            </p>
          </div>
          <div className="flex gap-stack-lg">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={(e) => handleNavClick(e, sec)}
                className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm uppercase tracking-wider capitalize"
              >
                {sec === 'sobre-mi' ? 'Sobre Mí' : sec}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              onClick={(e) => {
                e.preventDefault();
                alert('GitHub Link (Simulado)');
              }}
              className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all cursor-pointer"
              href="#"
              aria-label="GitHub Profile"
            >
              <span className="material-symbols-outlined text-[20px] select-none">code</span>
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                alert('LinkedIn Profile (Simulado)');
              }}
              className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all cursor-pointer"
              href="#"
              aria-label="LinkedIn Profile"
            >
              <span className="material-symbols-outlined text-[20px] select-none">person</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

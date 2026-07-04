import React, { useState, useEffect, useRef } from 'react';
import manosDeVueltaImg from './assets/manos_de_vuelta.png';
import tamanacoImg from './assets/tamanaco.jpg';
import alejandroImg from './assets/alejandro.jpg';
import chocoImg from './assets/choco_inventory.png';

function App() {
  const projectsData = [
    {
      title: "ChocoInventory",
      description: "Plataforma web para pequeños y medianos negocios que necesitan gestión inteligente de inventario. Permite registrar productos, controlar stock, recibir alertas y predecir demanda futura utilizando datos históricos.",
      tags: ["JavaScript (ES6+)", "Chart.js", "CSS3", "LocalStorage"],
      status: "Prototipo",
      image: chocoImg,
      codeLink: "https://github.com/AlejandroV69/PROTOTIPO-DE-SISTEMA-INTELIGENTE-DE-GESTI-N-Y-PREDICCI-N-DE-INVESTARIOS",
      demoLink: "https://prototipo-de-sistema-inteligente-de.vercel.app/"
    },
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
  const [typewriterText, setTypewriterText] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const fullTitle = "Frontend Developer & Estudiante de Ingeniería de Sistemas";

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

    // Typewriter effect
    let i = 0;
    const typeInterval = setInterval(() => {
      setTypewriterText(fullTitle.substring(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(typeInterval);
    }, 50);

    // Scroll to top visibility
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearInterval(typeInterval);
      window.removeEventListener('scroll', handleScroll);
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
          <div className="hidden md:flex items-center gap-8">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={(e) => handleNavClick(e, sec)}
                className={`text-sm md:text-base font-medium transition-all duration-200 capitalize ${activeSection === sec
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
          <div className="md:hidden absolute top-full left-0 right-0 nav-blur border-b border-outline-variant/15 flex flex-col items-center py-6 gap-4 animate-fade-in shadow-xl">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={(e) => handleNavClick(e, sec)}
                className={`w-full text-center py-3 text-base font-medium transition-all capitalize ${activeSection === sec
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
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Disponible para nuevos retos
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                AI-Powered Dev
              </div>
            </div>

            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient leading-tight">
              Hola, soy Alejandro
            </h1>

            <p className="font-semibold text-xl sm:text-2xl text-primary h-auto min-h-[3.5rem] md:min-h-[4rem]">
              {typewriterText}<span className="inline-block w-[3px] h-6 sm:h-7 ml-1 bg-primary animate-blink align-middle"></span>
            </p>

            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
              Construyendo interfaces interactivas y eficientes, potenciando el desarrollo con herramientas de Inteligencia Artificial. Me especializo en crear experiencias digitales fluidas y orientadas al usuario.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 justify-center md:justify-start">
              <div className="text-center md:text-left">
                <span className="block text-2xl sm:text-3xl text-primary font-bold">10+</span>
                <span className="text-on-surface-variant text-xs sm:text-sm uppercase tracking-wider">Proyectos</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-2xl sm:text-3xl text-primary font-bold">4</span>
                <span className="text-on-surface-variant text-xs sm:text-sm uppercase tracking-wider">Tecnologías Core</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-2xl sm:text-3xl text-primary font-bold">100%</span>
                <span className="text-on-surface-variant text-xs sm:text-sm uppercase tracking-wider">Compromiso</span>
              </div>
            </div>

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
              <h2 className="font-bold text-3xl sm:text-4xl text-on-surface text-center md:text-left">Proyectos Destacados</h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0"></div>
            </div>
            <p className="text-on-surface-variant text-sm sm:text-base text-center md:text-left">Explora mis últimos trabajos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl overflow-hidden flex flex-col glow-hover transition-all duration-300 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={project.title === 'Manos de Vuelta' ? { objectPosition: 'top center' } : {}}
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
                  <h3 className="font-bold text-xl sm:text-2xl text-on-surface">{project.title}</h3>
                  <p className="text-on-surface-variant text-sm sm:text-base text-left">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-md bg-surface-container text-primary text-xs sm:text-sm font-medium border border-outline-variant/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 mt-auto">
                    <button
                      onClick={() => {
                        if (project.codeLink && project.codeLink !== '#') {
                          window.open(project.codeLink, '_blank', 'noopener,noreferrer');
                        } else {
                          alert(`Redireccionando al repositorio de GitHub de ${project.title}... (Simulado)`);
                        }
                      }}
                      className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-2 rounded-lg border border-outline-variant hover:bg-primary/10 hover:border-primary transition-all text-on-surface text-sm sm:text-base font-medium cursor-pointer"
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
                      className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-2 rounded-lg bg-primary-container/20 text-primary border border-primary/30 hover:bg-primary-container transition-all text-on-primary-container text-sm sm:text-base font-medium cursor-pointer"
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
            <h2 className="font-bold text-3xl sm:text-4xl text-on-surface">Stack Tecnológico</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none w-20">
                <span className="material-symbols-outlined text-4xl text-primary select-none">javascript</span>
                <span className="text-xs sm:text-sm font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none w-20">
                <span className="material-symbols-outlined text-4xl text-primary select-none">data_object</span>
                <span className="text-xs sm:text-sm font-medium">React</span>
              </div>
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none w-20">
                <span className="material-symbols-outlined text-4xl text-primary select-none">css</span>
                <span className="text-xs sm:text-sm font-medium">Tailwind</span>
              </div>
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none w-20">
                <span className="material-symbols-outlined text-4xl text-primary select-none">integration_instructions</span>
                <span className="text-xs sm:text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none w-20">
                <span className="material-symbols-outlined text-4xl text-primary select-none">account_tree</span>
                <span className="text-xs sm:text-sm font-medium">Git</span>
              </div>
              <div className="flex flex-col items-center gap-2 transition-all hover:opacity-100 hover:scale-110 select-none w-20">
                <span className="material-symbols-outlined text-4xl text-primary select-none">database</span>
                <span className="text-xs sm:text-sm font-medium">Supabase</span>
              </div>
            </div>

            <h3 className="font-bold text-2xl sm:text-3xl text-on-surface mt-16 mb-8 pt-8 border-t border-outline-variant/10">Actualmente Aprendiendo</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="px-6 py-3 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center gap-3 text-on-surface hover:border-primary transition-colors cursor-default">
                <span className="material-symbols-outlined text-primary">psychology</span>
                <span className="text-sm sm:text-base font-medium">Next.js 14</span>
              </div>
              <div className="px-6 py-3 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center gap-3 text-on-surface hover:border-primary transition-colors cursor-default">
                <span className="material-symbols-outlined text-primary">rocket_launch</span>
                <span className="text-sm sm:text-base font-medium">Herramientas IA</span>
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
                  <div className="text-5xl sm:text-7xl text-primary font-bold">10</div>
                  <div className="text-xs sm:text-sm font-medium text-on-surface-variant uppercase tracking-widest px-4">
                    Ingeniería de Sistemas (Último Semestre)
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-bold text-3xl sm:text-4xl text-on-surface text-center md:text-left">Sobre Mí</h2>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed text-center md:text-left">
                Soy un apasionado <span className="text-primary font-medium">Ingeniero de Sistemas en formación</span> enfocado en la calidad de código, refactorización y resolución de problemas lógicos.
              </p>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed text-center md:text-left">
                Mi enfoque combina la rigurosidad técnica de la ingeniería con la eficiencia del desarrollo impulsado por Inteligencia Artificial. Siempre busco integrar herramientas de IA que me permitan construir soluciones más avanzadas, escalables y centradas en el usuario.
              </p>

              <div className="pt-6 relative border-l-2 border-outline-variant/20 ml-3 space-y-8">
                <div className="relative pl-6 group">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(142,213,255,0.5)] group-hover:scale-125 transition-transform"></div>
                  <h4 className="text-on-surface font-bold text-sm sm:text-base">2026 - Presente</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Integración avanzada de IA en flujos de desarrollo y creación de plataformas escalables.</p>
                </div>
                <div className="relative pl-6 group">
                  <div className="absolute w-4 h-4 bg-surface-container-highest border-2 border-primary rounded-full -left-[9px] top-1 group-hover:bg-primary transition-colors"></div>
                  <h4 className="text-on-surface font-bold text-sm sm:text-base">2023 - 2026</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Especialización en ecosistema React, Tailwind CSS y backend con Supabase.</p>
                </div>
                <div className="relative pl-6 group">
                  <div className="absolute w-4 h-4 bg-surface-container-highest border-2 border-primary rounded-full -left-[9px] top-1 group-hover:bg-primary transition-colors"></div>
                  <h4 className="text-on-surface font-bold text-sm sm:text-base">2021</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Inicio de la carrera Ingeniería de Sistemas, forjando bases en algoritmos y lógica matemática.</p>
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
                <h2 className="font-bold text-3xl sm:text-4xl text-on-surface">¿Tienes un proyecto en mente?</h2>
                <p className="text-on-surface-variant text-sm sm:text-base">Estoy disponible para colaboraciones o consultas técnicas.</p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
                <a
                  href="https://wa.me/584143156352?text=Hola%20Alejandro%2C%20he%20visto%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-3 py-3 sm:py-4 px-6 sm:px-8 bg-primary text-on-primary font-bold text-sm sm:text-base rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 cursor-pointer"
                >
                  <span className="material-symbols-outlined select-none text-xl sm:text-2xl">chat</span>
                  Hablemos por WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/alejandro-viana-2a4a69309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-3 py-3 sm:py-4 px-6 sm:px-8 bg-surface-container-highest border border-outline-variant hover:border-primary text-on-surface font-bold text-sm sm:text-base rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined select-none text-xl sm:text-2xl">work</span>
                  Conectar en LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant/10 bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-margin-desktop py-8 max-w-container-max mx-auto gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-xl text-on-surface">Alejandro.dev</span>
            <p className="text-xs sm:text-sm text-on-surface-variant/60 text-center md:text-left">
              © 2026 Alejandro.dev. Engineered for performance.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={(e) => handleNavClick(e, sec)}
                className="text-on-surface-variant hover:text-primary transition-colors text-xs sm:text-sm uppercase tracking-wider capitalize"
              >
                {sec === 'sobre-mi' ? 'Sobre Mí' : sec}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/AlejandroV69"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all cursor-pointer"
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-viana-2a4a69309/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <a
        href="https://wa.me/584143156352?text=Hola%20Alejandro%2C%20he%20visto%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-12 h-12 bg-surface-container-high border border-outline-variant text-on-surface rounded-full shadow-lg hover:bg-primary/20 hover:text-primary transition-all active:scale-95 cursor-pointer animate-fade-in"
          aria-label="Volver arriba"
        >
          <span className="material-symbols-outlined select-none text-[24px]">keyboard_arrow_up</span>
        </button>
      )}
    </div>
  );
}

export default App;

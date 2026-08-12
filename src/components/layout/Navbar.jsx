import React, { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useScrollEffects';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#hero', id: 'hero' },
    { name: 'Sobre mí', href: '#about', id: 'about' },
    { name: 'Proyectos', href: '#projects', id: 'projects' },
    { name: 'Habilidades', href: '#skills', id: 'skills' },
    { name: 'Experiencia', href: '#experience', id: 'experience' },
    { name: 'Contacto', href: '#contact', id: 'contact' },
  ];

  const sectionIds = navLinks.map(l => l.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 font-bold text-lg text-slate-100 group"
        >
          <span className="font-mono text-cyan-400 text-xl group-hover:rotate-12 transition-transform">&lt;/&gt;</span>
          <span className="tracking-tight">Alejandro<span className="text-cyan-400">.dev</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-4 py-1.5 text-xs font-medium transition-all rounded-full ${
                activeSection === link.id
                  ? 'bg-cyan-400/15 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Right Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Curriculum%20Alejandro.pdf"
            download="Curriculum_Alejandro_Viana.pdf"
            className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">download</span>
            CV
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors rounded-lg shadow-lg shadow-cyan-500/20 flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">send</span>
            Hablemos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block text-sm font-medium transition-colors py-1 ${
                activeSection === link.id
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Curriculum%20Alejandro.pdf"
            download="Curriculum_Alejandro_Viana.pdf"
            className="w-full text-center px-4 py-2.5 text-sm font-semibold text-slate-200 bg-slate-800 rounded-lg block border border-slate-700"
          >
            📄 Descargar CV
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full text-center px-4 py-2.5 text-sm font-semibold text-slate-900 bg-cyan-400 rounded-lg block"
          >
            Hablemos
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

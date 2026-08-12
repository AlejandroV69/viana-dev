import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-cyan-400 text-xl font-bold">&lt;/&gt;</span>
            <span className="font-bold text-slate-100 text-lg">Alejandro Viana</span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-400 font-mono">Frontend & System Engineer</span>
          </div>

          {/* Center Socials */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-mono">
            <a
              href="https://github.com/AlejandroV69"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-viana-2a4a69309/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/viaana_alejandro/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors flex items-center gap-1"
            >
              Instagram
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yermainviana0508@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              Gmail
            </a>
          </div>

          {/* Right Copyright */}
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Alejandro.dev. Engineered for performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

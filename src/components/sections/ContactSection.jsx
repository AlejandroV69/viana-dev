import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Contacto"
            title="¿Tienes un proyecto o propuesta?"
            subtitle="Estoy disponible para colaborar en proyectos desafiantes o incorporarme a tu equipo de desarrollo."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Left Info Column */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-100">Hablemos directamente</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Puedes escribirme o seguirme a través de WhatsApp, LinkedIn, Instagram o correo electrónico. Respondo con la mayor brevedad posible.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/584143156352?text=Hola%20Alejandro%2C%20he%20visto%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">WhatsApp Directo</p>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">+58 414-3156352</p>
                  </div>
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=yermainviana0508@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">Correo Gmail</p>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">yermainviana0508@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/alejandro-viana-2a4a69309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-950 transition-colors">
                    <span className="material-symbols-outlined">work</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">LinkedIn</p>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">Alejandro Viana</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/viaana_alejandro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-slate-950 transition-colors">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">Instagram</p>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-pink-400 transition-colors">@viaana_alejandro</p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Form Column */}
          <ScrollReveal direction="right">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">¡Mensaje Recibido!</h4>
                  <p className="text-sm text-slate-400">Gracias por escribir. Te responderé muy pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Nombre</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Mensaje</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escribe tu mensaje o propuesta..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">send</span>
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

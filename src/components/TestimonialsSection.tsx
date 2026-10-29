import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/clinicData';
import { Testimonial } from '../types';
import { Star, User, PlusCircle, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('La Jagua de Ibirico');
  const [newRole, setNewRole] = useState('Paciente de Fisioterapia');
  const [newContent, setNewContent] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newContent.trim()) return;

    const newTestimonial: Testimonial = {
      id: `test-${Date.now()}`,
      name: newName,
      city: newCity,
      tag: newRole,
      specialty: 'general',
      rating: newRating,
      content: newContent,
      date: 'Recién publicado'
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowAddModal(false);
      setNewName('');
      setNewContent('');
    }, 1800);
  };

  return (
    <section className="py-20 lg:py-24 bg-white" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#002868] uppercase tracking-widest">
            Voces de Recuperación
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002868] tracking-tight">
            Testimonios de nuestros pacientes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Historias de personas y familias que avanzan cada día en nuestro centro en La Jagua de Ibirico.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(0, 3).map((test) => (
            <div
              key={test.id}
              className="bg-[#f9f9ff] hover:bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-[#dde9ff] text-[11px] font-bold text-[#002868]">
                  Paciente Real
                </span>
                <div className="flex text-[#fdc003]">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                "{test.content}"
              </p>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/60">
                <div className="w-12 h-12 rounded-full bg-[#eff3ff] border border-[#0a3d91]/10 flex items-center justify-center text-[#0a3d91] shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-[#002868] leading-tight">
                    {test.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {test.tag} · {test.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Testimonial Action */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#002868] hover:text-[#0a3d91] bg-[#eff3ff] hover:bg-[#dde9ff] px-6 py-3 rounded-full transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>¿Eres paciente? Comparte tu experiencia con nosotros</span>
          </button>
        </div>

      </div>

      {/* Share Experience Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-[#002868] mb-1">
              Comparte tu testimonio
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Tu opinión inspira a más personas a iniciar su proceso de rehabilitación.
            </p>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
                <p className="text-base font-bold text-[#002868]">¡Muchas gracias por tu testimonio!</p>
                <p className="text-xs text-slate-600">Ha sido registrado exitosamente en la plataforma.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Tu nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Ej. María Pérez"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Municipio / Ciudad
                    </label>
                    <input
                      type="text"
                      required
                      value={newCity}
                      onChange={(e) => setNewCity(e.target.value)}
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Servicio recibido
                    </label>
                    <select
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868]"
                    >
                      <option value="Paciente de Fisioterapia">Fisioterapia</option>
                      <option value="Paciente de Terapia Respiratoria">Terapia Respiratoria</option>
                      <option value="Paciente de Terapia Ocupacional">Terapia Ocupacional</option>
                      <option value="Paciente de Fonoaudiología">Fonoaudiología</option>
                      <option value="Familiar de paciente pediátrico">Neurodesarrollo</option>
                      <option value="Paciente de Psicología">Psicología</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Calificación
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating ? 'text-[#fdc003] fill-current' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Tu comentario o experiencia
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Cuéntanos cómo fue tu proceso de rehabilitación..."
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868]"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#002868] text-white hover:bg-[#0a3d91] shadow-md"
                  >
                    Publicar Testimonio
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

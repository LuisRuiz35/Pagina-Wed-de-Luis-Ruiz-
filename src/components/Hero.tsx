import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { CheckCircle2, ArrowRight, Award, FileText, Users, HeartHandshake, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eff3ff] via-[#f9f9ff] to-[#eff3ff] pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Decorative subtle ambient circles */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#dae2ff]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ffdf9e]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Verified IPS badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dde9ff] text-[#002868] w-fit shadow-xs border border-[#0a3d91]/10">
              <ShieldCheck className="w-4 h-4 text-[#0a3d91]" />
              <span className="text-xs font-bold uppercase tracking-wider">
                IPS Integral en La Jagua de Ibirico
              </span>
            </div>

            {/* Display Hero Title with Playfair Display script italic */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#061c35] tracking-tight leading-[1.18] text-balance">
              <span className="font-quote-motto italic font-medium text-[#002868] block">
                "Rehabilitamos con amor"
              </span>
              para que recuperes tu bienestar
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Fisioterapia, terapia respiratoria, terapia ocupacional, fonoaudiología, psicología y neurodesarrollo en La Jagua de Ibirico, Cesar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 text-sm sm:text-base font-bold bg-[#fdc003] text-[#261a00] hover:bg-[#fabd00] px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_20px_rgba(253,192,3,0.32)] active:scale-95 group cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current text-[#003413] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C16.6 3.67 20.29 7.37 20.29 11.92C20.28 16.46 16.59 20.15 12.05 20.15M16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.59C14.66 13.51 14.5 13.47 14.34 13.71C14.17 13.96 13.71 14.5 13.56 14.66C13.42 14.83 13.27 14.85 13.02 14.73C12.78 14.6 11.98 14.34 11.04 13.5C10.3 12.84 9.8 12.03 9.66 11.78C9.51 11.54 9.64 11.4 9.77 11.28C9.88 11.16 10.02 10.98 10.15 10.84C10.27 10.69 10.31 10.59 10.39 10.42C10.47 10.26 10.43 10.11 10.37 9.99C10.31 9.87 9.82 8.66 9.61 8.17C9.41 7.69 9.21 7.75 9.06 7.74H8.59C8.42 7.74 8.16 7.8 7.93 8.05C7.71 8.29 7.08 8.88 7.08 10.09C7.08 11.3 7.96 12.47 8.08 12.63C8.21 12.8 9.81 15.26 12.26 16.32C12.84 16.57 13.3 16.72 13.65 16.83C14.24 17.02 14.77 16.99 15.2 16.93C15.67 16.86 16.65 16.33 16.86 15.75C17.06 15.18 17.06 14.69 17 14.59C16.94 14.49 16.82 14.51 16.57 14.39Z"/>
                </svg>
                <span>Solicita tu cita</span>
              </button>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold bg-white text-[#002868] hover:bg-[#eff3ff] border border-[#0a3d91]/20 px-6 py-4 rounded-full transition-colors shadow-xs"
              >
                <span>Explorar servicios</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick check indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Citas particulares inmediatas
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Autorizaciones con EPS y ARL
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Sede accesible sin barreras
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#dde9ff] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] border border-white/60">
              {!imageError ? (
                <img
                  src={CLINIC_INFO.heroImage}
                  alt="Fisioterapeuta asistiendo con calidez a paciente en caminata sobre barras paralelas"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0a3d91] to-[#002868] flex flex-col items-center justify-center p-8 text-white text-center">
                  <HeartHandshake className="w-16 h-16 mb-4 text-[#ffdf9e]" />
                  <p className="font-quote-motto italic text-2xl mb-2">"Rehabilitamos con amor"</p>
                  <p className="text-sm text-[#dae2ff]">Atención cálida, humana y especializada en La Jagua de Ibirico</p>
                </div>
              )}

              {/* Gradient Scrim for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002868]/70 via-[#002868]/10 to-transparent pointer-events-none" />

              {/* Bottom human warmth card overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#eff3ff] flex items-center justify-center text-[#002868] shrink-0">
                  <HeartHandshake className="w-6 h-6 text-[#002868]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#002868] leading-snug">
                    Atención Cálida y Humana
                  </p>
                  <p className="text-xs text-slate-600">
                    Rehabilitación integral para todas las etapas de la vida
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-100 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#eff3ff] flex items-center justify-center text-[#002868] shrink-0 border border-[#0a3d91]/10">
                <Award className="w-7 h-7 text-[#002868]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#002868]">+20 años de experiencia</h4>
                <p className="text-xs text-slate-500 mt-0.5">Trayectoria y respaldo clínico certificado</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-100 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#eff3ff] flex items-center justify-center text-[#002868] shrink-0 border border-[#0a3d91]/10">
                <FileText className="w-7 h-7 text-[#002868]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#002868]">Particulares y EPS</h4>
                <p className="text-xs text-slate-500 mt-0.5">Atención a particulares y remitidos por EPS</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-100 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#eff3ff] flex items-center justify-center text-[#002868] shrink-0 border border-[#0a3d91]/10">
                <Users className="w-7 h-7 text-[#002868]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#002868]">16 terapeutas</h4>
                <p className="text-xs text-slate-500 mt-0.5">Equipo especializado y multidisciplinario</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

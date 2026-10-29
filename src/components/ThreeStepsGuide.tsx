import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageSquare, CalendarCheck2, HeartHandshake, ArrowRight } from 'lucide-react';

interface ThreeStepsGuideProps {
  onOpenBooking: () => void;
}

export const ThreeStepsGuide: React.FC<ThreeStepsGuideProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#eff3ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#002868] uppercase tracking-widest">
            Proceso Sencillo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002868] tracking-tight">
            Cómo solicitar tu cita en 3 pasos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Te acompañamos desde el primer mensaje para coordinar tu atención de forma ágil y oportuna.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          
          {/* Paso 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-5 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-[#fdc003] text-[#261a00] flex items-center justify-center font-black text-2xl shadow-sm">
              1
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#002868]">
                Escríbenos por WhatsApp o web
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Contáctanos directamente desde el botón o completa nuestro formulario en línea con tus datos básicos y la especialidad que necesitas.
              </p>
            </div>
            <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0a3d91]">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Respuesta en minutos</span>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-5 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-[#002868] text-white flex items-center justify-center font-black text-2xl shadow-sm">
              2
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#002868]">
                Confirmamos servicio y disponibilidad
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Revisamos si eres particular o vienes remitido por EPS/ARL, validamos tu orden médica y agendamos el horario que más te convenga.
              </p>
            </div>
            <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0a3d91]">
              <CalendarCheck2 className="w-4 h-4 text-[#002868]" />
              <span>Mañanas y tardes de lunes a viernes</span>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-5 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-[#dde9ff] text-[#002868] flex items-center justify-center font-black text-2xl shadow-sm">
              3
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#002868]">
                Recibe tu atención especializada
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Asiste a nuestras instalaciones en La Jagua de Ibirico para tu valoración inicial y comienza tu plan de rehabilitación con amor.
              </p>
            </div>
            <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0a3d91]">
              <HeartHandshake className="w-4 h-4 text-[#0a3d91]" />
              <span>Sede central en La Jagua de Ibirico</span>
            </div>
          </div>

        </div>

        {/* Bottom Dual Action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/573215381663?text=${encodeURIComponent('Hola Centro Daniel\'s, deseo solicitar información para programar una cita.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm sm:text-base font-bold bg-[#fdc003] text-[#261a00] hover:bg-[#fabd00] px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-md"
          >
            <svg className="w-5 h-5 fill-current text-[#003413]" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C16.6 3.67 20.29 7.37 20.29 11.92C20.28 16.46 16.59 20.15 12.05 20.15M16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.59C14.66 13.51 14.5 13.47 14.34 13.71C14.17 13.96 13.71 14.5 13.56 14.66C13.42 14.83 13.27 14.85 13.02 14.73C12.78 14.6 11.98 14.34 11.04 13.5C10.3 12.84 9.8 12.03 9.66 11.78C9.51 11.54 9.64 11.4 9.77 11.28C9.88 11.16 10.02 10.98 10.15 10.84C10.27 10.69 10.31 10.59 10.39 10.42C10.47 10.26 10.43 10.11 10.37 9.99C10.31 9.87 9.82 8.66 9.61 8.17C9.41 7.69 9.21 7.75 9.06 7.74H8.59C8.42 7.74 8.16 7.8 7.93 8.05C7.71 8.29 7.08 8.88 7.08 10.09C7.08 11.3 7.96 12.47 8.08 12.63C8.21 12.8 9.81 15.26 12.26 16.32C12.84 16.57 13.3 16.72 13.65 16.83C14.24 17.02 14.77 16.99 15.2 16.93C15.67 16.86 16.65 16.33 16.86 15.75C17.06 15.18 17.06 14.69 17 14.59C16.94 14.49 16.82 14.51 16.57 14.39Z"/>
            </svg>
            <span>Escribir a WhatsApp ahora</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold bg-white text-[#002868] hover:bg-[#dde9ff] border border-[#0a3d91]/20 px-8 py-4 rounded-full transition-colors shadow-xs"
          >
            <span>Agendar cita en el sistema web</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

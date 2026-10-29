import React from 'react';
import { Calendar, PhoneCall } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-gradient-to-r from-[#002868] via-[#0a3d91] to-[#002868] rounded-3xl p-8 sm:p-14 lg:p-16 text-center text-white flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden border border-[#0a3d91]">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#fdc003]/20 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-bold text-[#ffdf9e] uppercase tracking-widest">
            Atención Inmediata
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ¿Necesitas atención?
          </h2>

          <p className="font-quote-motto text-2xl sm:text-3xl italic text-[#dae2ff]">
            "Rehabilitamos con amor"
          </p>

          <p className="text-sm sm:text-base text-[#dae2ff] max-w-xl leading-relaxed">
            Nuestro equipo en La Jagua de Ibirico está listo para atenderte a ti y a tu familia con la mayor dedicación, tecnología y calidez humana.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-3 text-sm sm:text-base font-bold bg-[#fdc003] text-[#261a00] hover:bg-[#fabd00] px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl active:scale-95 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#002868]" />
              <span>Solicita tu cita ahora</span>
            </button>

            <a
              href={`https://wa.me/573215381663?text=${encodeURIComponent('Hola Centro Daniel\'s, quiero información para una consulta prioritaria.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-6 py-4 rounded-full transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#ffdf9e]" />
              <span>Llamar / Escribir a WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

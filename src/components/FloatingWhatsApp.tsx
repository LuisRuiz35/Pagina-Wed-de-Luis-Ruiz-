import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const message = encodeURIComponent('Hola Centro Daniel\'s, deseo solicitar información o agendar una cita.');
  const url = `https://wa.me/573215381663?text=${message}`;

  return (
    <aside className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Desktop Tooltip bubble */}
      <div className="hidden sm:flex items-center bg-white text-slate-800 text-xs font-bold px-4 py-2.5 rounded-full shadow-lg border border-slate-200 animate-in fade-in slide-in-from-right-4 duration-300">
        <span>¡Escríbenos por WhatsApp!</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar al Centro Daniel's por WhatsApp"
        className="relative w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-[#fdc003] text-[#261a00] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <svg className="w-7 sm:w-8 h-7 sm:h-8 fill-current text-[#003413] group-hover:rotate-6 transition-transform" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C16.6 3.67 20.29 7.37 20.29 11.92C20.28 16.46 16.59 20.15 12.05 20.15M16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.59C14.66 13.51 14.5 13.47 14.34 13.71C14.17 13.96 13.71 14.5 13.56 14.66C13.42 14.83 13.27 14.85 13.02 14.73C12.78 14.6 11.98 14.34 11.04 13.5C10.3 12.84 9.8 12.03 9.66 11.78C9.51 11.54 9.64 11.4 9.77 11.28C9.88 11.16 10.02 10.98 10.15 10.84C10.27 10.69 10.31 10.59 10.39 10.42C10.47 10.26 10.43 10.11 10.37 9.99C10.31 9.87 9.82 8.66 9.61 8.17C9.41 7.69 9.21 7.75 9.06 7.74H8.59C8.42 7.74 8.16 7.8 7.93 8.05C7.71 8.29 7.08 8.88 7.08 10.09C7.08 11.3 7.96 12.47 8.08 12.63C8.21 12.8 9.81 15.26 12.26 16.32C12.84 16.57 13.3 16.72 13.65 16.83C14.24 17.02 14.77 16.99 15.2 16.93C15.67 16.86 16.65 16.33 16.86 15.75C17.06 15.18 17.06 14.69 17 14.59C16.94 14.49 16.82 14.51 16.57 14.39Z"/>
        </svg>

        {/* Pulse live notification ping */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full animate-ping" />
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
      </a>
    </aside>
  );
};

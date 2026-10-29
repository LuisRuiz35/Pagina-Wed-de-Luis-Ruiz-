import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, Menu, X, Phone, UserCheck } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenPatientPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenPatientPortal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#0a3d91]/10 py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark (Single clean brand zone) */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002868] rounded-xl p-1"
          >
            <img
              src={CLINIC_INFO.logoUrl}
              alt="Logo Centro Daniel's"
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#002868] leading-tight">
                Centro Daniel's
              </span>
              <span className="font-quote-motto italic text-xs text-[#0a3d91] font-medium hidden sm:inline">
                Rehabilitamos con amor
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Text with hover underlines, 1-2 words) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a
              href="#servicios"
              className="hover:text-[#002868] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#002868] after:transition-all"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="hover:text-[#002868] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#002868] after:transition-all"
            >
              Nosotros
            </a>
            <a
              href="#instalaciones"
              className="hover:text-[#002868] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#002868] after:transition-all"
            >
              Instalaciones
            </a>
            <a
              href="#testimonios"
              className="hover:text-[#002868] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#002868] after:transition-all"
            >
              Testimonios
            </a>
            <a
              href="#preguntas"
              className="hover:text-[#002868] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#002868] after:transition-all"
            >
              Preguntas
            </a>
          </nav>

          {/* Zone 3: Primary Actions (1-2 clear actions) */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPatientPortal}
              title="Verificar o consultar mi cita"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#002868] hover:text-[#0a3d91] bg-[#eff3ff] hover:bg-[#dde9ff] px-3.5 py-2.5 rounded-full transition-colors whitespace-nowrap"
            >
              <UserCheck className="w-4 h-4" />
              <span>Mi Cita</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold bg-[#fdc003] text-[#261a00] hover:bg-[#fabd00] px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-[0_4px_14px_rgba(253,192,3,0.35)] whitespace-nowrap active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#002868]" />
              <span>Solicita tu cita</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#002868] hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-slate-900/40 backdrop-blur-sm pt-20">
          <div className="bg-white px-6 py-6 border-b border-slate-200 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-3 font-semibold text-slate-800 text-base">
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#eff3ff] hover:text-[#002868] transition-colors"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#eff3ff] hover:text-[#002868] transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#instalaciones"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#eff3ff] hover:text-[#002868] transition-colors"
              >
                Instalaciones
              </a>
              <a
                href="#testimonios"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#eff3ff] hover:text-[#002868] transition-colors"
              >
                Testimonios
              </a>
              <a
                href="#preguntas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#eff3ff] hover:text-[#002868] transition-colors"
              >
                Preguntas frecuentes
              </a>
            </nav>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#fdc003] text-[#261a00] font-bold rounded-full shadow-md text-sm"
              >
                <Calendar className="w-4 h-4 text-[#002868]" />
                <span>Solicita tu cita ahora</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPatientPortal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#eff3ff] text-[#002868] font-semibold rounded-full text-sm"
              >
                <UserCheck className="w-4 h-4" />
                <span>Verificar estado de mi cita</span>
              </button>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-slate-600 hover:text-emerald-700 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Atención directa WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

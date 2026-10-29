import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { SpecialtyKey } from '../types';
import { Phone, MapPin, Clock, Instagram, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onSelectService: (service: SpecialtyKey) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'habeas_data') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenLegal }) => {
  return (
    <footer className="bg-[#eff3ff] text-slate-700 pt-16 pb-12 border-t border-slate-200/80" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Identidad Institucional */}
          <div className="flex flex-col gap-4">
            <img
              src={CLINIC_INFO.logoUrl}
              alt="Logo Centro de Rehabilitación Integral Daniel's S.A.S"
              referrerPolicy="no-referrer"
              className="h-16 w-auto object-contain self-start"
            />
            <p className="font-quote-motto text-xl italic text-[#002868]">
              "Rehabilitamos con amor"
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Centro de Rehabilitación Integral Daniel's S.A.S. Servicios especializados de salud y rehabilitación funcional en La Jagua de Ibirico, Cesar.
            </p>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#002868] hover:text-[#0a3d91] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#002868]" />
              <span>{CLINIC_INFO.instagram}</span>
            </a>
          </div>

          {/* Columna 1: Enlaces rápidos */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#002868] uppercase tracking-wider">
              Enlaces rápidos
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li>
                <a href="#servicios" className="hover:text-[#002868] transition-colors">
                  Servicios y especialidades
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#002868] transition-colors">
                  Nuestra institución y equipo
                </a>
              </li>
              <li>
                <a href="#instalaciones" className="hover:text-[#002868] transition-colors">
                  Instalaciones y sedes
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-[#002868] transition-colors">
                  Testimonios de pacientes
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-[#002868] transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Especialidades */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#002868] uppercase tracking-wider">
              Servicios Clínicos
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onSelectService('fisioterapia')}
                  className="hover:text-[#002868] transition-colors text-left"
                >
                  Fisioterapia
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('respiratoria')}
                  className="hover:text-[#002868] transition-colors text-left"
                >
                  Terapia respiratoria
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('ocupacional')}
                  className="hover:text-[#002868] transition-colors text-left"
                >
                  Terapia ocupacional
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('fonoaudiologia')}
                  className="hover:text-[#002868] transition-colors text-left"
                >
                  Fonoaudiología
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('psicologia')}
                  className="hover:text-[#002868] transition-colors text-left"
                >
                  Psicología clínica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('neurodesarrollo')}
                  className="hover:text-[#002868] transition-colors text-left"
                >
                  Neurodesarrollo infantil
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Atención */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#002868] uppercase tracking-wider">
              Contacto y Ubicación
            </h4>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#002868] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-slate-800">WhatsApp Oficial:</span>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#002868] font-semibold"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#002868] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-slate-800">Ubicación:</span>
                  <span>{CLINIC_INFO.address}</span>
                  <span className="block text-slate-500">{CLINIC_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#002868] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-slate-800">Horario de atención:</span>
                  <span>Lunes a viernes</span>
                  <span className="block text-slate-500">
                    {CLINIC_INFO.scheduleMorning} y {CLINIC_INFO.scheduleAfternoon}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Centro de Rehabilitación Integral Daniel's S.A.S — Todos los derechos reservados</p>
          
          <div className="flex flex-wrap items-center gap-4 text-center">
            <button
              onClick={() => onOpenLegal('habeas_data')}
              className="hover:text-[#002868] transition-colors"
            >
              Tratamiento de datos personales
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#002868] transition-colors"
            >
              Política de privacidad
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#002868] transition-colors"
            >
              Términos del servicio
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

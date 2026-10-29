import React, { useState } from 'react';
import { TEAM_MEMBERS, FACILITIES_DATA, CONVENIOS_DATA } from '../data/clinicData';
import { SpecialtyKey, Facility } from '../types';
import { 
  Building2, 
  Flag, 
  Eye, 
  Heart, 
  Handshake, 
  ShieldCheck, 
  User, 
  ZoomIn, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AboutSectionProps {
  onSelectFacility: (facility: Facility) => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectFacility, onOpenBooking }) => {
  const [teamFilter, setTeamFilter] = useState<string>('all');

  const filteredTeam = teamFilter === 'all'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.specialty === teamFilter);

  return (
    <section className="py-20 lg:py-28 bg-[#f9f9ff]" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-16 sm:gap-20">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <span className="text-xs font-bold text-[#002868] uppercase tracking-widest">
            Nuestra Institución
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002868] tracking-tight">
            Conoce más sobre nosotros
          </h2>
          <p className="font-quote-motto text-xl sm:text-2xl italic text-[#002868]">
            "Rehabilitamos con amor"
          </p>
        </div>

        {/* 6 Institutional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1: Quiénes somos */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#eff3ff] flex items-center justify-center text-[#002868]">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002868]">
              Quiénes somos
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Somos una Institución Prestadora de Servicios de Salud (IPS) dedicada a la habilitación y rehabilitación integral con un enfoque biopsicosocial y calidez humana en La Jagua de Ibirico y los municipios del centro del Cesar.
            </p>
          </div>

          {/* 2: Nuestra misión (Spans 2 cols on lg) */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4 lg:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-[#eff3ff] flex items-center justify-center text-[#002868]">
              <Flag className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002868]">
              Nuestra misión
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed italic">
              "El Centro de Rehabilitación Integral DANIEL'S S.A.S., es una Institución que presta servicios de salud de Apoyo Terapéutico, orientado en la rehabilitación del usuario, con calidad, seguridad y calidez humana, conservando el entorno biopsicosocial en el que se desenvuelve cada individuo, para retornarlo con prontitud y plenitud de facultades a su vida laboral, social y familiar."
            </p>
          </div>

          {/* 3: Nuestra visión */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#eff3ff] flex items-center justify-center text-[#002868]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002868]">
              Nuestra visión
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              "Ser reconocidos como la institución de rehabilitación integral más importante del centro del Cesar, atendiendo las necesidades de salud y de la fuerza productiva vinculada al sector minero y comunitario."
            </p>
          </div>

          {/* 4: Nuestros valores */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#eff3ff] flex items-center justify-center text-[#002868]">
              <Heart className="w-6 h-6 text-[#002868]" />
            </div>
            <h3 className="text-xl font-bold text-[#002868]">
              Nuestros valores
            </h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ética profesional y confidencialidad</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Empatía y trato cálido al paciente</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Respeto absoluto a la dignidad humana</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Vocación genuina de servicio</span>
              </li>
            </ul>
          </div>

          {/* 5: Empresas y entidades con convenio (Spans 2 cols on lg) */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4 lg:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-[#eff3ff] flex items-center justify-center text-[#002868]">
              <Handshake className="w-6 h-6 text-[#002868]" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#002868]">
                Empresas y entidades con convenio
              </h3>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Atención particular y por aseguradora
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Coordinamos la recepción de autorizaciones para afiliados a las principales EPS, administradoras de riesgos laborales y convenios corporativos:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {CONVENIOS_DATA.slice(0, 8).map((conv, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#eff3ff]/70 border border-[#0a3d91]/10 flex flex-col justify-center items-center text-center transition-colors hover:bg-[#dde9ff]"
                >
                  <span className="text-xs font-bold text-[#002868] line-clamp-1">
                    {conv.name}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold mt-0.5">
                    {conv.type}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>¿Tu entidad no aparece? Escríbenos para verificar cobertura.</span>
              <button
                onClick={onOpenBooking}
                className="text-[#002868] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Consultar convenio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 6: Nuestro compromiso */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#eff3ff] flex items-center justify-center text-[#002868]">
              <ShieldCheck className="w-6 h-6 text-[#002868]" />
            </div>
            <h3 className="text-xl font-bold text-[#002868]">
              Nuestro compromiso
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Garantizar acompañamiento constante y protocolos de alta fidelidad terapéutica en cada sesión, midiendo el progreso de cada usuario con rigor clínico y cercanía familiar.
            </p>
          </div>

        </div>

        {/* Block 7: Nuestro equipo */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002868]">
                Nuestro equipo
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                16 especialistas en sede dedicados a tu evolución y bienestar integral
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200">
              <button
                onClick={() => setTeamFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  teamFilter === 'all'
                    ? 'bg-[#002868] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setTeamFilter('fisioterapia')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  teamFilter === 'fisioterapia'
                    ? 'bg-[#002868] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Fisioterapia
              </button>
              <button
                onClick={() => setTeamFilter('respiratoria')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  teamFilter === 'respiratoria'
                    ? 'bg-[#002868] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                T. Respiratoria
              </button>
              <button
                onClick={() => setTeamFilter('ocupacional')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  teamFilter === 'ocupacional'
                    ? 'bg-[#002868] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                T. Ocupacional
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#eff3ff] overflow-hidden flex items-center justify-center border border-[#0a3d91]/10 shrink-0">
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <User className="w-8 h-8 text-[#0a3d91] fallback-icon" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base font-bold text-[#002868] leading-snug">
                      {member.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-semibold">
                      {member.role}
                    </span>
                    <span className="text-[11px] text-emerald-700 font-medium mt-0.5">
                      {member.experienceYears} años de experiencia
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-xs">
                  <p className="text-slate-700 font-medium">
                    {member.credentials}
                  </p>
                  <p className="text-slate-500 line-clamp-2">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block 8: Nuestras instalaciones with Interactive Lightbox */}
        <div className="flex flex-col gap-6" id="instalaciones">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002868]">
                Nuestras instalaciones
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Ambientes acondicionados para la seguridad, higiene y confort de los usuarios en La Jagua de Ibirico
              </p>
            </div>
            <span className="text-xs font-semibold text-[#0a3d91] bg-[#eff3ff] px-3 py-1.5 rounded-full hidden sm:inline">
              Haz clic para ampliar fotos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACILITIES_DATA.map((facility) => (
              <div
                key={facility.id}
                onClick={() => onSelectFacility(facility)}
                className="rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md border border-slate-200 relative group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Ver detalle de ${facility.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectFacility(facility);
                  }
                }}
              >
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Hover zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#002868] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ZoomIn className="w-5 h-5" />
                </div>

                {/* Bottom card banner */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/60">
                  <p className="text-sm font-bold text-[#002868] leading-tight mb-1">
                    {facility.title}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

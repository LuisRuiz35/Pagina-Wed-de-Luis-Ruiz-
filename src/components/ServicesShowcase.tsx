import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/clinicData';
import { SpecialtyKey } from '../types';
import { 
  Dumbbell, 
  Wind, 
  Hand, 
  Mic, 
  Brain, 
  Baby, 
  Play, 
  CheckCircle, 
  CalendarCheck,
  Sparkles
} from 'lucide-react';

interface ServicesShowcaseProps {
  onSelectServiceBooking: (specialty: SpecialtyKey) => void;
  onOpenVideoDemo: (specialty: SpecialtyKey) => void;
}

const specialtyIcons: Record<SpecialtyKey, React.ReactNode> = {
  fisioterapia: <Dumbbell className="w-6 h-6" />,
  respiratoria: <Wind className="w-6 h-6" />,
  ocupacional: <Hand className="w-6 h-6" />,
  fonoaudiologia: <Mic className="w-6 h-6" />,
  psicologia: <Brain className="w-6 h-6" />,
  neurodesarrollo: <Baby className="w-6 h-6" />
};

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onSelectServiceBooking,
  onOpenVideoDemo
}) => {
  const [activeTab, setActiveTab] = useState<SpecialtyKey>('fisioterapia');
  const service = SERVICES_DATA[activeTab];

  return (
    <section className="py-20 lg:py-24 bg-[#eff3ff]" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#002868] uppercase tracking-widest">
            Especialidades Médicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002868] tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Contamos con programas clínicos enfocados en recuperar capacidades y fortalecer la autonomía de cada persona.
          </p>
        </div>

        {/* Specialty Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {(Object.keys(SERVICES_DATA) as SpecialtyKey[]).map((key) => {
            const item = SERVICES_DATA[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-4 px-3 rounded-2xl flex flex-col items-center gap-2.5 transition-all duration-200 text-center cursor-pointer border ${
                  isActive
                    ? 'bg-[#002868] text-white shadow-md border-[#002868] scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-[#dde9ff]/60 border-slate-200/80 shadow-xs'
                }`}
              >
                <div className={isActive ? 'text-[#ffdf9e]' : 'text-[#0a3d91]'}>
                  {specialtyIcons[key]}
                </div>
                <span className="text-xs sm:text-sm font-bold leading-tight">
                  {item.shortName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0a3d91]">
                <div className="p-1.5 rounded-lg bg-[#eff3ff] text-[#002868]">
                  {specialtyIcons[service.id]}
                </div>
                <span>{service.category}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002868] tracking-tight mb-3">
                  {service.name}
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Protocols / Activities Block */}
              <div className="p-5 rounded-2xl bg-[#eff3ff] border border-[#0a3d91]/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#002868]">
                  <Sparkles className="w-4 h-4 text-[#002868]" />
                  <span>Terapias y protocolos incluidos</span>
                </div>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-700">
                  {service.activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Indications / Ideal for */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Recomendado para:
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {service.indications.map((ind, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/60"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectServiceBooking(service.id)}
                  className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold bg-[#fdc003] text-[#261a00] hover:bg-[#fabd00] px-6 sm:px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-md active:scale-95 cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5 text-[#002868]" />
                  <span>Solicitar cita de {service.name.toLowerCase()}</span>
                </button>

                <button
                  onClick={() => onOpenVideoDemo(service.id)}
                  className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold bg-[#eff3ff] text-[#002868] hover:bg-[#dde9ff] px-5 py-4 rounded-full transition-colors cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current text-[#002868]" />
                  <span>Ver video</span>
                </button>
              </div>

            </div>

            {/* Right Column: 3 Photos + 1 Video Preview Card */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              
              {service.photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-xs border border-slate-200/60 group"
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-2.5 py-1 bg-white/90 backdrop-blur-xs rounded-lg text-[11px] font-bold text-[#002868] truncate">
                    {photo.caption}
                  </div>
                </div>
              ))}

              {/* Video Mockup card with click handler */}
              <div
                onClick={() => onOpenVideoDemo(service.id)}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#002868] flex items-center justify-center cursor-pointer shadow-xs border border-[#0a3d91] group"
                role="button"
                tabIndex={0}
                aria-label={`Reproducir video demostrativo de ${service.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onOpenVideoDemo(service.id);
                  }
                }}
              >
                <img
                  src={service.videoThumbnail}
                  alt={`Demostración clínica de ${service.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity group-hover:scale-105 duration-500"
                />
                
                {/* Play Button Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 rounded-full bg-[#fdc003] text-[#002868] flex items-center justify-center group-hover:scale-115 transition-transform shadow-xl">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/70 backdrop-blur-xs rounded text-[10px] font-mono text-white">
                  {service.videoDuration}
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 px-2.5 py-1 bg-white/95 rounded-lg text-[11px] font-bold text-[#002868] flex items-center justify-between">
                  <span className="truncate">Video demostrativo</span>
                  <span className="text-[10px] text-slate-500 font-normal">Ver ahora</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

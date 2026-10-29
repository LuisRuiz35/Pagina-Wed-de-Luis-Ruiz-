import React from 'react';
import { WHY_CHOOSE_US } from '../data/clinicData';
import { 
  UserCheck, 
  Stethoscope, 
  HeartHandshake, 
  CalendarClock, 
  Activity, 
  HardHat 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  person_check: <UserCheck className="w-6 h-6 text-[#002868]" />,
  medical_services: <Stethoscope className="w-6 h-6 text-[#002868]" />,
  healing: <HeartHandshake className="w-6 h-6 text-[#002868]" />,
  schedule: <CalendarClock className="w-6 h-6 text-[#002868]" />,
  vital_signs: <Activity className="w-6 h-6 text-[#002868]" />,
  engineering: <HardHat className="w-6 h-6 text-[#002868]" />
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#002868] uppercase tracking-widest">
            Confianza y Calidez
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002868] tracking-tight">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Brindamos un acompañamiento clínico cercano enfocado en el bienestar real y sostenido de cada persona en el Cesar.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f9f9ff] hover:bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#eff3ff] group-hover:bg-[#dde9ff] flex items-center justify-center transition-colors border border-[#0a3d91]/10">
                {iconMap[item.icon] || <Activity className="w-6 h-6 text-[#002868]" />}
              </div>
              <h3 className="text-xl font-bold text-[#002868]">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

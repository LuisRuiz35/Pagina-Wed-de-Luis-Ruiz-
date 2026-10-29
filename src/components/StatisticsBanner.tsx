import React from 'react';
import { STATS_DATA } from '../data/clinicData';
import { ArrowDown } from 'lucide-react';

export const StatisticsBanner: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#002868] via-[#0a3d91] to-[#1e314b] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fdc003]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* 4 Quantitative Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center mb-12">
          {STATS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 transition-transform duration-300 hover:scale-105"
            >
              <span className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-black text-[#ffdf9e] tracking-tight tabular-nums">
                {item.value}
              </span>
              <span className="text-sm sm:text-base font-bold text-[#dae2ff] leading-tight">
                {item.label}
              </span>
              <span className="text-xs text-white/70">
                {item.description}
              </span>
            </div>
          ))}
        </div>

        {/* Action to explore about section */}
        <div className="flex justify-center">
          <a
            href="#nosotros"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-white text-[#002868] hover:bg-[#eff3ff] px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-105"
          >
            <span>Conoce más sobre nosotros</span>
            <ArrowDown className="w-4 h-4 text-[#002868]" />
          </a>
        </div>

      </div>
    </section>
  );
};

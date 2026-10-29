import React, { useState } from 'react';
import { FAQS_DATA, CLINIC_INFO } from '../data/clinicData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-20 lg:py-24 bg-[#eff3ff]" id="preguntas">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <span className="text-xs font-bold text-[#002868] uppercase tracking-widest">
            Resolución de Dudas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002868] tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Información clara para el inicio ágil de tu tratamiento terapéutico en La Jagua de Ibirico.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3.5">
          {FAQS_DATA.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#002868]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#eff3ff] flex items-center justify-center text-[#002868] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#dde9ff]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have other question button */}
        <div className="flex justify-center">
          <a
            href={`https://wa.me/573215381663?text=${encodeURIComponent('Hola, tengo una pregunta sobre los servicios y citas en el Centro Daniel\'s.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-[#dde9ff] text-[#002868] hover:bg-[#c8dbfc] px-6 py-3 rounded-full transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-[#002868]" />
            <span>Tengo otra pregunta</span>
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Facility } from '../types';
import { X, Check, MapPin, Building } from 'lucide-react';

interface FacilityLightboxModalProps {
  facility: Facility | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const FacilityLightboxModal: React.FC<FacilityLightboxModalProps> = ({
  facility,
  onClose,
  onOpenBooking
}) => {
  if (!facility) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col my-auto">
        
        {/* Photo view with header badge */}
        <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
          <img
            src={facility.imageUrl}
            alt={facility.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl">
            <span className="flex items-center gap-1.5 font-semibold">
              <MapPin className="w-4 h-4 text-[#ffdf9e]" />
              Sede Central · La Jagua de Ibirico, Cesar
            </span>
            <span className="text-white/80">Instalaciones Certificadas</span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#002868] uppercase tracking-widest">
                Espacios Clínicos
              </span>
              <h3 className="text-2xl font-extrabold text-[#002868]">
                {facility.title}
              </h3>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="inline-flex items-center gap-2 bg-[#fdc003] text-[#261a00] font-bold text-xs px-6 py-3 rounded-full hover:bg-[#fabd00] shadow-md transition-transform active:scale-95 whitespace-nowrap self-start"
            >
              <span>Agendar valoración aquí</span>
            </button>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {facility.description}
          </p>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Equipamiento y características destacadas:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
              {facility.equipment.map((eq, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{eq}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

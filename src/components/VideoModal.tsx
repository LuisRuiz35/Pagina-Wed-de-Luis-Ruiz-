import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/clinicData';
import { SpecialtyKey } from '../types';
import { X, Play, Pause, Volume2, VolumeX, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  specialty: SpecialtyKey;
  onOpenBooking: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  specialty,
  onOpenBooking
}) => {
  const service = SERVICES_DATA[specialty] || SERVICES_DATA.fisioterapia;
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(25);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#001947] text-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/10 flex flex-col my-auto">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#ffdf9e]" />
            <span className="text-sm font-bold text-white tracking-wide">
              {service.videoTitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Player Canvas Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={service.videoThumbnail}
            alt={service.name}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-105' : 'scale-100 opacity-80'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Central Play/Pause indicator */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 w-16 h-16 rounded-full bg-[#fdc003] text-[#002868] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 fill-current ml-1" />
            )}
          </button>

          {/* Live Step Badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-[#dae2ff] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Demostración Clínica: {service.name}</span>
          </div>

          {/* Bottom Custom Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex flex-col gap-2">
            {/* Scrubber Progress Bar */}
            <div className="w-full bg-white/30 h-1.5 rounded-full overflow-hidden cursor-pointer">
              <div
                className="bg-[#fdc003] h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-white/80">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setProgress(0)}
                  className="hover:text-white transition-colors"
                  title="Reiniciar"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-white/60">
                  {Math.floor((progress * 135) / 100)}s / {service.videoDuration}
                </span>
              </div>

              <span className="text-[11px] font-semibold text-[#ffdf9e]">
                Centro Daniel's · La Jagua de Ibirico
              </span>
            </div>
          </div>
        </div>

        {/* Video Notes & Clinical Steps */}
        <div className="p-6 bg-[#001947] flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                Fases de la Sesión en {service.name}
              </h4>
              <p className="text-xs text-white/70">
                Cada procedimiento se realiza bajo supervisión de terapeutas certificados.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="inline-flex items-center gap-2 bg-[#fdc003] text-[#261a00] font-bold text-xs px-5 py-2.5 rounded-full hover:bg-[#fabd00] shadow-md transition-transform active:scale-95 whitespace-nowrap"
            >
              <span>Solicitar cita de {service.shortName}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/10 text-xs text-white/80">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#66ff8e] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-white">1. Valoración Funcional</span>
                <span>Análisis goniométrico y formulación de objetivos.</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#66ff8e] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-white">2. Intervención Activa</span>
                <span>Mecanoterapia, barras y reeducación física.</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#66ff8e] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-white">3. Pautas para el Hogar</span>
                <span>Recomendaciones ergonómicas y plan familiar.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

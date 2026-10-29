import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'habeas_data' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const titles: Record<string, string> = {
    privacy: 'Política de Privacidad y Confidencialidad Médica',
    terms: 'Términos y Condiciones del Servicio Clínico',
    habeas_data: 'Política de Tratamiento de Datos Personales (Habeas Data)'
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col my-auto">
        
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#002868]" />
            <h3 className="text-base font-bold text-[#002868]">
              {titles[type]}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-xs sm:text-sm text-slate-700 leading-relaxed flex flex-col gap-4">
          <p>
            <strong>Centro de Rehabilitación Integral Daniel's S.A.S.</strong>, con sede en La Jagua de Ibirico, Cesar, en estricto cumplimiento de la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 y la normatividad sanitaria colombiana aplicable al sector salud (Resolución 1995 de 1999 sobre Historias Clínicas y Ley 2015 de 2020), informa a sus usuarios, pacientes y familiares:
          </p>

          <h4 className="font-bold text-slate-900 text-sm">1. Tratamiento de Datos Sensibles de Salud</h4>
          <p>
            Los datos personales y clínicos recopilados a través de este portal, líneas de WhatsApp y en nuestras instalaciones son de carácter sensible y se encuentran amparados bajo el secreto profesional médico y las reservas de la historia clínica. Dichos datos son utilizados exclusivamente para la asignación de citas, facturación en salud, auditoría con entidades aseguradoras (EPS/ARL) y el diseño de planes terapéuticos personalizados.
          </p>

          <h4 className="font-bold text-slate-900 text-sm">2. Seguridad y Confidencialidad</h4>
          <p>
            Implementamos protocolos de seguridad técnica, humana y administrativa para evitar la adulteración, pérdida, consulta o acceso no autorizado a los registros médicos de nuestros usuarios.
          </p>

          <h4 className="font-bold text-slate-900 text-sm">3. Derechos del Titular</h4>
          <p>
            Como titular de los datos, usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos personales (salvo que exista un deber legal o contractual de permanencia de la historia clínica conforme a los tiempos de retención sanitaria legal).
          </p>

          <h4 className="font-bold text-slate-900 text-sm">4. Canales de Atención</h4>
          <p>
            Para consultas sobre sus datos, comuníquese a través de nuestro correo institucional <strong>contacto@danielsrehabilitacion.com</strong> o en nuestras instalaciones físicas en Calle 6 # 14 - 38, Barrio El Carmen, La Jagua de Ibirico, Cesar.
          </p>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#002868] text-white hover:bg-[#0a3d91]"
            >
              Entendido
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

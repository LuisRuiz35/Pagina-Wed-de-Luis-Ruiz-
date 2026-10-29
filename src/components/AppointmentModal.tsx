import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import { SpecialtyKey, AppointmentData } from '../types';
import { 
  X, 
  Calendar, 
  CheckCircle, 
  Send, 
  FileCheck, 
  Clock, 
  MapPin, 
  AlertCircle,
  ClipboardList
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialty?: SpecialtyKey;
  existingAppointments: AppointmentData[];
  onAddAppointment: (appointment: AppointmentData) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialSpecialty = 'fisioterapia',
  existingAppointments,
  onAddAppointment
}) => {
  const [activeTab, setActiveTab] = useState<'nueva' | 'mis_citas'>('nueva');
  
  // Form state
  const [specialty, setSpecialty] = useState<SpecialtyKey>(initialSpecialty);
  const [serviceType, setServiceType] = useState<'Particular' | 'EPS / ARL' | 'Medicina Prepagada'>('Particular');
  const [insuranceName, setInsuranceName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('La Jagua de Ibirico');
  const [preferredShift, setPreferredShift] = useState<'Mañana (7:20 AM - 12:00 PM)' | 'Tarde (2:00 PM - 7:00 PM)'>('Mañana (7:20 AM - 12:00 PM)');
  const [preferredDate, setPreferredDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [notes, setNotes] = useState('');

  // Confirmation state
  const [createdAppointment, setCreatedAppointment] = useState<AppointmentData | null>(null);

  if (!isOpen) return null;

  const handleCreateAppointment = (sendToWhatsapp: boolean) => {
    if (!patientName.trim() || !phone.trim() || !documentId.trim()) {
      alert('Por favor completa tu nombre, documento y teléfono.');
      return;
    }

    const appt: AppointmentData = {
      id: `CITA-${Math.floor(100000 + Math.random() * 900000)}`,
      patientName,
      documentId,
      phone,
      city,
      specialty,
      serviceType,
      insuranceName: serviceType !== 'Particular' ? insuranceName : undefined,
      preferredShift,
      preferredDate,
      notes,
      createdAt: new Date().toLocaleDateString('es-CO'),
      status: 'En Gestión'
    };

    onAddAppointment(appt);
    setCreatedAppointment(appt);

    if (sendToWhatsapp) {
      const selectedServiceName = SERVICES_DATA[specialty]?.name || specialty;
      const text = `*SOLICITUD DE CITA - CENTRO DANIEL'S S.A.S*\n\n` +
        `👤 *Paciente:* ${patientName}\n` +
        `🆔 *Documento:* ${documentId}\n` +
        `📞 *Teléfono:* ${phone}\n` +
        `📍 *Municipio:* ${city}\n` +
        `🩺 *Especialidad:* ${selectedServiceName}\n` +
        `📋 *Tipo de atención:* ${serviceType}${insuranceName ? ` (${insuranceName})` : ''}\n` +
        `📅 *Fecha solicitada:* ${preferredDate}\n` +
        `⏰ *Jornada preferida:* ${preferredShift}\n` +
        `${notes ? `📝 *Motivo / Síntomas:* ${notes}\n` : ''}\n` +
        `_Enviado desde el portal web oficial del Centro de Rehabilitación Integral Daniel's_`;

      const encodedUrl = `https://wa.me/573215381663?text=${encodeURIComponent(text)}`;
      window.open(encodedUrl, '_blank');
    }
  };

  const resetForm = () => {
    setCreatedAppointment(null);
    setPatientName('');
    setDocumentId('');
    setPhone('');
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col my-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eff3ff] flex items-center justify-center text-[#002868]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#002868] leading-tight">
                Gestión de Citas Terapéuticas
              </h3>
              <p className="text-xs text-slate-500">
                Centro de Rehabilitación Integral Daniel's S.A.S
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="px-6 pt-3 flex gap-2 border-b border-slate-100 bg-[#f9f9ff]">
          <button
            onClick={() => setActiveTab('nueva')}
            className={`px-4 py-2 text-xs font-bold transition-all border-b-2 ${
              activeTab === 'nueva'
                ? 'border-[#002868] text-[#002868]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Nueva Solicitud
          </button>
          <button
            onClick={() => setActiveTab('mis_citas')}
            className={`px-4 py-2 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'mis_citas'
                ? 'border-[#002868] text-[#002868]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Mis Solicitudes ({existingAppointments.length})</span>
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'mis_citas' ? (
            <div className="flex flex-col gap-4">
              {existingAppointments.length === 0 ? (
                <div className="py-12 text-center flex flex-col items-center gap-3 text-slate-500">
                  <ClipboardList className="w-12 h-12 text-slate-300" />
                  <p className="text-sm font-semibold">No tienes citas registradas en esta sesión.</p>
                  <button
                    onClick={() => setActiveTab('nueva')}
                    className="text-xs font-bold text-[#002868] bg-[#eff3ff] px-4 py-2 rounded-full hover:bg-[#dde9ff]"
                  >
                    Agendar mi primera cita
                  </button>
                </div>
              ) : (
                existingAppointments.map((appt) => (
                  <div
                    key={appt.id}
                    className="p-4 rounded-2xl bg-[#eff3ff]/60 border border-slate-200 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#002868]">{appt.id}</span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {appt.status}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-800">{appt.patientName}</p>
                    <div className="text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
                      <span>Especialidad: <strong>{SERVICES_DATA[appt.specialty]?.name}</strong></span>
                      <span>Modalidad: <strong>{appt.serviceType}</strong></span>
                      <span>Fecha: <strong>{appt.preferredDate}</strong></span>
                      <span>Jornada: <strong>{appt.preferredShift}</strong></span>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : createdAppointment ? (
            /* Confirmation Ticket View */
            <div className="flex flex-col items-center text-center gap-4 py-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#002868] bg-[#dde9ff] px-3 py-1 rounded-full">
                  CÓDIGO: {createdAppointment.id}
                </span>
                <h4 className="text-2xl font-extrabold text-[#002868] mt-2">
                  ¡Solicitud Registrada!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mt-1">
                  Tu solicitud para <strong>{SERVICES_DATA[createdAppointment.specialty]?.name}</strong> ha quedado registrada en nuestro sistema de atención.
                </p>
              </div>

              {/* Summary box */}
              <div className="w-full bg-[#f9f9ff] p-5 rounded-2xl border border-slate-200 text-left text-xs sm:text-sm text-slate-700 flex flex-col gap-2">
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">Paciente:</span>
                  <span className="font-bold">{createdAppointment.patientName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">Documento:</span>
                  <span className="font-semibold">{createdAppointment.documentId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">Fecha solicitada:</span>
                  <span className="font-semibold">{createdAppointment.preferredDate}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500">Jornada:</span>
                  <span className="font-semibold">{createdAppointment.preferredShift}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500">Sede:</span>
                  <span className="font-semibold">Calle 6 # 14 - 38, La Jagua de Ibirico</span>
                </div>
              </div>

              {/* What to bring note */}
              <div className="w-full p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <span className="font-bold block">Documentos para tu primera sesión:</span>
                  Llevar documento de identidad original, orden médica del especialista (si vienes por EPS/ARL) y ropa cómoda para tu terapia física o valoración.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
                <a
                  href={`https://wa.me/573215381663?text=${encodeURIComponent(`Hola Centro Daniel's, registré mi cita con código ${createdAppointment.id} para ${createdAppointment.patientName}. Deseo confirmar disponibilidad.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#fdc003] text-[#261a00] font-bold rounded-full text-xs sm:text-sm shadow-md"
                >
                  <Send className="w-4 h-4 text-[#002868]" />
                  <span>Enviar recordatorio a WhatsApp</span>
                </a>
                <button
                  onClick={resetForm}
                  className="py-3 px-5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Agendar otra cita
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={(e) => { e.preventDefault(); handleCreateAppointment(false); }} className="flex flex-col gap-5">
              
              {/* Specialty & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Especialidad requerida *
                  </label>
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value as SpecialtyKey)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868] bg-white font-medium"
                  >
                    <option value="fisioterapia">Fisioterapia</option>
                    <option value="respiratoria">Terapia Respiratoria</option>
                    <option value="ocupacional">Terapia Ocupacional</option>
                    <option value="fonoaudiologia">Fonoaudiología</option>
                    <option value="psicologia">Psicología</option>
                    <option value="neurodesarrollo">Neurodesarrollo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tipo de atención *
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value as any)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868] bg-white font-medium"
                  >
                    <option value="Particular">Particular (Pago directo)</option>
                    <option value="EPS / ARL">Remitido por EPS / ARL</option>
                    <option value="Medicina Prepagada">Medicina Prepagada</option>
                  </select>
                </div>
              </div>

              {serviceType !== 'Particular' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nombre de tu EPS, ARL o entidad aseguradora
                  </label>
                  <input
                    type="text"
                    value={insuranceName}
                    onChange={(e) => setInsuranceName(e.target.value)}
                    placeholder="Ej. Nueva EPS, EPS Sanitas, ARL Positiva, Drummond..."
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868]"
                  />
                </div>
              )}

              {/* Patient Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nombre completo del paciente *
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Nombres y apellidos"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Número de documento *
                  </label>
                  <input
                    type="text"
                    required
                    value={documentId}
                    onChange={(e) => setDocumentId(e.target.value)}
                    placeholder="CC / TI / Registro Civil"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Teléfono / WhatsApp de contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. 321 538 1663"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Municipio de residencia
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868] bg-white font-medium"
                  >
                    <option value="La Jagua de Ibirico">La Jagua de Ibirico</option>
                    <option value="Becerril">Becerril</option>
                    <option value="Chiriguaná">Chiriguaná</option>
                    <option value="Agustín Codazzi">Agustín Codazzi</option>
                    <option value="El Paso">El Paso</option>
                    <option value="Valledupar">Valledupar</option>
                    <option value="Otro municipio">Otro municipio del Cesar</option>
                  </select>
                </div>
              </div>

              {/* Schedule preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Fecha preferida
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Jornada disponible
                  </label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value as any)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868] bg-white font-medium"
                  >
                    <option value="Mañana (7:20 AM - 12:00 PM)">Mañana (7:20 AM - 12:00 PM)</option>
                    <option value="Tarde (2:00 PM - 7:00 PM)">Tarde (2:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Motivo de consulta o diagnóstico médico (opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Dolor lumbar después de jornada laboral, fractura de tobillo en recuperación, orden de fonoaudiología..."
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002868]"
                />
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => handleCreateAppointment(true)}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#fdc003] text-[#261a00] font-bold rounded-full text-xs sm:text-sm shadow-md hover:bg-[#fabd00] transition-transform active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#002868]" />
                  <span>Enviar por WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCreateAppointment(false)}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#002868] text-white font-bold rounded-full text-xs sm:text-sm shadow-md hover:bg-[#0a3d91] transition-transform active:scale-95 cursor-pointer"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Guardar en el Sistema</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

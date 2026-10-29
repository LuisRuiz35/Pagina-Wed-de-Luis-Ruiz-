/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesShowcase } from './components/ServicesShowcase';
import { StatisticsBanner } from './components/StatisticsBanner';
import { AboutSection } from './components/AboutSection';
import { ThreeStepsGuide } from './components/ThreeStepsGuide';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { VideoModal } from './components/VideoModal';
import { FacilityLightboxModal } from './components/FacilityLightboxModal';
import { LegalModal } from './components/LegalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SpecialtyKey, Facility, AppointmentData } from './types';

export default function App() {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedSpecialtyForBooking, setSelectedSpecialtyForBooking] = useState<SpecialtyKey>('fisioterapia');
  
  // Video player modal
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedSpecialtyForVideo, setSelectedSpecialtyForVideo] = useState<SpecialtyKey>('fisioterapia');
  
  // Facility lightbox modal
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  // Legal modal
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'habeas_data' | null>(null);

  // Appointments session persistence
  const [appointments, setAppointments] = useState<AppointmentData[]>([
    {
      id: 'CITA-482910',
      patientName: 'Ejemplo Demostrativo',
      documentId: '1065893201',
      phone: '321 538 1663',
      city: 'La Jagua de Ibirico',
      specialty: 'fisioterapia',
      serviceType: 'Particular',
      preferredShift: 'Mañana (7:20 AM - 12:00 PM)',
      preferredDate: '2026-10-12',
      notes: 'Sesión de valoración y reeducación de marcha',
      createdAt: '07/10/2026',
      status: 'Confirmada'
    }
  ]);

  const handleOpenBooking = (specialty: SpecialtyKey = 'fisioterapia') => {
    setSelectedSpecialtyForBooking(specialty);
    setBookingModalOpen(true);
  };

  const handleOpenVideo = (specialty: SpecialtyKey) => {
    setSelectedSpecialtyForVideo(specialty);
    setVideoModalOpen(true);
  };

  const handleAddAppointment = (appt: AppointmentData) => {
    setAppointments((prev) => [appt, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#061c35] flex flex-col selection:bg-[#fdc003]/30 selection:text-[#002868]">
      {/* Top Navigation */}
      <Header
        onOpenBooking={() => handleOpenBooking('fisioterapia')}
        onOpenPatientPortal={() => setBookingModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero with Trust Badges */}
        <Hero onOpenBooking={() => handleOpenBooking('fisioterapia')} />

        {/* 2. ¿Por qué elegirnos? */}
        <WhyChooseUs />

        {/* 3. Nuestros Servicios (Interactive Tabs & Media Showcase) */}
        <ServicesShowcase
          onSelectServiceBooking={(svc) => handleOpenBooking(svc)}
          onOpenVideoDemo={(svc) => handleOpenVideo(svc)}
        />

        {/* 4. Estadísticas destacadas */}
        <StatisticsBanner />

        {/* 5. Conoce más sobre nosotros (8 blocks: Misión, Visión, Valores, Convenios, Equipo, Instalaciones) */}
        <AboutSection
          onSelectFacility={(fac) => setSelectedFacility(fac)}
          onOpenBooking={() => handleOpenBooking('fisioterapia')}
        />

        {/* 6. Cómo solicitar tu cita en 3 pasos */}
        <ThreeStepsGuide onOpenBooking={() => handleOpenBooking('fisioterapia')} />

        {/* 7. Testimonios */}
        <TestimonialsSection />

        {/* 8. Preguntas frecuentes */}
        <FaqSection />

        {/* 9. Llamado final */}
        <CtaBanner onOpenBooking={() => handleOpenBooking('fisioterapia')} />
      </main>

      {/* Footer */}
      <Footer
        onSelectService={(svc) => {
          handleOpenBooking(svc);
        }}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialSpecialty={selectedSpecialtyForBooking}
        existingAppointments={appointments}
        onAddAppointment={handleAddAppointment}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        specialty={selectedSpecialtyForVideo}
        onOpenBooking={() => {
          setVideoModalOpen(false);
          handleOpenBooking(selectedSpecialtyForVideo);
        }}
      />

      <FacilityLightboxModal
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
        onOpenBooking={() => {
          setSelectedFacility(null);
          handleOpenBooking('fisioterapia');
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

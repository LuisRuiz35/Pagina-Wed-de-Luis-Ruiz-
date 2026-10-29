export type SpecialtyKey =
  | 'fisioterapia'
  | 'respiratoria'
  | 'ocupacional'
  | 'fonoaudiologia'
  | 'psicologia'
  | 'neurodesarrollo';

export interface ServiceDetail {
  id: SpecialtyKey;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  activities: string[];
  indications: string[];
  icon: string;
  photos: {
    url: string;
    caption: string;
    alt: string;
  }[];
  videoThumbnail: string;
  videoDuration: string;
  videoTitle: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: SpecialtyKey | 'general';
  credentials: string;
  experienceYears: number;
  photoUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  tag: string;
  specialty: SpecialtyKey | 'general';
  rating: number;
  content: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'citas' | 'eps' | 'servicios' | 'general';
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  equipment: string[];
}

export interface AppointmentData {
  id: string;
  patientName: string;
  documentId: string;
  phone: string;
  email?: string;
  city: string;
  specialty: SpecialtyKey;
  serviceType: 'Particular' | 'EPS / ARL' | 'Medicina Prepagada';
  insuranceName?: string;
  preferredShift: 'Mañana (7:20 AM - 12:00 PM)' | 'Tarde (2:00 PM - 7:00 PM)';
  preferredDate: string;
  notes: string;
  createdAt: string;
  status: 'Confirmada' | 'En Gestión' | 'Completada';
}

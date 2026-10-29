import { ServiceDetail, TeamMember, Testimonial, FaqItem, Facility } from '../types';

export const CLINIC_INFO = {
  name: "Centro de Rehabilitación Integral Daniel's S.A.S",
  shortName: "Centro Daniel's",
  nit: "900.823.104-5",
  motto: '"Rehabilitamos con amor"',
  location: "La Jagua de Ibirico, Cesar, Colombia",
  address: "Calle 6 # 14 - 38, Barrio El Carmen, La Jagua de Ibirico",
  phone: "+57 321 538 1663",
  phoneDisplay: "321 538 1663",
  whatsappUrl: "https://wa.me/573215381663",
  instagram: "@centrointegraldanielsas",
  instagramUrl: "https://instagram.com/centrointegraldanielsas",
  email: "contacto@danielsrehabilitacion.com",
  schedule: "Lunes a viernes 7:20 a. m. a 12:00 m. y 2:00 p. m. a 7:00 p. m.",
  scheduleMorning: "7:20 a. m. - 12:00 m.",
  scheduleAfternoon: "2:00 p. m. - 7:00 p. m.",
  logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Y2AyYn7T7-SkIlt9swHJaefX2U6r4dxUo0nJffibM4KLAAFn1bsBzXMpFPk0zY2Qn7PnDaSVWxcEp_nvP-JRDFrJgB9-7MFelFctTqrtywY_6f-oRXuEXfjc0_UDhpCYls_grz9NkXKXSmcbuMTsIkgTA6f_6-Q4VYCi3-T77t6uarYbZuyuo_ZEcg-TlDMrScXxzJNkFZu30BqnfNTRdt89un2TYsO8Ca0hU8s",
  heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnrOU8kngbL-Trcz0M5UwspeXY0RJX00H_3IGLhkDCnsi5RsPYvPYFTwTdLy0FytdEAGMq7MxG7GC_OFunaNDgfxqcqXd9-IWz4-aaWanP4aUh56m0EkoEdxl-jEIlEklZEgwoa2RSO-67jNsjUc85wa9X5H-T2y2F2EnegN30ATM31goR8Gy2rN-o6-JLxla3GY5XinFvJvLplBHSHhA7XKdGzslujPnuRFWiJ7Q"
};

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  fisioterapia: {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    shortName: 'Fisioterapia',
    category: 'Terapia Física y Rehabilitación',
    tagline: 'Recupera movilidad y reduce el dolor con terapia física guiada por profesionales.',
    description: 'Orientada al restablecimiento funcional de alteraciones osteomusculares, traumatológicas y neuromusculares. Diseñado para procesos post-quirúrgicos, secuelas articulares, dolor de columna y reincorporación funcional segura.',
    activities: [
      'Reeducación de la marcha en barras paralelas y transferencias posturales',
      'Electroterapia analgesica (TENS, EMS, corrientes interferenciales)',
      'Termoterapia y crioterapia aplicada a lesiones articulares',
      'Mecanoterapia asistida y fortalecimiento muscular progresivo',
      'Terapia manual ortopédica y movilizaciones miofasciales'
    ],
    indications: [
      'Procesos post-operatorios de rodilla, cadera o columna',
      'Lumbalgias, cervicalgias y lesiones ocupacionales',
      'Esguinces, fracturas y desgarros musculares',
      'Artrosis, artritis y rigidez articular'
    ],
    icon: 'fitness_center',
    photos: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNTQ5bmj7lZPwI8sMzYdpSx8nGSF540oYaiyCJpcyuvs6xwyapox6kDV7F7tGGLS_blaMWIAJeEU1OMtvGl5hPe3xEaQqUH391ta6M34geJcEbFa2i27nKErtn9GLaFZhDwHGubEM2-L4x0XOyzF5wG_yqPtFa9wzfTZ4IJweAFO3P8Wf68KNG0s1FrPH9SrYa0DwPigBT1IfSXFaDfRhT28tEywSIfkVb7nMLXAY',
        caption: 'Terapia guiada',
        alt: 'Fisioterapeuta guiando ejercicios terapéuticos asistidos'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr7iOyLQopuuVO_cqMy47DAC9x4eaPqh2cP39f6BYenw8OGcl6Rh8VhFquKsXs6i2rEgfACjJA0tL5u-AVqTcQr82t-2a_NKtInfKza1d0j15CCgX2nBX0NP02RHSz8JZGAxsxQP3eLqowwM9xfefx8WBjXYPd47rzzc66-pbwEReSHa4s-t9kmszof-MFw5pkX_xYsbirx21TOM5oT_KymlB26eP0j7RDQ0boI68',
        caption: 'Gimnasio clínico',
        alt: 'Gimnasio de rehabilitación con colchonetas, balones y barras'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPJzGIK2hGqxe6ahM4NG2gxxaI50HaeeHfXy8ghQgoCMH8For9Ty5XN5gctxcJnTTWflzksG5VHnQnZi7hznp92Edn-MMemrAgMLgqFPlFGVF-6tGzT8T9mgUiRKkHvCvOLmUFq2WcZH5ZN0NIhLZfpSU6oE0XioMStzNlNZofXQuP4LSFujQbP-UrJWfqS83vrFiFIu7UTv1FFo_hPiUpkUAsqmd0HlQDBex_zhM',
        caption: 'Evaluación funcional',
        alt: 'Evaluación goniométrica y de rango de movilidad articular'
      }
    ],
    videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIQc18Y81kYlmTVPWNdBFkxapz46lfdWtnJu_sWhhSSVeEnv0w9mFkaP9Am5FqMkIpVnLgCf_74lCjFRKJivLfrXxqy3_2oJnL1DeRPScpGyDe8o2lV6yHhTp4G4Ma7bMVRQIDllRz0eknrJDHj0SWrvh8lqkUVDc40JW50rmjSpFY8jRJsAYm2ubD5miceCuidBOCUaLtM5wxms78LnCP1f1Lv4gETyxFfajbXc',
    videoDuration: '2:15 min',
    videoTitle: 'Protocolo de Recuperación en Fisioterapia Clínica'
  },
  respiratoria: {
    id: 'respiratoria',
    name: 'Terapia Respiratoria',
    shortName: 'T. Respiratoria',
    category: 'Cuidado y Función Pulmonar',
    tagline: 'Mejora tu capacidad respiratoria con acompañamiento especializado.',
    description: 'Tratamiento integral de afecciones del sistema respiratorio agudas y crónicas. Enfoque preventivo y rehabilitador para la optimización ventilatoria, desobstrucción de vías aéreas y reentrenamiento al esfuerzo.',
    activities: [
      'Higiene bronquial asistida y drenaje postural',
      'Terapia inhalatoria y micronebulizaciones controladas',
      'Entrenamiento de la musculatura inspiratoria con incentivadores de flujo y volumen',
      'Reeducación del patrón diafragmático y control de disnea',
      'Manejo de secreciones y acondicionamiento aeróbico adaptado'
    ],
    indications: [
      'EPOC y bronquitis crónica (frecuente en exposición laboral a polvos)',
      'Asma bronquial en niños y adultos',
      'Secuelas post-infecciosas y recuperación post-COVID',
      'Fibrosis y neumopatías restrictivas'
    ],
    icon: 'pulmonology',
    photos: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNTQ5bmj7lZPwI8sMzYdpSx8nGSF540oYaiyCJpcyuvs6xwyapox6kDV7F7tGGLS_blaMWIAJeEU1OMtvGl5hPe3xEaQqUH391ta6M34geJcEbFa2i27nKErtn9GLaFZhDwHGubEM2-L4x0XOyzF5wG_yqPtFa9wzfTZ4IJweAFO3P8Wf68KNG0s1FrPH9SrYa0DwPigBT1IfSXFaDfRhT28tEywSIfkVb7nMLXAY',
        caption: 'Higiene bronquial',
        alt: 'Terapeuta respiratorio aplicando técnicas de ventilación'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr7iOyLQopuuVO_cqMy47DAC9x4eaPqh2cP39f6BYenw8OGcl6Rh8VhFquKsXs6i2rEgfACjJA0tL5u-AVqTcQr82t-2a_NKtInfKza1d0j15CCgX2nBX0NP02RHSz8JZGAxsxQP3eLqowwM9xfefx8WBjXYPd47rzzc66-pbwEReSHa4s-t9kmszof-MFw5pkX_xYsbirx21TOM5oT_KymlB26eP0j7RDQ0boI68',
        caption: 'Incentivadores volumétricos',
        alt: 'Equipos de espirometría incentivada e inhaloterapia'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPJzGIK2hGqxe6ahM4NG2gxxaI50HaeeHfXy8ghQgoCMH8For9Ty5XN5gctxcJnTTWflzksG5VHnQnZi7hznp92Edn-MMemrAgMLgqFPlFGVF-6tGzT8T9mgUiRKkHvCvOLmUFq2WcZH5ZN0NIhLZfpSU6oE0XioMStzNlNZofXQuP4LSFujQbP-UrJWfqS83vrFiFIu7UTv1FFo_hPiUpkUAsqmd0HlQDBex_zhM',
        caption: 'Oximetría y control',
        alt: 'Monitoreo de saturación y capacidad pulmonar en reposo y marcha'
      }
    ],
    videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIQc18Y81kYlmTVPWNdBFkxapz46lfdWtnJu_sWhhSSVeEnv0w9mFkaP9Am5FqMkIpVnLgCf_74lCjFRKJivLfrXxqy3_2oJnL1DeRPScpGyDe8o2lV6yHhTp4G4Ma7bMVRQIDllRz0eknrJDHj0SWrvh8lqkUVDc40JW50rmjSpFY8jRJsAYm2ubD5miceCuidBOCUaLtM5wxms78LnCP1f1Lv4gETyxFfajbXc',
    videoDuration: '1:50 min',
    videoTitle: 'Sesión Clínica de Reeducación Respiratoria'
  },
  ocupacional: {
    id: 'ocupacional',
    name: 'Terapia Ocupacional',
    shortName: 'T. Ocupacional',
    category: 'Independencia y Vida Diaria',
    tagline: 'Recupera autonomía en tus actividades del día a día.',
    description: 'Favorece la independencia y la funcionalidad de personas en cualquier etapa de su ciclo vital, ayudándolas a recuperar habilidades motoras finas, cognitivas y sensoriales para su trabajo, escuela y hogar.',
    activities: [
      'Entrenamiento en actividades de la vida diaria (vestido, alimentación, higiene)',
      'Rehabilitación de miembro superior y pinzas digitales finas',
      'Integración sensorial y procesamiento táctil/propioceptivo',
      'Adaptaciones ergonómicas para reincorporación al puesto de trabajo',
      'Estimulación cognitiva y coordinación viso-motriz'
    ],
    indications: [
      'Secuelas de accidentes laborales o lesiones de mano/muñeca',
      'Eventos cerebrovasculares (ACV) y hemiparesias',
      'Dificultades en motricidad fina y escritura en niños',
      'Pérdida de autonomía funcional en adultos mayores'
    ],
    icon: 'back_hand',
    photos: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNTQ5bmj7lZPwI8sMzYdpSx8nGSF540oYaiyCJpcyuvs6xwyapox6kDV7F7tGGLS_blaMWIAJeEU1OMtvGl5hPe3xEaQqUH391ta6M34geJcEbFa2i27nKErtn9GLaFZhDwHGubEM2-L4x0XOyzF5wG_yqPtFa9wzfTZ4IJweAFO3P8Wf68KNG0s1FrPH9SrYa0DwPigBT1IfSXFaDfRhT28tEywSIfkVb7nMLXAY',
        caption: 'Habilidades finas',
        alt: 'Entrenamiento de destreza motriz y coordinación de dedos'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr7iOyLQopuuVO_cqMy47DAC9x4eaPqh2cP39f6BYenw8OGcl6Rh8VhFquKsXs6i2rEgfACjJA0tL5u-AVqTcQr82t-2a_NKtInfKza1d0j15CCgX2nBX0NP02RHSz8JZGAxsxQP3eLqowwM9xfefx8WBjXYPd47rzzc66-pbwEReSHa4s-t9kmszof-MFw5pkX_xYsbirx21TOM5oT_KymlB26eP0j7RDQ0boI68',
        caption: 'Módulos de autonomía',
        alt: 'Estaciones de actividades de la vida diaria y adaptaciones'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPJzGIK2hGqxe6ahM4NG2gxxaI50HaeeHfXy8ghQgoCMH8For9Ty5XN5gctxcJnTTWflzksG5VHnQnZi7hznp92Edn-MMemrAgMLgqFPlFGVF-6tGzT8T9mgUiRKkHvCvOLmUFq2WcZH5ZN0NIhLZfpSU6oE0XioMStzNlNZofXQuP4LSFujQbP-UrJWfqS83vrFiFIu7UTv1FFo_hPiUpkUAsqmd0HlQDBex_zhM',
        caption: 'Valoración ergonómica',
        alt: 'Evaluación de capacidad laboral y agarre'
      }
    ],
    videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIQc18Y81kYlmTVPWNdBFkxapz46lfdWtnJu_sWhhSSVeEnv0w9mFkaP9Am5FqMkIpVnLgCf_74lCjFRKJivLfrXxqy3_2oJnL1DeRPScpGyDe8o2lV6yHhTp4G4Ma7bMVRQIDllRz0eknrJDHj0SWrvh8lqkUVDc40JW50rmjSpFY8jRJsAYm2ubD5miceCuidBOCUaLtM5wxms78LnCP1f1Lv4gETyxFfajbXc',
    videoDuration: '2:05 min',
    videoTitle: 'Rehabilitación Funcional y Terapia Ocupacional'
  },
  fonoaudiologia: {
    id: 'fonoaudiologia',
    name: 'Fonoaudiología',
    shortName: 'Fonoaudiología',
    category: 'Comunicación, Lenguaje y Deglución',
    tagline: 'Apoyo en comunicación, lenguaje, voz y deglución.',
    description: 'Evaluación, diagnóstico y rehabilitación de los procesos de comunicación humana, desórdenes del habla, fluidez verbal, trastornos oromiofuncionales y dificultades en la deglución en todas las edades.',
    activities: [
      'Terapia de lenguaje comprensivo y expresivo en infancia y adultez',
      'Rehabilitación de disfagia y terapia miofuncional orofacial',
      'Entrenamiento y cuidado de la voz profesional para docentes y trabajadores',
      'Corrección de trastornos del habla y articulación (dislalias, disartrias)',
      'Estimulación auditivo-verbal y habilidades comunicativas'
    ],
    indications: [
      'Retraso en el inicio del lenguaje o pronunciación en niños',
      'Dificultades para tragar alimentos de forma segura (disfagia)',
      'Disfonías, fatiga vocal o nódulos en cuerdas vocales',
      'Secuelas comunicativas de trauma craneal o ACV (afasias)'
    ],
    icon: 'record_voice_over',
    photos: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNTQ5bmj7lZPwI8sMzYdpSx8nGSF540oYaiyCJpcyuvs6xwyapox6kDV7F7tGGLS_blaMWIAJeEU1OMtvGl5hPe3xEaQqUH391ta6M34geJcEbFa2i27nKErtn9GLaFZhDwHGubEM2-L4x0XOyzF5wG_yqPtFa9wzfTZ4IJweAFO3P8Wf68KNG0s1FrPH9SrYa0DwPigBT1IfSXFaDfRhT28tEywSIfkVb7nMLXAY',
        caption: 'Estimulación de lenguaje',
        alt: 'Sesión personalizada de desarrollo del lenguaje verbal'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr7iOyLQopuuVO_cqMy47DAC9x4eaPqh2cP39f6BYenw8OGcl6Rh8VhFquKsXs6i2rEgfACjJA0tL5u-AVqTcQr82t-2a_NKtInfKza1d0j15CCgX2nBX0NP02RHSz8JZGAxsxQP3eLqowwM9xfefx8WBjXYPd47rzzc66-pbwEReSHa4s-t9kmszof-MFw5pkX_xYsbirx21TOM5oT_KymlB26eP0j7RDQ0boI68',
        caption: 'Terapia miofuncional',
        alt: 'Materiales clínicos de deglución y articulación fonética'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPJzGIK2hGqxe6ahM4NG2gxxaI50HaeeHfXy8ghQgoCMH8For9Ty5XN5gctxcJnTTWflzksG5VHnQnZi7hznp92Edn-MMemrAgMLgqFPlFGVF-6tGzT8T9mgUiRKkHvCvOLmUFq2WcZH5ZN0NIhLZfpSU6oE0XioMStzNlNZofXQuP4LSFujQbP-UrJWfqS83vrFiFIu7UTv1FFo_hPiUpkUAsqmd0HlQDBex_zhM',
        caption: 'Evaluación orofacial',
        alt: 'Exploración de órganos fonoarticuladores'
      }
    ],
    videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIQc18Y81kYlmTVPWNdBFkxapz46lfdWtnJu_sWhhSSVeEnv0w9mFkaP9Am5FqMkIpVnLgCf_74lCjFRKJivLfrXxqy3_2oJnL1DeRPScpGyDe8o2lV6yHhTp4G4Ma7bMVRQIDllRz0eknrJDHj0SWrvh8lqkUVDc40JW50rmjSpFY8jRJsAYm2ubD5miceCuidBOCUaLtM5wxms78LnCP1f1Lv4gETyxFfajbXc',
    videoDuration: '2:30 min',
    videoTitle: 'Guía Clínica de Fonoaudiología y Deglución'
  },
  psicologia: {
    id: 'psicologia',
    name: 'Psicología',
    shortName: 'Psicología',
    category: 'Salud Mental y Bienestar Emocional',
    tagline: 'Acompañamiento emocional para pacientes y sus familias.',
    description: 'Atención psicológica individual, infantil y familiar con enfoque clínico cognitivo-conductual y psicosocial. Apoyamos el afrontamiento de enfermedades crónicas, duelo por discapacidad, manejo de ansiedad, estrés y orientación para cuidadores.',
    activities: [
      'Evaluación psicológica clínica y valoración de funciones cognitivas',
      'Psicoterapia de afrontamiento ante cambios de salud o diagnósticos complejos',
      'Intervención en ansiedad, depresión y regulación emocional',
      'Escuela de orientación y resiliencia para cuidadores y familiares',
      'Psicología infantil: conducta, atención y adaptación socioemocional'
    ],
    indications: [
      'Impacto emocional post-accidente o ante diagnóstico limitante',
      'Estrés laboral crónico y alteraciones del estado de ánimo',
      'Dificultades en el manejo de pautas de crianza y conducta infantil',
      'Sobrecarga emocional en cuidadores de pacientes en rehabilitación'
    ],
    icon: 'psychology',
    photos: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNTQ5bmj7lZPwI8sMzYdpSx8nGSF540oYaiyCJpcyuvs6xwyapox6kDV7F7tGGLS_blaMWIAJeEU1OMtvGl5hPe3xEaQqUH391ta6M34geJcEbFa2i27nKErtn9GLaFZhDwHGubEM2-L4x0XOyzF5wG_yqPtFa9wzfTZ4IJweAFO3P8Wf68KNG0s1FrPH9SrYa0DwPigBT1IfSXFaDfRhT28tEywSIfkVb7nMLXAY',
        caption: 'Consulta privada',
        alt: 'Consultorio cálido y confidencial de psicología'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr7iOyLQopuuVO_cqMy47DAC9x4eaPqh2cP39f6BYenw8OGcl6Rh8VhFquKsXs6i2rEgfACjJA0tL5u-AVqTcQr82t-2a_NKtInfKza1d0j15CCgX2nBX0NP02RHSz8JZGAxsxQP3eLqowwM9xfefx8WBjXYPd47rzzc66-pbwEReSHa4s-t9kmszof-MFw5pkX_xYsbirx21TOM5oT_KymlB26eP0j7RDQ0boI68',
        caption: 'Espacio familiar',
        alt: 'Ambiente tranquilo para diálogo con pacientes y acompañantes'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPJzGIK2hGqxe6ahM4NG2gxxaI50HaeeHfXy8ghQgoCMH8For9Ty5XN5gctxcJnTTWflzksG5VHnQnZi7hznp92Edn-MMemrAgMLgqFPlFGVF-6tGzT8T9mgUiRKkHvCvOLmUFq2WcZH5ZN0NIhLZfpSU6oE0XioMStzNlNZofXQuP4LSFujQbP-UrJWfqS83vrFiFIu7UTv1FFo_hPiUpkUAsqmd0HlQDBex_zhM',
        caption: 'Test y valoración',
        alt: 'Herramientas psicométricas estandarizadas'
      }
    ],
    videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIQc18Y81kYlmTVPWNdBFkxapz46lfdWtnJu_sWhhSSVeEnv0w9mFkaP9Am5FqMkIpVnLgCf_74lCjFRKJivLfrXxqy3_2oJnL1DeRPScpGyDe8o2lV6yHhTp4G4Ma7bMVRQIDllRz0eknrJDHj0SWrvh8lqkUVDc40JW50rmjSpFY8jRJsAYm2ubD5miceCuidBOCUaLtM5wxms78LnCP1f1Lv4gETyxFfajbXc',
    videoDuration: '1:45 min',
    videoTitle: 'Salud Mental y Acompañamiento en Rehabilitación'
  },
  neurodesarrollo: {
    id: 'neurodesarrollo',
    name: 'Neurodesarrollo',
    shortName: 'Neurodesarrollo',
    category: 'Atención Pediátrica y Estimulación',
    tagline: 'Estimulación y acompañamiento al desarrollo de niños.',
    description: 'Programa multidisciplinario dedicado al seguimiento y potenciación de las pautas madurativas de bebés, niños y adolescentes. Integra terapia Bobath, psicomotricidad y juego terapéutico para maximizar la autonomía infantil.',
    activities: [
      'Estimulación sensorial y motora temprana (control cefálico, gateo, marcha)',
      'Intervención terapéutica en parálisis cerebral y trastornos del tono muscular',
      'Desarrollo de habilidades de integración sensorial y praxis motriz',
      'Acompañamiento en trastornos del espectro autista (TEA) y del neurodesarrollo',
      'Orientación y pautas lúdicas para padres en casa'
    ],
    indications: [
      'Bebés prematuros o con factores de riesgo perinatal',
      'Retraso en la adquisición de hitos motores (no se sienta, no camina)',
      'Trastorno del Espectro Autista (TEA) y dificultades de interacción',
      'Síndrome de Down y otras condiciones genéticas'
    ],
    icon: 'child_care',
    photos: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNTQ5bmj7lZPwI8sMzYdpSx8nGSF540oYaiyCJpcyuvs6xwyapox6kDV7F7tGGLS_blaMWIAJeEU1OMtvGl5hPe3xEaQqUH391ta6M34geJcEbFa2i27nKErtn9GLaFZhDwHGubEM2-L4x0XOyzF5wG_yqPtFa9wzfTZ4IJweAFO3P8Wf68KNG0s1FrPH9SrYa0DwPigBT1IfSXFaDfRhT28tEywSIfkVb7nMLXAY',
        caption: 'Estimulación lúdica',
        alt: 'Juego terapéutico y estimulación propioceptiva infantil'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr7iOyLQopuuVO_cqMy47DAC9x4eaPqh2cP39f6BYenw8OGcl6Rh8VhFquKsXs6i2rEgfACjJA0tL5u-AVqTcQr82t-2a_NKtInfKza1d0j15CCgX2nBX0NP02RHSz8JZGAxsxQP3eLqowwM9xfefx8WBjXYPd47rzzc66-pbwEReSHa4s-t9kmszof-MFw5pkX_xYsbirx21TOM5oT_KymlB26eP0j7RDQ0boI68',
        caption: 'Circuito psicomotor',
        alt: 'Colchonetas, rulos terapéuticos y cuñas de estimulación motriz'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPJzGIK2hGqxe6ahM4NG2gxxaI50HaeeHfXy8ghQgoCMH8For9Ty5XN5gctxcJnTTWflzksG5VHnQnZi7hznp92Edn-MMemrAgMLgqFPlFGVF-6tGzT8T9mgUiRKkHvCvOLmUFq2WcZH5ZN0NIhLZfpSU6oE0XioMStzNlNZofXQuP4LSFujQbP-UrJWfqS83vrFiFIu7UTv1FFo_hPiUpkUAsqmd0HlQDBex_zhM',
        caption: 'Evaluación del desarrollo',
        alt: 'Medición de escalas de desarrollo infantil'
      }
    ],
    videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfIQc18Y81kYlmTVPWNdBFkxapz46lfdWtnJu_sWhhSSVeEnv0w9mFkaP9Am5FqMkIpVnLgCf_74lCjFRKJivLfrXxqy3_2oJnL1DeRPScpGyDe8o2lV6yHhTp4G4Ma7bMVRQIDllRz0eknrJDHj0SWrvh8lqkUVDc40JW50rmjSpFY8jRJsAYm2ubD5miceCuidBOCUaLtM5wxms78LnCP1f1Lv4gETyxFfajbXc',
    videoDuration: '2:10 min',
    videoTitle: 'Programa Infantil de Neurodesarrollo y Psicomotricidad'
  }
};

export const WHY_CHOOSE_US = [
  {
    icon: 'person_check',
    title: 'Atención personalizada',
    description: 'Cada paciente recibe un plan de rehabilitación diseñado minuciosamente de acuerdo con su diagnóstico clínico y metas funcionales.'
  },
  {
    icon: 'medical_services',
    title: 'Profesionales especializados',
    description: 'Un equipo de 16 terapeutas certificados, en constante formación científica y comprometidos con el trato humano.'
  },
  {
    icon: 'healing',
    title: 'Servicios integrales',
    description: 'Fisioterapia, terapia respiratoria, ocupacional, fonoaudiología, psicología y neurodesarrollo en una sola sede coordinada.'
  },
  {
    icon: 'schedule',
    title: 'Atención accesible',
    description: 'Orientación ágil y continua para programar citas particulares y remitidas por EPS sin dilaciones ni trámites confusos.'
  },
  {
    icon: 'vital_signs',
    title: 'Recuperación y bienestar',
    description: 'Acompañamiento terapéutico con métricas de avance semanal para que el paciente recupere su autonomía y calidad de vida.'
  },
  {
    icon: 'engineering',
    title: 'Pensados para la población trabajadora',
    description: 'Programas de rehabilitación y ergonomía adaptados para los operarios, transportadores y fuerza laboral del sector minero del Cesar.'
  }
];

export const STATS_DATA = [
  { value: '+20', label: 'Años de experiencia', description: 'Compromiso continuo en el Cesar' },
  { value: '+1.000', label: 'Pacientes atendidos', description: 'Familias que confían en nosotros' },
  { value: '16', label: 'Terapeutas especializados', description: 'Personal clínico en sede' },
  { value: '98 %', label: 'Satisfacción', description: 'Evaluaciones positivas y progreso' }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'daniel-ruiz',
    name: 'Lic. Daniel Ruiz',
    role: 'Director Clínico & Especialista',
    specialty: 'fisioterapia',
    credentials: 'Fisioterapeuta - Especialista en Neurorrehabilitación U. Nacional',
    experienceYears: 18,
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    description: 'Lidera la formulación de protocolos y la dirección del equipo terapéutico con enfoque humano y de seguridad del paciente.'
  },
  {
    id: 'claudia-mendoza',
    name: 'Dra. Claudia Mendoza',
    role: 'Líder de Fisioterapia Traumatológica',
    specialty: 'fisioterapia',
    credentials: 'Fisioterapeuta - Posgrado en Rehabilitación Ortopédica U. del Norte',
    experienceYears: 12,
    photoUrl: 'https://images.unsplash.com/photo-1594824813627-814986b6a22f?auto=format&fit=crop&q=80&w=400',
    description: 'Experta en marcha, electroterapia avanzada y recuperación funcional tras intervenciones quirúrgicas complejas.'
  },
  {
    id: 'carlos-restrepo',
    name: 'Lic. Carlos Restrepo',
    role: 'Coordinador de Terapia Respiratoria',
    specialty: 'respiratoria',
    credentials: 'Terapeuta Respiratorio - Certificado en Cuidado Pulmonar Crónico',
    experienceYears: 10,
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    description: 'Especialista en espirometría incentivada, higiene bronquial en población minera y rehabilitación respiratoria poscovid.'
  },
  {
    id: 'valentina-morales',
    name: 'Lic. Valentina Morales',
    role: 'Terapeuta Ocupacional',
    specialty: 'ocupacional',
    credentials: 'Terapeuta Ocupacional - Integración Sensorial y Ergonomía Laboral',
    experienceYears: 9,
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    description: 'Dedicada a la reincorporación laboral funcional y la independencia en actividades básicas e instrumentales de la vida diaria.'
  },
  {
    id: 'andrea-penaloza',
    name: 'Dra. Andrea Peñaloza',
    role: 'Fonoaudióloga Clínica',
    specialty: 'fonoaudiologia',
    credentials: 'Fonoaudióloga - Diplomada en Deglución, Disfagia y Motricidad Orofacial',
    experienceYears: 8,
    photoUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400',
    description: 'Tratamiento de trastornos miofuncionales, voz profesional, dislalias en edad escolar y rehabilitación de disfagia.'
  },
  {
    id: 'javier-duran',
    name: 'Dr. Javier Durán',
    role: 'Psicólogo Clínico & Neurodesarrollo',
    specialty: 'psicologia',
    credentials: 'Psicólogo - Especialista en Neuropsicología del Desarrollo Infantil',
    experienceYears: 11,
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    description: 'Acompaña a niños con pautas de neurodesarrollo diverso, espectro autista y brinda soporte psicoemocional a familias.'
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'consultorios',
    title: 'Consultorios especializados',
    description: 'Espacios privados acondicionados con camillas ergonómicas, climatización y privacidad para valoraciones fonoaudiológicas, psicológicas y médicas.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu7cS2lhLZJlFtndzH20LeEbU7kHcl_wi2B72ZQkNoPtKCvdNmj24eyuNvZ8XanZyxSZwMVRQmYCfWeKlSi_v5RMaF8Ay_Y0ogOg-wZ6PldJZMAzwgPcqO5tFbuTqFx_SYmmIHZ86qrKR03boLBOzv9qk_idIMy5KPX3iKj3hl5sHjq94mK0gBBo17jaaqpeY9vy0faeasBIMK8TpwpT-yIu4lYufH3PP5b8j14J0',
    equipment: ['Camillas de altura graduable', 'Equipos de electroanalgesia digital', 'Privacidad acústica', 'Iluminación terapéutica']
  },
  {
    id: 'gimnasio',
    title: 'Gimnasio terapéutico',
    description: 'Área abierta de mecanoterapia con barras paralelas de madera de alta resistencia, escalerillas suecas, balones bobath y colchonetas de alta densidad.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0TxEqBhxW73NC6aM-JYN3h3-u6b8ir1_swx9OIRn4puuDCUlZUJRtWIWPF08DDjGZVrpVLO-2euoyrQEgRSEeTgmekRmQyUk4ZFRMPGztA1gN7N7_f5BTmR_ticI4qp2npHaFiusZxd6pVaDDVLmZxRFNFYIRVUAGPaXcJvN7l-o7Y4WJDJQsNNdFa88yZAUoKUxmVccqEZ2kaEk1q2RlnB1qrBT73kKKld5P2Mo',
    equipment: ['Barras paralelas de reeducación de marcha', 'Balones suizos terapéuticos', 'Rueda de hombro y timón', 'Bandas elásticas y pesas graduadas']
  },
  {
    id: 'recepcion',
    title: 'Recepción y sala de espera',
    description: 'Ambiente agradable y cómodo con atención prioritaria para adultos mayores, personas en condición de movilidad reducida y niños acompañados.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoeB2slCV1dO5QX77cVdydhLZcnSCTl6Wxnsr5xf9v6vvfKO5uka8PctsJUzrW8Mxju40PTEHm9_zZUrAnwWxWFGDxDCsC_vQEw9w95961Tk5l2Y7jYwTwr1DtJTO1oqXfKClNdABD2SRUAE9KtGERcakM8-8vvlh5xTUk3ZA52bcdSHi559SBoqESeTLS4ta8G_j3ANMtm4qFnNr0ir9OmfolgIf-EFVkLSpUVJg',
    equipment: ['Módulo de asignación y verificación de citas', 'Rampas de acceso accesible', 'Silletería anatómica', 'Estación de hidratación']
  }
];

export const CONVENIOS_DATA = [
  { name: 'Nueva EPS', type: 'EPS', note: 'Régimen Contributivo y Subsidiado' },
  { name: 'EPS Sanitas', type: 'EPS', note: 'Planes de apoyo terapéutico' },
  { name: 'Famisanar', type: 'EPS', note: 'Autorizaciones ambulatorias' },
  { name: 'Asmet Salud', type: 'EPS', note: 'Red en el departamento del Cesar' },
  { name: 'Positiva Compañía de Seguros', type: 'ARL', note: 'Rehabilitación laboral y secuelas ATEL' },
  { name: 'ARL Sura', type: 'ARL', note: 'Reintegro laboral y terapia ocupacional' },
  { name: 'Drummond Ltd. (Convenio de Salud)', type: 'Corporativo', note: 'Población trabajadora del corredor minero' },
  { name: 'Coomeva Medicina Prepagada', type: 'Prepagada', note: 'Atención preferencial directa' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Jorge Eliécer Quintero',
    city: 'La Jagua de Ibirico',
    tag: 'Paciente de Fisioterapia',
    specialty: 'fisioterapia',
    rating: 5,
    content: 'Tuve una fractura de tibia en el trabajo y no pensé volver a caminar con normalidad tan pronto. El equipo de Daniel’s me acompañó sesión a sesión con una paciencia increíble. Hoy camino sin dolor y ya pude reincorporarme a mi labor.',
    date: 'Hace 3 semanas'
  },
  {
    id: 'test-2',
    name: 'Marta Cecilia Gómez',
    city: 'Becerril, Cesar',
    tag: 'Familiar de paciente pediátrico',
    specialty: 'neurodesarrollo',
    rating: 5,
    content: 'Mi hijo de 4 años tenía retraso en el lenguaje y pautas motoras. En Fonoaudiología y Neurodesarrollo han tenido un amor y una dedicación hermosos. Es el único centro en la región que de verdad te trata como familia.',
    date: 'Hace 1 mes'
  },
  {
    id: 'test-3',
    name: 'Luis Fernando Orozco',
    city: 'Chiriguaná, Cesar',
    tag: 'Paciente trabajador del sector minero',
    specialty: 'respiratoria',
    rating: 5,
    content: 'Por años trabajé en operaciones y mi capacidad pulmonar se fue reduciendo por constantes afecciones. Con el programa de terapia respiratoria aprendí ejercicios que me devolvieron el aire y la tranquilidad.',
    date: 'Hace 2 meses'
  },
  {
    id: 'test-4',
    name: 'Rosa Elena Cuello',
    city: 'La Jagua de Ibirico',
    tag: 'Paciente de Terapia Ocupacional',
    specialty: 'ocupacional',
    rating: 5,
    content: 'Después de una cirugía de mano sentía que no servía para hacer mis quehaceres ni tomar una taza. La terapeuta me diseñó ejercicios con masillas y actividades que me devolvieron la fuerza en mis dedos.',
    date: 'Hace 2 semanas'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Atienden remitidos por EPS?',
    answer: 'Sí. Atendemos pacientes particulares y pacientes remitidos por las principales EPS con convenio (Nueva EPS, Sanitas, Famisanar, Asmet Salud, entre otras) y ARL. Solo necesitas tener tu orden médica y autorización vigente; si tienes dudas sobre el trámite, escríbenos por WhatsApp y te orientamos paso a paso.',
    category: 'eps'
  },
  {
    id: 'faq-2',
    question: '¿Cómo programo mi cita?',
    answer: 'Puedes solicitar tu cita directamente a través de nuestro botón de WhatsApp (321 538 1663), por nuestro formulario en esta página web, o acercándote a nuestras instalaciones en La Jagua de Ibirico. Nuestro equipo verificará la especialidad que requieres y te asignará el turno más cercano.',
    category: 'citas'
  },
  {
    id: 'faq-3',
    question: '¿Cuál es el horario de atención?',
    answer: 'Atendemos de lunes a viernes en jornada continua con dos bloques: Mañanas de 7:20 a. m. a 12:00 m., y tardes de 2:00 p. m. a 7:00 p. m. Este horario flexible permite que los trabajadores y estudiantes asistan cómodamente antes o después de sus jornadas.',
    category: 'citas'
  },
  {
    id: 'faq-4',
    question: '¿Qué documentos debo llevar a mi primera sesión?',
    answer: 'Para tu primera valoración te recomendamos llevar: Documento de identidad original, resumen de historia clínica o remisión médica del especialista, exámenes o radiografías previas (si aplican), y la autorización de tu EPS o carné en caso de no ser particular.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: '¿Qué servicios prestan para la población trabajadora y empresas?',
    answer: 'Contamos con programas integrales de rehabilitación osteomuscular, manejo del dolor lumbar y cervical, reentrenamiento funcional para reintegro laboral y atención oportuna a través de ARL para la fuerza trabajadora del corredor minero y agrícola del Cesar.',
    category: 'servicios'
  }
];

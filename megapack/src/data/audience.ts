export interface AudienceGroup {
  category: string;
  badge: string;
  profiles: string[];
}

export const OFFICIAL_AUDIENCE_PROFILES = [
  "Terapeutas de masaje y spa",
  "Estudiantes de terapias alternativas y orientales",
  "Profesionales de la salud y fisioterapeutas",
  "Fisioterapeutas",
  "Quiroprácticos",
  "Entrenadores personales",
  "Terapeutas deportivos",
  "Médicos especializados en medicina deportiva",
  "Atletas profesionales y deportistas amateurs",
  "Centros de rehabilitación y fisioterapia",
  "Revistas y sitios web especializados en salud y bienestar",
  "Instituciones educativas y académicas",
  "Centros deportivos y gimnasios",
];

export const AUDIENCE_GROUPS: AudienceGroup[] = [
  {
    category: "Terapeutas y Quiroprácticos",
    badge: "Práctica Terapéutica",
    profiles: [
      "Terapeutas de masaje y spa",
      "Estudiantes de terapias alternativas y orientales",
      "Quiroprácticos",
    ],
  },
  {
    category: "Salud y Fisioterapia",
    badge: "Rehabilitación y Medicina",
    profiles: [
      "Profesionales de la salud y fisioterapeutas",
      "Médicos especializados en medicina deportiva",
      "Centros de rehabilitación y fisioterapia",
    ],
  },
  {
    category: "Deporte y Acondicionamiento",
    badge: "Rendimiento Deportivo",
    profiles: [
      "Entrenadores personales",
      "Terapeutas deportivos",
      "Atletas profesionales y deportistas amateurs",
      "Centros deportivos y gimnasios",
    ],
  },
  {
    category: "Formación e Instituciones",
    badge: "Académico y Divulgación",
    profiles: [
      "Instituciones educativas y académicas de fisioterapia",
      "Revistas y sitios web especializados en salud y bienestar",
    ],
  },
];

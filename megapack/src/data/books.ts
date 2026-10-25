export interface BookItem {
  id: number;
  romanNumeral: string;
  displayNumber: string;
  volumeTitle: string;
  category: string;
  description: string;
  statusText: string;
  isRealTitleConfirmed: boolean;
  coverImage?: string;
}

/**
 * Books data structure.
 * 
 * Centralized data array for the 9 books included in "Masajes 9 en 1".
 */
export const BOOKS_DATA: BookItem[] = [
  {
    id: 1,
    romanNumeral: "I",
    displayNumber: "Libro 01",
    volumeTitle: "Los Puntos Gatillo Autocuración",
    category: "Puntos Gatillo y Alivio",
    description: "Aprende a tratar puntos gatillo con técnicas efectivas para aliviar el dolor y mejorar la movilidad.",
    statusText: "Disponible en el Megapack oficial",
    isRealTitleConfirmed: true,
  },
  {
    id: 2,
    romanNumeral: "II",
    displayNumber: "Libro 02",
    volumeTitle: "Manual Profesional del Masaje Ilustrado",
    category: "Manual Ilustrado",
    description: "Guía completa de técnicas de masaje ilustradas, ideal tanto para profesionales como para aficionados.",
    statusText: "Disponible en el Megapack oficial",
    isRealTitleConfirmed: true,
  },
  {
    id: 3,
    romanNumeral: "III",
    displayNumber: "Libro 03",
    volumeTitle: "Masaje Deportivo y Anatomía",
    category: "Deporte y Anatomía",
    description: "Explora la relación entre el masaje y el deporte, junto con la anatomía del cuerpo humano.",
    statusText: "Disponible en el Megapack oficial",
    isRealTitleConfirmed: true,
  },
  {
    id: 4,
    romanNumeral: "IV",
    displayNumber: "Libro 04",
    volumeTitle: "Masaje: Rehabilitación de Traumatismos y Enfermedades",
    category: "Rehabilitación Funcional",
    description: "Enfoque en el uso del masaje para la rehabilitación, con técnicas específicas para acelerar la recuperación.",
    statusText: "Disponible en el Megapack oficial",
    isRealTitleConfirmed: true,
  },
  {
    id: 5,
    romanNumeral: "V",
    displayNumber: "Libro 05",
    volumeTitle: "Masaje Tailandés: Curso Completo",
    category: "Técnicas Tradicionales",
    description: "Sumérgete en las técnicas tradicionales del masaje tailandés y sus beneficios terapéuticos.",
    statusText: "Disponible en el Megapack oficial",
    isRealTitleConfirmed: true,
  },
  {
    id: 6,
    romanNumeral: "VI",
    displayNumber: "Libro 06",
    volumeTitle: "Masaje Tejidos Profundos",
    category: "Tejidos Profundos",
    description: "Técnicas avanzadas para aliviar la tensión muscular profunda y mejorar la postura.",
    statusText: "Disponible en el Megapack oficial",
    isRealTitleConfirmed: true,
  },
  {
    id: 7,
    romanNumeral: "VII",
    displayNumber: "Libro 07",
    volumeTitle: "Masaje Terapéutico: Técnicas y Conceptos",
    category: "Salud y Bienestar",
    description: "Explora las diferentes técnicas y conceptos para promover la salud y el bienestar integral.",
    statusText: "Disponible en el Megapack oficial",
    isRealTitleConfirmed: true,
  },
  {
    id: 8,
    romanNumeral: "VIII",
    displayNumber: "Libro 08",
    volumeTitle: "Secretos de los Masajes: Guía Paso a Paso",
    category: "Guía Paso a Paso",
    description: "Detalles paso a paso para realizar masajes relajantes y terapéuticos con total confianza.",
    statusText: "Disponible en el Megapack oficial",
    isRealTitleConfirmed: true,
  },
  {
    id: 9,
    romanNumeral: "IX",
    displayNumber: "Libro 09",
    volumeTitle: "Terapias de Masajes",
    category: "Terapias Integrales",
    description: "Visión general de terapias de masajes, desde las tradicionales hasta las modernas, para la terapia física y emocional.",
    statusText: "Disponible en el Megapack oficial",
    isRealTitleConfirmed: true,
  },
];

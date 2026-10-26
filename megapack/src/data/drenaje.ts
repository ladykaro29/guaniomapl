export interface DrenajeBenefit {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

export interface DrenajeModule {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  topics: string[];
}

export interface DrenajeTestimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
  location?: string;
}

export interface DrenajeFaq {
  question: string;
  answer: string;
}

export const DRENAJE_BENEFITS: DrenajeBenefit[] = [
  {
    id: "desintoxicacion",
    title: "Desintoxicación Profunda",
    description: "Limpia y drena el sistema linfático eliminando toxinas, desechos celulares acumulados y reduciendo la sobrecarga del organismo.",
    image: "/images/drenaje/benefit_desintoxica.webp",
    badge: "Purificación",
  },
  {
    id: "energia",
    title: "Energía Revitalizada",
    description: "Estimula la microcirculación y el retorno venoso, devolviendo ligereza corporal y una renovada sensación de vitalidad.",
    image: "/images/drenaje/benefit_energia.webp",
    badge: "Vitalidad",
  },
  {
    id: "hinchazon",
    title: "Reducción de Hinchazón",
    description: "Dile adiós a la retención de líquidos, pesadez en piernas, hinchazón abdominal y edemas provocados por el sedentarismo o cambios hormonales.",
    image: "/images/drenaje/benefit_hinchazon.webp",
    badge: "Alivio Inmediato",
  },
  {
    id: "piel-radiante",
    title: "Piel Radiante y Luminosa",
    description: "Favorece la oxigenación y regeneración celular profunda para lucir una piel más firme, suave, tonificada y con brillo natural.",
    image: "/images/drenaje/facial_beauty.webp",
    badge: "Efecto Glow",
  },
  {
    id: "relajacion",
    title: "Relajación y Antiestrés",
    description: "Maniobras suaves y rítmicas que calman el sistema nervioso simpático, liberan la tensión acumulada y reducen los niveles de cortisol.",
    image: "/images/drenaje/benefit_relajacion.webp",
    badge: "Bienestar Mental",
  },
];

export const DRENAJE_PAIN_POINTS = [
  "¿Cansada de sentirte inflamada y pesada sin importar las dietas que intentes?",
  "¿Sientes que tus piernas pesan una tonelada al final de cada jornada diaria?",
  "¿La celulitis, fibrosis o marcas antiguas afectan tu seguridad y confianza?",
  "¿Evitas usar ciertos vestidos o ropa ajustada por la hinchazón abdominal?",
  "¿Frustrada de gastar en cremas costosas y soluciones mágicas que no dan resultados?",
];

export const DRENAJE_MODULES: DrenajeModule[] = [
  {
    id: 1,
    number: "MÓDULO 01",
    title: "Fundamentos y Anatomía Linfática",
    subtitle: "Comprende la red natural de purificación del cuerpo",
    description: "Aprende cómo funciona el sistema linfático, la ubicación de las principales cadenas ganglionares y las precauciones necesarias.",
    image: "/images/drenaje/module_01.png",
    topics: [
      "Qué es la linfa y cómo recorre el organismo",
      "Estaciones ganglionares clave: cuello, axilas, ingles y fosas poplíteas",
      "Indicaciones, contraindicaciones y precauciones éticas",
    ],
  },
  {
    id: 2,
    number: "MÓDULO 02",
    title: "Maniobras y Toques Esenciales",
    subtitle: "La suavidad y el ritmo correcto para activar el flujo",
    description: "Domina las maniobras clásicas del drenaje manual: aperturas, bombeo, arrastre y círculos fijos con la presión exacta.",
    image: "/images/drenaje/module_02.png",
    topics: [
      "Calibración de la presión manual (toque sutil sin dolor)",
      "Maniobra de apertura y desbloqueo ganglionar",
      "Técnicas de evacuación, arrastre y bombeo",
    ],
  },
  {
    id: 3,
    number: "MÓDULO 03",
    title: "Drenaje Linfático Facial & Glow",
    subtitle: "Lifting natural, descongestión de ojeras y luminosidad",
    description: "Protocolo facial completo para reducir bolsas, doble mentón y definir el contorno oval con efecto rejuvenecedor inmediato.",
    image: "/images/drenaje/module_03.png",
    topics: [
      "Descongestión del área periorbital y reducción de ojeras",
      "Moldeo del contorno mandibular y pómulos",
      "Rutina antiestrés facial para devolver el brillo a la piel",
    ],
  },
  {
    id: 4,
    number: "MÓDULO 04",
    title: "Drenaje Abdominal y Moldeo de Cintura",
    subtitle: "Técnica colombiana para aplanar y desinflamar",
    description: "Aprende el protocolo abdominal para desinflamar el vientre, favorecer el tránsito digestivo y estilizar la silueta.",
    image: "/images/drenaje/module_04.png",
    topics: [
      "Drenaje periumbilical y de colon hacia ganglios ilíacos",
      "Maniobras reductoras colombianas sin hematomas ni dolor",
      "Consejos de postura y respiración para potenciar el resultado",
    ],
  },
  {
    id: 5,
    number: "MÓDULO 05",
    title: "Piernas Ligeras, Glúteos y Celulitis",
    subtitle: "Alivio inmediato de pesadez y edemas",
    description: "Técnicas especializadas para desinflamar piernas cansadas, mejorar el aspecto de la piel de naranja y modelar glúteos.",
    image: "/images/drenaje/module_05.png",
    topics: [
      "Drenaje ascendente desde tobillos y pantorrillas",
      "Tratamiento de retención hídrica en muslos y glúteos",
      "Protocolo para personas que pasan muchas horas de pie o sentadas",
    ],
  },
  {
    id: 6,
    number: "MÓDULO 06",
    title: "Post-Tratamientos y Práctica Profesional",
    subtitle: "Atención al cliente y consejos post-operatorios",
    description: "Cómo estructurar sesiones completas en cabina o en casa, hidratación post-masaje y recomendaciones para mantener resultados.",
    image: "/images/drenaje/module_06.png",
    topics: [
      "Estructuración de una sesión de 45 a 60 minutos",
      "Acompañamiento postoperatorio y precauciones estéticas",
      "Cómo fidelizar clientas y llenar tu agenda con resultados visibles",
    ],
  },
];

export const DRENAJE_TESTIMONIALS: DrenajeTestimonial[] = [
  {
    id: "test-1",
    name: "Camila Restrepo",
    role: "Cosmetóloga Independiente",
    comment: "Las técnicas de Ana María cambiaron mi manera de trabajar. Mis clientas notan la diferencia en su abdomen desde la primera sesión. El curso se paga solo desde el primer día.",
    rating: 5,
    image: "/images/drenaje/testimonial_1.jpg",
    location: "Medellín, Colombia",
  },
  {
    id: "test-2",
    name: "Valeria Mendoza",
    role: "Alumna y Emprendedora",
    comment: "Tenía problemas graves de retención de líquidos en las piernas. Aprendí a hacerme el autodrenaje y también lo aplico en mi estética. Es súper claro, paso a paso y sin dolor.",
    rating: 5,
    image: "/images/drenaje/testimonial_2.jpg",
    location: "Lima, Perú",
  },
  {
    id: "test-3",
    name: "Sofia Carvajal",
    role: "Masoterapeuta de Spa",
    comment: "El bono del canal de Telegram con Ana María es oro puro. Resuelve dudas puntuales y nos da confianza para realizar las maniobras colombianas con total seguridad.",
    rating: 5,
    image: "/images/drenaje/testimonial_3.jpg",
    location: "Santiago, Chile",
  },
];

export const DRENAJE_FAQS: DrenajeFaq[] = [
  {
    question: "¿Cómo accedo al descuento especial de $24 USD?",
    answer: "El cupón del 80% de descuento se encuentra preaplicado. Al hacer clic en cualquiera de los botones de la página, serás redirigida al checkout oficial de Hotmart donde verás el valor final de $24.00 USD (antes $119.90 USD). Esta oferta incluye bonos adicionales exclusivos.",
  },
  {
    question: "¿El pago es 100% seguro?",
    answer: "Sí, totalmente. El pago se procesa a través de Hotmart®, la plataforma líder mundial en productos digitales educativos de habla hispana, con certificación SSL de 256 bits y cifrado bancario de alta seguridad.",
  },
  {
    question: "¿Cómo recibo el acceso al curso?",
    answer: "Inmediatamente después de confirmar tu pago, el sistema de Hotmart te enviará un correo electrónico con tu usuario, contraseña y enlace directo al campus virtual para iniciar las clases al instante.",
  },
  {
    question: "¿Se aprende bien de manera online y desde casa?",
    answer: "¡Por supuesto! El programa está grabado en video en alta definición con tomas en primer plano de cada maniobra manual. Puedes pausar, retroceder y repetir cada lección tantas veces como necesites desde tu teléfono, tablet o computadora.",
  },
  {
    question: "¿Tengo acceso para siempre o vence?",
    answer: "El acceso es de por vida (vitalicio). No hay mensualidades ni pagos ocultos. Pagas una única vez los $24 USD y el curso queda disponible para siempre en tu cuenta.",
  },
  {
    question: "¿Hay alguna garantía si no cumple mis expectativas?",
    answer: "Cuentas con 7 días de garantía incondicional de devolución de dinero respaldada por Hotmart. Si dentro de ese período el programa no supera tus expectativas, puedes solicitar el 100% del reembolso sin preguntas ni trámites engorrosos.",
  },
  {
    question: "¿Cómo funciona si estoy en Venezuela?",
    answer: "Si estás en Venezuela y deseas pagar en bolívares por Pago Móvil o consultar opciones locales, contamos con atención y soporte directo vía WhatsApp en el +58 414-7017139.",
  },
];

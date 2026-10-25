export interface TrustPoint {
  id: string;
  question: string;
  summary: string;
  details: string;
  badge: string;
}

export const TRUST_POINTS: TrustPoint[] = [
  {
    id: "product-clarity",
    question: "¿Qué producto se está promocionando exactamente?",
    badge: "Transparencia comercial",
    summary: "Se promociona una colección digital de 9 libros de consulta sobre masaje, comercializada en Hotmart.",
    details: "Esta página web actúa como canal independiente de recomendación de Guanioma Pereira (@guniomapl). El megapack es un producto digital de terceros alojado en Hotmart.",
  },
  {
    id: "content-check",
    question: "¿Qué debes consultar sobre el contenido antes de adquirirlo?",
    badge: "Verificación de temario",
    summary: "Revisa el temario detallado, autores y especificaciones en la página oficial de Hotmart.",
    details: "Antes de comprar, te recomendamos leer detenidamente la descripción completa de los 9 títulos en la página oficial para confirmar que se ajustan a tus expectativas y necesidades de estudio.",
  },
  {
    id: "pricing-conditions",
    question: "¿Cómo consultar el precio actualizado y tu moneda local?",
    badge: "Precios y ofertas en vivo",
    summary: "El precio oficial, las promociones activas y los impuestos locales se muestran directamente en Hotmart.",
    details: "Al pulsar en cualquiera de los botones de esta página, el sistema de Hotmart detecta tu país y muestra automáticamente el precio exacto en tu moneda local con los métodos de pago disponibles.",
  },
  {
    id: "checkout-security",
    question: "¿Dónde y cómo se completa el pago de forma segura?",
    badge: "Pasarela oficial protegida",
    summary: "El pago se realiza 100% dentro de la pasarela encriptada oficial de Hotmart.",
    details: "En ningún momento recopilamos datos bancarios ni de tarjetas de crédito en esta página. Toda la transacción cuenta con la tecnología de seguridad y encriptación de Hotmart.",
  },
  {
    id: "delivery-access",
    question: "¿Quién gestiona la entrega y el acceso inmediato al producto?",
    badge: "Entrega automática",
    summary: "Hotmart gestiona el envío de las claves de acceso a tu correo electrónico tras la confirmación del pago.",
    details: "Inmediatamente después de que se apruebe la compra, recibirás un correo de Hotmart con las instrucciones para ingresar al área de miembros o descargar el material.",
  },
];

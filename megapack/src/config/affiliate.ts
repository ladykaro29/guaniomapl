/**
 * Centralized Commercial & Affiliate Configuration
 * 
 * IMPORTANT: All CTA buttons and outbound affiliate links must use these
 * constants so any future link update or UTM parameters can be modified in a single location.
 */

export const AFFILIATE_CONFIG = {
  // Primary affiliate sales page URL / direct checkout link
  primaryUrl: "https://go.hotmart.com/D102483769W?dp=1",
  
  // Alternative / direct checkout URL provided by Hotmart
  secondaryUrl: "https://go.hotmart.com/D102483769W?dp=1",
  
  // Active destination used by default across all conversion buttons
  activeDestinationUrl: "https://go.hotmart.com/D102483769W?dp=1",

  // Brand and affiliate creator identity
  brandName: "Guanioma Pereira",
  socialHandle: "@guniomapl",
  socialProfileUrl: "https://instagram.com/guniomapl",
  
  // Product commercial details (third-party vendor product)
  productName: "Masajes 9 en 1 — Colección Completa",
  productPlatform: "Hotmart",
  promotionType: "Afiliación comercial independiente",

  // Venezuela WhatsApp direct purchase
  venezuelaWhatsAppNumber: "584147017139",
  venezuelaWhatsAppDisplay: "+58 414-7017139",
  venezuelaWhatsAppUrl: "https://wa.me/584147017139?text=Hola%2C%20estoy%20en%20Venezuela%20y%20quiero%20adquirir%20el%20Megapack%20Masajes%209%20en%201",

  // Disclaimers
  affiliateDisclosure:
    "Esta página es un escaparate informativo y promocional independiente gestionado por Guanioma Pereira (@guniomapl). No somos los autores, editores ni productores directos del producto 'Masajes 9 en 1'. La compra, facturación, soporte y garantía se completan y gestionan exclusivamente a través de la plataforma oficial de Hotmart.",
};

/**
 * Helper to get the purchase affiliate link for all CTA buttons.
 */
export function getAffiliateUrl(_sourceLocation?: string): string {
  return AFFILIATE_CONFIG.activeDestinationUrl;
}

/**
 * Helper to get the WhatsApp link for users in Venezuela.
 */
export function getVenezuelaWhatsAppUrl(source?: string): string {
  const base = "https://wa.me/584147017139";
  const text = source 
    ? `Hola, estoy en Venezuela y quiero adquirir el Megapack Masajes 9 en 1 (vía ${source})`
    : "Hola, estoy en Venezuela y quiero adquirir el Megapack Masajes 9 en 1";
  return `${base}?text=${encodeURIComponent(text)}`;
}

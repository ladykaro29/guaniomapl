/**
 * CRO & Analytics Event Tracking Helper
 * 
 * Safely dispatches conversion events to GTM / dataLayer, Meta Pixel,
 * or custom analytics if configured. If no tracker is present, it logs cleanly
 * in development without generating runtime errors.
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export type TrackingLocation =
  | "hero_cta"
  | "showcase_cta"
  | "benefits_cta"
  | "books_cta"
  | "trust_cta"
  | "final_cta"
  | "sticky_mobile_cta"
  | "footer_link"
  | "drenaje_hero_cta"
  | "drenaje_pricing_cta"
  | "drenaje_wa_venezuela"
  | "drenaje_sticky_cta";

export function trackAffiliateClick(location: TrackingLocation, label: string = "Click Hotmart CTA") {
  const eventPayload = {
    event: "affiliate_outbound_click",
    click_location: location,
    click_label: label,
    product: "Masajes 9 libros en 1",
    destination: "Hotmart",
    timestamp: new Date().toISOString(),
  };

  // 1. Google Tag Manager / dataLayer push
  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  // 2. Google Analytics gtag push
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "affiliate_click", {
      event_category: "Conversion",
      event_label: location,
    });
  }

  // 3. Meta Pixel Events
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    const isDrenaje = location.startsWith("drenaje_");
    const isWhatsApp = location.includes("wa") || location.includes("whatsapp");
    const productName = isDrenaje ? "Drenaje Linfático: Tu Secreto de Belleza" : "Masajes 9 libros en 1";
    const value = isDrenaje ? 24.0 : 10.8;

    if (isWhatsApp) {
      window.fbq("track", "Contact", {
        content_name: `${productName} - WhatsApp Consulta`,
        value: value,
        currency: "USD",
      });
    } else {
      window.fbq("track", "InitiateCheckout", {
        content_name: productName,
        content_category: "Cursos Digitales",
        value: value,
        currency: "USD",
      });
    }

    window.fbq("trackCustom", "HotmartAffiliateClick", {
      location: location,
      product: productName,
      value: value,
      currency: "USD",
    });
  }

  // 4. Development logging
  if (process.env.NODE_ENV === "development") {
    // console.log("[Analytics] Outbound affiliate click recorded:", eventPayload);
  }
}

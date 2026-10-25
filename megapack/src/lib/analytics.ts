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
  | "footer_link";

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

  // 3. Meta Pixel InitiateCheckout or Custom Event
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", "HotmartAffiliateClick", {
      location: location,
      product: "Masajes 9 libros en 1",
    });
  }

  // 4. Development logging
  if (process.env.NODE_ENV === "development") {
    // console.log("[Analytics] Outbound affiliate click recorded:", eventPayload);
  }
}

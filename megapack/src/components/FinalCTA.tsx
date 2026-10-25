"use client";

import React from "react";
import { getAffiliateUrl, getVenezuelaWhatsAppUrl } from "@/config/affiliate";
import { trackAffiliateClick } from "@/lib/analytics";

export const FinalCTA: React.FC = () => {
  const affiliateUrl = getAffiliateUrl("final_box");
  const venezuelaWhatsAppUrl = getVenezuelaWhatsAppUrl("final_box");

  const handleCtaClick = () => {
    trackAffiliateClick("final_cta", "VER OFERTA EN HOTMART (Cierre)");
  };

  return (
    <section className="final-cta-spa-wrap" id="comprar" aria-labelledby="final-title">
      <div className="lp-container">
        <div className="final-cta-2col">
          {/* Left Column */}
          <div className="final-left-copy">
            <span className="badge-tag badge-tag-dark-gold" style={{ alignSelf: "flex-start", marginBottom: "16px" }}>
              Cierre Oficial
            </span>

            <h2 id="final-title" className="final-title-exact">
              Explora la colección completa Masajes 9 en 1
            </h2>

            <p className="final-desc-exact">
              Desde los puntos gatillo y el masaje tailandés hasta la anatomía, rehabilitación y tejidos profundos. Accede hoy mismo a esta guía esencial en Hotmart.
            </p>

            <div className="final-trust-list">
              <div className="hero-trust-item">
                <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div className="hero-trust-text">
                  <span className="hero-trust-bold">Pago seguro</span>
                  <span className="hero-trust-sub">en Hotmart</span>
                </div>
              </div>

              <div className="hero-trust-item">
                <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <div className="hero-trust-text">
                  <span className="hero-trust-bold">Acceso digital</span>
                  <span className="hero-trust-sub">a tu material</span>
                </div>
              </div>

              <div className="hero-trust-item">
                <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                <div className="hero-trust-text">
                  <span className="hero-trust-bold">Garantía</span>
                  <span className="hero-trust-sub">según condiciones del producto</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating White Checkout Card */}
          <div className="final-floating-card">
            <span className="cloud-pill-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              </svg>
              <span>ACCESO DIGITAL INMEDIATO</span>
            </span>

            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terracotta"
              onClick={handleCtaClick}
              aria-label="Ver oferta en Hotmart"
            >
              <div className="btn-main-row">
                <span>VER OFERTA EN HOTMART</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <span className="btn-sub-caption">La compra se completa en Hotmart.</span>
            </a>

            {/* Venezuela WhatsApp CTA inside Final Floating Card */}
            <div className="venezuela-cta-card" style={{ marginTop: "14px", width: "100%", maxWidth: "100%" }}>
              <p className="venezuela-tagline">
                <span aria-hidden="true">🇻🇪</span>
                <span>¿En Venezuela? Pídelo por WhatsApp:</span>
              </p>
              <a
                href={venezuelaWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Pedir por WhatsApp si estás en Venezuela al +58 414-7017139"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 2C6.495 2 2 6.496 2 12.032c0 1.98.577 3.824 1.577 5.385L2 22l4.743-1.538A9.972 9.972 0 0 0 12.031 22C17.567 22 22 17.504 22 12.032 22 6.496 17.567 2 12.031 2zm0 18.25c-1.636 0-3.155-.478-4.437-1.3l-.317-.203-2.822.915.922-2.736-.213-.332A8.217 8.217 0 0 1 3.75 12.032c0-4.566 3.714-8.28 8.281-8.28s8.281 3.714 8.281 8.28-3.714 8.28-8.281 8.28zm4.536-6.19c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.23-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.348-.767-1.846-.201-.486-.406-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.223.891 2.404 1.016 2.57.124.166 1.753 2.677 4.247 3.753.593.256 1.056.409 1.418.524.596.19 1.138.163 1.567.099.479-.071 1.468-.6 1.675-1.18.207-.581.207-1.078.145-1.181-.062-.103-.228-.166-.476-.29z"/>
                </svg>
                <span>Pedir por WhatsApp (+58 414-7017139)</span>
              </a>
            </div>

            {/* Payment methods row */}
            <div className="payment-methods-row" aria-label="Métodos de pago admitidos en Hotmart">
              <span className="payment-badge" style={{ color: "#1a1f71" }}>VISA</span>
              <span className="payment-badge" style={{ color: "#eb001b" }}>Mastercard</span>
              <span className="payment-badge" style={{ color: "#003087" }}>PayPal</span>
              <span className="payment-badge" style={{ color: "#e01e2b" }}>OXXO</span>
              <span className="payment-more">y más...</span>
            </div>

            {/* Bottom 3 micro-checks */}
            <div className="card-guarantee-row">
              <span className="guarantee-check">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Compra segura</span>
              </span>
              <span className="guarantee-check">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Tus datos protegidos</span>
              </span>
              <span className="guarantee-check">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Entrega inmediata</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { getAffiliateUrl, getVenezuelaWhatsAppUrl } from "@/config/affiliate";
import { trackAffiliateClick } from "@/lib/analytics";

export const HeroSection: React.FC = () => {
  const affiliateUrl = getAffiliateUrl("hero");
  const venezuelaWhatsAppUrl = getVenezuelaWhatsAppUrl("hero");

  const handleCtaClick = () => {
    trackAffiliateClick("hero_cta", "VER EL MEGAPACK");
  };

  const keyPoints = [
    "Puntos gatillo, autocuración y masaje de tejidos profundos.",
    "Manual profesional ilustrado, masaje tailandés y técnicas terapéuticas.",
    "Relación con el deporte, rehabilitación y guías paso a paso.",
  ];

  return (
    <section className="hero-wrapper" id="hero" aria-labelledby="hero-title">
      <div className="lp-container">
        <div className="hero-grid-2col">
          {/* Column 1: Copy and CTA */}
          <div className="hero-left-content">
            <span className="hero-pill-badge">COLECCIÓN DIGITAL 9 EN 1</span>

            <h1 id="hero-title" className="hero-main-title">
              Masajes 9 en 1
            </h1>

            <p className="hero-lead-text">
              Una colección completa que abarca desde los puntos gatillo hasta el masaje tailandés, pasando por la anatomía y la rehabilitación. Con técnicas dirigidas tanto a profesionales como a aficionados, esta guía esencial te permitirá explorar diversas terapias y mejorar tu bienestar físico y emocional.
            </p>

            <ul className="checklist-custom" role="list">
              {keyPoints.map((item, idx) => (
                <li key={idx} className="check-item">
                  <span className="check-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="hero-cta-group">
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terracotta"
                onClick={handleCtaClick}
                aria-label="Ver el Megapack en Hotmart"
              >
                <div className="btn-main-row">
                  <span>VER EL MEGAPACK</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <span className="btn-sub-caption">Consulta el contenido, el precio y las condiciones de compra en Hotmart.</span>
              </a>

              {/* Venezuela WhatsApp CTA */}
              <div className="venezuela-cta-card">
                <p className="venezuela-tagline">
                  <span aria-hidden="true">🇻🇪</span>
                  <span>¿Estás en Venezuela? Pídelo directamente:</span>
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
            </div>

            {/* Trust row */}
            <div className="hero-trust-row">
              <div className="hero-trust-item">
                <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <div className="hero-trust-text">
                  <span className="hero-trust-bold">Pago seguro</span>
                  <span className="hero-trust-sub">en Hotmart</span>
                </div>
              </div>

              <div className="hero-trust-item">
                <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <div className="hero-trust-text">
                  <span className="hero-trust-bold">Acceso inmediato</span>
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

          {/* Column 2: Editorial Visual with Therapist & Book Library aesthetic */}
          <div className="hero-right-visual">
            <div className="hero-photo-container">
              <Image
                src="/images/hero-therapist-hd.jpg"
                alt="Profesional de masaje realizando técnica de terapia manual"
                width={600}
                height={800}
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="hero-visual-card-floating">
                <span className="floating-vol-tag">Biblioteca Digital</span>
                <span className="floating-vol-title">9 Libros Especializados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

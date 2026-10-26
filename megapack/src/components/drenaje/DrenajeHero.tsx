"use client";

import React from "react";
import Image from "next/image";
import { getDrenajeAffiliateUrl } from "@/config/affiliate";
import { trackAffiliateClick } from "@/lib/analytics";

export const DrenajeHero: React.FC = () => {
  const checkoutUrl = getDrenajeAffiliateUrl("hero_cta");

  const handleCta = () => {
    trackAffiliateClick("drenaje_hero_cta", "QUIERO TRANSFORMAR MI CUERPO AHORA");
  };

  return (
    <section className="dr-hero-wrap" id="hero">
      <div className="dr-container">
        <div className="dr-hero-grid">
          {/* Left Column: Copy & Offer */}
          <div className="dr-hero-left">
            <div className="dr-pill-social">
              <span>⭐ #TOP 5 VENTAS EN EUROPA</span>
              <span>·</span>
              <span>+2,374 RESEÑAS POSITIVAS</span>
            </div>

            <h1 className="dr-hero-title">
              El Poder del <span>Drenaje Linfático</span>: Flujo, Moldeo y Renovación
            </h1>

            <div className="dr-hero-celebrity">
              &ldquo;Gigi Hadid y Selena Gomez confían en este método natural para desinflamar, desintoxicar y lucir una silueta radiante en todos sus eventos.&rdquo;
            </div>

            <p className="dr-hero-hook">
              Aprende paso a paso cómo con <strong>suaves caricias y técnicas de moldeo corporal colombiano</strong> puedes eliminar toxinas, reducir la hinchazón y devolverle la firmeza y vitalidad a tu piel desde la comodidad de tu hogar.
            </p>

            <ul className="dr-hero-bullets">
              <li className="dr-hero-bullet-item">
                <span className="dr-check-icon">✓</span>
                <span>Técnicas de moldeo colombiano con resultados visibles desde las primeras sesiones.</span>
              </li>
              <li className="dr-hero-bullet-item">
                <span className="dr-check-icon">✓</span>
                <span>Protocolo completo: Facial Glow, Abdomen plano, Piernas ligeras y Post-operatorio.</span>
              </li>
              <li className="dr-hero-bullet-item">
                <span className="dr-check-icon">✓</span>
                <span>Acceso de por vida en video HD + Canal VIP de soporte en Telegram con Ana María.</span>
              </li>
            </ul>

            <div className="dr-price-banner">
              <div>
                <span className="dr-price-old">Precio regular: $119.90 USD</span>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span className="dr-price-new">$24.00 USD</span>
                  <span className="dr-price-discount">80% DESCUENTO HOY</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dr-btn-cta"
                onClick={handleCta}
              >
                <span className="dr-btn-cta-text">
                  ¡QUIERO TRANSFORMAR MI CUERPO AHORA! →
                </span>
                <span className="dr-btn-sub">Acceso inmediato y seguro garantizado por Hotmart®</span>
              </a>

              <div className="dr-hero-security-note">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Garantía de satisfacción de 7 días · Pago encriptado SSL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="dr-hero-media-wrap">
            <div className="dr-hero-image-card">
              <Image
                src="/images/drenaje/hero_mockup.png"
                alt="Curso Drenaje Linfático Tu Secreto de Belleza de Ana María"
                width={520}
                height={480}
                priority
                sizes="(max-width: 768px) 100vw, 520px"
              />
              <div className="dr-floating-badge dr-floating-badge-top">
                <span className="dr-badge-val">100% ONLINE</span>
                <span className="dr-badge-sub">En video HD paso a paso</span>
              </div>
              <div className="dr-floating-badge dr-floating-badge-bottom">
                <span className="dr-badge-val">ACCESO VITALICIO</span>
                <span className="dr-badge-sub">Aprende a tu propio ritmo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

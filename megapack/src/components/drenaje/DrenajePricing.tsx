"use client";

import React from "react";
import Image from "next/image";
import { getDrenajeAffiliateUrl, getDrenajeWhatsAppUrl } from "@/config/affiliate";
import { trackAffiliateClick } from "@/lib/analytics";

export const DrenajePricing: React.FC = () => {
  const checkoutUrl = getDrenajeAffiliateUrl("pricing_box");
  const venezuelaWaUrl = getDrenajeWhatsAppUrl("pricing_venezuela");

  const handleCheckoutClick = () => {
    trackAffiliateClick("drenaje_pricing_cta", "QUIERO EL CURSO POR $10 USD");
  };

  const handleWhatsAppClick = () => {
    trackAffiliateClick("drenaje_wa_venezuela", "WHATSAPP VENEZUELA $10 USD");
  };

  return (
    <section className="dr-pricing-section" id="precio">
      <div className="dr-container">
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span className="dr-section-badge">Inscripción Oficial con Descuento</span>
          <h2 className="dr-section-title">
            Comienza Hoy Tu Transformación por Solo $10 USD
          </h2>
          <p className="dr-section-subtitle" style={{ margin: "0 auto" }}>
            Aprovecha el 90% de descuento por tiempo limitado antes de que el valor regrese a su tarifa habitual de $119.90 USD:
          </p>
        </div>

        <div className="dr-pricing-card">
          <div className="dr-pricing-header">
            <h3 className="dr-pricing-title">DRENAJE LINFÁTICO: TU SECRETO DE BELLEZA</h3>
            <p className="dr-pricing-sub">Programa Completo + Todos los Bonos Incluidos</p>
          </div>

          <div className="dr-pricing-body">
            <ul className="dr-pricing-stack">
              <li className="dr-stack-item">
                <div className="dr-stack-left">
                  <span className="dr-check-icon">✓</span>
                  <span>Curso Completo en Video HD: Drenaje Facial y Corporal</span>
                </div>
                <span className="dr-stack-val">$97.00 USD</span>
              </li>
              <li className="dr-stack-item">
                <div className="dr-stack-left">
                  <span className="dr-check-icon">✓</span>
                  <span>Técnica Exclusiva de Masajes Moldeadores Colombianos</span>
                </div>
                <span className="dr-stack-val">$37.00 USD</span>
              </li>
              <li className="dr-stack-item">
                <div className="dr-stack-left">
                  <span className="dr-check-icon">✓</span>
                  <span>Bono VIP: Canal Privado en Telegram con Ana María</span>
                </div>
                <span className="dr-stack-free">GRATIS HOY</span>
              </li>
              <li className="dr-stack-item">
                <div className="dr-stack-left">
                  <span className="dr-check-icon">✓</span>
                  <span>Protocolos para Piernas Cansadas, Celulitis y Post-Tratamiento</span>
                </div>
                <span className="dr-stack-val">$29.00 USD</span>
              </li>
              <li className="dr-stack-item">
                <div className="dr-stack-left">
                  <span className="dr-check-icon">✓</span>
                  <span>Acceso Vitalicio desde Cualquier Dispositivo (Celular, PC, Tablet)</span>
                </div>
                <span className="dr-stack-free">INCLUIDO</span>
              </li>
            </ul>

            <div className="dr-price-display-huge">
              <span className="dr-old-price-huge">Valor total: $119.90 USD</span>
              <div className="dr-final-price-huge">
                $10.00 <span>USD</span>
              </div>
              <p className="dr-price-caption">
                Pago único · Sin cobros mensuales · Acceso ilimitado de por vida
              </p>
            </div>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dr-btn-cta"
              onClick={handleCheckoutClick}
              style={{ maxWidth: "100%" }}
            >
              <span className="dr-btn-cta-text">
                ¡INSCRIBIRME AHORA POR $10 USD! →
              </span>
              <span className="dr-btn-sub">Garantía incondicional de 7 días respaldada por Hotmart®</span>
            </a>

            {/* Venezuela payment option */}
            <div className="dr-venezuela-card">
              <div className="dr-venezuela-text">
                <h4>¿Estás en Venezuela y deseas pagar en Bolívares?</h4>
                <p>Aceptamos Pago Móvil y te brindamos asistencia directa en WhatsApp.</p>
              </div>
              <a
                href={venezuelaWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dr-btn-whatsapp-sm"
                onClick={handleWhatsAppClick}
              >
                <span>WhatsApp Venezuela</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.585 1.961.914 3.023.915h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.758 0-3.411-.458-4.856-1.258l-5.144 1.347 1.373-5.016c-.886-1.503-1.373-3.238-1.373-5.073 0-5.514 4.486-10 10-10s10 4.486 10 10z"/>
                </svg>
              </a>
            </div>

            {/* Trust Seals */}
            <div className="dr-trust-seals-row">
              <div className="dr-seal-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" color="#2e7d32">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Pago Seguro Hotmart</span>
              </div>
              <div className="dr-seal-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" color="#2e7d32">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Entrega Inmediata por Email</span>
              </div>
              <div className="dr-seal-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" color="#2e7d32">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Garantía de 7 Días</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="dr-guarantee-box">
          <div className="dr-guarantee-badge-img">
            <Image
              src="/images/drenaje/garantia_7_dias.png"
              alt="Garantía de 7 días 100% de devolución de dinero por Hotmart"
              width={120}
              height={120}
            />
          </div>
          <div className="dr-guarantee-info">
            <h3>¡Tienes 7 Días de Garantía Incondicional!</h3>
            <p>
              Prueba el curso durante 7 días a partir de tu compra. Si por cualquier motivo sientes que el contenido no supera tus expectativas o que las técnicas de Ana María no son para ti, solicita el 100% de la devolución de tu dinero directamente en la plataforma de Hotmart®. Sin preguntas, sin trabas y con total transparencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

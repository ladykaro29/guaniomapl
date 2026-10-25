"use client";

import React from "react";
import Image from "next/image";
import { getAffiliateUrl } from "@/config/affiliate";
import { trackAffiliateClick } from "@/lib/analytics";

export const ProductShowcase: React.FC = () => {
  const affiliateUrl = getAffiliateUrl("showcase");

  const handleCtaClick = () => {
    trackAffiliateClick("showcase_cta", "EXPLORAR LA COLECCIÓN EN HOTMART");
  };

  const points = [
    "Puntos gatillo y autocuración para aliviar el dolor",
    "Técnicas de masaje profesional e ilustrado",
    "Relación entre masaje, deporte y anatomía",
    "Rehabilitación a través del masaje y recuperación",
    "Masaje tailandés y masaje de tejidos profundos",
    "Técnicas de masaje terapéutico y bienestar",
    "Guía paso a paso de masajes relajantes y terapéuticos",
    "Terapias de masajes tradicionales y modernas",
    "Y muchas cosas más para tu práctica",
  ];

  return (
    <section className="dark-bundle-section" id="presentacion" aria-labelledby="bundle-heading">
      <div className="lp-container">
        <div className="bundle-grid-2col">
          {/* Left: 9 Books Mockup */}
          <div className="bundle-image-box">
            <Image
              src="/images/megapack-bundle-hd.jpg"
              alt="Colección editorial Masajes 9 en 1 - Megapack Completo"
              width={640}
              height={360}
              sizes="(max-width: 768px) 100vw, 640px"
              priority
            />
          </div>

          {/* Right: Editorial Copy & Secondary CTA */}
          <div className="bundle-info-box">
            <span className="badge-tag badge-tag-dark-gold" style={{ alignSelf: "flex-start", marginBottom: "14px" }}>
              Colección Esencial
            </span>

            <h2 id="bundle-heading" className="bundle-title">
              Una colección completa para explorar diversas terapias
            </h2>

            <p className="bundle-description">
              Abarca desde los puntos gatillo hasta el masaje tailandés, pasando por la anatomía y la rehabilitación. Técnicas dirigidas tanto a profesionales como a aficionados para mejorar el bienestar físico y emocional.
            </p>

            <ul className="checklist-custom" role="list" style={{ marginBottom: "28px" }}>
              {points.map((pt, idx) => (
                <li key={idx} className="check-item check-item-white">
                  <span className="check-circle check-circle-light" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "8px" }}>
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                onClick={handleCtaClick}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  color: "#ffffff",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                }}
              >
                <span>Explorar la colección en Hotmart →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

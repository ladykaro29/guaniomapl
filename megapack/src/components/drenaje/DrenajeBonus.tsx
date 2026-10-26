"use client";

import React from "react";
import Image from "next/image";

export const DrenajeBonus: React.FC = () => {
  return (
    <section className="dr-bonus-section" id="bonos">
      <div className="dr-container">
        <div className="dr-bonus-box">
          <div className="dr-bonus-content">
            <span className="dr-bonus-badge">Bono Exclusivo de Regalo · Valor $47 USD</span>
            <h2 className="dr-bonus-title">
              Canal Privado VIP en Telegram: Soporte Continuo con Ana María
            </h2>
            <p className="dr-bonus-desc">
              Al inscribirte hoy, no estarás sola en tu proceso. Recibes acceso directo y permanente a nuestra comunidad activa de alumnas para resolver cualquier inquietud directamente con la instructora:
            </p>

            <ul className="dr-bonus-list">
              <li className="dr-bonus-item">
                <span className="dr-check-icon">✓</span>
                <span>Comunidad exclusiva de +200 alumnas compartiendo avances y experiencias.</span>
              </li>
              <li className="dr-bonus-item">
                <span className="dr-check-icon">✓</span>
                <span>Canal de preguntas y respuestas directas con Ana María.</span>
              </li>
              <li className="dr-bonus-item">
                <span className="dr-check-icon">✓</span>
                <span>Asesoría personalizada para evitar errores comunes y perfeccionar tu técnica.</span>
              </li>
              <li className="dr-bonus-item">
                <span className="dr-check-icon">✓</span>
                <span>Networking profesional con terapeutas y esteticistas de más de 12 países.</span>
              </li>
            </ul>
          </div>

          <div className="dr-bonus-image-card">
            <Image
              src="/images/drenaje/bonus_telegram.png"
              alt="Bono Canal Privado de Telegram para alumnas del curso"
              width={380}
              height={300}
              sizes="(max-width: 768px) 100vw, 380px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { DRENAJE_PAIN_POINTS } from "@/data/drenaje";

export const DrenajePainPoints: React.FC = () => {
  return (
    <section className="dr-pain-section" id="diagnostico">
      <div className="dr-container">
        <div style={{ textAlign: "center" }}>
          <span className="dr-section-badge">¿Te Identificas con Esto?</span>
          <h2 className="dr-section-title">
            ¿Cansada de sentirte inflamada, pesada y sin energía?
          </h2>
          <p className="dr-section-subtitle" style={{ margin: "0 auto" }}>
            Muchas mujeres enfrentan estos síntomas a diario pensando que es normal o que no tiene solución, cuando en realidad se trata de un sistema linfático congestionado:
          </p>
        </div>

        <div className="dr-pain-grid">
          {DRENAJE_PAIN_POINTS.map((point, idx) => (
            <div key={idx} className="dr-pain-card">
              <div className="dr-pain-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <p className="dr-pain-text">{point}</p>
            </div>
          ))}
        </div>

        <div className="dr-solution-banner">
          <div className="dr-solution-content">
            <h3>¡El Drenaje Linfático Manual es la solución natural que tu cuerpo pide!</h3>
            <p>
              A diferencia de las cremas superficiales o tratamientos invasivos con máquinas dolorosas, el drenaje linfático estimula directamente los conductos naturales de depuración de tu cuerpo, drenando el líquido retenido y devolviéndote la ligereza y el contorno que mereces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

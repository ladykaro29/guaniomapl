"use client";

import React from "react";
import Image from "next/image";
import { DRENAJE_MODULES } from "@/data/drenaje";

export const DrenajeModules: React.FC = () => {
  return (
    <section className="dr-modules-section" id="temario">
      <div className="dr-container">
        <div style={{ textAlign: "center" }}>
          <span className="dr-section-badge">Plan de Estudios Completo</span>
          <h2 className="dr-section-title">
            ¿Qué Aprenderás en Este Programa Paso a Paso?
          </h2>
          <p className="dr-section-subtitle" style={{ margin: "0 auto" }}>
            6 módulos progresivos grabados en alta definición con tomas en primer plano para que domines cada maniobra con confianza:
          </p>
        </div>

        <div className="dr-modules-grid">
          {DRENAJE_MODULES.map((mod) => (
            <article key={mod.id} className="dr-module-card">
              <div className="dr-module-header">
                <span className="dr-module-badge">{mod.number}</span>
                <div className="dr-module-thumb">
                  <Image
                    src={mod.image}
                    alt={mod.title}
                    width={72}
                    height={72}
                  />
                </div>
              </div>

              <h3 className="dr-module-title">{mod.title}</h3>
              <p className="dr-module-subtitle">{mod.subtitle}</p>
              <p className="dr-module-desc">{mod.description}</p>

              <ul className="dr-module-topics">
                {mod.topics.map((t, idx) => (
                  <li key={idx} className="dr-module-topic-item">
                    <span className="dr-module-topic-dot" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

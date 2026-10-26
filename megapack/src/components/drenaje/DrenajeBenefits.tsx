"use client";

import React from "react";
import Image from "next/image";
import { DRENAJE_BENEFITS } from "@/data/drenaje";

export const DrenajeBenefits: React.FC = () => {
  return (
    <section className="dr-benefits-section" id="beneficios">
      <div className="dr-container">
        <div style={{ textAlign: "center" }}>
          <span className="dr-section-badge">Flujo y Renovación</span>
          <h2 className="dr-section-title">
            ¿Qué Beneficios Tiene en Ti el Drenaje Linfático?
          </h2>
          <p className="dr-section-subtitle" style={{ margin: "0 auto" }}>
            Un método integral de salud y estética que despierta la capacidad natural de tu organismo para renovarse desde adentro:
          </p>
        </div>

        <div className="dr-benefits-grid">
          {DRENAJE_BENEFITS.map((benefit) => (
            <article key={benefit.id} className="dr-benefit-card">
              <div className="dr-benefit-media">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={380}
                  height={220}
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <span className="dr-benefit-tag">{benefit.badge}</span>
              </div>
              <div className="dr-benefit-body">
                <h3 className="dr-benefit-title">{benefit.title}</h3>
                <p className="dr-benefit-desc">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { DRENAJE_TESTIMONIALS } from "@/data/drenaje";

export const DrenajeTestimonials: React.FC = () => {
  return (
    <section className="dr-testimonials-section" id="testimonios">
      <div className="dr-container">
        <div style={{ textAlign: "center" }}>
          <span className="dr-section-badge">Opiniones de Nuestras Alumnas</span>
          <h2 className="dr-section-title">
            Resultados Comprobados y Vidas Transformadas
          </h2>
          <p className="dr-section-subtitle" style={{ margin: "0 auto" }}>
            Conoce los comentarios reales de alumnas y terapeutas que ya aplican el método en su vida diaria y en sus cabinas estéticas:
          </p>
        </div>

        <div className="dr-testimonials-grid">
          {DRENAJE_TESTIMONIALS.map((t) => (
            <article key={t.id} className="dr-testimonial-card">
              <div className="dr-testimonial-stars" aria-label={`Calificación ${t.rating} de 5 estrellas`}>
                {"★".repeat(t.rating)}
              </div>

              <p className="dr-testimonial-comment">&ldquo;{t.comment}&rdquo;</p>

              <div className="dr-testimonial-author">
                <div className="dr-testimonial-avatar">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <span className="dr-author-name">{t.name}</span>
                  <span className="dr-author-role">{t.role} · {t.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

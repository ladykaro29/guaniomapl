import React from "react";
import { VERIFIED_ADVANTAGES } from "@/data/benefits";

export const BenefitsSection: React.FC = () => {
  const threeCoreBenefits = [
    {
      number: "01",
      title: "Puntos Gatillo y Autocuración",
      desc: "Aprende a identificar y tratar puntos gatillo con técnicas efectivas para aliviar el dolor muscular, liberar tensiones acumuladas y mejorar la movilidad.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Anatomía, Deporte y Rehabilitación",
      desc: "Profundiza en la relación entre el masaje y la actividad física, explorando la anatomía humana y métodos específicos para acelerar la recuperación de traumatismos.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Terapias Tradicionales y Modernas",
      desc: "Desde el masaje tailandés y los tejidos profundos hasta maniobras paso a paso: una guía esencial tanto para profesionales como para aficionados.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="benefits-section-wrap" id="beneficios" aria-labelledby="benefits-title">
      <div className="lp-container">
        {/* Section Header */}
        <div className="center-heading-block">
          <span className="badge-tag badge-tag-green" style={{ marginBottom: "12px" }}>
            Contenido Esencial
          </span>
          <h2 id="benefits-title" className="center-title">
            Una colección diseñada para tu desarrollo y bienestar
          </h2>
          <p className="center-subtitle">
            Explora diversas terapias manuales estructuradas paso a paso para mejorar tu bienestar físico y emocional.
          </p>
        </div>

        {/* 3 Core Editorial Benefits */}
        <div className="benefits-three-grid">
          {threeCoreBenefits.map((b, idx) => (
            <article key={idx} className="benefit-editorial-card">
              <div className="benefit-card-top">
                <span className="benefit-editorial-num">{b.number}</span>
                <div className="benefit-card-icon" aria-hidden="true">
                  {b.icon}
                </div>
              </div>
              <h3 className="benefit-editorial-title">{b.title}</h3>
              <p className="benefit-editorial-desc">{b.desc}</p>
            </article>
          ))}
        </div>

        {/* Verified Advantages Grid (10 points) */}
        <div className="advantages-integrated-box">
          <div className="advantages-header-inner">
            <h3 className="advantages-subheading">Temas importantes y ventajas de la colección</h3>
            <p className="advantages-subcaption">Técnicas esenciales incluidas en los 9 libros</p>
          </div>

          <div className="advantages-grid-2col" role="list">
            {VERIFIED_ADVANTAGES.map((adv) => (
              <div key={adv.id} className="advantage-item-card" role="listitem">
                <div className="advantage-check-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="advantage-text">{adv.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

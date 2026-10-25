import React from "react";
import { TRUST_POINTS } from "@/data/trust";

export const TrustSection: React.FC = () => {
  return (
    <section className="trust-section-wrap" id="transparencia" aria-labelledby="trust-heading">
      <div className="lp-container">
        <div className="center-heading-block">
          <span className="badge-tag badge-tag-gold" style={{ marginBottom: "12px" }}>
            Transparencia y Seguridad
          </span>
          <h2 id="trust-heading" className="center-title">
            Conoce la oferta antes de comprar
          </h2>
          <p className="center-subtitle">
            Queremos que tomes una decisión informada. A continuación detallamos los puntos clave sobre la promoción, el pago y la entrega.
          </p>
        </div>

        <div className="trust-grid-cards">
          {TRUST_POINTS.map((item) => (
            <article key={item.id} className="trust-card-clean">
              <span className="badge-tag badge-tag-green trust-card-badge">
                {item.badge}
              </span>
              <h3 className="trust-card-title">{item.question}</h3>
              <p className="trust-card-summary">{item.summary}</p>
              <p className="trust-card-details">{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

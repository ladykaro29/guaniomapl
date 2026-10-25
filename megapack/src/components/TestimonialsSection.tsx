import React from "react";
import Image from "next/image";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      avatar: "/images/avatar-carolina.png",
      name: "Carolina M.",
      role: "Estudiante de masoterapia",
      quote:
        "Es una colección muy completa. Me ha ayudado a mejorar mi práctica y entender mejor las técnicas.",
    },
    {
      avatar: "/images/avatar-juan.png",
      name: "Juan P.",
      role: "Masajista profesional",
      quote:
        "Excelente material. Las ilustraciones y la información son muy claras. Ideal para tener siempre a la mano.",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonios" aria-labelledby="testimonials-heading">
      <div className="lp-container">
        <div className="center-heading-block" style={{ marginBottom: "36px" }}>
          <h2 id="testimonials-heading" className="center-title">
            Lo que dicen quienes ya lo tienen
          </h2>
        </div>

        <div className="testimonials-grid-2col">
          {testimonials.map((t, idx) => (
            <article key={idx} className="testimonial-card-exact">
              <span className="testimonial-quote-icon" aria-hidden="true">“</span>
              
              <div className="testimonial-stars" aria-label="5 de 5 estrellas">
                ★★★★★
              </div>

              <blockquote className="testimonial-quote-text">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="testimonial-author-row">
                <Image
                  src={t.avatar}
                  alt={`Foto de ${t.name}`}
                  width={44}
                  height={44}
                  className="author-avatar-img"
                />
                <div className="author-meta">
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

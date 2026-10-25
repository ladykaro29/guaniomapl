import React from "react";
import Image from "next/image";
import { OFFICIAL_AUDIENCE_PROFILES } from "@/data/audience";

export const AudienceSection: React.FC = () => {
  const threeProfiles = [
    {
      title: "Profesionales y Terapeutas",
      desc: "Masajistas, fisioterapeutas y terapeutas de spa que buscan enriquecer su práctica con técnicas avanzadas de tejidos profundos, masaje tailandés y manejo de puntos gatillo.",
      image: "/images/card-masajista.png",
      alt: "Masajista profesional realizando maniobra terapéutica",
      badge: "Práctica Profesional",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
      ),
    },
    {
      title: "Deporte y Rehabilitación",
      desc: "Entrenadores, preparadores físicos y personas activas enfocadas en la relación entre masaje y anatomía, descarga muscular y recuperación de traumatismos.",
      image: "/images/card-trainer.png",
      alt: "Acondicionamiento y recuperación deportiva",
      badge: "Enfoque Deportivo",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
        </svg>
      ),
    },
    {
      title: "Estudiantes y Aficionados",
      desc: "Guías paso a paso e ilustraciones claras para quienes desean aprender masajes relajantes, técnicas de autocuración y cuidados para el bienestar físico y emocional.",
      image: "/images/card-student.png",
      alt: "Estudiante y aficionado aprendiendo técnicas de masaje",
      badge: "Formación y Autocuidado",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="audience-section-exact" id="para-quien" aria-labelledby="audience-title">
      <div className="lp-container">
        {/* Section Heading */}
        <div className="center-heading-block">
          <span className="badge-tag badge-tag-terracotta" style={{ marginBottom: "12px" }}>
            Destinatarios
          </span>
          <h2 id="audience-title" className="center-title">
            Técnicas dirigidas tanto a profesionales como a aficionados
          </h2>
          <p className="center-subtitle">
            Una guía esencial que te permitirá explorar diversas terapias y mejorar tu bienestar físico y emocional, ya sea para tu carrera profesional o para tu propio autocuidado.
          </p>
        </div>

        {/* 3 Main Profiles Grid */}
        <div className="audience-three-grid">
          {threeProfiles.map((p, idx) => (
            <article key={idx} className="audience-profile-card">
              <div className="audience-profile-media">
                <Image
                  src={p.image}
                  alt={p.alt}
                  width={380}
                  height={200}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span className="audience-profile-badge">{p.badge}</span>
              </div>

              <div className="audience-profile-body">
                <div className="audience-profile-header">
                  <div className="audience-profile-icon" aria-hidden="true">
                    {p.icon}
                  </div>
                  <h3 className="audience-profile-title">{p.title}</h3>
                </div>
                <p className="audience-profile-desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Extended Verified Profiles Cloud */}
        <div className="audience-extended-wrap">
          <div className="audience-extended-header">
            <h3 className="audience-extended-title">
              Especialidades y Ámbitos de Aplicación
            </h3>
            <p className="audience-extended-subtitle">
              Este compendio editorial es utilizado por profesionales de distintos sectores del bienestar y la salud:
            </p>
          </div>

          <div className="audience-pills-cloud" role="list">
            {OFFICIAL_AUDIENCE_PROFILES.map((profile, idx) => (
              <span key={idx} className="audience-pill" role="listitem">
                <span className="audience-pill-dot" aria-hidden="true" />
                <span>{profile}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Transparency note */}
        <div className="audience-disclaimer-box" role="note" style={{ marginTop: "32px" }}>
          <strong>Nota sobre la formación:</strong> Este material es una colección bibliográfica digital de estudio y consulta. Su adquisición no otorga certificación profesional, título habilitante ni sustituye la práctica presencial supervisada o los planes reglados de tu localidad.
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Image from "next/image";

export const DrenajeInstructor: React.FC = () => {
  return (
    <section className="dr-instructor-section" id="instructora">
      <div className="dr-container">
        <div className="dr-instructor-grid">
          <div className="dr-instructor-media">
            <Image
              src="/images/drenaje/instructor_anamaria.webp"
              alt="Ana María, esteticista y cosmetóloga creadora del programa"
              width={420}
              height={460}
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>

          <div className="dr-instructor-content">
            <span className="dr-instructor-tag">Conoce a tu Mentora</span>
            <h2 className="dr-instructor-name">Ana María</h2>
            <p className="dr-instructor-role">
              Esteticista y Cosmetóloga Profesional · Creadora de Drenajes Linfáticos: Tu Secreto de Belleza
            </p>

            <div className="dr-instructor-bio">
              <p>
                Luego de ofrecer sus servicios durante <strong>más de 11 años en la estética facial y corporal</strong> y fundar su propio centro de bienestar en la ciudad de Bogotá, ha transformado la vida y silueta de miles de mujeres.
              </p>
              <p>
                Se ha consolidado como una referente indiscutible en técnicas de moldeo corporal. A lo largo de su carrera desarrolló los reconocidos <strong>Masajes Moldeadores Colombianos</strong>, técnicas exclusivas que consiguen resultados visibles desde las primeras sesiones sin provocar dolor ni hematomas.
              </p>
              <p>
                Tras construir un negocio próspero con lista de espera en su consultorio, decidió condensar todo su conocimiento práctico en este programa digital para que cualquier mujer o terapeuta pueda aplicar estas técnicas innovadoras y conseguir su silueta deseada o potenciar su negocio estético.
              </p>
            </div>

            <div className="dr-instructor-stats">
              <div>
                <span className="dr-stat-num">+11</span>
                <span className="dr-stat-label">Años de Trayectoria</span>
              </div>
              <div>
                <span className="dr-stat-num">+3,500</span>
                <span className="dr-stat-label">Clientas Atendidas</span>
              </div>
              <div>
                <span className="dr-stat-num">100%</span>
                <span className="dr-stat-label">Técnicas sin Dolor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

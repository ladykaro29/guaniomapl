"use client";

import React, { useState } from "react";
import { DRENAJE_FAQS } from "@/data/drenaje";

export const DrenajeFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="dr-faq-section" id="faq">
      <div className="dr-container">
        <div style={{ textAlign: "center" }}>
          <span className="dr-section-badge">Preguntas Frecuentes</span>
          <h2 className="dr-section-title">¿Aún Tienes Dudas? Aquí te las Resolvemos</h2>
          <p className="dr-section-subtitle" style={{ margin: "0 auto" }}>
            Todo lo que necesitas saber antes de iniciar tu programa de drenaje linfático:
          </p>
        </div>

        <div className="dr-faq-container">
          {DRENAJE_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`dr-faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="dr-faq-question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="dr-faq-icon" aria-hidden="true">
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="dr-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

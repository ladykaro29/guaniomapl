"use client";

import React, { useState } from "react";
import { FAQ_DATA } from "@/data/faq";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="lp-container">
        <div className="center-heading-block" style={{ marginBottom: "36px" }}>
          <span className="hero-pill-badge" style={{ marginBottom: "12px" }}>
            Respuestas Rápidas
          </span>
          <h2 id="faq-heading" className="center-title">
            Preguntas Frecuentes
          </h2>
          <p className="center-subtitle">
            Resolvemos las dudas más habituales sobre la compra, formatos de acceso y características de la colección.
          </p>
        </div>

        <div className="faq-list" role="region" aria-label="Acordeón de Preguntas Frecuentes">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            const contentId = `faq-content-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="faq-trigger"
                    onClick={() => toggleItem(item.id)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="faq-content"
                  >
                    <p>{item.answer}</p>
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

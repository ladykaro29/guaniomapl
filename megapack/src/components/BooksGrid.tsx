"use client";

import React from "react";
import { BOOKS_DATA } from "@/data/books";
import { getAffiliateUrl } from "@/config/affiliate";
import { trackAffiliateClick } from "@/lib/analytics";

export const BooksGrid: React.FC = () => {
  const affiliateUrl = getAffiliateUrl("books_grid");

  const handleCtaClick = () => {
    trackAffiliateClick("books_cta", "CONSULTAR ÍNDICE COMPLETO EN HOTMART");
  };

  return (
    <section className="books-section-wrap" id="coleccion" aria-labelledby="books-heading">
      <div className="lp-container">
        {/* Section Header */}
        <div className="center-heading-block">
          <span className="badge-tag badge-tag-green" style={{ marginBottom: "12px" }}>
            Colección Completa 9 en 1
          </span>
          <h2 id="books-heading" className="center-title">
            Los 9 libros incluidos en el Megapack
          </h2>
          <p className="center-subtitle">
            Desde los puntos gatillo hasta el masaje tailandés, pasando por la anatomía y la rehabilitación. Técnicas dirigidas tanto a profesionales como a aficionados.
          </p>
        </div>

        {/* Informative banner about publisher titles */}
        <div className="books-meta-banner">
          <div>
            <strong style={{ color: "var(--c-dark-green)", display: "block", marginBottom: "4px" }}>
              Biblioteca digital completa de acceso inmediato:
            </strong>
            <span style={{ fontSize: "0.9rem", color: "var(--c-text-muted)" }}>
              Aprende y consulta técnicas efectivas, guías ilustradas paso a paso y enfoques terapéuticos para promover la salud, aliviar tensiones y mejorar tu bienestar físico y emocional.
            </span>
          </div>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            onClick={handleCtaClick}
            style={{ flexShrink: 0 }}
          >
            Ver oferta en Hotmart →
          </a>
        </div>

        {/* The 9 volumes grid */}
        <div className="books-grid" role="list">
          {BOOKS_DATA.map((book) => (
            <article key={book.id} className="book-card" role="listitem">
              <div className="book-card-header">
                <div className="book-numeral-badge" title={`Volumen ${book.romanNumeral}`}>
                  {book.romanNumeral}
                </div>
                <span className="book-category-tag">{book.category}</span>
              </div>

              <h3 className="book-title">{book.volumeTitle}</h3>
              <p className="book-desc">{book.description}</p>

              <div className="book-footer-status">
                <span className="status-dot" aria-hidden="true" />
                <span>{book.statusText}</span>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terracotta"
            onClick={handleCtaClick}
            style={{ margin: "0 auto" }}
          >
            <div className="btn-main-row">
              <span>QUIERO ACCEDER A LOS 9 LIBROS</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <span className="btn-sub-caption">Consulta la oferta completa en Hotmart</span>
          </a>
        </div>
      </div>
    </section>
  );
};

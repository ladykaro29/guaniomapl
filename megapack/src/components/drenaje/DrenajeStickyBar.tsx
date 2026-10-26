"use client";

import React, { useState, useEffect } from "react";
import { getDrenajeAffiliateUrl } from "@/config/affiliate";
import { trackAffiliateClick } from "@/lib/analytics";

export const DrenajeStickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const checkoutUrl = getDrenajeAffiliateUrl("sticky_bar");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    trackAffiliateClick("drenaje_sticky_cta", "STICKY CTA $24 USD");
  };

  return (
    <aside
      className={`dr-sticky-bar ${visible ? "is-visible" : ""}`}
      aria-label="Barra de compra rápida de Drenaje Linfático"
    >
      <div className="dr-sticky-left">
        <span className="dr-sticky-title">Drenaje Linfático: Tu Secreto de Belleza</span>
        <span className="dr-sticky-price">$24.00 USD <small style={{ fontSize: "0.75rem", color: "#b0c4be" }}>(80% OFF)</small></span>
      </div>

      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="dr-sticky-btn"
        onClick={handleClick}
      >
        <span>ACCEDER AL CURSO POR $24 USD →</span>
      </a>
    </aside>
  );
};

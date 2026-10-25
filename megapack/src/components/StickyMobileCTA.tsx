"use client";

import React, { useEffect, useState } from "react";
import { getAffiliateUrl } from "@/config/affiliate";
import { trackAffiliateClick } from "@/lib/analytics";

export const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const affiliateUrl = getAffiliateUrl("mobile_sticky");

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA once scrolled past hero section (~450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    trackAffiliateClick("sticky_mobile_cta", "COMPRAR EN HOTMART (Móvil Fijo)");
  };

  return (
    <aside
      className={`sticky-mobile-cta ${isVisible ? "is-visible" : ""}`}
      aria-label="Acceso rápido móvil a la oferta"
      role="complementary"
    >
      <div className="sticky-mobile-inner">
        <div className="sticky-mobile-info">
          <span className="sticky-mobile-title">Megapack 9 en 1</span>
          <span className="sticky-mobile-sub">Colección Digital</span>
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-mobile-btn"
          onClick={handleClick}
        >
          VER EN HOTMART →
        </a>
      </div>
    </aside>
  );
};

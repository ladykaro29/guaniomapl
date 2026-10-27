import React from "react";
import type { Metadata } from "next";
import { MinimalHeader } from "@/components/MinimalHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AudienceSection } from "@/components/AudienceSection";
import { BooksGrid } from "@/components/BooksGrid";
import { TrustSection } from "@/components/TrustSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { MinimalFooter } from "@/components/MinimalFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AFFILIATE_CONFIG } from "@/config/affiliate";

export const metadata: Metadata = {
  title: "Masajes 9 en 1 — Colección Completa Digital | Guanioma Pereira",
  description:
    "Colección completa que abarca desde los puntos gatillo hasta el masaje tailandés, anatomía y rehabilitación. Técnicas dirigidas a profesionales y aficionados.",
  openGraph: {
    title: "Masajes 9 en 1 — Colección Completa Digital",
    description:
      "Colección completa que abarca desde los puntos gatillo hasta el masaje tailandés, pasando por anatomía y rehabilitación.",
    url: "https://guaniomapl.blog/megapack",
  },
};

export default function MegapackPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Masajes 9 en 1 — Colección Completa Digital",
    description:
      "Colección completa que abarca desde los puntos gatillo hasta el masaje tailandés, pasando por la anatomía y la rehabilitación. Técnicas dirigidas a profesionales y aficionados.",
    image: "/images/megapack-bundle-hd.jpg",
    offers: {
      "@type": "Offer",
      url: AFFILIATE_CONFIG.primaryUrl,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Hotmart",
      },
    },
  };

  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Cabecera sin navegación tradicional */}
      <MinimalHeader />

      <main id="main-content">
        {/* SECCIÓN 01 — HERO DE ALTA CONVERSIÓN */}
        <HeroSection />

        {/* SECCIÓN 02 — PRESENTACIÓN EDITORIAL DEL MEGAPACK */}
        <ProductShowcase />

        {/* SECCIÓN 03 — BENEFICIOS */}
        <BenefitsSection />

        {/* SECCIÓN 04 — PARA QUIÉN ES */}
        <AudienceSection />

        {/* SECCIÓN 05 — LOS LIBROS INCLUIDOS */}
        <BooksGrid />

        {/* SECCIÓN 06 — BLOQUE DE CONFIANZA */}
        <TrustSection />

        {/* SECCIÓN 07 — PREGUNTAS FRECUENTES */}
        <FAQSection />

        {/* SECCIÓN 08 — CIERRE COMERCIAL */}
        <FinalCTA />
      </main>

      {/* SECCIÓN 09 — FOOTER MÍNIMO */}
      <MinimalFooter />

      {/* Botón flotante móvil para alta conversión */}
      <StickyMobileCTA />

      {/* Botón de WhatsApp para compradores en Venezuela */}
      <WhatsAppButton />
    </>
  );
}

import React from "react";
import type { Metadata } from "next";
import "@/styles/drenaje.css";
import { MinimalHeader } from "@/components/MinimalHeader";
import { MinimalFooter } from "@/components/MinimalFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getDrenajeWhatsAppUrl } from "@/config/affiliate";
import { DrenajeHero } from "@/components/drenaje/DrenajeHero";
import { DrenajePainPoints } from "@/components/drenaje/DrenajePainPoints";
import { DrenajeBenefits } from "@/components/drenaje/DrenajeBenefits";
import { DrenajeModules } from "@/components/drenaje/DrenajeModules";
import { DrenajeInstructor } from "@/components/drenaje/DrenajeInstructor";
import { DrenajeBonus } from "@/components/drenaje/DrenajeBonus";
import { DrenajePricing } from "@/components/drenaje/DrenajePricing";
import { DrenajeTestimonials } from "@/components/drenaje/DrenajeTestimonials";
import { DrenajeFaq } from "@/components/drenaje/DrenajeFaq";
import { DrenajeStickyBar } from "@/components/drenaje/DrenajeStickyBar";
import { MetaViewContent } from "@/components/MetaViewContent";

export const metadata: Metadata = {
  title: "Drenaje Linfático: Tu Secreto de Belleza | Guanioma Pereira",
  description:
    "Aprende el método natural de drenaje linfático y masajes moldeadores colombianos con Ana María. Desinflama, elimina toxinas y moldea tu figura con 80% de descuento ($24 USD). Incluye bonos adicionales exclusivos.",
  keywords: [
    "drenaje linfatico",
    "curso drenaje linfatico",
    "masajes moldeadores colombianos",
    "retencion de liquidos",
    "estetica corporal",
    "ana maria esteticista",
    "guanioma pereira",
  ],
  openGraph: {
    title: "Drenaje Linfático: Tu Secreto de Belleza",
    description:
      "Desbloquea el brillo natural de tu piel, reduce la hinchazón y moldea tu silueta con técnicas profesionales sin dolor por solo $24 USD.",
    images: [
      {
        url: "/images/drenaje/hero_mockup.png",
        width: 1200,
        height: 630,
        alt: "Drenaje Linfático: Tu Secreto de Belleza",
      },
    ],
    type: "website",
  },
};

export default function DrenajePage() {
  const whatsappUrl = getDrenajeWhatsAppUrl("drenaje_floating_btn");

  return (
    <div className="drenaje-page-wrapper">
      {/* Top Notification Bar */}
      <div className="dr-urgent-bar">
        <span className="dr-urgent-pulse" aria-hidden="true" />
        <span>¡OFERTA ESPECIAL 80% OFF DISPONIBLE SOLO POR HOY · CUPÓN ACTIVADO A $24.00 USD!</span>
      </div>

      <MinimalHeader />

      <main id="main-content">
        <MetaViewContent
          contentName="Drenaje Linfático: Tu Secreto de Belleza"
          contentId="drenaje-linfatico-24"
          value={24.0}
          currency="USD"
        />
        <DrenajeHero />
        <DrenajePainPoints />
        <DrenajeBenefits />
        <DrenajeModules />
        <DrenajeInstructor />
        <DrenajeBonus />
        <DrenajePricing />
        <DrenajeTestimonials />
        <DrenajeFaq />
      </main>

      <MinimalFooter />
      <DrenajeStickyBar />
      <WhatsAppButton />
    </div>
  );
}

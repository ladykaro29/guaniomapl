import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { MinimalHeader } from "@/components/MinimalHeader";
import { MinimalFooter } from "@/components/MinimalFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getVenezuelaWhatsAppUrl } from "@/config/affiliate";

export const metadata: Metadata = {
  title: "Guanioma Pereira | Masaje, Bienestar y Terapias Manuales",
  description:
    "Portal oficial de Guanioma Pereira (@guniomapl). Descubre nuestra colección digital 'Masajes 9 en 1' y programas de formación en bienestar corporal.",
};

export default function HomePage() {
  const whatsappUrl = getVenezuelaWhatsAppUrl("hub_home");

  return (
    <>
      <MinimalHeader />

      <main id="main-content">
        {/* Hub Hero */}
        <section className="hub-hero-section">
          <div className="lp-container">
            <div className="hub-hero-inner">
              <span className="hero-pill-badge">PORTAL OFICIAL · GUANIOMA PEREIRA</span>
              <h1 className="hero-main-title">
                Bienestar, Masaje y Terapias Manuales
              </h1>
              <p className="hero-lead-text" style={{ margin: "0 auto 24px auto" }}>
                Espacio digital de consulta, formación continua y recursos bibliográficos esenciales para profesionales y entusiastas del cuidado físico y emocional.
              </p>
            </div>
          </div>
        </section>

        {/* Catalog / Projects Section */}
        <section className="lp-container">
          <div className="hub-grid-projects">
            {/* Card 1: Megapack Masajes 9 en 1 */}
            <article className="hub-card hub-card-featured">
              <div className="hub-card-badge-row">
                <span className="badge-tag badge-tag-terracotta">COLECCIÓN DIGITAL DISPONIBLE</span>
                <span className="badge-tag badge-tag-gold">9 LIBROS EN 1</span>
              </div>

              <div className="hub-card-media">
                <Image
                  src="/images/megapack-bundle-hd.jpg"
                  alt="Colección digital Masajes 9 en 1 de Guanioma Pereira"
                  width={640}
                  height={360}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <h2 className="hub-card-title">Masajes 9 en 1: Colección Completa</h2>
              
              <p className="hub-card-desc">
                Una guía esencial que abarca desde los puntos gatillo hasta el masaje tailandés, pasando por la anatomía, el enfoque deportivo y la rehabilitación funcional. Técnicas dirigidas tanto a profesionales como a aficionados.
              </p>

              <ul className="checklist-custom" style={{ marginBottom: "28px" }}>
                <li className="check-item">
                  <span className="check-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>9 Libros completos de consulta y estudio</span>
                </li>
                <li className="check-item">
                  <span className="check-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>Guías ilustradas paso a paso y anatomía</span>
                </li>
                <li className="check-item">
                  <span className="check-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>Acceso digital inmediato en Hotmart y WhatsApp Venezuela</span>
                </li>
              </ul>

              <div style={{ marginTop: "auto" }}>
                <Link href="/megapack" className="btn-terracotta" style={{ maxWidth: "100%" }}>
                  <div className="btn-main-row">
                    <span>EXPLORAR EL MEGAPACK</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                  <span className="btn-sub-caption">Conoce el temario de los 9 libros y condiciones de compra</span>
                </Link>
              </div>
            </article>

            {/* Card 2: Drenaje Linfático: Tu Secreto de Belleza */}
            <article className="hub-card hub-card-featured">
              <div className="hub-card-badge-row">
                <span className="badge-tag badge-tag-terracotta">OFERTA 80% OFF · $24 USD</span>
                <span className="badge-tag badge-tag-green">CURSO EN VIDEO HD</span>
              </div>

              <div className="hub-card-media">
                <Image
                  src="/images/drenaje/hero_mockup.png"
                  alt="Drenaje Linfático: Tu Secreto de Belleza con Ana María"
                  width={640}
                  height={360}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <h2 className="hub-card-title">Drenaje Linfático: Tu Secreto de Belleza</h2>
              
              <p className="hub-card-desc">
                Desbloquea el brillo natural de tu cuerpo, reduce la hinchazón y moldea tu silueta con la técnica colombiana de masajes moldeadores sin dolor impartida por Ana María.
              </p>

              <ul className="checklist-custom" style={{ marginBottom: "28px" }}>
                <li className="check-item">
                  <span className="check-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>6 Módulos en video HD: Facial Glow, Abdomen plano y Piernas</span>
                </li>
                <li className="check-item">
                  <span className="check-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>Bono VIP: Canal de Telegram con soporte 24/7 de Ana María</span>
                </li>
                <li className="check-item">
                  <span className="check-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>Acceso de por vida + Garantía de 7 días por Hotmart</span>
                </li>
              </ul>

              <div style={{ marginTop: "auto" }}>
                <Link href="/drenaje-linfatico" className="btn-terracotta" style={{ maxWidth: "100%" }}>
                  <div className="btn-main-row">
                    <span>EXPLORAR DRENAJE LINFÁTICO</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                  <span className="btn-sub-caption">Inscripción promocional a $24.00 USD (Antes $119.90 USD)</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <MinimalFooter />
      <WhatsAppButton />
    </>
  );
}

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

            {/* Card 2: Drenaje Linfático & Próximos Lanzamientos */}
            <article className="hub-upcoming-box">
              <span className="badge-tag badge-tag-green" style={{ alignSelf: "center", marginBottom: "16px" }}>
                EN DESARROLLO
              </span>

              <h2 className="hub-card-title" style={{ fontSize: "1.45rem" }}>
                Drenaje Linfático Manual
              </h2>

              <p className="hub-card-desc">
                Nueva guía y material formativo enfocado en técnicas especializadas de drenaje linfático, descongestión, bienestar postoperatorio y relajación profunda.
              </p>

              <div style={{ padding: "20px", background: "rgba(24, 55, 43, 0.05)", borderRadius: "var(--radius-md)", marginBottom: "24px" }}>
                <strong style={{ display: "block", color: "var(--c-dark-green)", marginBottom: "4px" }}>
                  ¿Te interesa este tema?
                </strong>
                <span style={{ fontSize: "0.94rem", color: "var(--c-text-muted)" }}>
                  Escríbenos por WhatsApp para ser de los primeros en recibir novedades y acceso anticipado.
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: "100%" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 2C6.495 2 2 6.496 2 12.032c0 1.98.577 3.824 1.577 5.385L2 22l4.743-1.538A9.972 9.972 0 0 0 12.031 22C17.567 22 22 17.504 22 12.032 22 6.496 17.567 2 12.031 2zm0 18.25c-1.636 0-3.155-.478-4.437-1.3l-.317-.203-2.822.915.922-2.736-.213-.332A8.217 8.217 0 0 1 3.75 12.032c0-4.566 3.714-8.28 8.281-8.28s8.281 3.714 8.281 8.28-3.714 8.28-8.281 8.28zm4.536-6.19c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.23-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.348-.767-1.846-.201-.486-.406-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.223.891 2.404 1.016 2.57.124.166 1.753 2.677 4.247 3.753.593.256 1.056.409 1.418.524.596.19 1.138.163 1.567.099.479-.071 1.468-.6 1.675-1.18.207-.581.207-1.078.145-1.181-.062-.103-.228-.166-.476-.29z"/>
                </svg>
                <span>Consultar por WhatsApp (+58 414-7017139)</span>
              </a>
            </article>
          </div>
        </section>
      </main>

      <MinimalFooter />
      <WhatsAppButton />
    </>
  );
}

"use client";

import React, { useState } from "react";
import { AFFILIATE_CONFIG } from "@/config/affiliate";
import { LegalModal, ModalType } from "@/components/LegalModal";

export const MinimalFooter: React.FC = () => {
  const [modalType, setModalType] = useState<ModalType>(null);

  const currentYear = 2026;

  return (
    <>
      <footer className="minimal-footer" role="contentinfo">
        <div className="lp-container">
          <div className="footer-content">
            <div className="footer-disclosure">
              <strong style={{ color: "var(--c-white)", display: "block", marginBottom: "6px" }}>
                Aviso Comercial de Afiliación
              </strong>
              <p style={{ margin: 0 }}>
                {AFFILIATE_CONFIG.affiliateDisclosure}
              </p>
            </div>

            <div className="footer-links-row" role="navigation" aria-label="Enlaces legales y de transparencia">
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => setModalType("disclaimer")}
              >
                Aviso de Afiliación y Exención
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => setModalType("privacy")}
              >
                Política de Privacidad
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => setModalType("terms")}
              >
                Términos del Sitio
              </button>
            </div>

            <div>
              <p style={{ margin: 0 }}>
                © {currentYear} {AFFILIATE_CONFIG.brandName} ({AFFILIATE_CONFIG.socialHandle}). Todos los derechos reservados.
              </p>
              <p style={{ fontSize: "0.75rem", marginTop: "6px", color: "rgba(248, 243, 233, 0.5)" }}>
                Este sitio no forma parte ni está respaldado por Meta Platforms, Inc., Instagram o TikTok. Hotmart® es una marca registrada de Launch Pad Tecnologia, Serviços e Pagamentos Ltda.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </>
  );
};

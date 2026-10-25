"use client";

import React, { useEffect } from "react";

export type ModalType = "privacy" | "terms" | "disclaimer" | null;

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 id="modal-title" className="modal-title">
            {type === "privacy" && "Política de Privacidad y Tratamiento de Datos"}
            {type === "terms" && "Términos de Uso del Sitio Web"}
            {type === "disclaimer" && "Descargo de Responsabilidad y Aviso de Afiliación"}
          </h3>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Cerrar ventana emergente"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          {type === "privacy" && (
            <div>
              <p>
                <strong>1. Responsable del sitio:</strong> Esta página web informativa es administrada de manera independiente por Guanioma Pereira (@guniomapl).
              </p>
              <p>
                <strong>2. Datos recopilados:</strong> Este sitio web no recopila directamente datos bancarios, contraseñas ni números de tarjetas de crédito. Toda la transacción comercial se efectúa a través de la pasarela cifrada de Hotmart B.V.
              </p>
              <p>
                <strong>3. Cookies y analítica:</strong> Se pueden utilizar cookies técnicas anónimas y píxeles de medición estándar para evaluar el rendimiento de las campañas publicitarias y mejorar la experiencia de navegación del usuario.
              </p>
            </div>
          )}

          {type === "terms" && (
            <div>
              <p>
                <strong>1. Carácter informativo:</strong> El contenido presentado en esta landing page tiene fines exclusivamente informativos y de difusión comercial en calidad de afiliada.
              </p>
              <p>
                <strong>2. Vínculo comercial:</strong> Al hacer clic en los enlaces de compra, el usuario es redirigido a Hotmart, plataforma donde se formaliza el contrato de compraventa con el productor del contenido.
              </p>
              <p>
                <strong>3. Modificaciones:</strong> Las condiciones, precios y disponibilidad de los libros digitales son determinados y actualizados periódicamente por el productor en Hotmart.
              </p>
            </div>
          )}

          {type === "disclaimer" && (
            <div>
              <p>
                <strong>1. Declaración de afiliación:</strong> Guanioma Pereira participa en el programa de afiliados de Hotmart. Al realizar una compra a través de los enlaces de esta página, recibimos una comisión sin ningún coste adicional para el comprador.
              </p>
              <p>
                <strong>2. Sin certificación oficial ni asesoramiento médico:</strong> La colección de libros digitales ofrecida es material teórico y de consulta. No reemplaza diagnósticos médicos, tratamientos sanitarios ni planes de formación reglada oficiales.
              </p>
              <p>
                <strong>3. Soporte y devoluciones:</strong> Cualquier solicitud de soporte técnico, facturación o ejercicio del periodo de garantía debe gestionarse a través del centro de ayuda oficial de Hotmart.
              </p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MetaViewContent } from "@/components/MetaViewContent";

export const metadata: Metadata = {
  title: "Guaniomapl | Enlaces Oficiales & Cursos",
  description:
    "Accede a nuestros cursos profesionales de Drenaje Linfático, Colección Megapack 9 en 1, web oficial y atención directa por WhatsApp para Venezuela.",
  openGraph: {
    title: "Guaniomapl | Enlaces Oficiales",
    description:
      "Aprende estética, masajes y bienestar con técnicas profesionales certificadas.",
    url: "https://guaniomapl.blog/links",
  },
};

export default function LinksPage() {
  const venezuelaWhatsAppUrl =
    "https://wa.me/584147017139?text=" +
    encodeURIComponent("Hola Guaniomapl! Estoy en Venezuela y quiero adquirir uno de los cursos.");

  return (
    <>
      {/* Meta Pixel ViewContent event */}
      <MetaViewContent
        contentName="Link in Bio - Guaniomapl"
        contentCategory="Biolink"
      />

      <main className="min-h-screen bg-gradient-to-b from-stone-950 via-neutral-900 to-black text-white px-4 py-10 flex flex-col items-center justify-between selection:bg-emerald-500 selection:text-black">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          
          {/* AVATAR / LOGO */}
          <div className="relative mb-3 group">
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-emerald-400 via-teal-300 to-amber-300 shadow-xl shadow-emerald-950/40">
              <div className="w-full h-full rounded-full bg-neutral-900 border-2 border-neutral-800 flex items-center justify-center font-bold text-2xl tracking-wider text-emerald-300">
                G
              </div>
            </div>
            <span
              className="absolute bottom-1 right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-neutral-900"
              title="Activo"
            />
          </div>

          {/* NOMBRE Y DESCRIPCIÓN */}
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
            Guaniomapl
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </h1>
          <a
            href="https://www.instagram.com/guaniomapl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 hover:text-emerald-400 font-medium mb-1.5 transition-colors"
          >
            @guaniomapl
          </a>
          <p className="text-sm text-neutral-300 text-center max-w-xs mb-7 leading-relaxed">
            Cursos online certificados, técnicas profesionales de estética y bienestar. ✨
          </p>

          {/* LISTA DE ENLACES PRINCIPALES */}
          <div className="w-full space-y-3.5 mb-7">

            {/* 1. DRENAJE LINFÁTICO (DESTACADO) */}
            <Link
              href="/drenaje-linfatico"
              className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-neutral-900 to-neutral-900 border border-emerald-500/50 hover:border-emerald-400 shadow-lg shadow-emerald-950/30 hover:shadow-emerald-900/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="absolute -top-2.5 right-4 bg-emerald-500 text-neutral-950 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm tracking-wider">
                Más Popular
              </span>
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h2 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    Curso de Drenaje Linfático
                  </h2>
                  <p className="text-xs text-neutral-400">
                    Técnica profesional y certificación paso a paso
                  </p>
                </div>
              </div>
              <span className="text-neutral-500 group-hover:text-white transition-colors text-lg pr-1">
                →
              </span>
            </Link>

            {/* 2. MEGAPACK */}
            <Link
              href="/megapack"
              className="group relative flex items-center justify-between p-4 rounded-2xl bg-neutral-900/90 hover:bg-neutral-800/90 border border-neutral-800 hover:border-neutral-700 shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m4 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="text-left">
                  <h2 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                    Megapack Masajes 9 en 1
                  </h2>
                  <p className="text-xs text-neutral-400">
                    Colección completa con recursos y materiales
                  </p>
                </div>
              </div>
              <span className="text-neutral-500 group-hover:text-white transition-colors text-lg pr-1">
                →
              </span>
            </Link>

            {/* 3. SITIO WEB PRINCIPAL */}
            <Link
              href="/"
              className="group relative flex items-center justify-between p-4 rounded-2xl bg-neutral-900/90 hover:bg-neutral-800/90 border border-neutral-800 hover:border-neutral-700 shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="text-left">
                  <h2 className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">
                    Web Oficial Guaniomapl
                  </h2>
                  <p className="text-xs text-neutral-400">
                    Visita nuestra plataforma principal
                  </p>
                </div>
              </div>
              <span className="text-neutral-500 group-hover:text-white transition-colors text-lg pr-1">
                →
              </span>
            </Link>

          </div>

          {/* 4. BLOQUE ESPECIAL VENEZUELA (COMO EN TU CAPTURA) */}
          <div className="w-full bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-4 flex flex-col items-center mb-8 shadow-inner">
            <p className="text-xs font-semibold text-neutral-200 mb-2.5 flex items-center justify-center gap-1.5 text-center">
              <span>VE</span>
              <span>¿Estás en Venezuela? Pídelo directamente:</span>
            </p>

            <a
              href={venezuelaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-semibold py-3.5 px-4 rounded-full flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/20 transition-all text-sm"
            >
              {/* WhatsApp Icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2C6.495 2 2 6.496 2 12.032c0 1.98.577 3.824 1.577 5.385L2 22l4.743-1.538A9.972 9.972 0 0 0 12.031 22C17.567 22 22 17.504 22 12.032 22 6.496 17.567 2 12.031 2zm0 18.25c-1.636 0-3.155-.478-4.437-1.3l-.317-.203-2.822.915.922-2.736-.213-.332A8.217 8.217 0 0 1 3.75 12.032c0-4.566 3.714-8.28 8.281-8.28s8.281 3.714 8.281 8.28-3.714 8.28-8.281 8.28zm4.536-6.19c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.23-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.348-.767-1.846-.201-.486-.406-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.223.891 2.404 1.016 2.57.124.166 1.753 2.677 4.247 3.753.593.256 1.056.409 1.418.524.596.19 1.138.163 1.567.099.479-.071 1.468-.6 1.675-1.18.207-.581.207-1.078.145-1.181-.062-.103-.228-.166-.476-.29z"/>
              </svg>
              <span>Pedir por WhatsApp (+58 414-7017139)</span>
            </a>
          </div>

          {/* PIE DE PÁGINA / INSTAGRAM */}
          <div className="flex flex-col items-center gap-3 pt-3 border-t border-neutral-800 w-full text-center">
            <a
              href="https://www.instagram.com/guaniomapl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-pink-400 transition-colors"
            >
              {/* Instagram Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Síguenos en Instagram @guaniomapl</span>
            </a>
            <p className="text-[10px] text-neutral-600">
              © {new Date().getFullYear()} Guaniomapl. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </main>
    </>
  );
}

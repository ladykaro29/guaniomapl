import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "@/styles/landing.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#18372B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://guaniomapl.com"),
  title: "Masajes 9 en 1 | Colección Completa Digital",
  description:
    "Colección completa que abarca desde los puntos gatillo hasta el masaje tailandés, anatomía y rehabilitación. Técnicas dirigidas a profesionales y aficionados.",
  keywords: [
    "masajes 9 en 1",
    "puntos gatillo autocuracion",
    "manual profesional del masaje ilustrado",
    "masaje deportivo y anatomia",
    "masaje tailandes",
    "masaje tejidos profundos",
    "Hotmart masajes",
    "Guanioma Pereira",
  ],
  authors: [{ name: "Guanioma Pereira (@guniomapl)" }],
  openGraph: {
    title: "Masajes 9 en 1 | Colección Completa Digital",
    description:
      "Colección completa que abarca desde los puntos gatillo hasta el masaje tailandés, anatomía y rehabilitación. Técnicas para profesionales y aficionados.",
    type: "website",
    locale: "es_ES",
    siteName: "Guanioma Pereira | Megapack Masajes",
    images: [
      {
        url: "/images/bundle-mockup-exact.png",
        width: 1200,
        height: 630,
        alt: "Masajes 9 libros en 1 - Colección Digital Editorial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masajes: 9 libros en 1 | Colección Digital de Consulta",
    description:
      "Una colección de libros sobre masaje y temas relacionados para estudiantes y profesionales.",
    images: ["/images/bundle-mockup-exact.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}

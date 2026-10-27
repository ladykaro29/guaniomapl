import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { FacebookPixel } from "@/components/FacebookPixel";
import "@/styles/landing.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#18372B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://guaniomapl.blog"),
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
        url: "/images/megapack-bundle-hd.jpg",
        width: 1200,
        height: 675,
        alt: "Masajes 9 libros en 1 - Colección Digital Editorial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masajes: 9 libros en 1 | Colección Digital de Consulta",
    description:
      "Una colección de libros sobre masaje y temas relacionados para estudiantes y profesionales.",
    images: ["/images/megapack-bundle-hd.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "facebook-domain-verification": "fkvvjk30ma24i7q2chi073k6cr012y",
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
      className={roboto.variable}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}

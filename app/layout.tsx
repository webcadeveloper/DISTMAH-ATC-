import type { Metadata } from "next";
import { Inter, Rajdhani, Montserrat } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/components/providers/session-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const rajdhani = Rajdhani({
  weight: ['500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-display"
});
const montserrat = Montserrat({
  weight: ['600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "DISTMAH ATC - Universidad Autodesk",
  description: "Centro de Entrenamiento Autorizado (ATC) de Autodesk en Venezuela. Cursos certificados de AutoCAD, Revit, Civil 3D, Navisworks 2026. Incluye 1TB OneDrive + Microsoft Teams.",
  metadataBase: new URL('https://edu.distmah.com'),
  openGraph: {
    title: 'DISTMAH ATC - Universidad Autodesk',
    description: 'Cursos certificados de AutoCAD, Revit, Civil 3D 2026. Centro de Entrenamiento Autorizado Autodesk en Venezuela. Incluye 1TB OneDrive + Microsoft Teams.',
    url: 'https://edu.distmah.com',
    siteName: 'DISTMAH Universidad Autodesk',
    images: [
      {
        url: '/images/og-distmah.png',
        width: 1200,
        height: 630,
        alt: 'DISTMAH ATC - Universidad Autodesk Venezuela',
      },
    ],
    locale: 'es_VE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DISTMAH ATC - Universidad Autodesk',
    description: 'Cursos certificados AutoCAD, Revit, Civil 3D 2026. Centro Autorizado Autodesk Venezuela.',
    images: ['/images/og-distmah.png'],
  },
  keywords: ['Autodesk', 'AutoCAD', 'Revit', 'Civil 3D', 'cursos', 'certificacion', 'Venezuela', 'ATC', 'BIM', '2026'],
  authors: [{ name: 'DISTMAH ATC' }],
  creator: 'DISTMAH',
  publisher: 'DISTMAH Universidad Autodesk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${rajdhani.variable} ${montserrat.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <CookieBanner />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

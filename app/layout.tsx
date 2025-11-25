import type { Metadata } from "next";
import { Inter, Rajdhani, Montserrat } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/components/providers/session-provider";

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
  description: "Centro de Entrenamiento Autorizado (ATC) de Autodesk en Venezuela. Cursos certificados de AutoCAD, Revit, Civil 3D, Navisworks 2026.",
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
          {children}
          <Toaster />
          <CookieBanner />
        </SessionProvider>
      </body>
    </html>
  );
}

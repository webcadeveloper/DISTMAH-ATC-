import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/components/providers/session-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
                <SessionProvider>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                        <Toaster />
                    </NextIntlClientProvider>
                </SessionProvider>
            </body>
        </html>
    );
}

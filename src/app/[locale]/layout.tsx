import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Providers } from "./providers";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cairo"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!['en', 'ar'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} >
      <body className={`${cairo.variable} ${inter.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header/>
          <Providers>{children}</Providers>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
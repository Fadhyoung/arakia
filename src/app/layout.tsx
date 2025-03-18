import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "../components/Navbars";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default async function RootLayout({children,}: {children: React.ReactNode;}) {

  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased bg-white`}
      >
        <NextIntlClientProvider>
          <Navbar1 />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

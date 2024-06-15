import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Providers from "./providers"; //import the providers component
import TailwindCookieConsent from "./components/TailwindCookieConsent/TailwindCookieConsent"; //cookies consent

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RHRHJWFQ5M"
        ></Script>
        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RHRHJWFQ5M');
    `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <TailwindCookieConsent />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

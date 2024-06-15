import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Providers from "./providers"; //import the providers component
import TailwindCookieConsent from "./components/TailwindCookieConsent/TailwindCookieConsent"; //cookies consent
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID as string;

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
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        ></Script>
        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${googleAnalyticsId});
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

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Providers from "./providers"; //import the providers component
import TailwindCookieConsent from "./components/TailwindCookieConsent/TailwindCookieConsent"; //cookies consent
import GoogleAnalytics from "./GoogleAnalytics/GoogleAnalytics";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
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

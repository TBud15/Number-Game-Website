import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Providers from "./providers"; //import the providers component
import TailwindCookieConsent from "./components/TailwindCookieConsent/TailwindCookieConsent"; //cookies consent
import GoogleAnalytics from "./GoogleAnalytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

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

import type { Metadata } from "next";
import LandingPage from "./components/LandingPage/LandingPage";

export const metadata: Metadata = {
  title: "Mental Math - Enhance Your Mental Calculation Skills",
  description:
    "Master quick calculations with our interactive exercises designed to boost your mental math skills.",
  keywords: "math, speed math, mental math, calculation, education",
};

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}

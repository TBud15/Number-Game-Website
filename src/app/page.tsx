import type { Metadata } from "next";
import LandingPage from "./components/LandingPage/LandingPage";

export const metadata: Metadata = {
  title: "Mental Math - Enhance Your Mental Calculation Skills",
  description:
    "Master quick calculations with our interactive exercises designed to boost your mental math skills.",
  keywords: "math, speed math, mental math, calculation, education",
};

const serviceID = process.env.SERVICE_ID as string;
const templateIDContact = process.env.TEMPLATE_ID_CONTACT as string;
const publicKEY = process.env.NEXT_PUBLIC_KEY_EMAILJS as string;

export default function Home() {
  return (
    <main>
      <p>{serviceID}</p>
      <p>{templateIDContact}</p>
      <p>{publicKEY}</p>
      <LandingPage />
    </main>
  );
}

import { Metadata } from "next";
import ContactForm from "./local-components/Contact-Form";

export const metadata: Metadata = {
  title: "Contact - Mental Math",
  description:
    "Reach out to us with any questions, feedback, or inquiries about Speed Math. Use the contact form to get in touch directly and we will respond as soon as possible.",
};

export default function Page() {
  return (
    <section>
      <ContactForm />
    </section>
  );
}

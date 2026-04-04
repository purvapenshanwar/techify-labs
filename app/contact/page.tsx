import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact | Techify — Digital growth studio",
  description:
    "Reach Techify by phone, WhatsApp, or email. Send a structured project inquiry — we respond within one business day.",
};

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}

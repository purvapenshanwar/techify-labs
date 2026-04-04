import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import AboutPage from "../components/AboutPage";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About | Techify — Digital growth studio",
  description:
    "Techify is a performance-led studio in Gujarat, India: paid media, creative, SEO, and commerce under one retainer model — built for brands that need clarity between spend and revenue.",
};

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}

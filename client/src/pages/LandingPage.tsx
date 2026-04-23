import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import EmotionalHook from "@/components/landing/EmotionalHook";
import BeforeAfter from "@/components/landing/BeforeAfter";
import BundleBreakdown from "@/components/landing/BundleBreakdown";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#04020A" }}>
      <Navbar />
      <Hero />
      <EmotionalHook />
      <BeforeAfter />
      <BundleBreakdown />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

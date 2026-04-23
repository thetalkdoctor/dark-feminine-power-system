import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AfterPurchase from "./AfterPurchase";
import ValueStack from "./ValueStack";
import OfferBar from "./OfferBar";

export default function BundleBreakdown() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="bundle"
      ref={ref}
      className="relative py-12 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#04020A" }}
      data-testid="section-bundle"
    >
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#4E1C6E]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#C72E8F]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F4E8FF] mb-4 leading-tight"
            data-testid="text-bundle-title"
          >
            Everything You Need To Unlock Your Dark Feminine Power —{" "}
            <span className="bg-gradient-to-r from-[#C72E8F] to-[#E9B35A] bg-clip-text text-transparent">
              In One Place.
            </span>
          </h2>
        </motion.div>

        {/* Micro-Headline */}
        <h3 className="font-serif text-lg md:text-xl bg-gradient-to-r from-[#E9B35A] to-[#C72E8F] bg-clip-text text-transparent text-center mb-8">
          Get the Entire System for One Low Price
        </h3>

        {/* What happens after you purchase */}
        <AfterPurchase />

        {/* Enhanced Value Stack with descriptions */}
        <ValueStack />

        {/* Full-width Offer Bar */}
        <OfferBar />

        {/* Bottom spacing */}
        <div className="h-12 md:h-16" />
      </div>
    </section>
  );
}

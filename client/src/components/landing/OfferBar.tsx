import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function OfferBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-[1120px] mx-auto mt-8 rounded-[18px] p-2.5"
      style={{
        background: "linear-gradient(160deg, #B1357C, #D3A756)",
        boxShadow: "0 18px 60px rgba(0, 0, 0, 0.9)",
      }}
      data-testid="offer-bar"
    >
      <div
        className="rounded-[14px] px-6 md:px-10 py-6 md:py-8"
        style={{ background: "rgba(5, 3, 10, 0.88)" }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Side - Pricing */}
          <div className="text-center md:text-left">
            <p className="text-[#C3B5E0] text-sm md:text-base line-through mb-1">
              Total Value: $215
            </p>
            <p className="font-serif text-4xl md:text-5xl text-[#F5F5F7] font-bold mb-2">
              Today: <span className="bg-gradient-to-r from-[#E9B35A] to-[#C72E8F] bg-clip-text text-transparent">$20</span>
            </p>
            <p className="text-[#A29AB7] text-xs md:text-sm">
              One-time payment • Instant access • Lifetime ownership
            </p>
          </div>

          {/* Right Side - CTA */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <button
              onClick={() => window.open("https://buy.stripe.com/eVqfZhcbpfIN0TA0MubjW00", "_blank")}
              className="w-full md:w-auto bg-[#D3A756] text-[#05030A] border-0 rounded-[14px] px-8 py-4 text-sm md:text-base uppercase tracking-widest font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(211,167,86,0.35)]"
              data-testid="button-offer-bar-cta"
            >
              Get Instant Access — $20
            </button>
            <p className="text-[#A29AB7] text-xs flex items-center gap-1.5">
              <Shield className="w-3 h-3" />
              30-day guarantee
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

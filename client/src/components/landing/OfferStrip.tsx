import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function OfferStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="w-full mt-3 md:mt-3.5 p-3.5 md:p-4 rounded-[16px] md:rounded-[18px]"
      style={{
        background: "rgba(8, 5, 17, 0.9)",
        border: "1px solid rgba(211, 167, 86, 0.30)",
        boxShadow: "0 0 18px rgba(177, 53, 124, 0.20)",
      }}
      data-testid="offer-strip"
    >
      {/* Line 1: Flame icon + label */}
      <p className="text-[#D3A756] uppercase text-xs md:text-sm tracking-[0.14em] font-medium mb-2 flex items-center gap-1.5">
        <Flame className="w-4 h-4" />
        Full Dark Feminine Power System
      </p>

      {/* Line 2: Big price */}
      <p className="text-[#F5F5F7] font-bold text-lg md:text-xl mb-2">
        One-Time Payment: $20
      </p>

      {/* Line 3: Trust line */}
      <p className="text-[#A29AB7] text-xs md:text-sm leading-relaxed">
        Instant access • Lifetime ownership • 30-day guarantee
      </p>
    </motion.div>
  );
}

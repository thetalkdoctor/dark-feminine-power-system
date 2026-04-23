import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          style={{
            background: "rgba(5, 3, 10, 0.92)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(211, 167, 86, 0.25)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
          data-testid="sticky-mobile-cta"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <p className="text-[#F5F5F7] text-sm font-medium">
              $20 • Instant Access
            </p>
            <button
              onClick={() => window.open("https://buy.stripe.com/eVqfZhcbpfIN0TA0MubjW00", "_blank")}
              className="bg-[#D3A756] text-[#05030A] rounded-[10px] px-5 py-2.5 text-sm font-bold uppercase tracking-wider"
              data-testid="button-sticky-cta"
            >
              Get Instant Access
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

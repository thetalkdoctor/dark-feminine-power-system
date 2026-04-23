import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-20 overflow-hidden"
      data-testid="section-final-cta"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#070413] via-[#120519] to-[#04020A]" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C72E8F]/15 rounded-full blur-[200px] animate-pulse-glow" />

      <div className="relative max-w-[800px] mx-auto px-5 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-12 h-12 text-[#E9B35A] mx-auto mb-6" />
          
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F4E8FF] mb-6 leading-tight"
            data-testid="text-final-cta-title"
          >
            Stop Waiting For Permission To Be{" "}
            <span className="bg-gradient-to-r from-[#C72E8F] to-[#E9B35A] bg-clip-text text-transparent">
              Powerful.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#B9AFCF] mb-10 max-w-2xl mx-auto leading-relaxed" data-testid="text-final-cta-description">
            You already have everything you need inside of you. This system just helps you unlock it, 
            integrate it, and own it — without apology.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <Button
              onClick={() => window.open("https://buy.stripe.com/eVqfZhcbpfIN0TA0MubjW00", "_blank")}
              className="bg-gradient-to-r from-[#C72E8F] to-[#E9B35A] text-white border-0 rounded-full px-10 py-7 text-base uppercase tracking-widest font-medium shadow-[0_0_60px_rgba(199,46,143,0.5)] hover:shadow-[0_0_80px_rgba(199,46,143,0.7)] transition-shadow"
              data-testid="button-final-cta"
            >
              Get Instant Access — $20
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#B9AFCF]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E9B35A]" />
                Instant Access
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E9B35A]" />
                Lifetime Access
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E9B35A]" />
                30-Day Guarantee
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

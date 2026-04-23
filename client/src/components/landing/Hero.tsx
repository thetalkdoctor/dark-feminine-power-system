import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Shield, Heart, Magnet } from "lucide-react";
import { Button } from "@/components/ui/button";
import bundleMockup from "@assets/New_02_(1)_1765507659581.png";

const benefits = [
  { icon: Sparkles, text: "Reclaim the parts of you they called \"too much.\"" },
  { icon: Heart, text: "Turn your sensitivity into your superpower." },
  { icon: Shield, text: "Build boundaries that actually stick." },
  { icon: Magnet, text: "Stop chasing. Start attracting." },
];

export default function Hero() {
  const scrollToBundle = () => {
    const element = document.querySelector("#bundle");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative md:min-h-screen flex items-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#04020A] via-[#0A0515] to-[#120519]" />

      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#C72E8F]/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4E1C6E]/30 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E9B35A]/10 rounded-full blur-[100px]" />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#C72E8F] uppercase tracking-[0.12em] text-xs md:text-sm font-medium mb-4"
              data-testid="text-hero-label"
            >
              A Complete Dark Feminine Transformation Bundle
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F4E8FF] leading-tight mb-6"
              data-testid="text-hero-title"
            >
              Become the Woman They{" "}
              <span className="bg-gradient-to-r from-[#E9B35A] to-[#C72E8F] bg-clip-text text-transparent">
                Don't Forget.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[#B9AFCF] mb-8 leading-relaxed"
              data-testid="text-hero-subtitle"
            >
              Stop shrinking. Start walking through life like you own the room.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 mb-10"
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                  data-testid={`text-benefit-${index}`}
                >
                  <benefit.icon className="w-5 h-5 text-[#C72E8F] mt-0.5 flex-shrink-0" />
                  <span className="text-[#F4E8FF] text-sm md:text-base">
                    {benefit.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <Button
                onClick={() => window.open("https://buy.stripe.com/eVqfZhcbpfIN0TA0MubjW00", "_blank")}
                className="w-full md:w-auto bg-gradient-to-r from-[#C72E8F] to-[#E9B35A] text-white border-0 rounded-full px-8 py-6 text-sm uppercase tracking-widest font-medium shadow-[0_0_40px_rgba(199,46,143,0.4)] hover:shadow-[0_0_60px_rgba(199,46,143,0.6)] transition-shadow"
                data-testid="button-primary-cta"
              >
                Get Instant Access — $20
              </Button>

              <p className="text-xs text-[#B9AFCF] text-center md:text-left">
                Instant access · All 5 tools · Start in minutes
              </p>

              <button
                onClick={scrollToBundle}
                className="flex items-center gap-2 text-[#C72E8F] text-sm group mx-auto md:mx-0"
                data-testid="button-secondary-cta"
              >
                <span className="border-b border-transparent group-hover:border-[#C72E8F] transition-colors">
                  Show Me What's Inside First
                </span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-4xl lg:max-w-5xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#C72E8F]/20 to-[#E9B35A]/20 rounded-2xl blur-3xl" />
              <img
                src={bundleMockup}
                alt="Dark Feminine Power System Bundle"
                className="relative w-full"
                data-testid="img-bundle-mockup"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

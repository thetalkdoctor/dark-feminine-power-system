import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const beforeItems = [
  "You overthink every tone, message, and reaction.",
  "You apologize for things that weren't your fault.",
  "You feel too emotional, too intense, too \"much\".",
  "You attract people who don't respect your time or energy.",
  "You dim your light to make others comfortable.",
];

const afterItems = [
  "You walk into rooms calm, grounded, and unmistakably present.",
  "You set boundaries without shaking or feeling guilty.",
  "You use your emotions as data, not as a weapon against yourself.",
  "You become the woman people feel — not the one they forget.",
  "You radiate power that draws the right people to you.",
];

export default function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="transformation"
      ref={ref}
      className="relative py-12 md:py-20 overflow-hidden"
      data-testid="section-before-after"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#070413] to-[#120519]" />

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F4E8FF] mb-4"
            data-testid="text-transformation-title"
          >
            This Isn't Just Information.{" "}
            <span className="block mt-2">It's a Full Identity Upgrade.</span>
          </h2>
          <p className="text-[#B9AFCF] text-lg" data-testid="text-transformation-subtitle">
            Before vs After The Dark Feminine Power System™
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
            data-testid="card-before"
          >
            <h3 className="text-xl md:text-2xl font-serif text-rose-300/80 mb-6">
              Before
            </h3>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-[#B9AFCF] text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative p-6 md:p-8 rounded-2xl bg-[#C72E8F]/10 border border-[#C72E8F]/30 hover:border-[#C72E8F]/50 transition-colors group"
            data-testid="card-after"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C72E8F]/5 to-[#E9B35A]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="relative text-xl md:text-2xl font-serif bg-gradient-to-r from-[#C72E8F] to-[#E9B35A] bg-clip-text text-transparent mb-6">
              After
            </h3>
            <ul className="relative space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#E9B35A] mt-0.5 flex-shrink-0" />
                  <span className="text-[#F4E8FF] text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

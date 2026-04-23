import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const statements = [
  "You're tired of being the \"nice girl\" everyone drains.",
  "You've been called \"too much\" and tried to tone yourself down.",
  "You feel everything, but you're the one holding it all together.",
  "You know you're powerful... but you're not using even 30% of it yet.",
  "You give more than you receive and resent yourself for it.",
  "You want to be soft, but you're exhausted from being walked over.",
];

export default function EmotionalHook() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="emotional-hook"
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#070413" }}
      data-testid="section-emotional-hook"
    >
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F4E8FF] mb-4 pt-[25px]"
            data-testid="text-emotional-title"
          >
            You'll Feel This In Your Bones If...
          </h2>
          <p className="text-[#B9AFCF] text-lg" data-testid="text-emotional-subtitle">
            Read this and tell me it's not you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#C72E8F]/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
              data-testid={`card-statement-${index}`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C72E8F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="relative text-[#F4E8FF] text-sm md:text-base leading-relaxed">
                "{statement}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

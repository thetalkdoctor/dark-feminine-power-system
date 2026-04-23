import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    title: "Instant access to all files",
    subtitle: "You'll download everything via Google Drive immediately after payment.",
  },
  {
    title: "Start with the 7-Day Shadow Integration",
    subtitle: null,
  },
  {
    title: "Use your first boundary + presence shift today",
    subtitle: null,
  },
  {
    title: "Lifetime access — no subscription",
    subtitle: null,
  },
];

export default function AfterPurchase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[1120px] mx-auto rounded-[18px] p-5 md:p-6"
      style={{
        background: "#080511",
        border: "1px solid rgba(211, 167, 86, 0.25)",
      }}
      data-testid="after-purchase-section"
    >
      <h3 className="font-serif text-xl md:text-2xl text-[#F5F5F7] mb-6 text-center md:text-left">
        What happens after you purchase
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D3A756]/20 flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 text-[#D3A756]" />
            </div>
            <div>
              <p className="text-[#F5F5F7] text-sm md:text-base font-medium">
                {step.title}
              </p>
              {step.subtitle && (
                <p className="text-[#A29AB7] text-xs mt-1">
                  {step.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

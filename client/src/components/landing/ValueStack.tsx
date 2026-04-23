import { motion } from "framer-motion";
import { Sparkles, Users, Shield, Flame, Headphones } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "The Power of Dark Femininity — Ebook",
    description: "A foundational guide to feminine strength, boundaries, intuition, and emotional power — without forcing yourself to be \"softer\" or \"nicer.\"",
    value: "$47",
  },
  {
    icon: Users,
    title: "7 Dark Feminine Archetypes — Mini Guide",
    description: "Learn the different feminine power styles and how to activate the one that naturally commands respect without effort.",
    value: "$27",
  },
  {
    icon: Shield,
    title: "13 Psychological Weapons of Feminine Influence — Mini Guide",
    description: "Ethical, subtle influence tools that help you shape interactions without chasing, overexplaining, or begging to be understood.",
    value: "$27",
  },
  {
    icon: Flame,
    title: "7-Day Shadow Integration Practice — Workbook",
    description: "A simple, guided process to reclaim the parts of you that were labeled \"too much\" and turn them into grounded confidence.",
    value: "$67",
  },
  {
    icon: Headphones,
    title: "Her Invisible Power — Audio Course",
    description: "A short, immersive audio experience that helps you embody feminine presence, emotional clarity, and self-trust in daily life.",
    value: "$47",
  },
];

export default function ValueStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-full max-w-[1120px] mx-auto mt-6 rounded-[18px] p-5 md:p-6"
      style={{
        background: "#080511",
        border: "1px solid rgba(211, 167, 86, 0.25)",
      }}
      data-testid="value-stack-section"
    >
      <h4 className="font-serif text-lg md:text-xl text-[#F5F5F7] mb-6">
        Included today{" "}
        <span className="text-[#A29AB7]">(Total Value $215):</span>
      </h4>

      <div className="space-y-5 md:space-y-[18px]">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-4"
              data-testid={`value-item-${index}`}
            >
              <div className="flex-shrink-0 w-[18px] mt-1">
                <IconComponent className="w-[16px] h-[16px] text-[#D3A756]" />
              </div>
              <div className="flex-1">
                <p className="font-serif text-[#F5F5F7] text-base md:text-[17px] mb-1 leading-snug">
                  {item.title}
                </p>
                <p className="text-[#A29AB7] text-sm md:text-[15px] leading-relaxed mb-1">
                  {item.description}
                </p>
                <p className="text-[#A29AB7] text-xs md:text-sm">
                  Value: {item.value}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

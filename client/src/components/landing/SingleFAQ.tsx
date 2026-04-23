import { motion } from "framer-motion";

export default function SingleFAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-[1120px] mx-auto mt-8 rounded-[18px] p-5 md:p-6"
      style={{
        background: "#080511",
        border: "1px solid rgba(211, 167, 86, 0.15)",
      }}
      data-testid="single-faq"
    >
      <p className="font-serif text-lg md:text-xl text-[#F5F5F7] mb-3">
        What if it doesn't work for me?
      </p>
      <p className="text-[#A29AB7] text-sm md:text-base leading-relaxed">
        Try it for 30 days. If it doesn't shift how you show up and move through the world, you get your money back.
      </p>
    </motion.div>
  );
}

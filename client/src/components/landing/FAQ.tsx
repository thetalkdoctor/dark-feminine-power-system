import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What exactly is the Dark Feminine?",
    answer: "The Dark Feminine is the part of feminine energy that has been suppressed — your power, boundaries, intensity, and magnetism. It's not about being \"dark\" in a negative sense. It's about reclaiming the parts of yourself that society told you were \"too much.\" This system teaches you to integrate these qualities with grace and control.",
  },
  {
    question: "Is this bundle right for me?",
    answer: "This bundle is for you if you're tired of dimming your light, people-pleasing, and attracting those who drain your energy. If you're ready to set boundaries without guilt, harness your sensitivity as a superpower, and step into your full power — this is exactly what you need.",
  },
  {
    question: "How long will I have access?",
    answer: "You get lifetime access to all materials. Download them, save them, return to them whenever you need. The transformation doesn't expire.",
  },
  {
    question: "Is this only for women?",
    answer: "While this system is designed with feminine energy in mind, anyone who resonates with developing their dark feminine qualities can benefit. The principles of boundaries, emotional intelligence, and personal magnetism are universal.",
  },
  {
    question: "What format are the materials in?",
    answer: "You'll receive digital PDFs for the ebooks and workbook, plus MP3 audio files for the audio course. Everything is instantly downloadable after purchase.",
  },
  {
    question: "What if it doesn't work for me?",
    answer: "We offer a 30-day satisfaction guarantee. If you genuinely engage with the materials and don't experience a shift in how you see yourself and interact with the world, we'll refund your purchase. No questions asked.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-12 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#070413" }}
      data-testid="section-faq"
    >
      <div className="relative max-w-[800px] mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F4E8FF] mb-4"
            data-testid="text-faq-title"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#B9AFCF] text-lg">
            Everything you need to know before you transform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/[0.05] rounded-xl px-6 bg-white/[0.02] hover:border-[#C72E8F]/30 transition-colors data-[state=open]:border-[#C72E8F]/30"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger className="text-left text-[#F4E8FF] hover:text-[#F4E8FF] py-5 text-base md:text-lg font-medium [&[data-state=open]>svg]:text-[#C72E8F]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#B9AFCF] text-sm md:text-base leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

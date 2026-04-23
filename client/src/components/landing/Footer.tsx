import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 border-t border-white/[0.05]"
      style={{ backgroundColor: "#04020A" }}
      data-testid="footer"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-serif text-lg text-[#F4E8FF]">
              Dark Feminine Power System™
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#B9AFCF]"
          >
            <a
              href="/privacy-policy"
              className="hover:text-[#F4E8FF] transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-[#F4E8FF] transition-colors"
              data-testid="link-terms"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="hover:text-[#F4E8FF] transition-colors"
              data-testid="link-contact"
            >
              Contact
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-[#B9AFCF]/60"
          >
            © {currentYear} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

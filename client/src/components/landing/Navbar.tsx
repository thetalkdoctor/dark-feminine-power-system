import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Who It's For", href: "#emotional-hook" },
  { label: "What's Inside", href: "#bundle" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#04020A]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            <a
              href="#"
              className="font-serif text-base md:text-lg tracking-wide text-[#F4E8FF]"
              data-testid="link-logo"
            >
              Dark Feminine Power System™
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-[#B9AFCF] hover:text-[#F4E8FF] transition-colors tracking-wide"
                  data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => window.open("https://buy.stripe.com/eVqfZhcbpfIN0TA0MubjW00", "_blank")}
                className="bg-gradient-to-r from-[#C72E8F] to-[#E9B35A] text-white border-0 rounded-full px-6 text-sm uppercase tracking-widest font-medium"
                data-testid="button-get-access"
              >
                Get Instant Access — $20
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-[#F4E8FF] p-2"
              data-testid="button-mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#04020A]/98 backdrop-blur-xl md:hidden"
            data-testid="mobile-menu-overlay"
          >
            <div className="flex flex-col h-full px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-base text-[#F4E8FF]">
                  Dark Feminine Power System™
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#F4E8FF] p-2"
                  data-testid="button-close-menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-xl text-[#F4E8FF] tracking-wide"
                    data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    onClick={() => window.open("https://buy.stripe.com/eVqfZhcbpfIN0TA0MubjW00", "_blank")}
                    className="bg-gradient-to-r from-[#C72E8F] to-[#E9B35A] text-white border-0 rounded-full px-8 py-6 text-sm uppercase tracking-widest font-medium"
                    data-testid="mobile-button-get-access"
                  >
                    Get Instant Access — $20
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

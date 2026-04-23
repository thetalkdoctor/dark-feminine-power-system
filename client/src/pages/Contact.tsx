import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#04020A] via-[#0A0515] to-[#120519]">
      {/* Header */}
      <header className="border-b border-white/[0.05] py-6 sticky top-0 z-40 bg-[#04020A]/90 backdrop-blur-xl">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-10">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 text-[#B9AFCF] hover:text-[#F4E8FF]">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1000px] mx-auto px-5 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-[#F4E8FF] mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-[#B9AFCF] mb-12">
            Have questions or want to connect? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group relative rounded-[18px] p-8 bg-white/[0.02] border border-white/[0.05] hover:border-[#D3A756]/70 hover:scale-[1.015] transition-all duration-300 overflow-hidden"
              style={{
                boxShadow: "0 0 35px rgba(180, 60, 150, 0.25)",
              }}
            >
              <div className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(211, 167, 86, 0.1) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <Mail className="w-8 h-8 text-[#E9B35A] mb-4" />
                <h3 className="font-serif text-xl text-[#F4E8FF] mb-2">Email</h3>
                <a
                  href="mailto:dark.feminine.team@gmail.com"
                  className="text-[#B9AFCF] hover:text-[#E9B35A] transition-colors break-all"
                  data-testid="link-email"
                >
                  dark.feminine.team@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group relative rounded-[18px] p-8 bg-white/[0.02] border border-white/[0.05] hover:border-[#D3A756]/70 hover:scale-[1.015] transition-all duration-300 overflow-hidden"
              style={{
                boxShadow: "0 0 35px rgba(180, 60, 150, 0.25)",
              }}
            >
              <div className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(211, 167, 86, 0.1) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <Phone className="w-8 h-8 text-[#E9B35A] mb-4" />
                <h3 className="font-serif text-xl text-[#F4E8FF] mb-2">Phone</h3>
                <a
                  href="tel:+1-408-857-6625"
                  className="text-[#B9AFCF] hover:text-[#E9B35A] transition-colors"
                  data-testid="link-phone"
                >
                  +1-408-857-6625
                </a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="group relative rounded-[18px] p-8 bg-white/[0.02] border border-white/[0.05] hover:border-[#D3A756]/70 hover:scale-[1.015] transition-all duration-300 overflow-hidden"
              style={{
                boxShadow: "0 0 35px rgba(180, 60, 150, 0.25)",
              }}
            >
              <div className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(211, 167, 86, 0.1) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <MapPin className="w-8 h-8 text-[#E9B35A] mb-4" />
                <h3 className="font-serif text-xl text-[#F4E8FF] mb-2">Location</h3>
                <p className="text-[#B9AFCF]">San Jose, CA</p>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 p-8 rounded-[18px] bg-white/[0.02] border border-white/[0.05]"
          >
            <h2 className="font-serif text-2xl text-[#F4E8FF] mb-4">
              Connect With Us
            </h2>
            <p className="text-[#B9AFCF] leading-relaxed mb-4">
              Whether you have questions about the Dark Feminine Power System, need support, or want to reach out, we're here to help. Feel free to contact us via email or phone, and we'll get back to you as soon as possible.
            </p>
            <p className="text-[#B9AFCF]">
              We look forward to hearing from you!
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

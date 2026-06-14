import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function Chatbot() {
  return (
    <motion.a
      href="https://wa.me/231776836689"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-6 z-40 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping" />
      <span className="absolute inset-[-4px] rounded-full border border-primary/40 animate-pulse" />
      <span className="relative w-14 h-14 bg-primary rounded-full shadow-[0_0_24px_rgba(109,190,69,0.5)] flex items-center justify-center">
        <MessageCircle className="w-6 h-6 text-white" />
      </span>
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-[#0D1421] border border-white/10 text-white text-xs font-semibold py-1.5 px-3 rounded-lg whitespace-nowrap shadow-xl opacity-0 hover:opacity-100 pointer-events-none transition-opacity">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}

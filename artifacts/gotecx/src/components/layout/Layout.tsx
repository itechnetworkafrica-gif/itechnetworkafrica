import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLocation } from "wouter";
import { ScrollToTop } from "../ScrollToTop";
import { motion } from "framer-motion";

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/231776836689"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 220 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping" />
      <span className="absolute inset-[-5px] rounded-full border border-[#25D366]/30 animate-pulse" />

      {/* Button */}
      <span className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.45)] flex items-center justify-center transition-colors">
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.493.674 4.83 1.848 6.836L2 30l7.374-1.826A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 01-5.88-1.6l-.42-.25-4.374 1.082 1.104-4.264-.274-.436A11.56 11.56 0 014.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6zm6.346-8.674c-.346-.173-2.05-1.013-2.369-1.128-.317-.116-.548-.173-.779.173-.23.346-.895 1.128-1.098 1.36-.202.23-.404.26-.75.087-.346-.174-1.461-.538-2.782-1.717-1.028-.917-1.722-2.049-1.924-2.395-.202-.346-.021-.533.152-.706.156-.155.346-.404.52-.606.173-.202.23-.346.346-.577.116-.23.058-.432-.029-.606-.086-.173-.779-1.878-1.067-2.572-.28-.676-.565-.584-.779-.595l-.664-.011c-.23 0-.606.087-.923.432-.317.346-1.21 1.183-1.21 2.887s1.239 3.348 1.412 3.578c.173.23 2.44 3.724 5.913 5.224.827.357 1.472.57 1.975.73.83.264 1.586.227 2.183.138.666-.1 2.05-.839 2.34-1.648.289-.81.289-1.504.202-1.648-.086-.144-.317-.23-.663-.404z"/>
        </svg>
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-[#0D1421] border border-white/10 text-white text-xs font-semibold py-1.5 px-3 rounded-lg whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

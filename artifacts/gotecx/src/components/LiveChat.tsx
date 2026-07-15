import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, MessageCircle, Send, ArrowRight,
  Tag, Calendar, HeadphonesIcon, Layers, Users2, Zap
} from "lucide-react";

const PHONE = "231776836689";

const quickReplies = [
  {
    icon: Tag,
    label: "Get a Quote",
    sublabel: "Request pricing for a project",
    message: "Hi Gotecx! I'd like to get a quote for a technology project. Can you help me?",
  },
  {
    icon: Calendar,
    label: "Book a Demo",
    sublabel: "See our products in action",
    message: "Hi Gotecx! I'd like to book a product demo. When are you available?",
  },
  {
    icon: HeadphonesIcon,
    label: "Talk to Support",
    sublabel: "Get help with an existing service",
    message: "Hi Gotecx! I need support with an existing service or product.",
  },
  {
    icon: Layers,
    label: "Learn About Services",
    sublabel: "Explore what we offer",
    message: "Hi Gotecx! I'd like to learn more about your technology services.",
  },
  {
    icon: Users2,
    label: "Partnership Enquiry",
    sublabel: "Explore partner opportunities",
    message: "Hi Gotecx! I'm interested in exploring a partnership or reseller opportunity.",
  },
  {
    icon: Zap,
    label: "Request a Proposal",
    sublabel: "Get a tailored proposal",
    message: "Hi Gotecx! I'd like to request a formal proposal for a project.",
  },
];

function waLink(msg: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  /* show greeting bubble after 8 seconds if not opened yet */
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setShowGreeting(true);
    }, 8000);
    return () => clearTimeout(t);
  }, []);

  const sendCustom = () => {
    if (!customMsg.trim()) return;
    window.open(waLink(customMsg.trim()), "_blank");
    setCustomMsg("");
  };

  return (
    <>
      {/* ── Greeting bubble ──────────────────────── */}
      <AnimatePresence>
        {showGreeting && !open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="fixed bottom-[5.5rem] right-6 z-50 max-w-[220px]"
          >
            <div
              className="bg-[#0D1421] border border-white/10 text-white text-sm rounded-2xl rounded-br-sm px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] cursor-pointer"
              onClick={() => { setOpen(true); setShowGreeting(false); }}
            >
              <p className="font-semibold mb-0.5">Hey there! 👋</p>
              <p className="text-white/55 text-xs leading-relaxed">Need help? Chat with our team right now.</p>
            </div>
            {/* Triangle tail */}
            <div className="absolute -bottom-2 right-5 w-3 h-3 bg-[#0D1421] border-b border-r border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Chat popup panel ─────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed bottom-[5.5rem] right-6 z-50 w-[340px] sm:w-[370px] rounded-3xl overflow-hidden shadow-[0_24px_72px_rgba(0,0,0,0.6)] border border-white/10"
            style={{ maxHeight: "calc(100vh - 120px)" }}
          >
            <div className="flex flex-col h-full" style={{ maxHeight: "calc(100vh - 120px)" }}>

              {/* Header */}
              <div className="bg-primary px-5 py-5 flex-shrink-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-white text-base leading-tight">Gotecx Team</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="text-white/75 text-[11px] font-semibold">Online · Replies in minutes</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Hi there! How can we help you today? Pick an option below or send us a message directly.
                </p>
              </div>

              {/* Body — scrollable */}
              <div className="bg-[#0D1421] flex-1 overflow-y-auto px-4 py-5 space-y-2.5">
                {quickReplies.map((qr, i) => (
                  <motion.a
                    key={i}
                    href={waLink(qr.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-white/8 bg-white/[0.04] hover:bg-primary/10 hover:border-primary/40 transition-all group cursor-pointer"
                  >
                    <div className="w-9 h-9 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                      <qr.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold leading-tight">{qr.label}</p>
                      <p className="text-white/40 text-xs mt-0.5 truncate">{qr.sublabel}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/25 group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* Footer — custom message input */}
              <div className="bg-[#0D1421] border-t border-white/[0.07] px-4 py-4 flex-shrink-0">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={customMsg}
                    onChange={e => setCustomMsg(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && sendCustom()}
                    placeholder="Type your own message…"
                    className="flex-1 bg-white/[0.06] border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-primary/50 transition-colors"
                  />
                  <button
                    onClick={sendCustom}
                    disabled={!customMsg.trim()}
                    className="w-10 h-10 bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                    aria-label="Send"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
                <p className="text-[10px] text-white/20 text-center mt-2.5 font-medium">
                  Powered by Gotecx · Replies via WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle button ────────────────────────── */}
      <motion.button
        onClick={() => { setOpen(o => !o); setShowGreeting(false); }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 220 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-[0_8px_32px_rgba(109,190,69,0.45)] flex items-center justify-center relative"
        style={{ background: "linear-gradient(135deg, #6DBE45, #4a9e2e)" }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {/* Notification dot — shown when greeting is visible */}
        {showGreeting && !open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0D1421] flex items-center justify-center">
            <span className="text-[8px] text-white font-black">1</span>
          </span>
        )}

        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <X className="w-6 h-6 text-white" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}

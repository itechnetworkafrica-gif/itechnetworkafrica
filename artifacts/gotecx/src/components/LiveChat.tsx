import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, MessageCircle, Send, ArrowRight,
  Tag, Calendar, Headphones, Layers, Users2, Zap
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
    icon: Headphones,
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
  const [dismissed, setDismissed] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  /* Greeting bubble appears after 9 s, hides once opened or dismissed */
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open && !dismissed) setShowGreeting(true);
    }, 9000);
    return () => clearTimeout(t);
  }, []);

  /* Auto-focus input when panel opens */
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  const openChat = () => {
    setOpen(true);
    setShowGreeting(false);
  };

  const closeChat = () => setOpen(false);

  const dismissGreeting = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowGreeting(false);
    setDismissed(true);
  };

  const sendCustom = () => {
    if (!customMsg.trim()) return;
    window.open(waLink(customMsg.trim()), "_blank");
    setCustomMsg("");
  };

  return (
    <>
      {/* ── Greeting bubble ─────────────────────────── */}
      <AnimatePresence>
        {showGreeting && !open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="fixed bottom-[5.25rem] right-5 z-50 max-w-[230px]"
          >
            <div
              className="bg-[#111827] border border-white/10 text-white rounded-2xl rounded-br-none px-4 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.55)] cursor-pointer relative select-none"
              onClick={openChat}
            >
              {/* close x */}
              <button
                onClick={dismissGreeting}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-2.5 h-2.5 text-white/70" />
              </button>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Online Now</span>
              </div>
              <p className="font-semibold text-sm leading-snug mb-0.5">Hi there! How can we help?</p>
              <p className="text-white/45 text-xs leading-relaxed">
                Chat with our team — we reply in minutes.
              </p>
            </div>
            {/* Tail */}
            <div className="absolute bottom-0 right-[18px] translate-y-[7px] w-3.5 h-3.5 bg-[#111827] border-b border-r border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Chat panel ──────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="fixed bottom-[5.25rem] right-5 z-50 w-[340px] sm:w-[360px] rounded-[1.4rem] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.07)]"
            style={{ maxHeight: "min(580px, calc(100vh - 110px))" }}
          >
            <div className="flex flex-col" style={{ maxHeight: "min(580px, calc(100vh - 110px))" }}>

              {/* ── Header ── */}
              <div className="relative bg-gradient-to-br from-[#3d8c1f] via-primary to-[#5ab32a] px-5 pt-5 pb-6 flex-shrink-0">
                {/* subtle grid */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
                  style={{ backgroundImage: "repeating-linear-gradient(rgba(255,255,255,0.5) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 28px)" }} />
                <div className="relative z-10 flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar cluster */}
                    <div className="flex -space-x-2">
                      {["G", "T"].map((l, i) => (
                        <div key={i} className={`w-9 h-9 rounded-full bg-white/25 border-2 border-primary flex items-center justify-center text-white font-black text-sm ${i === 1 ? "bg-white/15" : ""}`}>
                          {l}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="font-black text-white text-[15px] leading-tight">Gotecx Team</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        <span className="text-white/75 text-[11px] font-medium">Online · Usually replies in minutes</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeChat}
                    className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
                <p className="relative z-10 text-white/80 text-[13px] leading-relaxed">
                  Hi! How can we help you today? Choose an option below or type your own message.
                </p>
              </div>

              {/* ── Quick replies ── */}
              <div className="bg-[#0e1623] flex-1 overflow-y-auto px-4 py-4 space-y-2" style={{ scrollbarWidth: "none" }}>
                {quickReplies.map((qr, i) => (
                  <motion.a
                    key={i}
                    href={waLink(qr.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.3 }}
                    className="flex items-center gap-3 px-3.5 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-primary/[0.09] hover:border-primary/35 transition-all group"
                  >
                    <div className="w-8 h-8 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                      <qr.icon className="w-[15px] h-[15px] text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[13px] font-semibold leading-tight">{qr.label}</p>
                      <p className="text-white/35 text-[11px] mt-0.5 truncate">{qr.sublabel}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* ── Message input ── */}
              <div className="bg-[#0e1623] border-t border-white/[0.06] px-4 py-3.5 flex-shrink-0">
                <div className="flex gap-2 items-center bg-white/[0.05] border border-white/[0.08] rounded-xl px-3 py-1.5 focus-within:border-primary/40 transition-colors">
                  <input
                    ref={inputRef}
                    type="text"
                    value={customMsg}
                    onChange={e => setCustomMsg(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && sendCustom()}
                    placeholder="Write your own message…"
                    className="flex-1 bg-transparent text-[13px] text-white placeholder-white/25 outline-none py-1"
                  />
                  <button
                    onClick={sendCustom}
                    disabled={!customMsg.trim()}
                    className="w-7 h-7 bg-primary hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg flex items-center justify-center transition-all flex-shrink-0"
                    aria-label="Send"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
                <p className="text-[10px] text-white/18 text-center mt-2 font-medium tracking-wide">
                  Replies via WhatsApp · Gotecx Support
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating toggle button ───────────────────── */}
      <motion.button
        onClick={() => (open ? closeChat() : openChat())}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-5 right-5 z-50 w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center shadow-[0_8px_28px_rgba(109,190,69,0.5)] relative"
        style={{ background: "linear-gradient(140deg, #7ed321 0%, #6DBE45 45%, #4a9e2e 100%)" }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping pointer-events-none" style={{ animationDuration: "2.4s" }} />
        )}

        {/* Notification badge */}
        {!open && showGreeting && (
          <motion.span
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-red-500 rounded-full border-2 border-[#0a0f1a] flex items-center justify-center"
          >
            <span className="text-[9px] text-white font-black">1</span>
          </motion.span>
        )}

        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x"
              initial={{ rotate: -80, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 80, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-white" />
            </motion.span>
          ) : (
            <motion.span key="msg"
              initial={{ rotate: 80, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -80, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-[22px] h-[22px] text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}

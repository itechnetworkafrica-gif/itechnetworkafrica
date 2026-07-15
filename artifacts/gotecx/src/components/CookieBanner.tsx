import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, X, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

const STORAGE_KEY = "gtx_cookie_consent";

type ConsentState = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(c: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
}

function Toggle({ checked, onChange, disabled }: { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none
        ${checked ? "bg-primary" : "bg-white/15"}
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`} />
    </button>
  );
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [prefs, setPrefs] = useState<ConsentState>({ essential: true, analytics: true, marketing: false });
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    const existing = loadConsent();
    if (existing) return;
    const t = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const acceptAll = () => {
    const c: ConsentState = { essential: true, analytics: true, marketing: true };
    saveConsent(c);
    setAccepted(true);
    setTimeout(() => setVisible(false), 1200);
  };

  const savePreferences = () => {
    saveConsent(prefs);
    setAccepted(true);
    setTimeout(() => setVisible(false), 1200);
  };

  const dismiss = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop for manage panel */}
          {managing && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
              onClick={() => setManaging(false)}
            />
          )}

          {/* ── Manage Preferences Modal ── */}
          <AnimatePresence>
            {managing && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="fixed inset-0 z-[70] flex items-center justify-center px-4"
                onClick={e => e.stopPropagation()}
              >
                <div className="w-full max-w-md bg-[#111827] border border-white/10 rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
                  {/* Modal header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base leading-tight">Cookie Preferences</h3>
                        <p className="text-white/40 text-xs">Manage what we can track</p>
                      </div>
                    </div>
                    <button onClick={() => setManaging(false)} className="w-8 h-8 rounded-xl bg-white/[0.06] hover:bg-white/10 flex items-center justify-center transition-colors">
                      <X className="w-4 h-4 text-white/60" />
                    </button>
                  </div>

                  {/* Cookie categories */}
                  <div className="px-6 py-5 space-y-4">
                    {[
                      {
                        key: "essential" as const,
                        label: "Essential Cookies",
                        desc: "Required for the website to function. Cannot be disabled.",
                        required: true,
                      },
                      {
                        key: "analytics" as const,
                        label: "Analytics Cookies",
                        desc: "Help us understand how visitors interact with our pages so we can improve them.",
                        required: false,
                      },
                      {
                        key: "marketing" as const,
                        label: "Marketing Cookies",
                        desc: "Used to track visitors for retargeting and relevant advertising campaigns.",
                        required: false,
                      },
                    ].map(cat => (
                      <div key={cat.key} className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                        <div className="flex-1">
                          <p className="text-white text-sm font-semibold">{cat.label}</p>
                          <p className="text-white/40 text-xs mt-0.5 leading-relaxed">{cat.desc}</p>
                          {cat.required && <span className="inline-block mt-1.5 text-[10px] text-primary font-bold uppercase tracking-wider">Always Active</span>}
                        </div>
                        <Toggle
                          checked={prefs[cat.key]}
                          onChange={v => setPrefs(p => ({ ...p, [cat.key]: v }))}
                          disabled={cat.required}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Modal footer */}
                  <div className="px-6 pb-6 flex gap-3">
                    <button
                      onClick={savePreferences}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl py-3 font-bold text-sm transition-colors"
                    >
                      Save Preferences
                    </button>
                    <button
                      onClick={acceptAll}
                      className="flex-1 border border-primary/40 text-primary hover:bg-primary/10 rounded-xl py-3 font-bold text-sm transition-colors"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Banner ── */}
          {!managing && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 260, damping: 28, delay: 0.1 }}
              className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-5 pointer-events-none"
            >
              <div className="max-w-4xl mx-auto pointer-events-auto">
                <div className="bg-[#111827]/98 backdrop-blur-xl border border-white/[0.09] rounded-2xl shadow-[0_-4px_60px_rgba(0,0,0,0.5)] overflow-hidden">

                  {accepted ? (
                    /* Success state */
                    <motion.div
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-3 px-6 py-5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-white font-semibold text-sm">Preferences saved. Thank you.</span>
                    </motion.div>
                  ) : (
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                        {/* Icon + text */}
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Cookie className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-sm mb-1">We use cookies</h3>
                            <p className="text-white/50 text-xs leading-relaxed max-w-xl">
                              Gotecx uses cookies to enhance your experience, analyse site traffic, and serve relevant content. By clicking "Accept All" you consent to our use of cookies.{" "}
                              <button
                                onClick={() => setDetailsOpen(o => !o)}
                                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
                              >
                                {detailsOpen ? "Less info" : "Learn more"}
                                {detailsOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                              </button>
                            </p>
                            <AnimatePresence>
                              {detailsOpen && (
                                <motion.p
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden text-white/40 text-xs leading-relaxed mt-2 max-w-xl"
                                >
                                  We collect anonymised analytics to improve page performance, and marketing cookies to personalise ads. Essential cookies are always active as they are required for basic functionality.
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2.5 sm:flex-col sm:items-stretch sm:min-w-[160px]">
                          <button
                            onClick={acceptAll}
                            className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-white rounded-xl px-5 py-2.5 font-bold text-sm transition-colors whitespace-nowrap"
                          >
                            Accept All
                          </button>
                          <button
                            onClick={() => setManaging(true)}
                            className="flex-1 sm:flex-none border border-white/15 text-white/70 hover:text-white hover:border-white/30 rounded-xl px-5 py-2.5 font-semibold text-sm transition-colors whitespace-nowrap"
                          >
                            Manage Preferences
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

import React, { useState } from "react";
import { Link } from "wouter";
import { 
  Menu, X, Search, Globe, Moon, Sun, ChevronDown, 
  CreditCard, Briefcase, LayoutGrid, Cpu, Cloud, Shield, 
  BarChart3, Globe2, Users, Building2 
} from "lucide-react";
import { useTheme } from "next-themes";
import gotecxLogo from "@assets/file_0000000069c471f4b1db489ae2ff9c8b_1781449096936.png";
import itechLogo from "@assets/file_000000007fdc72438ace4a48fe9c5139_1781449108190.png";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenus = () => {
    setActiveMenu(null);
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
        <Link href="/" onClick={closeMenus} className="flex items-center gap-2 group relative z-50">
          <div className="flex flex-col">
            <img src={gotecxLogo} alt="Gotecx Logo" className="h-10 w-auto" />
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-1">Powered by iTech Network Africa</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 font-medium text-sm">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          
          <div className="relative">
            <button onClick={() => toggleMenu("solutions")} className="flex items-center gap-1 hover:text-primary transition-colors py-4">
              Solutions <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === "solutions" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeMenu === "solutions" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card border border-border rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-4"
                >
                  <Link href="/solutions#enterprise" onClick={closeMenus} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors">
                    <div className="bg-[#0D1421] p-3 rounded-xl"><Building2 className="w-6 h-6 text-primary" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">Enterprise Solutions</h4>
                      <p className="text-xs text-muted-foreground mt-1">Scalable platforms for large organizations</p>
                    </div>
                  </Link>
                  <Link href="/solutions#cloud" onClick={closeMenus} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors">
                    <div className="bg-[#0D1421] p-3 rounded-xl"><Cloud className="w-6 h-6 text-primary" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">Cloud Infrastructure</h4>
                      <p className="text-xs text-muted-foreground mt-1">Secure and reliable hosting services</p>
                    </div>
                  </Link>
                  <Link href="/solutions#ai" onClick={closeMenus} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors">
                    <div className="bg-[#0D1421] p-3 rounded-xl"><Cpu className="w-6 h-6 text-primary" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">AI & Automation</h4>
                      <p className="text-xs text-muted-foreground mt-1">Intelligent workflows and analytics</p>
                    </div>
                  </Link>
                  <Link href="/solutions#cybersecurity" onClick={closeMenus} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors">
                    <div className="bg-[#0D1421] p-3 rounded-xl"><Shield className="w-6 h-6 text-primary" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">Cybersecurity</h4>
                      <p className="text-xs text-muted-foreground mt-1">Advanced protection for digital assets</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button onClick={() => toggleMenu("products")} className="flex items-center gap-1 hover:text-primary transition-colors py-4">
              Products <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === "products" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeMenu === "products" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-card border border-border rounded-2xl shadow-2xl p-6"
                >
                  <Link href="/products" onClick={closeMenus} className="flex items-start gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors mb-4">
                    <div className="bg-[#0D1421] p-3 rounded-xl"><CreditCard className="w-6 h-6 text-primary" /></div>
                    <div>
                      <h4 className="font-bold text-primary">Gotecx POS</h4>
                      <p className="text-xs text-muted-foreground mt-1">Flagship point-of-sale & business management platform</p>
                    </div>
                  </Link>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 cursor-not-allowed">
                      <Cpu className="w-5 h-5 text-muted-foreground" />
                      <div className="flex flex-col"><span className="text-sm font-medium text-muted-foreground">Gotecx AI</span><span className="text-[10px] text-muted-foreground uppercase">Coming Soon</span></div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 cursor-not-allowed">
                      <BarChart3 className="w-5 h-5 text-muted-foreground" />
                      <div className="flex flex-col"><span className="text-sm font-medium text-muted-foreground">Analytics</span><span className="text-[10px] text-muted-foreground uppercase">Coming Soon</span></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button onClick={() => toggleMenu("services")} className="flex items-center gap-1 hover:text-primary transition-colors py-4">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === "services" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeMenu === "services" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-card border border-border rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-4"
                >
                  <Link href="/services#software" onClick={closeMenus} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors">
                    <div className="bg-[#0D1421] p-3 rounded-xl"><LayoutGrid className="w-6 h-6 text-primary" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">Software Dev</h4>
                      <p className="text-xs text-muted-foreground mt-1">Custom applications and tools</p>
                    </div>
                  </Link>
                  <Link href="/services#consulting" onClick={closeMenus} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors">
                    <div className="bg-[#0D1421] p-3 rounded-xl"><Briefcase className="w-6 h-6 text-primary" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">IT Consulting</h4>
                      <p className="text-xs text-muted-foreground mt-1">Expert technology guidance</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/industries" onClick={closeMenus} className="hover:text-primary transition-colors">Industries</Link>
          
          <div className="relative">
            <button onClick={() => toggleMenu("company")} className="flex items-center gap-1 hover:text-primary transition-colors py-4">
              Company <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === "company" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeMenu === "company" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[300px] bg-card border border-border rounded-2xl shadow-2xl p-4 flex flex-col gap-2"
                >
                  <Link href="/leadership" onClick={closeMenus} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">Leadership</span>
                  </Link>
                  <Link href="/about" onClick={closeMenus} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors">
                    <Building2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">About Gotecx</span>
                  </Link>
                  <Link href="/careers" onClick={closeMenus} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="font-medium">Careers</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button onClick={() => toggleMenu("resources")} className="flex items-center gap-1 hover:text-primary transition-colors py-4">
              Resources <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === "resources" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeMenu === "resources" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-[200px] bg-card border border-border rounded-2xl shadow-2xl p-4 flex flex-col gap-2"
                >
                  <Link href="/blog" onClick={closeMenus} className="p-3 rounded-xl hover:bg-muted transition-colors font-medium">Blog</Link>
                  <Link href="/docs" onClick={closeMenus} className="p-3 rounded-xl hover:bg-muted transition-colors font-medium">Documentation</Link>
                  <Link href="/faqs" onClick={closeMenus} className="p-3 rounded-xl hover:bg-muted transition-colors font-medium">FAQs</Link>
                  <Link href="/support" onClick={closeMenus} className="p-3 rounded-xl hover:bg-muted transition-colors font-medium">Support Center</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" onClick={closeMenus} className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden xl:flex items-center gap-4 relative z-50">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link href="/contact">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6">
              Access Client Portal
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="xl:hidden text-foreground relative z-50" onClick={() => setIsMobileOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenus}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 xl:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-[#0D1421] z-50 flex flex-col shadow-2xl xl:hidden overflow-y-auto"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5">
                    <img src={itechLogo} alt="iTech" className="w-full h-auto" />
                  </div>
                  <span className="font-bold text-primary tracking-wide">iTechNetwork</span>
                </div>
                <button onClick={closeMenus} className="text-white/70 hover:text-white bg-white/5 p-2 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col gap-8">
                <div>
                  <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4">Products</h4>
                  <Link href="/products" onClick={closeMenus} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="bg-[#1A2535] p-3 rounded-full"><CreditCard className="w-6 h-6 text-primary" /></div>
                    <div>
                      <h4 className="font-bold text-white">Gotecx POS</h4>
                      <p className="text-xs text-white/50 mt-1">Smart point-of-sale system</p>
                    </div>
                  </Link>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4">Company</h4>
                  <div className="flex flex-col gap-3">
                    <Link href="/services" onClick={closeMenus} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                      <div className="bg-[#1A2535] p-2.5 rounded-full"><Briefcase className="w-5 h-5 text-primary" /></div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Services</h4>
                        <p className="text-xs text-white/50 mt-0.5">Explore our solutions</p>
                      </div>
                    </Link>
                    <Link href="/contact" onClick={closeMenus} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                      <div className="bg-[#1A2535] p-2.5 rounded-full"><Globe2 className="w-5 h-5 text-primary" /></div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Contact & Pricing</h4>
                        <p className="text-xs text-white/50 mt-0.5">Get a customized quote</p>
                      </div>
                    </Link>
                    <Link href="/leadership" onClick={closeMenus} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                      <div className="bg-[#1A2535] p-2.5 rounded-full"><Users className="w-5 h-5 text-primary" /></div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Leadership</h4>
                        <p className="text-xs text-white/50 mt-0.5">Meet our executives</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <Link href="/contact" onClick={closeMenus} className="text-white hover:text-primary font-medium mb-6 block px-2">Contact Support</Link>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-14 text-lg font-bold">
                    Access Client Portal
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

import React from "react";
import { Link } from "wouter";
import { Menu, X, Search, Globe, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import gotecxLogo from "@assets/file_0000000069c471f4b1db489ae2ff9c8b_1781449096936.png";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <img src={gotecxLogo} alt="Gotecx Logo" className="h-10 w-auto" />
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-1">Powered by iTech Network Africa</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8 font-medium text-sm">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <div className="relative group py-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">Solutions <ChevronDown className="w-4 h-4" /></span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card border border-border rounded-xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-bold text-muted-foreground uppercase mb-4 tracking-wider">Business Solutions</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/solutions#enterprise" className="hover:text-primary">Enterprise</Link>
                  <Link href="/solutions#financial" className="hover:text-primary">Financial Services</Link>
                  <Link href="/solutions#retail" className="hover:text-primary">Retail & Commerce</Link>
                  <Link href="/solutions#healthcare" className="hover:text-primary">Healthcare</Link>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold text-muted-foreground uppercase mb-4 tracking-wider">Technology Solutions</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/solutions#ai" className="hover:text-primary">AI & Automation</Link>
                  <Link href="/solutions#cloud" className="hover:text-primary">Cloud Infrastructure</Link>
                  <Link href="/solutions#cybersecurity" className="hover:text-primary">Cybersecurity</Link>
                  <Link href="/solutions#analytics" className="hover:text-primary">Data Analytics</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group py-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">Products <ChevronDown className="w-4 h-4" /></span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-card border border-border rounded-xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/products" className="block p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors mb-4">
                <div className="font-bold text-primary mb-1">Gotecx POS</div>
                <div className="text-xs text-muted-foreground">Flagship point of sale system</div>
              </Link>
              <h3 className="text-xs font-bold text-muted-foreground uppercase mb-3 tracking-wider">Future Roadmap</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <span>Gotecx AI</span>
                <span>Gotecx Analytics</span>
                <span>Gotecx ERP</span>
                <span>Gotecx Cloud</span>
              </div>
            </div>
          </div>
          <div className="relative group py-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">Services <ChevronDown className="w-4 h-4" /></span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card border border-border rounded-xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-3">
                <Link href="/services#web" className="hover:text-primary">Web Development</Link>
                <Link href="/services#mobile" className="hover:text-primary">Mobile Apps</Link>
                <Link href="/services#software" className="hover:text-primary">Software Dev</Link>
                <Link href="/services#cloud" className="hover:text-primary">Cloud Services</Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/services#uiux" className="hover:text-primary">UI/UX Design</Link>
                <Link href="/services#branding" className="hover:text-primary">Branding</Link>
                <Link href="/services#marketing" className="hover:text-primary">Digital Marketing</Link>
                <Link href="/services#cybersecurity" className="hover:text-primary">Cybersecurity</Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/services#consulting" className="hover:text-primary">IT Consulting</Link>
                <Link href="/services#enterprise" className="hover:text-primary">Enterprise Tech</Link>
                <Link href="/services#automation" className="hover:text-primary">Automation</Link>
                <Link href="/services#ai" className="hover:text-primary">AI Integration</Link>
              </div>
            </div>
          </div>
          <Link href="/industries" className="hover:text-primary transition-colors">Industries</Link>
          <div className="relative group py-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">Company <ChevronDown className="w-4 h-4" /></span>
            <div className="absolute top-full left-0 w-[200px] bg-card border border-border rounded-xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col gap-3">
              <Link href="/leadership" className="hover:text-primary">Leadership</Link>
              <Link href="/careers" className="hover:text-primary">Careers</Link>
              <Link href="/partners" className="hover:text-primary">Partners</Link>
              <Link href="/investors" className="hover:text-primary">Investors</Link>
              <Link href="/media-center" className="hover:text-primary">Media Center</Link>
              <Link href="/events" className="hover:text-primary">Events</Link>
              <Link href="/success-stories" className="hover:text-primary">Success Stories</Link>
            </div>
          </div>
          <div className="relative group py-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">Resources <ChevronDown className="w-4 h-4" /></span>
            <div className="absolute top-full left-0 w-[200px] bg-card border border-border rounded-xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col gap-3">
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <Link href="/docs" className="hover:text-primary">Documentation</Link>
              <Link href="/faqs" className="hover:text-primary">FAQs</Link>
              <Link href="/support" className="hover:text-primary">Support Center</Link>
            </div>
          </div>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden xl:flex items-center gap-4">
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
              Request Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="xl:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="xl:hidden bg-background border-t border-border p-4 absolute top-full left-0 w-full flex flex-col gap-4 shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/industries" onClick={() => setIsOpen(false)}>Industries</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
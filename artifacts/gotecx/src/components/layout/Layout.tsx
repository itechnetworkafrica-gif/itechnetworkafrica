import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLocation } from "wouter";
import { ScrollToTop } from "../ScrollToTop";
import { LiveChat } from "../LiveChat";

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
      <LiveChat />
    </div>
  );
}

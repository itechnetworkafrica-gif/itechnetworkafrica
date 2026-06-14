import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Database, Shield, ChevronRight } from "lucide-react";

export default function Docs() {
  return (
    <div className="w-full flex h-[calc(100vh-80px)] overflow-hidden bg-background">
      {/* Docs Sidebar */}
      <div className="w-72 border-r border-border bg-card hidden md:block overflow-y-auto">
        <div className="p-8">
          <div className="font-black text-2xl mb-8 tracking-tight text-foreground">Gotecx Docs</div>
          <div className="space-y-8">
            <div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Getting Started</div>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="text-primary flex items-center justify-between">Introduction <ChevronRight className="w-3 h-3" /></a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Quickstart Guide</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Authentication</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Gotecx POS API</div>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Transactions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Inventory</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Customers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Webhooks</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Cloud Infrastructure</div>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Architecture</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Security Model</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Docs Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8 md:p-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-wider">Version 2.0</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Introduction to Gotecx</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Welcome to the official developer documentation for the Gotecx Enterprise Platform. Learn how to integrate, build, and scale with our APIs and cloud infrastructure.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Quickstart</h3>
                <p className="text-muted-foreground mb-6">Get up and running with the Gotecx POS API in under 5 minutes.</p>
                <a href="#" className="font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Read guide <ChevronRight className="w-4 h-4" /></a>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">API Reference</h3>
                <p className="text-muted-foreground mb-6">Explore endpoints, parameters, and response schemas.</p>
                <a href="#" className="font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">View reference <ChevronRight className="w-4 h-4" /></a>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Data Sync</h3>
                <p className="text-muted-foreground mb-6">Learn how to keep your systems in sync with Gotecx webhooks.</p>
                <a href="#" className="font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Read guide <ChevronRight className="w-4 h-4" /></a>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Security</h3>
                <p className="text-muted-foreground mb-6">Authentication, rate limits, and best practices for secure integration.</p>
                <a href="#" className="font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Read guide <ChevronRight className="w-4 h-4" /></a>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Base URL</h2>
              <p className="text-lg text-muted-foreground mb-4">All API requests should be made to the following base URL:</p>
              <div className="bg-[#0D1421] text-white p-6 rounded-xl overflow-x-auto mb-12 font-mono text-sm border border-border shadow-inner">
                <code>https://api.gotecx.com/v1</code>
              </div>

              <h2 className="text-3xl font-bold mb-6">Authentication</h2>
              <p className="text-lg text-muted-foreground mb-4">Authenticate your API requests using a Bearer token in the Authorization header.</p>
              <div className="bg-[#0D1421] text-white p-6 rounded-xl overflow-x-auto mb-12 font-mono text-sm border border-border shadow-inner">
                <code>Authorization: Bearer your_api_key_here</code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

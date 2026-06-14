import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Database, Shield } from "lucide-react";

export default function Docs() {
  return (
    <div className="w-full flex h-[calc(100vh-80px)] overflow-hidden">
      {/* Docs Sidebar */}
      <div className="w-64 border-r border-border bg-card hidden md:block overflow-y-auto">
        <div className="p-6">
          <div className="font-bold text-lg mb-6 tracking-tight">Gotecx Docs</div>
          <div className="space-y-6">
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Getting Started</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-primary font-medium">Introduction</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Quickstart Guide</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Authentication</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Gotecx POS API</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Transactions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Inventory</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Customers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Webhooks</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Cloud Infrastructure</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Architecture</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Security Model</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Docs Content */}
      <div className="flex-1 bg-background overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8 md:p-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-4">Introduction to Gotecx</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Welcome to the official developer documentation for the Gotecx Enterprise Platform. Learn how to integrate, build, and scale with our APIs and cloud infrastructure.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-card border border-border rounded-xl">
                <Terminal className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Quickstart</h3>
                <p className="text-sm text-muted-foreground mb-4">Get up and running with the Gotecx POS API in under 5 minutes.</p>
                <a href="#" className="text-sm font-semibold text-primary">Read guide →</a>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <Code2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">API Reference</h3>
                <p className="text-sm text-muted-foreground mb-4">Explore endpoints, parameters, and response schemas.</p>
                <a href="#" className="text-sm font-semibold text-primary">View reference →</a>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <Database className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Data Sync</h3>
                <p className="text-sm text-muted-foreground mb-4">Learn how to keep your systems in sync with Gotecx webhooks.</p>
                <a href="#" className="text-sm font-semibold text-primary">Read guide →</a>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground mb-4">Authentication, rate limits, and best practices for secure integration.</p>
                <a href="#" className="text-sm font-semibold text-primary">Read guide →</a>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Base URL</h2>
              <p className="mb-4">All API requests should be made to the following base URL:</p>
              <pre className="bg-[#1A2035] text-white p-4 rounded-lg overflow-x-auto mb-8 font-mono text-sm border border-white/10">
                <code>https://api.gotecx.com/v1</code>
              </pre>

              <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Authentication</h2>
              <p className="mb-4">Authenticate your API requests using a Bearer token in the Authorization header.</p>
              <pre className="bg-[#1A2035] text-white p-4 rounded-lg overflow-x-auto mb-8 font-mono text-sm border border-white/10">
                <code>Authorization: Bearer your_api_key_here</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
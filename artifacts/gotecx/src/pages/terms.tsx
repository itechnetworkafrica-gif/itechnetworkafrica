import React from "react";

export default function Terms() {
  return (
    <div className="w-full py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
        <div className="text-sm text-muted-foreground mb-12">Last Updated: October 2025</div>
        
        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p>
            Welcome to Gotecx, powered by iTech Network Africa. Please read these Terms & Conditions ("Terms", "Terms and Conditions") carefully before using the Gotecx website and enterprise software platforms operated by Gotecx.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Enterprise Software License</h2>
          <p>
            Subject to these Terms, Gotecx grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Gotecx software platforms for your internal business purposes in accordance with your specific service agreement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Service Level Agreements (SLA)</h2>
          <p>
            Specific uptime guarantees, support response times, and system availability are governed by the individual Service Level Agreement established during the enterprise onboarding process.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Gotecx and its licensors. The Service is protected by copyright, trademark, and other laws.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall Gotecx, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
        </div>
      </div>
    </div>
  );
}
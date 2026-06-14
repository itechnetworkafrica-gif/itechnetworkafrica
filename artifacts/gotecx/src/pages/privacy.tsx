import React from "react";

export default function Privacy() {
  return (
    <div className="w-full py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <div className="text-sm text-muted-foreground mb-12">Last Updated: October 2025</div>
        
        <div className="prose dark:prose-invert max-w-none space-y-6">
          <p>
            Gotecx ("we," "our," or "us"), powered by iTech Network Africa, is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Gotecx.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you register for an account, use our services, or communicate with us. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (name, email address, phone number)</li>
            <li>Business information (company name, role, industry)</li>
            <li>Billing information for paid services</li>
            <li>Technical data generated through your use of our platforms</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our enterprise software and services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security</h2>
          <p>
            Gotecx implements enterprise-grade security measures designed to protect your information from unauthorized access. Our infrastructure utilizes advanced encryption and complies with international security standards.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@gotecx.com.
          </p>
        </div>
      </div>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Terms of <span className="text-gradient">Service</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none space-y-6 text-muted"
          >
            <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Meeche & Boom Co. website and services, you accept and agree to be bound by the 
              terms and conditions of this agreement. If you do not agree with any part of these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">2. Services Provided</h2>
            <p>Meeche & Boom Co. provides the following services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Web development and design</li>
              <li>E-commerce solutions</li>
              <li>Custom website development</li>
              <li>Website maintenance and support</li>
              <li>Digital marketing services</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">3. Project Process</h2>
            <p>Our typical project process includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Initial consultation and requirements gathering</li>
              <li>Proposal and quote submission</li>
              <li>Project approval and deposit payment</li>
              <li>Design and development phases</li>
              <li>Review and revision periods</li>
              <li>Final delivery and payment</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">4. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A 50% deposit is required to begin any project</li>
              <li>Remaining balance is due upon project completion</li>
              <li>Payment methods: Bank transfer, Mobile Money</li>
              <li>Late payments may incur additional fees</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">5. Revisions</h2>
            <p>
              Each project includes a set number of revisions as specified in the project proposal. Additional revisions 
              beyond the agreed amount may incur additional charges.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">6. Intellectual Property</h2>
            <p>
              Upon full payment, you will receive full ownership of the delivered website. We reserve the right to display 
              completed projects in our portfolio unless otherwise agreed in writing.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">7. Timeline and Delivery</h2>
            <p>
              Project timelines are estimates and may vary based on project complexity, timely feedback, and revision requests. 
              We are committed to delivering projects within the agreed timeframe.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">8. Confidentiality</h2>
            <p>
              We treat all client information as confidential and do not share proprietary information with third parties 
              without your explicit consent.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">9. Limitation of Liability</h2>
            <p>
              Meeche & Boom Co. shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">10. Contact</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <p className="font-medium text-foreground">meecheandboom@gmail.com</p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
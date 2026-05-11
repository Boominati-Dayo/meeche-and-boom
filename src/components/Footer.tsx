"use client";

import Link from "next/link";
import { Globe, Star, Send, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services/silicone", label: "Silicone Baby Sites" },
    { href: "/services/pets", label: "Pet Sites" },
    { href: "/services/tracking", label: "Tracking Systems" },
    { href: "/services/ecommerce", label: "E-commerce" },
    { href: "/services/banking", label: "Banking" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
  ],
  support: [
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "Help Center" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Star, href: "#", label: "Rating" },
  { icon: Send, href: "#", label: "Message" },
  { icon: Mail, href: "mailto:hello@meecheandboom.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <img src="/assets/Meeche&BoomCoLogo.png" alt="Meeche & Boom Co." className="h-8 sm:h-10 w-auto" />
            </Link>
            <p className="text-muted text-sm sm:mb-6 max-w-xs sm:max-w-sm mb-4 sm:mb-6">
              We get clients, then build their sites. Expert digital solutions combining Meeche Brand marketing with Boominati development.
            </p>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 glass rounded-full flex items-center justify-center text-muted hover:text-primary transition-colors"
                >
                  <social.icon className="w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted hover:text-primary transition-colors text-xs sm:text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted hover:text-primary transition-colors text-xs sm:text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted">
              <li className="flex items-center gap-1.5 sm:gap-2">
                <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0" />
                <span className="truncate">hello@meecheandboom.com</span>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2">
                <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+237682356604">+237 682 356 604</a>
                  <a href="tel:+237679080426">+237 679 080 426</a>
                </div>
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2">
                <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Worldwide Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted">
            © {new Date().getFullYear()} Meeche & Boom Co. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
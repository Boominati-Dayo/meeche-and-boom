"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/data";
import { projects, services } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const projectResults = projects.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query))
    ).slice(0, 5);
    
    const serviceResults = services.filter(s => 
      s.name.toLowerCase().includes(query) ||
      s.description.toLowerCase().includes(query))
    .slice(0, 3);

    setSearchResults([...projectResults.map(p => ({...p, type: 'project'})), ...serviceResults.map(s => ({...s, type: 'service'}))]);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (result: any) => {
    setSearchOpen(false);
    setSearchQuery("");
    if (result.type === 'service') {
      router.push(`/services/${result.id}`);
    } else {
      router.push(`/portfolio/${result.id}`);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
            <img src="/assets/Meeche&BoomCoLogo.png" alt="Meeche & Boom Co." className="h-8 sm:h-10 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={cn(
                  "p-1.5 sm:p-2 hover:bg-white/5 rounded-full transition-colors",
                  searchOpen ? "text-primary" : "text-muted"
                )}
                aria-label="Search"
              >
                <Search className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 w-72 sm:w-80 md:w-96 glass shadow-2xl rounded-xl border border-border p-3 sm:p-4"
                  >
                    <div className="relative mb-3">
                      <input
                        type="text"
                        placeholder="Search services, websites..."
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-secondary border border-border rounded-lg text-sm sm:text-base focus:outline-none focus:border-primary"
                        autoFocus
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                    </div>

                    <div className="max-h-64 overflow-y-auto">
                      {searchQuery.trim() !== "" ? (
                        searchResults.length > 0 ? (
                          <div className="space-y-2">
                            {searchResults.map((result, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleResultClick(result)}
                                className="w-full flex items-center justify-between p-2 sm:p-3 bg-secondary hover:bg-primary/10 rounded-lg transition-colors text-left"
                              >
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate">
                                    {result.name}
                                  </p>
                                  <p className="text-xs text-muted capitalize">
                                    {result.type} • {result.category || result.id}
                                  </p>
                                </div>
                                <ArrowRight className="w-3 h-3 text-muted flex-shrink-0" />
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="py-6 text-center">
                            <p className="text-muted text-sm">No results for "{searchQuery}"</p>
                          </div>
                        )
                      ) : (
                        <div className="py-3">
                          <p className="text-xs text-muted uppercase tracking-widest mb-3 px-1">Popular</p>
                          <div className="flex flex-wrap gap-2">
                            {[
                              { label: 'Silicone', id: 'silicone' },
                              { label: 'Pets', id: 'pets' },
                              { label: 'Tracking', id: 'tracking' },
                              { label: 'E-commerce', id: 'ecommerce' }
                            ].map((item) => (
                              <Link
                                key={item.id}
                                href={`/services/${item.id}`}
                                onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                                className="px-3 py-1.5 bg-secondary hover:bg-primary/20 rounded-full text-xs font-medium text-muted transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 sm:p-2"
            >
              {isOpen ? <X className="w-5 sm:w-6 h-5 sm:h-6" /> : <Menu className="w-5 sm:w-6 h-5 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border"
          >
            <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1.5 sm:space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2 sm:py-2.5 text-sm sm:text-base font-medium text-muted hover:text-primary transition-colors"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
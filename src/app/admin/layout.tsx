"use client";

import { useState, createContext, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Sparkles, Plus, Image, FileText, MessageSquare, DollarSign, Loader2, Menu, X, LogOut, Send } from "lucide-react";

interface AdminNavItem {
  icon: typeof Sparkles;
  label: string;
  href: string;
}

const adminNav: AdminNavItem[] = [
  { icon: Sparkles, label: "Dashboard", href: "/admin" },
  { icon: Image, label: "Projects", href: "/admin/projects" },
  { icon: Plus, label: "Add Project", href: "/admin/projects/add" },
  { icon: FileText, label: "Testimonials", href: "/admin/testimonials" },
  { icon: MessageSquare, label: "Messages", href: "/admin/messages" },
  { icon: DollarSign, label: "Pricing", href: "/admin/pricing" },
];

interface AdminContextValue {
  refreshKey: number;
  triggerRefresh: () => void;
}

export const AdminContext = createContext<AdminContextValue>({ refreshKey: 0, triggerRefresh: () => {} });
export const useAdmin = () => useContext(AdminContext);

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const cookies = document.cookie.split(";");
    const hasToken = cookies.some((c) => c.trim().startsWith("boominati_admin="));
    if (!hasToken) {
      router.push("/admin/login");
    } else {
      setChecking(false);
    }
  }, [router]);

  const handleLogout = () => {
    document.cookie = "boominati_admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
  };

  const triggerRefresh = () => setRefreshKey((k) => k + 1);

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <AdminContext.Provider value={{ refreshKey, triggerRefresh }}>
      <div className="min-h-screen bg-background">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-secondary border-b border-border z-40 flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/assets/Meeche&BoomCoLogo.png" alt="Meeche & Boom Co." className="h-8 w-auto" />
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-lg"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar - Desktop */}
        <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-secondary border-r border-border p-4 flex-col">
          <Link href="/" className="flex items-center gap-2 mb-8 px-2">
            <img src="/assets/Meeche&BoomCoLogo.png" alt="Meeche & Boom Co." className="h-10 w-auto" />
          </Link>

          <div className="flex-1 space-y-1 overflow-y-auto">
            {adminNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors mb-2">
              <Send className="w-5 h-5" />
              <span>View Site</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:text-red-400 hover:bg-white/5 transition-colors w-full"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>

        {/* Sidebar - Mobile */}
        <nav
          className={`lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-secondary border-r border-border p-4 flex-col z-50 transform transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2" onClick={() => setSidebarOpen(false)}>
              <img src="/assets/Meeche&BoomCoLogo.png" alt="Meeche & Boom Co." className="h-10 w-auto" />
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 space-y-1 overflow-y-auto">
            {adminNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <Link href="/" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors mb-2">
              <Send className="w-5 h-5" />
              <span>View Site</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:text-red-400 hover:bg-white/5 transition-colors w-full"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="lg:ml-64 pt-16 lg:pt-0 p-4 md:p-8">
          {children}
        </main>
      </div>
    </AdminContext.Provider>
  );
}
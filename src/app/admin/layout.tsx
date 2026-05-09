"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Sparkles, LogOut, Plus, Image, FileText, MessageSquare, Users, Tag, Settings, BarChart3, Send } from "lucide-react";

const adminNav = [
  { icon: BarChart3, label: "Dashboard", href: "/admin" },
  { icon: Plus, label: "Add Project", href: "/admin/projects/add" },
  { icon: Image, label: "Media", href: "/admin/media" },
  { icon: FileText, label: "Testimonials", href: "/admin/testimonials" },
  { icon: MessageSquare, label: "Messages", href: "/admin/messages" },
  { icon: Users, label: "Clients", href: "/admin/clients" },
  { icon: Tag, label: "Pricing", href: "/admin/pricing" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

const stats = [
  { label: "Total Projects", value: "18" },
  { label: "Testimonials", value: "6" },
  { label: "Messages", value: "0" },
  { label: "This Month", value: "0" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = document.cookie.includes("boominati_admin=");
      if (!token) {
        router.push("/admin/login");
      } else {
        setIsAuthenticated(true);
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  const handleLogout = () => {
    document.cookie = "boominati_admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed left-0 top-0 bottom-0 w-64 bg-secondary border-r border-border p-4 flex flex-col">
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
      
      <main className="ml-64 p-8">
        <div className="max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 glass rounded-xl">
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 glass rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
              <p className="text-muted">No messages yet</p>
            </div>
            
            <div className="p-6 glass rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Link href="/admin/projects/add" className="block p-3 bg-secondary rounded-lg hover:bg-white/5 transition-colors">
                  Add New Project
                </Link>
                <Link href="/admin/testimonials" className="block p-3 bg-secondary rounded-lg hover:bg-white/5 transition-colors">
                  Manage Testimonials
                </Link>
                <Link href="/admin/pricing" className="block p-3 bg-secondary rounded-lg hover:bg-white/5 transition-colors">
                  Update Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
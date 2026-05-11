"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Sparkles, Plus, FileText, BarChart3, MessageSquare, Tag, Loader2, DollarSign } from "lucide-react";

const stats = [
  { label: "Total Projects", value: "18", icon: Sparkles },
  { label: "Testimonials", value: "6", icon: FileText },
  { label: "Messages", value: "0", icon: MessageSquare },
  { label: "Pricing Packages", value: "3", icon: BarChart3 },
];

export default function AdminPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const cookies = document.cookie.split(";");
    const hasToken = cookies.some(c => c.trim().startsWith("boominati_admin="));
    if (!hasToken) {
      router.push("/admin/login");
    } else {
      setChecking(false);
    }
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pt-4 lg:pt-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4 md:p-6 glass rounded-xl">
            <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2 md:mb-4" />
            <p className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-muted text-xs md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <div className="p-4 md:p-6 glass rounded-xl">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Recent Messages</h2>
          <p className="text-muted text-sm md:text-base">No messages yet</p>
        </div>
        
        <div className="p-4 md:p-6 glass rounded-xl">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <Link href="/admin/projects/add" className="block p-3 bg-secondary rounded-lg hover:bg-white/5 transition-colors text-sm md:text-base">
              Add New Project
            </Link>
            <Link href="/admin/testimonials" className="block p-3 bg-secondary rounded-lg hover:bg-white/5 transition-colors text-sm md:text-base">
              Manage Testimonials
            </Link>
            <Link href="/admin/pricing" className="block p-3 bg-secondary rounded-lg hover:bg-white/5 transition-colors text-sm md:text-base">
              Update Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
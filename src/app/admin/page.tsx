"use client";

import Link from "next/link";
import { Sparkles, Plus, Image, FileText, Settings, Users, BarChart3, MessageSquare, Tag } from "lucide-react";

const adminNav = [
  { icon: Sparkles, label: "Dashboard", href: "/admin" },
  { icon: Plus, label: "Add Project", href: "/admin/projects/add" },
  { icon: Image, label: "Media", href: "/admin/media" },
  { icon: FileText, label: "Testimonials", href: "/admin/testimonials" },
  { icon: MessageSquare, label: "Messages", href: "/admin/messages" },
  { icon: Users, label: "Clients", href: "/admin/clients" },
  { icon: Tag, label: "Pricing", href: "/admin/pricing" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

const stats = [
  { label: "Total Projects", value: "18", icon: Sparkles },
  { label: "Testimonials", value: "6", icon: FileText },
  { label: "Messages", value: "0", icon: MessageSquare },
  { label: "This Month", value: "$0", icon: BarChart3 },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed left-0 top-0 bottom-0 w-64 bg-secondary border-r border-border p-4">
        <Link href="/" className="flex items-center gap-2 mb-8 px-2">
          <Sparkles className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-gradient">BOOMINATI</span>
        </Link>
        
        <div className="space-y-1">
          {adminNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
      
      <main className="ml-64 p-8">
        <div className="max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 glass rounded-xl">
                <stat.icon className="w-8 h-8 text-primary mb-4" />
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-muted text-sm">{stat.label}</p>
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
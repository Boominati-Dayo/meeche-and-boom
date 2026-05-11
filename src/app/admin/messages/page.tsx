"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Trash2, Reply, Check, Send } from "lucide-react";
import { useAdmin } from "../layout";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  repliedAt: string;
  createdAt: string;
}

export default function MessagesPage() {
  const { refreshKey, triggerRefresh } = useAdmin();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Contact | null>(null);
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, [refreshKey]);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/admin/contacts");
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async () => {
    if (!selected || !reply.trim()) return;
    setSending(true);
    try {
      await fetch(`/api/admin/contacts/${selected._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "replied",
          replyMessage: reply,
          sendEmail: true,
        }),
      });
      setContacts(contacts.map((c) => (c._id === selected._id ? { ...c, status: "replied" } : c)));
      setSelected(null);
      setReply("");
      setShowList(false);
      triggerRefresh();
    } catch (error) {
      console.error("Failed to send reply:", error);
    } finally {
      setSending(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await fetch(`/api/admin/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "read" }),
      });
      setContacts(contacts.map((c) => (c._id === id ? { ...c, status: "read" } : c)));
      triggerRefresh();
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    try {
      await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
      setContacts(contacts.filter((c) => c._id !== id));
      if (selected?._id === id) {
        setSelected(null);
        setShowList(false);
      }
      triggerRefresh();
    } catch (error) {
      console.error("Failed to delete contact:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-500/20 text-blue-400";
      case "read": return "bg-yellow-500/20 text-yellow-400";
      case "replied": return "bg-green-500/20 text-green-400";
      default: return "bg-secondary text-muted";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-muted">Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pt-4 lg:pt-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Messages</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Messages List - Mobile: Toggle or Always Show */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-sm md:text-base">All Messages ({contacts.length})</h2>
              <button
                onClick={() => setShowList(!showList)}
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
              >
                {showList ? "Hide" : "Show"} List
              </button>
            </div>
          </div>
          <div className="divide-y divide-border max-h-[60vh] overflow-y-auto">
            {contacts.map((contact) => (
              <div
                key={contact._id}
                onClick={() => {
                  setSelected(contact);
                  setShowList(true);
                }}
                className={`p-3 md:p-4 cursor-pointer hover:bg-white/5 transition-colors ${
                  selected?._id === contact._id ? "bg-white/10" : ""
                } ${contact.status === "new" ? "border-l-2 border-l-primary" : ""}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-sm truncate">{contact.name}</p>
                  <span className={`px-1.5 py-0.5 rounded text-xs ${getStatusColor(contact.status)}`}>
                    {contact.status}
                  </span>
                </div>
                <p className="text-xs text-muted truncate">{contact.message}</p>
                <p className="text-xs text-muted mt-1">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
            {contacts.length === 0 && (
              <div className="p-8 text-center text-muted">No messages yet</div>
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="glass rounded-xl overflow-hidden">
          {selected ? (
            <>
              <div className="p-3 md:p-4 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold text-sm md:text-base">Message Details</h2>
                <div className="flex gap-1">
                  {selected.status !== "read" && (
                    <button
                      onClick={() => markAsRead(selected._id)}
                      className="p-2 hover:bg-white/10 rounded-lg"
                      title="Mark as read"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(selected._id)}
                    className="p-2 hover:bg-white/10 rounded-lg text-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-4 md:p-6 space-y-4">
                <div>
                  <p className="text-xs md:text-sm text-muted">From</p>
                  <p className="font-medium text-sm md:text-base">{selected.name}</p>
                  <p className="text-xs md:text-sm text-muted">{selected.email}</p>
                  {selected.phone && <p className="text-xs md:text-sm text-muted">{selected.phone}</p>}
                </div>
                {selected.service && (
                  <div>
                    <p className="text-xs md:text-sm text-muted">Service</p>
                    <p className="text-sm md:text-base">{selected.service}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs md:text-sm text-muted">Message</p>
                  <p className="text-sm md:text-base whitespace-pre-wrap">{selected.message}</p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="text-xs md:text-sm text-muted mb-2">Reply</p>
                  <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none resize-none text-sm"
                    placeholder="Type your reply..."
                  />
                  <button
                    onClick={handleReply}
                    disabled={sending || !reply.trim()}
                    className="mt-2 flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg font-medium hover:bg-primary-light transition-colors disabled:opacity-50 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    {sending ? "Sending..." : "Send Reply"}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-48 md:h-64 text-muted text-sm md:text-base">
              Select a message to view
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
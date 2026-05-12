"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, XCircle, Sparkles, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(";");
    const hasToken = cookies.some((c) => c.trim().startsWith("boominati_admin="));
    if (hasToken) {
      router.push("/admin");
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const adminEmail = "meecheandboom@gmail.com";
    const adminPassword = "BOOMINATI100$";

    await new Promise(resolve => setTimeout(resolve, 500));

    if (email === adminEmail && password === adminPassword) {
      setSuccess(true);
      document.cookie = `boominati_admin=authenticated; path=/; max-age=${60*60*24}; SameSite=Strict`;
      setTimeout(() => {
        router.push("/admin");
      }, 500);
    } else {
      setError("Invalid email or password");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-6 sm:p-8 space-y-6 glass rounded-2xl"
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <p className="text-muted text-sm mt-2">Enter your credentials to access the dashboard</p>
        </div>
        
        {success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 p-3 bg-green-500/10 text-green-400 rounded-xl">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Login successful! Redirecting...</span>
          </motion.div>
        )}
        
        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 p-3 bg-red-500/10 text-red-400 rounded-xl">
            <XCircle className="w-5 h-5" />
            <span className="font-medium">{error}</span>
          </motion.div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading || success}
              className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-primary"
              placeholder="meecheandboom@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading || success}
                className="w-full px-4 py-3 pr-12 glass rounded-xl focus:outline-none focus:border-primary"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <motion.button 
            type="submit" 
            disabled={loading || success}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full py-4 bg-primary text-background rounded-xl font-semibold hover:bg-primary-light transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Logging in...
              </>
            ) : success ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Success!
              </>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
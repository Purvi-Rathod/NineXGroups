"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { validateAdminCredentials, setAdminAuthenticated } from "@/lib/admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!email.trim() || !password) {
      setError("Please enter email and password.");
      setLoading(false);
      return;
    }
    const valid = validateAdminCredentials(email, password);
    if (valid) {
      setAdminAuthenticated();
      router.replace("/admin/dashboard");
      return;
    }
    setError("Invalid email or password.");
    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-89px)] flex items-center justify-center p-4 ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#12D4FF] to-[#1959FA] flex items-center justify-center text-white font-bold text-xl mb-6">
          9X
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin sign in</h1>
        <p className="text-gray-500 text-sm mb-6">Use your admin credentials to access the dashboard.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@ninex-group.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              autoComplete="current-password"
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-medium text-white bg-gradient-to-r from-[#12D4FF] to-[#1959FA] hover:opacity-90 transition-opacity disabled:opacity-70"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

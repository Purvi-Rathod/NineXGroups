"use client";

import React, { useState, useEffect } from "react";
import { Mail, MapPin, Phone, Loader2, Save } from "lucide-react";
import type { ContactSettings } from "@/lib/s3-settings";

export default function ContactSettingsCard() {
  const [settings, setSettings] = useState<ContactSettings>({
    address: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    fetch("/api/admin/settings/contact")
      .then((r) => r.json())
      .then((data) =>
        setSettings({
          address: data.address ?? "",
          email: data.email ?? "",
          phone: data.phone ?? "",
        })
      )
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/settings/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (!res.ok) throw new Error("Failed to save");
      setMessage("success");
      setTimeout(() => setMessage(null), 3000);
    } catch {
      setMessage("error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="h-5 bg-gray-200 rounded w-1/2 mb-4 animate-pulse" />
        <div className="space-y-3">
          <div className="h-10 bg-gray-100 rounded" />
          <div className="h-10 bg-gray-100 rounded" />
          <div className="h-10 bg-gray-100 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="font-bold text-gray-800 mb-4">Get in touch / Contact details</h3>
      <p className="text-sm text-gray-500 mb-4">
        These appear in the footer and on the Contact Us page.
      </p>
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Address</label>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings((s) => ({ ...s, address: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none"
              placeholder="Office address"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings((s) => ({ ...s, email: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none"
              placeholder="contact@example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Phone</label>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              value={settings.phone}
              onChange={(e) => setSettings((s) => ({ ...s, phone: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none"
              placeholder="+1 234 567 8900"
            />
          </div>
        </div>
        {message === "success" && (
          <p className="text-sm text-green-600">Saved successfully.</p>
        )}
        {message === "error" && (
          <p className="text-sm text-red-600">Failed to save. Check storage (e.g. S3) is configured.</p>
        )}
        <button
          type="submit"
          disabled={saving}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1959FA] text-white rounded-lg font-medium hover:bg-[#1959FA]/90 disabled:opacity-70 transition-colors text-sm"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {saving ? "Saving…" : "Save contact details"}
        </button>
      </form>
    </div>
  );
}

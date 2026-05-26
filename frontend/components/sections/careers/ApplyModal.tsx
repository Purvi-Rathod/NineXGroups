"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import type { Job } from "@/lib/jobs/jobTypes";

interface ApplyModalProps {
  job: Job | null;
  onClose: () => void;
}

export default function ApplyModal({ job, onClose }: ApplyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job) return;
    setSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      let resumeUrl: string | undefined;
      if (resumeFile) {
        const formData = new FormData();
        formData.append("file", resumeFile);
        const uploadRes = await fetch("/api/blogs/upload", {
          method: "POST",
          body: formData,
        });
        const uploadData = await uploadRes.json();
        if (uploadData?.url) resumeUrl = uploadData.url;
      }

      const res = await fetch(`/api/jobs/${job.id}/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim() || undefined,
          resumeUrl,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application");
      }
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setResumeFile(null);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!job) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col"
        >
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Apply for this job</h2>
              <p className="text-sm text-gray-500 mt-0.5">{job.title} · {job.department}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Application submitted</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for applying. We will review your application and get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#1959FA] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMessage}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1959FA]/30 focus:border-[#1959FA] outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1959FA]/30 focus:border-[#1959FA] outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1959FA]/30 focus:border-[#1959FA] outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1959FA]/30 focus:border-[#1959FA] outline-none resize-none"
                    placeholder="Brief note or cover letter..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume (optional)</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#1959FA]/10 file:text-[#1959FA] file:font-medium"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 px-4 py-2.5 bg-[#1959FA] text-white rounded-xl font-medium hover:opacity-90 disabled:opacity-70 transition-opacity flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      "Submit application"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

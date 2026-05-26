"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAdmin } from "@/components/admin/AdminProvider";
import type { JobApplication } from "@/types/application";
import { Users, ExternalLink } from "lucide-react";

export default function RecentApplicationsTable() {
  const { jobs } = useAdmin();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/applications")
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => setApplications(Array.isArray(data) ? data : []))
      .catch(() => setApplications([]))
      .finally(() => setLoading(false));
  }, []);

  const jobTitleMap = new Map(jobs.map((j) => [j.id, j.title]));
  const recent = applications.slice(0, 8);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Users className="w-4 h-4 text-purple-500" />
          Recent Applications
        </h3>
        <Link
          href="/admin/jobs"
          className="text-sm text-blue-500 font-medium hover:text-blue-600"
        >
          View Jobs
        </Link>
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="px-6 py-8 flex items-center justify-center">
            <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full" />
          </div>
        ) : recent.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-500 text-sm">
            No applications yet.
          </div>
        ) : (
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-3">Applicant</th>
                <th className="px-6 py-3">Job</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recent.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{app.name}</div>
                    <div className="text-gray-500 text-xs">{app.email}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {jobTitleMap.get(app.jobId) ?? app.jobId}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        app.status === "new"
                          ? "bg-blue-50 text-blue-700"
                          : app.status === "shortlisted"
                            ? "bg-green-50 text-green-700"
                            : app.status === "rejected"
                              ? "bg-red-50 text-red-700"
                              : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {app.status ?? "new"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(app.submittedAt).toLocaleDateString("en-US")}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/admin/jobs/${app.jobId}`}
                      className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 font-medium"
                    >
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

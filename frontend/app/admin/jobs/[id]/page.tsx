"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import AdminHeader from "@/components/admin/layout/AdminHeader";
import type { JobPost } from "@/types/admin";
import type { JobApplication } from "@/types/application";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  FileText,
  Users,
} from "lucide-react";

export default function AdminJobDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [job, setJob] = useState<JobPost | null>(null);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    Promise.all([
      fetch(`/api/admin/jobs/${id}`).then((r) => (r.ok ? r.json() : null)),
      fetch(`/api/admin/applications?jobId=${id}`).then((r) =>
        r.ok ? r.json() : []
      ),
    ])
      .then(([jobData, appData]) => {
        setJob(jobData ?? null);
        setApplications(Array.isArray(appData) ? appData : []);
      })
      .catch(() => setJob(null))
      .finally(() => setLoading(false));
  }, [id]);

  const updateStatus = async (applicationId: string, status: string) => {
    setUpdatingId(applicationId);
    try {
      const res = await fetch(`/api/admin/applications/${applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setApplications((prev) =>
          prev.map((a) =>
            a.id === applicationId ? { ...a, status: status as JobApplication["status"] } : a
          )
        );
      }
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) {
    return (
      <>
        <AdminHeader title="Job Details" />
        <div className="p-4 sm:p-6 lg:p-8 flex items-center justify-center min-h-[400px]">
          <div className="animate-spin w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full" />
        </div>
      </>
    );
  }

  if (!job) {
    return (
      <>
        <AdminHeader title="Job Not Found" />
        <div className="p-4 sm:p-6 lg:p-8">
          <p className="text-gray-600">Job not found.</p>
          <Link
            href="/admin/jobs"
            className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminHeader title="Job Details" />
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
        {/* Back + Edit */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/admin/jobs"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </Link>
          <Link
            href={`/admin/jobs/${id}/edit`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Edit Job
          </Link>
        </div>

        {/* Job summary card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h1 className="text-xl font-bold text-gray-900">{job.title}</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {job.department} · {job.category}
            </p>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>{job.location?.city}, {job.location?.country}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-4 h-4 text-gray-400" />
              <span>{job.workMode} · {job.employmentType}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>Posted {new Date(job.postedAt).toLocaleDateString("en-US")}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4 text-gray-400" />
              <span>{job.applicationCount ?? 0} application{(job.applicationCount ?? 0) !== 1 ? "s" : ""}</span>
            </div>
          </div>
          {job.summary && (
            <div className="px-6 pb-6">
              <p className="text-gray-600 text-sm">{job.summary}</p>
            </div>
          )}
        </div>

        {/* Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Applications</h2>
            <span className="text-sm text-gray-500">{applications.length} total</span>
          </div>
          <div className="overflow-x-auto">
            {applications.length === 0 ? (
              <div className="px-6 py-12 text-center text-gray-500">
                <Users className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <p>No applications yet for this job.</p>
                <p className="text-sm mt-1">They will appear here when candidates apply from the careers page.</p>
              </div>
            ) : (
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Phone</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Resume</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">{app.name}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`mailto:${app.email}`}
                          className="text-blue-600 hover:underline inline-flex items-center gap-1"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          {app.email}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`tel:${app.phone}`}
                          className="text-gray-600 hover:underline inline-flex items-center gap-1"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          {app.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {new Date(app.submittedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-6 py-4">
                        {app.resumeUrl ? (
                          <a
                            href={app.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            View
                          </a>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={app.status ?? "new"}
                          onChange={(e) => updateStatus(app.id, e.target.value)}
                          disabled={updatingId === app.id}
                          className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none disabled:opacity-60"
                        >
                          <option value="new">New</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


"use client";

import React from 'react';
import Link from 'next/link';
import { Eye, Edit2 } from 'lucide-react';
import { JobPost } from '@/types/admin';

export default function RecentJobsTable({ jobs }: { jobs: JobPost[] }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-800">Recent Job Posts</h3>
                <Link href="/admin/jobs" className="text-sm text-blue-500 font-medium hover:text-blue-600">
                    View All
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-3">Job Title</th>
                            <th className="px-6 py-3">Department</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Posted Date</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {jobs.slice(0, 5).map((job) => (
                            <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">{job.title}</td>
                                <td className="px-6 py-4 text-gray-500">{job.department}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${job.status === 'Published' ? 'bg-green-50 text-green-700' :
                                        job.status === 'Draft' ? 'bg-yellow-50 text-yellow-700' :
                                            'bg-gray-100 text-gray-600'
                                        }`}>
                                        {job.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500">{new Date(job.postedAt).toLocaleDateString('en-US')}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link href={`/admin/jobs/${job.id}`} className="text-gray-400 hover:text-blue-500 p-1">
                                            <Eye className="w-4 h-4" />
                                        </Link>
                                        <Link href={`/admin/jobs/${job.id}/edit`} className="text-gray-400 hover:text-blue-500 p-1">
                                            <Edit2 className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

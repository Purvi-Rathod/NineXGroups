"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { JobPost } from '@/types/admin';
import { Eye, Edit2, Trash2, CheckCircle } from 'lucide-react';
import { useAdmin } from '@/components/admin/AdminProvider';

export default function JobsDataTable({ jobs }: { jobs: JobPost[] }) {
    const { deleteJob } = useAdmin();
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredJobs = jobs.filter(job => {
        const matchesStatus = filterStatus === 'All' || job.status === filterStatus;
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.department.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this job?')) return;
        try {
            await deleteJob(id);
        } catch {
            // Error already surfaced or refresh will show state
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Filters Toolbar */}
            <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    {['All', 'Published', 'Draft', 'Closed'].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filterStatus === status
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        className="pl-4 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-3">Job Title</th>
                            <th className="px-6 py-3">Location</th>
                            <th className="px-6 py-3">Type</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Applications</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <tr key={job.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{job.title}</p>
                                        <p className="text-xs text-gray-500">{job.department}</p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {job.location.city}, {job.location.country}
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        <span className="block">{job.employmentType}</span>
                                        <span className="text-xs text-gray-400">{job.workMode}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${job.status === 'Published' ? 'bg-green-50 text-green-700' :
                                            job.status === 'Draft' ? 'bg-yellow-50 text-yellow-700' :
                                                'bg-gray-100 text-gray-600'
                                            }`}>
                                            {job.status === 'Published' && <CheckCircle className="w-3 h-3" />}
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link
                                            href={`/admin/jobs/${job.id}`}
                                            className="font-medium text-blue-600 hover:underline"
                                        >
                                            {job.applicationCount}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 text-xs">
                                        Posted: {new Date(job.postedAt).toLocaleDateString('en-US')}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link href={`/admin/jobs/${job.id}`} className="text-gray-400 hover:text-blue-500 p-1" title="View">
                                                <Eye className="w-4 h-4" />
                                            </Link>
                                            <Link href={`/admin/jobs/${job.id}/edit`} className="text-gray-400 hover:text-blue-500 p-1" title="Edit">
                                                <Edit2 className="w-4 h-4" />
                                            </Link>
                                            <button onClick={() => handleDelete(job.id)} className="text-gray-400 hover:text-red-500 p-1" title="Delete">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                                    No jobs found matching your filters.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer (Mock) */}
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                <p>Showing {filteredJobs.length} results</p>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
                </div>
            </div>
        </div>
    );
}

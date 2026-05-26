"use client";

import React from 'react';
import { useAdmin } from '@/components/admin/AdminProvider';
import AdminHeader from '@/components/admin/layout/AdminHeader';
import JobsDataTable from '@/components/admin/jobs/JobsDataTable';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function AdminJobsPage() {
    const { jobs, jobsLoading } = useAdmin();

    return (
        <>
            <AdminHeader title="Manage Jobs" />
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Job Listings</h2>
                        <p className="text-sm text-gray-500">Manage, edit, and publish job opportunities.</p>
                    </div>
                    <Link
                        href="/admin/jobs/create"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm"
                    >
                        <Plus className="w-4 h-4" />
                        Create New Job
                    </Link>
                </div>

                {jobsLoading ? (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 flex items-center justify-center">
                        <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full" />
                    </div>
                ) : (
                    <JobsDataTable jobs={jobs} />
                )}
            </div>
        </>
    );
}

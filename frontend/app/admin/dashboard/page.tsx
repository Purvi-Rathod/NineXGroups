"use client";

import React from 'react';
import Link from 'next/link';
import { useAdmin } from '@/components/admin/AdminProvider';
import AdminHeader from '@/components/admin/layout/AdminHeader';
import StatsCard from '@/components/admin/dashboard/StatsCard';
import RecentJobsTable from '@/components/admin/dashboard/RecentJobsTable';
import RecentApplicationsTable from '@/components/admin/dashboard/RecentApplicationsTable';
import ContactSettingsCard from '@/components/admin/dashboard/ContactSettingsCard';
import { FileText, CheckCircle, XCircle, Users } from 'lucide-react';

export default function AdminDashboardPage() {
    const { stats, jobs } = useAdmin();

    return (
        <>
            <AdminHeader title="Dashboard" />
            <div className="p-4 sm:p-6 lg:p-8 space-y-8">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatsCard
                        title="Total Active Jobs"
                        value={stats.activeJobs}
                        icon={CheckCircle}
                        color="bg-green-500"
                        trend="12%"
                        trendUp={true}
                    />
                    <StatsCard
                        title="Total Applications"
                        value={stats.totalApplications}
                        icon={Users}
                        color="bg-purple-500"
                        trend="5%"
                        trendUp={true}
                    />
                    <StatsCard
                        title="Draft Jobs"
                        value={stats.draftJobs}
                        icon={FileText}
                        color="bg-yellow-500"
                    />
                    <StatsCard
                        title="Closed Jobs"
                        value={stats.closedJobs}
                        icon={XCircle}
                        color="bg-gray-500"
                    />
                </div>

                {/* content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <RecentJobsTable jobs={jobs} />
                        <RecentApplicationsTable />
                    </div>

                    {/* Side Column (Activity Feed or Quick Actions) */}
                    <div className="space-y-6">
                        <ContactSettingsCard />

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <Link
                                    href="/admin/jobs/create"
                                    className="w-full flex items-center justify-center py-3 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                                >
                                    Create New Job Post
                                </Link>
                                <button className="w-full flex items-center justify-center py-3 px-4 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                    Export Candidates
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#12D4FF]/10 to-[#1959FA]/10 rounded-xl p-6 border border-blue-100">
                            <h4 className="font-bold text-blue-900 mb-2">Pro Tip</h4>
                            <p className="text-sm text-blue-800">
                                Complete your company profile to attract 2x more candidates. Add photos, culture values, and team details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import JobForm from '@/components/admin/jobs/JobForm';
import { useAdmin } from '@/components/admin/AdminProvider';


export default function EditJobPage() {
    const params = useParams();
    const router = useRouter();
    const { getJob } = useAdmin();
    const id = params.id as string;
    const job = getJob(id);

    if (!job) {
        // In a real app we might fetch from SWR/React Query here.
        // Since it's context, if not found, it might mean we are waiting or it doesn't exist.
        // For this prototype, we'll assume if context is loaded and it's not there, it's 404.
        // But since context loads instantly, it's just a check.
        return (
            <div className="flex flex-col items-center justify-center p-12">
                <h2 className="text-xl font-bold text-gray-800">Job Not Found</h2>
                <button onClick={() => router.push('/admin/jobs')} className="text-blue-500 hover:underline mt-2">
                    Back to Jobs
                </button>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            <JobForm initialData={job} isEditing={true} />
        </div>
    );
}

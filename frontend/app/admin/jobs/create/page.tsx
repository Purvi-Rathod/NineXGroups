"use client";

import React from 'react';
import JobForm from '@/components/admin/jobs/JobForm';

export default function CreateJobPage() {
    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            <JobForm />
        </div>
    );
}

"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { JobPost, AdminStats, AdminUser } from '@/types/admin';

interface AdminContextType {
    jobs: JobPost[];
    stats: AdminStats;
    user: AdminUser;
    jobsLoading: boolean;
    refreshJobs: () => Promise<void>;
    addJob: (job: Omit<JobPost, 'id' | 'postedAt' | 'updatedAt' | 'applicationCount' | 'views'>) => Promise<void>;
    updateJob: (id: string, job: Partial<JobPost>) => Promise<void>;
    deleteJob: (id: string) => Promise<void>;
    getJob: (id: string) => JobPost | undefined;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const [jobs, setJobs] = useState<JobPost[]>([]);
    const [jobsLoading, setJobsLoading] = useState(true);
    const [stats, setStats] = useState<AdminStats>({
        totalJobs: 0,
        activeJobs: 0,
        draftJobs: 0,
        closedJobs: 0,
        totalApplications: 0,
    });

    const [user] = useState<AdminUser>({
        id: 'u1',
        name: 'Admin User',
        email: 'admin@ninex-group.com',
        role: 'Super Admin',
    });

    const refreshJobs = useCallback(async () => {
        setJobsLoading(true);
        try {
            const res = await fetch('/api/admin/jobs');
            const data = await res.json();
            setJobs(Array.isArray(data) ? data : []);
        } catch {
            setJobs([]);
        } finally {
            setJobsLoading(false);
        }
    }, []);

    useEffect(() => {
        refreshJobs();
    }, [refreshJobs]);

    useEffect(() => {
        setStats({
            totalJobs: jobs.length,
            activeJobs: jobs.filter(j => j.status === 'Published').length,
            draftJobs: jobs.filter(j => j.status === 'Draft').length,
            closedJobs: jobs.filter(j => j.status === 'Closed').length,
            totalApplications: jobs.reduce((acc, job) => acc + job.applicationCount, 0),
        });
    }, [jobs]);

    const addJob = useCallback(async (newJobData: Omit<JobPost, 'id' | 'postedAt' | 'updatedAt' | 'applicationCount' | 'views'>) => {
        const res = await fetch('/api/admin/jobs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newJobData),
        });
        if (!res.ok) throw new Error('Failed to create job');
        await refreshJobs();
    }, [refreshJobs]);

    const updateJob = useCallback(async (id: string, updatedData: Partial<JobPost>) => {
        const res = await fetch(`/api/admin/jobs/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        });
        if (!res.ok) throw new Error('Failed to update job');
        await refreshJobs();
    }, [refreshJobs]);

    const deleteJob = useCallback(async (id: string) => {
        const res = await fetch(`/api/admin/jobs/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete job');
        await refreshJobs();
    }, [refreshJobs]);

    const getJob = (id: string) => jobs.find(j => j.id === id);

    return (
        <AdminContext.Provider value={{ jobs, stats, user, jobsLoading, refreshJobs, addJob, updateJob, deleteJob, getJob }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};

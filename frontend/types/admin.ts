export type JobStatus = 'Draft' | 'Published' | 'Closed';
export type WorkMode = 'Remote' | 'Hybrid' | 'Onsite';
export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

export interface Location {
    city: string;
    country: string;
    latitude?: number;
    longitude?: number;
    address?: string;
}

export interface SalaryRange {
    min: number;
    max: number;
    currency: string;
    period: 'Yearly' | 'Monthly' | 'Hourly';
}

export interface JobPost {
    id: string;
    title: string;
    department: string;
    category: string;
    location: Location;
    workMode: WorkMode;
    employmentType: EmploymentType;
    experienceRange: {
        min: number;
        max: number;
    };
    salary: SalaryRange;
    summary: string;
    description: string; // Rich text or HTML
    responsibilities: string[];
    requirements: string[];
    skills: string[];
    status: JobStatus;
    postedAt: string;
    updatedAt: string;
    applicationCount: number;
    views: number;
}

export interface AdminStats {
    totalJobs: number;
    activeJobs: number;
    draftJobs: number;
    closedJobs: number;
    totalApplications: number;
}

// User interface for the admin context
export interface AdminUser {
    id: string;
    name: string;
    email: string;
    role: 'Super Admin' | 'HR Admin' | 'Recruiter';
    avatar?: string;
}

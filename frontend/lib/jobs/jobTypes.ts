// Job-related TypeScript types and interfaces

export type WorkMode = 'remote' | 'hybrid' | 'onsite';
export type EmploymentType = 'full-time' | 'part-time' | 'contract';

export type JobCategory =
    | 'engineering'
    | 'marketing'
    | 'operations'
    | 'customer-support'
    | 'design'
    | 'sales'
    | 'hr'
    | 'finance';

export interface JobLocation {
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
}

export interface Job {
    id: string;
    title: string;
    department: string;
    category: JobCategory;
    location: JobLocation;
    workMode: WorkMode;
    employmentType: EmploymentType;
    description: string;
    postedDate: string;
    salary?: {
        min: number;
        max: number;
        currency: string;
    };
    /** Full HTML description (used on detail page) */
    descriptionHtml?: string;
    skills?: string[];
    responsibilities?: string[];
    requirements?: string[];
}

export interface JobFilters {
    keyword: string;
    location: string;
    distance: number;
    categories: JobCategory[];
    workModes: WorkMode[];
    employmentTypes: EmploymentType[];
}

export const defaultFilters: JobFilters = {
    keyword: '',
    location: '',
    distance: 25,
    categories: [],
    workModes: [],
    employmentTypes: [],
};

export const distanceOptions = [1, 5, 10, 25, 50, 100];

export const categoryLabels: Record<JobCategory, string> = {
    'engineering': 'Engineering & Technology',
    'marketing': 'Marketing & Brand',
    'operations': 'Operations',
    'customer-support': 'Customer Support',
    'design': 'Design & Creative',
    'sales': 'Sales',
    'hr': 'Human Resources',
    'finance': 'Finance & Accounting',
};

export const workModeLabels: Record<WorkMode, string> = {
    'remote': 'Remote',
    'hybrid': 'Hybrid',
    'onsite': 'Onsite',
};

export const employmentTypeLabels: Record<EmploymentType, string> = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    'contract': 'Contract',
};

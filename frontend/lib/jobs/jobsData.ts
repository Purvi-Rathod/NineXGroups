// Mock job data for the Find A Job page
import { Job } from './jobTypes';

export const mockJobs: Job[] = [
    {
        id: 'job-001',
        title: 'Senior Full Stack Developer',
        department: 'NineXDevOps',
        category: 'engineering',
        location: {
            city: 'Mumbai',
            state: 'Maharashtra',
            country: 'India',
            latitude: 19.0760,
            longitude: 72.8777,
        },
        workMode: 'hybrid',
        employmentType: 'full-time',
        description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
        postedDate: '2026-01-10',
        salary: { min: 1500000, max: 2500000, currency: 'INR' },
    },
    {
        id: 'job-002',
        title: 'Digital Marketing Manager',
        department: 'NineXFold',
        category: 'marketing',
        location: {
            city: 'Bangalore',
            state: 'Karnataka',
            country: 'India',
            latitude: 12.9716,
            longitude: 77.5946,
        },
        workMode: 'remote',
        employmentType: 'full-time',
        description: 'Lead our digital marketing initiatives including SEO, SEM, and social media campaigns.',
        postedDate: '2026-01-08',
        salary: { min: 1200000, max: 1800000, currency: 'INR' },
    },
    {
        id: 'job-003',
        title: 'Customer Success Specialist',
        department: 'NineXConnect',
        category: 'customer-support',
        location: {
            city: 'Delhi',
            state: 'Delhi',
            country: 'India',
            latitude: 28.6139,
            longitude: 77.2090,
        },
        workMode: 'onsite',
        employmentType: 'full-time',
        description: 'Ensure customer satisfaction and drive retention through excellent support and relationship management.',
        postedDate: '2026-01-12',
    },
    {
        id: 'job-004',
        title: 'UI/UX Designer',
        department: 'NineXFold',
        category: 'design',
        location: {
            city: 'Pune',
            state: 'Maharashtra',
            country: 'India',
            latitude: 18.5204,
            longitude: 73.8567,
        },
        workMode: 'hybrid',
        employmentType: 'full-time',
        description: 'Create stunning user experiences for web and mobile applications with a focus on usability.',
        postedDate: '2026-01-09',
        salary: { min: 800000, max: 1400000, currency: 'INR' },
    },
    {
        id: 'job-005',
        title: 'DevOps Engineer',
        department: 'NineXDevOps',
        category: 'engineering',
        location: {
            city: 'Hyderabad',
            state: 'Telangana',
            country: 'India',
            latitude: 17.3850,
            longitude: 78.4867,
        },
        workMode: 'remote',
        employmentType: 'full-time',
        description: 'Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability.',
        postedDate: '2026-01-11',
        salary: { min: 1400000, max: 2200000, currency: 'INR' },
    },
    {
        id: 'job-006',
        title: 'Business Development Executive',
        department: 'NineXScale',
        category: 'sales',
        location: {
            city: 'Chennai',
            state: 'Tamil Nadu',
            country: 'India',
            latitude: 13.0827,
            longitude: 80.2707,
        },
        workMode: 'hybrid',
        employmentType: 'full-time',
        description: 'Drive new business acquisition and build strategic partnerships to expand our market presence.',
        postedDate: '2026-01-07',
    },
    {
        id: 'job-007',
        title: 'Content Writer',
        department: 'NineXFold',
        category: 'marketing',
        location: {
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'India',
            latitude: 22.7196,
            longitude: 75.8577,
        },
        workMode: 'remote',
        employmentType: 'part-time',
        description: 'Create compelling content for blogs, social media, and marketing collaterals.',
        postedDate: '2026-01-05',
        salary: { min: 400000, max: 600000, currency: 'INR' },
    },
    {
        id: 'job-008',
        title: 'HR Coordinator',
        department: 'NineXFold',
        category: 'hr',
        location: {
            city: 'Mumbai',
            state: 'Maharashtra',
            country: 'India',
            latitude: 19.0760,
            longitude: 72.8777,
        },
        workMode: 'onsite',
        employmentType: 'full-time',
        description: 'Support HR operations including recruitment, onboarding, and employee engagement initiatives.',
        postedDate: '2026-01-06',
    },
    {
        id: 'job-009',
        title: 'Mobile App Developer',
        department: 'NineXDevOps',
        category: 'engineering',
        location: {
            city: 'Bangalore',
            state: 'Karnataka',
            country: 'India',
            latitude: 12.9716,
            longitude: 77.5946,
        },
        workMode: 'hybrid',
        employmentType: 'full-time',
        description: 'Develop cross-platform mobile applications using React Native and Flutter.',
        postedDate: '2026-01-13',
        salary: { min: 1200000, max: 2000000, currency: 'INR' },
    },
    {
        id: 'job-010',
        title: 'Technical Support Analyst',
        department: 'NineXConnect',
        category: 'customer-support',
        location: {
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'India',
            latitude: 22.7196,
            longitude: 75.8577,
        },
        workMode: 'onsite',
        employmentType: 'contract',
        description: 'Provide technical assistance to customers and resolve complex product issues.',
        postedDate: '2026-01-04',
    },
    {
        id: 'job-011',
        title: 'Financial Analyst',
        department: 'NineXScale',
        category: 'finance',
        location: {
            city: 'Delhi',
            state: 'Delhi',
            country: 'India',
            latitude: 28.6139,
            longitude: 77.2090,
        },
        workMode: 'hybrid',
        employmentType: 'full-time',
        description: 'Analyze financial data, prepare reports, and support strategic decision-making.',
        postedDate: '2026-01-03',
        salary: { min: 1000000, max: 1600000, currency: 'INR' },
    },
    {
        id: 'job-012',
        title: 'Operations Manager',
        department: 'NineXScale',
        category: 'operations',
        location: {
            city: 'Pune',
            state: 'Maharashtra',
            country: 'India',
            latitude: 18.5204,
            longitude: 73.8567,
        },
        workMode: 'onsite',
        employmentType: 'full-time',
        description: 'Oversee daily operations, optimize processes, and lead cross-functional teams.',
        postedDate: '2026-01-02',
        salary: { min: 1800000, max: 2800000, currency: 'INR' },
    },
];

// Helper function to filter jobs based on criteria
export function filterJobs(jobs: Job[], filters: Partial<{
    keyword: string;
    location: string;
    categories: string[];
    workModes: string[];
    employmentTypes: string[];
}>): Job[] {
    return jobs.filter(job => {
        // Keyword filter (matches title or department)
        if (filters.keyword && filters.keyword.trim()) {
            const keyword = filters.keyword.toLowerCase();
            const matchesTitle = job.title.toLowerCase().includes(keyword);
            const matchesDept = job.department.toLowerCase().includes(keyword);
            const matchesDesc = job.description.toLowerCase().includes(keyword);
            if (!matchesTitle && !matchesDept && !matchesDesc) return false;
        }

        // Location filter (matches city, state, or country)
        if (filters.location && filters.location.trim()) {
            const location = filters.location.toLowerCase();
            const matchesCity = job.location.city.toLowerCase().includes(location);
            const matchesState = job.location.state.toLowerCase().includes(location);
            const matchesCountry = job.location.country.toLowerCase().includes(location);
            if (!matchesCity && !matchesState && !matchesCountry) return false;
        }

        // Category filter
        if (filters.categories && filters.categories.length > 0) {
            if (!filters.categories.includes(job.category)) return false;
        }

        // Work mode filter
        if (filters.workModes && filters.workModes.length > 0) {
            if (!filters.workModes.includes(job.workMode)) return false;
        }

        // Employment type filter
        if (filters.employmentTypes && filters.employmentTypes.length > 0) {
            if (!filters.employmentTypes.includes(job.employmentType)) return false;
        }

        return true;
    });
}

// Get unique cities from jobs
export function getUniqueCities(jobs: Job[]): string[] {
    const cities = new Set(jobs.map(job => job.location.city));
    return Array.from(cities).sort();
}

// Get all categories used in jobs
export function getUsedCategories(jobs: Job[]): string[] {
    const categories = new Set(jobs.map(job => job.category));
    return Array.from(categories).sort();
}

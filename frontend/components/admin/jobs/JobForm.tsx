"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { JobPost } from '@/types/admin';
import { useAdmin } from '@/components/admin/AdminProvider';
import { Eye, ArrowLeft, Loader2 } from 'lucide-react';
import JobPreviewModal from './JobPreviewModal';

interface JobFormProps {
    initialData?: JobPost;
    isEditing?: boolean;
}

const EMPTY_JOB: Omit<JobPost, 'id' | 'postedAt' | 'updatedAt' | 'applicationCount' | 'views'> = {
    title: '',
    department: '',
    category: '',
    location: { city: '', country: '', latitude: 0, longitude: 0 },
    workMode: 'Onsite',
    employmentType: 'Full-time',
    experienceRange: { min: 0, max: 0 },
    salary: { min: 0, max: 0, currency: 'INR', period: 'Yearly' },
    summary: '',
    description: '',
    responsibilities: [],
    requirements: [],
    skills: [],
    status: 'Draft',
};

export default function JobForm({ initialData, isEditing = false }: JobFormProps) {
    const router = useRouter();
    const { addJob, updateJob } = useAdmin();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<JobPost>(initialData || (EMPTY_JOB as JobPost));
    const [newSkill, setNewSkill] = useState('');
    const [showPreview, setShowPreview] = useState(false);

    const handleChange = (field: keyof JobPost, value: string | number | boolean) => {
        setFormData((prev: JobPost) => ({ ...prev, [field]: value }));
    };

    const handleNestedChange = (parent: keyof JobPost, field: string, value: string | number) => {
        setFormData((prev: JobPost) => ({
            ...prev,
            [parent]: { ...(prev[parent as keyof JobPost] as object), [field]: value }
        }));
    };

    const handleArrayAdd = (field: 'skills' | 'responsibilities' | 'requirements', value: string) => {
        if (!value.trim()) return;
        setFormData((prev: JobPost) => ({
            ...prev,
            [field]: [...(prev[field as keyof JobPost] as string[]), value]
        }));
        if (field === 'skills') setNewSkill('');
    };

    const handleArrayRemove = (field: 'skills' | 'responsibilities' | 'requirements', index: number) => {
        setFormData((prev: JobPost) => ({
            ...prev,
            [field]: (prev[field as keyof JobPost] as string[]).filter((_: string, i: number) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isEditing && initialData) {
                await updateJob(initialData.id, formData);
            } else {
                await addJob(formData);
            }
            router.push('/admin/jobs');
        } catch {
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Header Actions */}
                <div className="flex items-center justify-between sticky top-16 bg-gray-50 py-4 z-30">
                    <div className="flex items-center gap-4">
                        <button type="button" onClick={() => router.back()} className="p-2 hover:bg-gray-200 rounded-full text-gray-500">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h2 className="text-xl font-bold text-gray-900">{isEditing ? 'Edit Job' : 'Create New Job'}</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setShowPreview(true)}
                            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center gap-2"
                        >
                            <Eye className="w-4 h-4" /> Preview
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 shadow-md flex items-center gap-2 disabled:opacity-70"
                        >
                            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                            {isEditing ? 'Save Changes' : 'Create Job'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Basic Info */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                            <h3 className="font-bold text-gray-800 text-lg border-b border-gray-100 pb-3">Basic Information</h3>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none"
                                        value={formData.title}
                                        onChange={(e) => handleChange('title', e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none"
                                        value={formData.department}
                                        onChange={(e) => handleChange('department', e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none bg-white"
                                        value={formData.category}
                                        onChange={(e) => handleChange('category', e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Design">Design</option>
                                        <option value="Product">Product</option>
                                        <option value="Sales">Sales</option>
                                        <option value="Marketing">Marketing</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                            <h3 className="font-bold text-gray-800 text-lg border-b border-gray-100 pb-3">Job Description</h3>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Short Summary (for cards)</label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none h-24"
                                    value={formData.summary}
                                    onChange={(e) => handleChange('summary', e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Description (HTML Supported)</label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none h-64 font-mono text-sm"
                                    value={formData.description}
                                    onChange={(e) => handleChange('description', e.target.value)}
                                    placeholder="<p>Enter detailed description...</p>"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Controls */}
                    <div className="space-y-6">
                        {/* Status */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                            <h3 className="font-bold text-gray-800 text-lg">Status</h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Publish Status</label>
                                <select
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none bg-white"
                                    value={formData.status}
                                    onChange={(e) => handleChange('status', e.target.value)}
                                >
                                    <option value="Draft">Draft</option>
                                    <option value="Published">Published</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                            <h3 className="font-bold text-gray-800 text-lg">Location</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">City</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                        value={formData.location.city}
                                        onChange={(e) => handleNestedChange('location', 'city', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">Country</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                        value={formData.location.country}
                                        onChange={(e) => handleNestedChange('location', 'country', e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Latitude</label>
                                        <input
                                            type="number"
                                            step="0.0001"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                            value={formData.location.latitude}
                                            onChange={(e) => handleNestedChange('location', 'latitude', parseFloat(e.target.value))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Longitude</label>
                                        <input
                                            type="number"
                                            step="0.0001"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                            value={formData.location.longitude}
                                            onChange={(e) => handleNestedChange('location', 'longitude', parseFloat(e.target.value))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Work Details */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                            <h3 className="font-bold text-gray-800 text-lg">Work Details</h3>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Work Mode</label>
                                <div className="flex gap-2">
                                    {['Remote', 'Hybrid', 'Onsite'].map(mode => (
                                        <button
                                            key={mode}
                                            type="button"
                                            onClick={() => handleChange('workMode', mode)}
                                            className={`flex-1 py-1.5 text-xs font-medium rounded-md border ${formData.workMode === mode
                                                ? 'bg-blue-50 border-blue-500 text-blue-700'
                                                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                                                }`}
                                        >
                                            {mode}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Employment</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none bg-white"
                                    value={formData.employmentType}
                                    onChange={(e) => handleChange('employmentType', e.target.value)}
                                >
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range ({formData.salary.currency})</label>
                                <div className="flex gap-2 items-center">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                        value={formData.salary.min}
                                        onChange={(e) => handleNestedChange('salary', 'min', parseInt(e.target.value))}
                                    />
                                    <span className="text-gray-400">-</span>
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                        value={formData.salary.max}
                                        onChange={(e) => handleNestedChange('salary', 'max', parseInt(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                            <h3 className="font-bold text-gray-800 text-lg">Skills</h3>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Add skill..."
                                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleArrayAdd('skills', newSkill))}
                                />
                                <button
                                    type="button"
                                    onClick={() => handleArrayAdd('skills', newSkill)}
                                    className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.skills.map((skill: string, i: number) => (
                                    <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                                        {skill}
                                        <button type="button" onClick={() => handleArrayRemove('skills', i)} className="hover:text-blue-900">×</button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <JobPreviewModal
                isOpen={showPreview}
                onClose={() => setShowPreview(false)}
                job={{ ...formData, id: 'preview', postedAt: new Date().toISOString() }}
            />
        </>
    );
}

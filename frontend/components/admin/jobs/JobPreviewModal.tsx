import React from 'react';
import { JobPost } from '@/types/admin';
import { X, MapPin, Briefcase, Clock } from 'lucide-react';

interface JobPreviewModalProps {
    job: JobPost;
    isOpen: boolean;
    onClose: () => void;
}

export default function JobPreviewModal({ job, isOpen, onClose }: JobPreviewModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="font-bold text-gray-800">Preview Mode</h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full text-gray-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-8 bg-gray-50 flex justify-center">
                    {/* The Job Card Preview */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full max-w-lg hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{job.department}</p>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                            </div>
                            {isRecent(job.postedAt) && (
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">New</span>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-600 mb-6">
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span>{job.location.city}, {job.location.country}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Briefcase className="w-4 h-4 text-gray-400" />
                                <span>{job.workMode}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-gray-400" />
                                <span>{job.employmentType}</span>
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                            {job.summary || "No summary provided."}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                            <div>
                                <p className="text-xs text-gray-400 mb-0.5">Salary Range</p>
                                <p className="font-bold text-gray-900">
                                    {formatSalary(job.salary.min)} - {formatSalary(job.salary.max)}
                                </p>
                            </div>
                            <button className="px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium text-sm hover:bg-blue-600 transition-colors">
                                View Job
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-400">
                    This is a preview of how the job card will appear on the &quot;Find a Job&quot; page.
                </div>
            </div>
        </div>
    );
}

function isRecent(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
}

function formatSalary(amount: number) {
    if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${amount.toLocaleString()}`;
}

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
    color?: string;
}

export default function StatsCard({ title, value, icon: Icon, trend, trendUp, color = 'bg-blue-500' }: StatsCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                {trend && (
                    <p className={`text-xs font-medium mt-2 flex items-center ${trendUp ? 'text-green-600' : 'text-red-500'}`}>
                        {trendUp ? '↑' : '↓'} {trend}
                        <span className="text-gray-400 ml-1">vs last month</span>
                    </p>
                )}
            </div>
            <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
                <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
            </div>
        </div>
    );
}

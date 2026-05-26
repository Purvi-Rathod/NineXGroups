"use client";

import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

export default function AdminHeader({ title }: { title: string }) {
    return (
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-40">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Button - Visible only on mobile */}
                <button className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                    <Menu className="w-5 h-5" />
                </button>

                <h1 className="text-xl font-bold text-gray-800 font-manrope">{title}</h1>
            </div>

            <div className="flex items-center gap-4">
                {/* Search Bar - Hidden on small mobile */}
                <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 w-64 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                    <Search className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none text-sm w-full text-gray-600 placeholder:text-gray-400"
                    />
                </div>

                {/* Notifications */}
                <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
                </button>
            </div>
        </header>
    );
}

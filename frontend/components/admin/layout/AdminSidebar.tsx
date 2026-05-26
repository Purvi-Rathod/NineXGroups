"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  Settings,
  LogOut,
  User,
  FileText,
} from "lucide-react";
import { clearAdminAuth } from "@/lib/admin-auth";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
  { name: "Blogs", icon: FileText, href: "/admin/blogs" },
  { name: "All Jobs", icon: Briefcase, href: "/admin/jobs" },
  { name: "Create Job", icon: PlusCircle, href: "/admin/jobs/create" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = () => {
    clearAdminAuth();
    router.replace("/admin/login");
  };

    return (
        <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 bg-white border-r border-gray-100 shadow-sm">
            {/* Logo Area */}
            <div className="h-16 flex items-center px-6 border-b border-gray-100">
                <Link href="/admin/dashboard" className="flex items-center gap-2">
                    {/* Fallback to text if logo not present, but using the specific brand color */}
                    <div className="w-8 h-8 bg-gradient-to-br from-[#12D4FF] to-[#1959FA] rounded-lg flex items-center justify-center text-white font-bold">
                        9X
                    </div>
                    <span className="font-manrope font-bold text-xl text-navy-dark">Admin</span>
                </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${isActive
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-600'}`} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </div>

            {/* User / Footer */}
            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <User className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                        <p className="text-xs text-gray-400 truncate">admin@ninex-group.com</p>
                    </div>
                </div>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-gray-500 hover:text-red-500 px-2 py-2 w-full rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
            </div>
        </aside>
    );
}

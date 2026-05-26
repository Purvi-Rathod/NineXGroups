"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/layout/AdminSidebar";
import { AdminProvider } from "@/components/admin/AdminProvider";
import AdminAuthGuard from "@/components/admin/AdminAuthGuard";

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <AdminAuthGuard>
        <AdminLayoutContent>{children}</AdminLayoutContent>
      </AdminAuthGuard>
    </AdminProvider>
  );
}

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!isLoginPage) {
      document.body.classList.add("admin-no-margin");
    }
    return () => {
      document.body.classList.remove("admin-no-margin");
    };
  }, [isLoginPage]);

  if (isLoginPage) {
    return <>{children}</>;
  }
  return (
    <div className="min-h-screen bg-gray-50 flex font-manrope">
      <AdminSidebar />
      <main className="flex-1 lg:ml-64 min-h-screen flex flex-col">{children}</main>
    </div>
  );
}

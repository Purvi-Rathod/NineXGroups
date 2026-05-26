"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export default function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const isLogin = pathname === "/admin/login";
    const authenticated = isAdminAuthenticated();
    if (isLogin) {
      setAllowed(true);
      return;
    }
    if (!authenticated) {
      router.replace("/admin/login");
      return;
    }
    setAllowed(true);
  }, [pathname, router]);

  if (!allowed) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading…</div>
      </div>
    );
  }

  return <>{children}</>;
}

"use client";

import { ChevronRight } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export default function DropdownItem({ item }: { item: NavItem }) {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="relative group">
      {/* Row */}
      <div
        className="
          px-4 py-3 text-sm
          flex items-center justify-between
          cursor-pointer text-[#4d4d4d]
          hover:bg-gray-100 hover:text-[#1959FA]
        "
      >
        <span>{item.label}</span>
        {hasChildren && <ChevronRight className="w-4 h-4" />}
      </div>

      {/* Nested dropdown */}
      {hasChildren && (
        <div
          className="
            absolute top-0 left-full
            hidden group-hover:block
            min-w-[240px]
            bg-white border shadow-xl z-50
          "
        >
          {item.children!.map((child, i) => (
            <DropdownItem key={i} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import type { ProjectFilters } from "@/types/project-filters";

interface PageHeaderProps {
  title: string;
  count?: number;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  updateFilter?: (key: keyof ProjectFilters, value: string) => void;
  loading: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  count,
  searchValue,
  onSearchChange,
  updateFilter,
  loading,
}) => {
  return (
    <div className="flex items-center justify-between px-8 py-6 bg-[#F8F9FD]">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold text-gray-800">
          {title}{" "}
          {loading ? (
            <Skeleton className="h-6 w-8 inline-block align-middle ml-2 rounded-lg bg-gray-200/60" />
          ) : (
            count !== undefined && (
              <span className="text-gray-500 font-medium ml-1">({count})</span>
            )
          )}
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="block w-72 pl-10 pr-3 py-2.5 bg-white border border-gray-100 rounded-xl text-sm placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-50 outline-none transition-all"
            placeholder="Search"
          />
        </div>

        <div className="flex items-center space-x-4">
          <ProjectFilter updateFilter={updateFilter} />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

import React from "react";

interface PageHeaderProps {
  title: string;
  count?: number;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  count, 
  searchValue, 
  onSearchChange 
}) => {
  return (
    <div className="flex items-center justify-between px-8 py-6 bg-[#F8F9FD]">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold text-gray-800">
          {title}{" "}
          {count !== undefined && (
            <span className="text-gray-500 font-medium">({count})</span>
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

        <button className="flex items-center space-x-2 px-4 py-2.5 bg-white border border-gray-100 rounded-xl shadow-sm text-[14px] font-bold text-[#4F7CFF] hover:bg-gray-50 transition-all">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
};

export default PageHeader;

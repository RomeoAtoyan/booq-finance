"use client"
import type { ProjectFilters } from "@/types/project-filters";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const industries = [
  "All Industries",
  "Logistics",
  "Manufacturing",
  "Software",
  "Food & Beverage",
  "Healthcare",
] as const

interface ProjectFilterProps {
  updateFilter?: (key: keyof ProjectFilters, value: string) => void;
}

export function ProjectFilter({ updateFilter }: ProjectFilterProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">Filter by:</div>
      <Select 
        defaultValue="All Industries"
        onValueChange={(value) => updateFilter?.("industry", value === "All Industries" ? "" : value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Industry" />
        </SelectTrigger>
        <SelectContent>
          {industries.map((industry) => (
            <SelectItem key={industry} value={industry}>
              {industry}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

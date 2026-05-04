import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectTableSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <Table>
      <TableHeader className="bg-[#F9FAFF]">
        <TableRow className="hover:bg-transparent border-b border-gray-100">
          <TableHead className="text-[11px] font-bold text-gray-500 uppercase tracking-tight py-4 px-8">
            Project Name
          </TableHead>
          <TableHead className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">
            Client Name
          </TableHead>
          <TableHead className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">
            Target Name
          </TableHead>
          <TableHead className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">
            Industry
          </TableHead>
          <TableHead className="text-[11px] font-bold text-gray-500 uppercase tracking-tight pr-8 text-right">
            Team Size
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(5)].map((_, i) => (
          <TableRow key={i} className="border-b border-gray-50">
            <TableCell className="py-5 px-8">
              <div className="flex items-center space-x-3">
                <Skeleton className="w-8 h-8 rounded-full shrink-0" />
                <Skeleton className="h-4 w-32" />
              </div>
            </TableCell>
            <TableCell><Skeleton className="h-6 w-24 rounded-md" /></TableCell>
            <TableCell><Skeleton className="h-4 w-28" /></TableCell>
            <TableCell><Skeleton className="h-6 w-20 rounded-md" /></TableCell>
            <TableCell className="pr-8 text-right flex justify-end">
              <Skeleton className="h-6 w-20 rounded-full" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default ProjectTableSkeleton;

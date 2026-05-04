import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import ProjectTableSkeleton from "@/components/ProjectTableSkeleton";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectTableProps {
  projects: Project[];
  loading: boolean;
}

const ProjectTable: React.FC<ProjectTableProps> = ({ projects, loading }) => {
  if (loading) {
    return <ProjectTableSkeleton />;
  }

  return (
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
          {projects.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-32 text-center text-gray-400 font-medium">
                No projects found.
              </TableCell>
            </TableRow>
          ) : (
            projects.map((project, index) => (
              <TableRow key={project.id} className="group border-b border-gray-50 hover:bg-gray-50/40 transition-colors">
                <TableCell className="py-5 px-8">
                  <div className="flex items-center space-x-3">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-sm shrink-0",
                      index % 3 === 0 ? "bg-[#FF6B6B]" : index % 3 === 1 ? "bg-[#4F7CFF]" : "bg-[#FFB84D]"
                    )}>
                      {project.project_name.split(" ").length > 1 
                        ? project.project_name.split(" ")[1].charAt(0) 
                        : project.project_name.charAt(0)}
                    </div>
                    <span className="font-bold text-[#4F7CFF] text-[12px] hover:underline cursor-pointer transition-all">
                      {project.project_name}
                    </span >
                  </div>
                </TableCell>
                <TableCell className="text-gray-600 text-[12px] font-medium">
                  {project.client_name}
                </TableCell>
                <TableCell className="text-gray-600 text-[12px] font-medium">{project.target_name}</TableCell>
                <TableCell>
                  <Badge className="bg-transparent border border-gray-200 text-gray-500 px-2.5 py-1 text-[10px] font-bold rounded-md whitespace-nowrap hover:bg-gray-50 transition-colors">
                    {project.industry}
                  </Badge>
                </TableCell>
                <TableCell className="pr-8">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold bg-[#F9FAFF] text-[#4F7CFF] border border-[#E8EFFF]">
                      {project.members.length}
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectTable;

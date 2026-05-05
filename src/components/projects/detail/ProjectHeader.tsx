import { Badge } from "@/components/ui/badge";
import { MoveRight, Globe } from "lucide-react";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex items-center">
        <div>
          <Badge
            className={cn(
              "px-2 py-0.5 text-[10px] font-bold rounded-md uppercase tracking-tight shadow-none border mb-2",
              project.status === "active"
                ? "text-emerald-600 border-emerald-100 bg-emerald-50/50"
                : "text-red-600 border-red-100 bg-red-50/50",
            )}
          >
            {project.status}
          </Badge>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">
            {project.project_name}
          </h1>
          <div className="flex items-center gap-3 text-[13px] mt-1">
            <span className="text-[#4F7CFF] font-bold">
              {project.client_name}
            </span>
            <MoveRight className="w-5 h-5 text-gray-300" />
            <span className="text-gray-600 font-medium">
              {project.target_name}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right hidden md:block">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest justify-end">
            <Globe className="w-3 h-3" />
            Industry
          </div>
          <div className="text-[13px] font-bold text-gray-700 mt-0.5">
            {project.industry}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;

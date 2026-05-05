import type { Project } from "@/types/project";
import { Users, BarChart3 } from "lucide-react";

interface ProjectStatsProps {
  project: Project;
}

const ProjectStats = ({ project }: ProjectStatsProps) => {
  const data = [
    { label: "FTE Bucket", value: project.details.fte_bucket, icon: Users },
    {
      label: "Revenue Bucket",
      value: project.details.revenue_bucket,
      icon: BarChart3,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-100 rounded-xl divide-x divide-gray-50 overflow-hidden">
      {data.map((item) => (
        <div key={item.label} className="px-6 py-4 bg-white">
          <div className="flex items-center gap-2 mb-1.5">
            <item.icon className="w-3 h-3 text-gray-400" />
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
              {item.label}
            </span>
          </div>
          <div className="text-[14px] font-bold text-gray-800">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;

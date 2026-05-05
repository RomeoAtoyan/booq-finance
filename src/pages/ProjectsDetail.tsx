import { useProjectDetail } from "@/hooks/useProject";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import ProjectHeader from "@/components/projects/detail/ProjectHeader";
import ProjectStats from "@/components/projects/detail/ProjectStats";
import ProjectEntities from "@/components/projects/detail/ProjectEntities";
import ProjectTeam from "@/components/projects/detail/ProjectTeam";
import ProjectDetailSkeleton from "@/components/projects/ProjectDetailSkeleton";

import ProjectErrorState from "@/components/projects/ProjectErrorState";
import { ROUTES } from "@/pages/routes";

const ProjectsDetail = () => {
  const { id } = useParams();
  const { project, isLoading, error } = useProjectDetail({ id });

  if (error) {
    return <ProjectErrorState message={(error as Error).message} />;
  }

  if (isLoading || !project) {
    return <ProjectDetailSkeleton />;
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="mb-10 flex items-center justify-between">
        <Link
          to={ROUTES.PROJECTS}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#4F7CFF] hover:opacity-80 transition-all"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Projects Overview
        </Link>
      </div>

      <div className="space-y-12">
        <ProjectHeader project={project} />

        <ProjectStats project={project} />

        <div className="grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 lg:col-span-8">
            <ProjectEntities entities={project.entities} />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <ProjectTeam members={project.members} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;

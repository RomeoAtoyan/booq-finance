import ProjectListHeader from "@/components/projects/ProjectListHeader";
import ProjectTable from "@/components/projects/ProjectTable";
import { useProjects } from "@/hooks/useProjects";
import ProjectErrorState from "@/components/projects/ProjectErrorState";

const Projects = () => {
  const { 
    projects, 
    loading, 
    error,
    searchQuery,
    setSearchQuery,
    projectsCount,
    updateFilter,
  } = useProjects();

  if (error) {
    return (
      <div className="min-h-screen bg-[#F8F9FD]">
        <ProjectListHeader
          title="Projects"
          count={0}
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
          updateFilter={updateFilter}
          loading={false}
        />
        <div className="px-8 pb-10">
          <ProjectErrorState message={error.message} showBackLink={false} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FD]">
      <ProjectListHeader 
        title="Projects" 
        count={projectsCount} 
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        updateFilter={updateFilter}
        loading={loading}
      />
      <div className="px-8 pb-10">
        <ProjectTable projects={projects} loading={loading} />
      </div>
    </div>
  );
};

export default Projects;
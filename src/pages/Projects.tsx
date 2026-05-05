import ProjectListHeader from "@/components/projects/ProjectListHeader";
import ProjectTable from "@/components/projects/ProjectTable";
import { useProjects } from "@/hooks/useProjects";

const Projects = () => {
  const { 
    projects, 
    loading, 
    searchQuery, 
    setSearchQuery, 
    projectsCount,
    updateFilter,
  } = useProjects();

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
import { useEffect, useMemo, useState } from "react";
import { fetchProjects } from "@/services/projects.service";
import { useDebounce } from "@/hooks/useDebounce";
import type { Project } from "@/types/project";
import type { ProjectFilters } from "@/types/project-filters";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [projectsCount, setProjectsCount] = useState<number>(0)
  const [filters, setFilters] = useState<ProjectFilters>({
    industry: "",
  });
  const debouncedSearch = useDebounce(searchQuery, 800);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
        setProjectsCount(data.length)
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const updateFilter = (key: keyof ProjectFilters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((p: Project) => {
      const search = debouncedSearch.toLowerCase();

      const matchesSearch = [p.project_name, p.client_name]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(search));

      const matchesIndustry = filters.industry
        ? p.industry.toLowerCase() === filters.industry.toLowerCase()
        : true;

      return matchesSearch && matchesIndustry;
    });
  }, [projects, filters, debouncedSearch]);

  return {
    projects: filteredProjects,
    loading,
    error,
    searchQuery,
    filters,
    projectsCount,
    updateFilter,
    setSearchQuery,
  };
};

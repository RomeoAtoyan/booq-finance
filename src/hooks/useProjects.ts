import { useDebounce } from "@/hooks/useDebounce";
import { fetchProjects } from "@/services/projects.service";
import type { Project } from "@/types/project";
import type { ProjectFilters } from "@/types/project-filters";
import { useEffect, useMemo, useState } from "react";

export const useProjects = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<ProjectFilters>({
    industry: "",
  });
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const debouncedSearch = useDebounce(searchQuery, 800);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
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

  const isSearching = searchQuery !== debouncedSearch;

  return {
    projects: filteredProjects,
    loading: isLoading || isSearching,
    error,
    searchQuery,
    filters,
    projectsCount: filteredProjects.length,
    updateFilter,
    setSearchQuery,
  };
};

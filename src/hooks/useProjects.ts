import { useDebounce } from "@/hooks/useDebounce";
import { fetchProjects } from "@/services/projects.service";
import type { Project } from "@/types/project";
import type { ProjectFilters } from "@/types/project-filters";
import { useEffect, useMemo, useState } from "react";
import { useSimulation } from "@/context/SimulationContext";

export const useProjects = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<ProjectFilters>({
    industry: "",
  });
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { isErrorMode, isLoadingMode } = useSimulation();

  const debouncedSearch = useDebounce(searchQuery, 800);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (isLoadingMode) {
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }

        if (isErrorMode) {
          throw new Error("Simulated Global Error");
        }

        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProjects();
  }, [isLoadingMode, isErrorMode]);

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

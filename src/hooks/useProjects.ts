import { useEffect, useMemo, useState } from "react";
import { fetchProjects } from "@/services/projects.service";
import type { Project } from "@/types/project";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) =>
      p.project_name.toLowerCase().includes(debouncedQuery.toLowerCase()),
    );
  }, [projects, debouncedQuery]);

  return {
    projects: filteredProjects,
    loading,
    error,
    searchQuery,
    setSearchQuery,
  };
};

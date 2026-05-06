import { fetchProjectById } from "@/services/projects.service";
import { useEffect, useState } from "react";
import type { Project } from "@/types/project";

export const useProjectDetail = ({ id }: { id: string | undefined }) => {
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        const data = await fetchProjectById({ id });
        setProject(data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadProject();
  }, [id]);

  return {
    project,
    isLoading,
    error,
  };
};

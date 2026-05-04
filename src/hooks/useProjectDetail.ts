import type { Project } from "@/types/project";
import { useEffect, useState } from "react";
import { fetchProjectDetail } from "@/services/projects.service";

export const useProjectDetail = ({ id }: { id: string }) => {
  const [project, setProject] = useState<Project | {}>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true);
        const data = await fetchProjectDetail({ id });
        setProject(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, []);

  return {
    project,
    loading,
    error,
  };
};

import type { Project } from "@/types/project";
import { useEffect, useState } from "react";
import { fetchProjectDetail } from "@/services/projects.service";

export const useProjectDetail = ({ id }: { id: string | undefined }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadProject = async () => {
      try {
        setLoading(true);
        const data = await fetchProjectDetail({ id });
        setProject(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  return {
    project,
    loading,
    error,
  };
};

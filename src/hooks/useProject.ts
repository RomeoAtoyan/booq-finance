import { fetchProjectById } from "@/services/projects.service";
import { useQuery } from "@tanstack/react-query";

export const useProjectDetail = ({ id }: { id: string | undefined }) => {
  const {
    data: project,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects", id],
    queryFn: () => fetchProjectById({ id }),
    enabled: !!id,
  });

  return {
    project,
    isLoading,
    error,
  };
};

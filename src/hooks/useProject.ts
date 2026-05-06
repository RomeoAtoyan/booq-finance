import { fetchProjectById } from "@/services/projects.service";
import { useEffect, useState } from "react";
import type { Project } from "@/types/project";
import { toast } from "sonner";
import { useSimulation } from "@/context/SimulationContext";

export const useProjectDetail = ({ id }: { id: string | undefined }) => {
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { isErrorMode, isLoadingMode } = useSimulation();

  const loadProject = async () => {
    if (!id) return;
    try {
      setIsLoading(true);
      setError(null);

      if (isLoadingMode) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }

      if (isErrorMode) {
        throw new Error("Simulated Global Error");
      }

      const data = await fetchProjectById({ id });
      setProject(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProject();
  }, [id, isLoadingMode, isErrorMode]);

  const addMember = async (memberData: any) => {
    if (!project) return;

    const previousMembers = project.members;
    const newMember = {
      ...memberData,
      user_id: Math.random().toString(36).substr(2, 9),
    };

    setProject({
      ...project,
      members: [...project.members, newMember],
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (isErrorMode) {
        throw new Error("Simulated API failure");
      }

      toast.success("Member added successfully");
    } catch (error) {
      setProject({
        ...project,
        members: previousMembers,
      });
      toast.error("Failed to add team member. Please try again.");
    }
  };

  return {
    project,
    setProject,
    isLoading,
    error,
    refetch: loadProject,
    addMember,
  };
};

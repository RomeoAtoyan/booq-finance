import { fetchProjectById } from "@/services/projects.service";
import { useEffect, useState } from "react";
import type { Project } from "@/types/project";
import { toast } from "sonner";

export const useProjectDetail = ({ id }: { id: string | undefined }) => {
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

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

  useEffect(() => {
    loadProject();
  }, [id]);

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

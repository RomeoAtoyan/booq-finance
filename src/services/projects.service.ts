import type { Project } from "@/types/project";

export const fetchProjects = async (): Promise<Project[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("/backend-mock/projects.json");
  if (!response.ok) throw new Error("Error fetching projects ...");
  const data = await response.json();
  return data.projects;
};

export const fetchProjectById = async ({ id }: { id: string }) => {
  const projects = await fetchProjects();
  const project = projects.find(
    (p: Project) => p.id.toLowerCase() === id.toLowerCase(),
  );
    if (!project) throw new Error(`Project with ${id} not found ...`);
  return project;
};

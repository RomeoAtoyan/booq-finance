import type { Project } from "@/types/project";

export const fetchProjects = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("/backend-mock/projects.json");

  if (!response.ok) throw new Error("Error fetching projects ...");

  const data = await response.json();

  return data.projects;
};

export const fetchProjectDetail = async ({ id }: { id: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("/backend-mock/projects.json");

  if (!response.ok) throw new Error("Error fetching project ...");

  const data = await response.json();

  const project = data.projects.find(
    (p: Project) => p.id.toLowerCase() === id.toLowerCase(),
  );

  if (!project) throw new Error(`Project with ${id} not found ...`);

  return project;
};

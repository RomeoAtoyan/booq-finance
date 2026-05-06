import type { Project } from "@/types/project";

const BASE_URL = "/backend-mock/projects.json";

export const projectsService = {
  getAll: async (): Promise<Project[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Error fetching projects...");
    const data = await res.json();
    return data.projects;
  },

  getById: async (id: string): Promise<Project | undefined> => {
    const projects = await projectsService.getAll();
    const project = projects.find(
      (p: Project) => p.id.toLowerCase() === id.toLowerCase(),
    );
    if (!project) throw new Error(`Could NOT find the project with ID: ${id}`);

    return project;
  },
};

export const fetchProjects = projectsService.getAll;
export const fetchProjectById = ({ id }: { id: string }) =>
  projectsService.getById(id);

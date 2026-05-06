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
    return projects.find(
      (p: Project) => p.id.toLowerCase() === id.toLowerCase(),
    );
  },
};

export const fetchProjects = projectsService.getAll;
export const fetchProjectById = ({ id }: { id: string }) =>
  projectsService.getById(id);

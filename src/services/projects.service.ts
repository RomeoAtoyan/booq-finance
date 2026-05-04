export const fetchProjects = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("/backend-mock/projects.json");

  if (!response.ok) throw new Error("Error fetching projects ...");

  const data = await response.json();

  return data.projects;
};

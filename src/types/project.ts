export type ProjectStatus = "active" | "archived" | "completed";
export type ProjectMemberRole = "OWNER" | "MEMBER";

export type ProjectMember = {
  user_id: string;
  name: string;
  role: ProjectMemberRole;
};

export type ProjectEntity = {
  id: string;
  name: string;
  currency: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
};

export type Project = {
  id: string;
  project_name: string;
  client_name: string;
  target_name: string;
  industry: string;
  status: ProjectStatus;
  details: {
    fte_bucket: string;
    revenue_bucket: string;
  };
  members: ProjectMember[];
  entities: ProjectEntity[];
};
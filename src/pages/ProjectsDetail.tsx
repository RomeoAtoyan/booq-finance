import { useProjectDetail } from "@/hooks/useProject";
import { useParams } from "react-router-dom";

const ProjectsDetail = () => {
  const { id } = useParams();
  const { project } = useProjectDetail({ id });

  return <div>{JSON.stringify(project)}</div>;
};

export default ProjectsDetail;

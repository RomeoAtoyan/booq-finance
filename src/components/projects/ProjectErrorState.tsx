import { ROUTES } from "@/pages/routes";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectErrorStateProps {
  message: string;
  showBackLink?: boolean;
}

const ProjectErrorState = ({
  message,
  showBackLink = true,
}: ProjectErrorStateProps) => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-32 flex flex-col items-center text-center">
      <div className="max-w-md">
        <h2 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
          Oops, something went wrong.
        </h2>
        <p className="text-[13px] font-medium text-gray-500 mb-8 leading-relaxed">
          We couldn't load these details. The system said: {message}
        </p>
        {showBackLink && (
          <Link
            to={ROUTES.PROJECTS}
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#4F7CFF] hover:opacity-80 transition-all"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to projects overview
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectErrorState;

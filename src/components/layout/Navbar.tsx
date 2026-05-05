import { ROUTES } from "@/pages/routes";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isProjectsActive = location.pathname === ROUTES.PROJECTS;

  return (
    <nav className="flex items-center px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center space-x-10">
        <Link
          to={ROUTES.ROOT}
          className="flex items-center justify-center w-16 h-10 bg-[#4F7CFF] rounded-xl text-white shadow-sm hover:opacity-90 transition-opacity"
        >
          booq
        </Link>

        <div className="flex items-center space-x-8">
          <Link
            to={ROUTES.PROJECTS}
            className={`relative text-[15px] font-semibold transition-colors ${
              isProjectsActive
                ? "text-[#4F7CFF]"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Projects
            {isProjectsActive && (
              <div className="absolute -bottom-[21px] left-0 w-full h-[2px] bg-[#4F7CFF]" />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

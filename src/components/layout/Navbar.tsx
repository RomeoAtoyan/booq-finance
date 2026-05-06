import { ROUTES } from "@/pages/routes";
import { Link, useLocation } from "react-router-dom";
import { useSimulation } from "@/context/SimulationContext";
import { AlertTriangle, Loader2 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isProjectsActive = location.pathname === ROUTES.PROJECTS;
  const { isErrorMode, isLoadingMode, toggleErrorMode, toggleLoadingMode } =
    useSimulation();

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

      <div className="flex items-center space-x-4 ml-auto">
        <button
          onClick={toggleLoadingMode}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-tight transition-all ${
            isLoadingMode
              ? "bg-amber-100 text-amber-700 border border-amber-200 shadow-sm"
              : "bg-gray-50 text-gray-400 border border-transparent hover:bg-gray-100"
          }`}
        >
          <Loader2
            className={`w-3.5 h-3.5 ${isLoadingMode ? "animate-spin" : ""}`}
          />
          Simulate Loading
        </button>
        <button
          onClick={toggleErrorMode}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-tight transition-all ${
            isErrorMode
              ? "bg-red-100 text-red-700 border border-red-200 shadow-sm"
              : "bg-gray-50 text-gray-400 border border-transparent hover:bg-gray-100"
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          Simulate Error
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

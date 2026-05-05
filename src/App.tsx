import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Navbar from "@/components/layout/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProjectsDetail from "@/pages/ProjectsDetail";

const App = () => {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectsDetail />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;

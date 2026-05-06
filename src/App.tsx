import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Navbar from "@/components/layout/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProjectsDetail from "@/pages/ProjectsDetail";
import { ROUTES } from "./pages/routes";
import { ModalProvider } from "@/context/ModalContext";
import ModalContainer from "@/components/layout/ModalContainer";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <ModalProvider>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-white">
            <Navbar />
            <main>
              <Routes>
                <Route path={ROUTES.ROOT} element={<Home />} />
                <Route path={ROUTES.PROJECTS} element={<Projects />} />
                <Route
                  path={`${ROUTES.PROJECTS}/:id`}
                  element={<ProjectsDetail />}
                />
              </Routes>
            </main>
          </div>
          <ModalContainer />
          <Toaster position="top-center" />
        </BrowserRouter>
      </TooltipProvider>
    </ModalProvider>
  );
};

export default App;

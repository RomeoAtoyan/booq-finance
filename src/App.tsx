import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Navbar from "@/components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

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
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ScienceCalculator } from "./pages/ScienceCalculator";
import { SolarCalculator } from "./pages/SolarCalculator";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solar" element={<SolarCalculator />} />
            <Route path="/science" element={<ScienceCalculator />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

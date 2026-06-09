import { Routes, Route } from "react-router";

// pages
import HomePage from "./pages/MainPage";

function App() {
  return (
    <div className="min-h-screen bg-cyan-200">
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

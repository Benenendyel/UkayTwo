import { Routes, Route } from "react-router";

// pages
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import HomePage from "./pages/MainPage";

function App() {
  return (
    <div className="min-h-screen bg-cyan-200">
      <NavigationBar />
      <main className="flex-1">
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

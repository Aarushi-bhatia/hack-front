import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/index";

function App() {
  return (
    <>
      <div className=" min-h-screen inset-0  bg-slate-50 dark:bg-white">
        
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Practice page */}
        </Routes>
      </div>
    </>
  );
}

export default App;

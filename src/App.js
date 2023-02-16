import "./styles/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Dogs from "./pages/Dogs";
import DogPage from "./pages/DogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dogs/:id" element={<DogPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

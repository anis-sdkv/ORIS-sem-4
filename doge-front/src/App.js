import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/App.css";

import About from "./pages/About";
import Dogs from "./pages/Dogs";
import DogPage from "./pages/DogPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/:id" element={<DogPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

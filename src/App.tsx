import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terminal from "@/components/Terminal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Terminal />} />
        <Route path="/terminal" element={<Terminal />} />
      </Routes>
    </Router>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientDashboard from "./pages/PatientDashboard";
import InsurerDashboard from "./pages/InsurerDashboard";
import ClaimSubmission from "./pages/ClaimSubmission";
import ClaimDetails from "./pages/ClaimDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PatientDashboard />} />
        <Route path="/submit-claim" element={<ClaimSubmission />} />
        <Route path="/claim/:id" element={<ClaimDetails />} />
        <Route path="/insurer" element={<InsurerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
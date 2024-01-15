import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./components/Forms";
import LicenseTable from "./components/LicenseTable";
import FormsLicense from "./components/FormsLicense";
import Home from "./components/Home";
import LayoutHome from "./components/LayoutHome";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LayoutHome />} />
        <Route path="/formulario" element={<Forms />} />
        <Route path="/licença" element={<FormsLicense />} />
        <Route path="/license-table" element={<LicenseTable />} />
      </Routes>
    </Router>
  );
};

export default App;

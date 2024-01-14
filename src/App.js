import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./components/Forms";
import LicenseTable from "./components/LicenseTable";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/formulario" element={<Forms />} />
        <Route path="/license-table" element={<LicenseTable />} />
      </Routes>
    </Router>
  );
};

export default App;

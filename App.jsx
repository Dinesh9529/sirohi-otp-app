import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerLogin from "./pages/CustomerLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h2>Welcome to Sirohi Services</h2>} />
      <Route path="/login" element={<CustomerLogin />} />
    </Routes>
  );
}

export default App;

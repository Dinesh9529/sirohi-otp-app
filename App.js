import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLogin from "./pages/CustomerLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Welcome to Sirohi Services</h2>} />
        <Route path="/login" element={<CustomerLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
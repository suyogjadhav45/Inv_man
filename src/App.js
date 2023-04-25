import React from "react";
import Dashboard from "./routes/Dashboard";
import OrderQueue from "./routes/OrderQueue";

import { Routes, Route } from "react-router-dom";
import Assignment from "./routes/Assignment";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/orderqueue" element={<OrderQueue />} />
        <Route exacy path="/orderassign" element={<Assignment />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/user/:id" element={<Home />}></Route>
    </Routes>
  );
}

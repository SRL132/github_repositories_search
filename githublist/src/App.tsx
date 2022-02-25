import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as ROUTES from "./routes";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

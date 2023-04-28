import React from "react";
import "./App.css";
import Form from "./components/Form";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Gracias from "./components/Gracias";
import NoID from "./components/NoID";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/checklist/menus/" element={<NoID />} />
          <Route path="/checklist/menus/:id" element={<Form />} />
          <Route path="/checklist/menus/:type/:id" element={<Form />} />
          <Route path="/checklist/menus/gracias" element={<Gracias />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

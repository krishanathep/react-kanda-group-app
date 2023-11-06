import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/layout'
import Home from './pages/Home'
import Documents from './pages/Documents'
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact  path="/" element={<Home />} />
          <Route exact  path="/documents" element={<Documents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

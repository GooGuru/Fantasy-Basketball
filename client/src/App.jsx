import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import League from "./components/League";
import Team from "./components/Team";
import Login from "./components/login";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/league" element={<League />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

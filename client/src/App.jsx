import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./components/Navigation";
// import League from "./components/League";
// import Team from "./components/Team";
// import Login from "./components/login";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;

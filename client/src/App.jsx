import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./components/Navigation";
import "./styles/App.css";

const App = () => {
  console.log("App render");
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;

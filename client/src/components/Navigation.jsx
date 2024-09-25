import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">
      <h1 className="title">Fantasy Football</h1>
      </div>
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/league"
            className="nav-link"
            activeclassname="active-link"
          >
            League
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/team"
            className="nav-link"
            activeclassname="active-link"
          >
            Team
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className="nav-link"
            activeclassname="active-link"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Navigation;

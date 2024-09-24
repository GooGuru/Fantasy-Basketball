import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
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
  );
};

export default Navigation;

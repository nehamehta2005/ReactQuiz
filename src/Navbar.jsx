import logo from "./images/Logo.png";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo-link">
        <img src={logo} alt="" className="logo" />
        <span className="app-name">The React Quiz App</span>
      </Link>

      <ul>
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/howtoplay">How to play</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

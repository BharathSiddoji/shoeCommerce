import React from "react";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <div className="Nav-header">
      <img src="./assets/Logo.png" alt="Logo" className="logo" />
      <div className="nav-items">
        <Link className="text-link" to="/">
          Home
        </Link>
        <Link className="text-link" to="/Products">
          Products
        </Link>
        <Link className="text-link" to="/About">
          About
        </Link>

        <Link className="text-link" to="/Cart">
          Cart
        </Link>
      </div>
      <BsList className="menu" />
    </div>
  );
};

export default Nav;

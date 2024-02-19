import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navbar">
      <div className="brand-title">
        <img src="/logo.png" alt="" className="logo-img" />
      </div>
      <button
        className="toggle-button nav-toggle-button"
        onClick={handleToggle}
      >
        {isNavExpanded ? (
          <FaTimes className="icon-menu" />
        ) : (
          <FaBars className="icon-menu" />
        )}
      </button>
      <div className={isNavExpanded ? "navbar-links expanded" : "navbar-links"}>
        <ul className="navbar-ul">
          <li>
            <a href="/opportunities">Opportunities</a>
          </li>
          <li>
            <a href="/how-it-works">How it Works</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/sign-in" className="sign-in-button">
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

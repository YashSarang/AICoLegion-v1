import React, { useState } from "react";
import "./Navbar.css";
import LogoMedRes from "../assestsFInal/LogoMedRes.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="navbar-logo-image" src={LogoMedRes} alt="Logo" />
      </div>
      <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-items">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Blogs</li>
          <li className="navbar-item">RoadMaps</li>
          <li className="navbar-item">Contact</li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`navbar-toggle-icon ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a className="nav-title" href="/">Portfolio</a>

      {/* Hamburger / Three dots */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav menu */}
      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul className="nav-menuitems">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

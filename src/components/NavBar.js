import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-btn">Home</Link>
      <Link to="/contact" className="nav-btn">Contact</Link>
      <Link to="/exercises" className="nav-btn">Exercises</Link>
      <Link to="/nutrition" className="nav-btn">Nutrition Plan</Link>
      <Link to="/about" className="nav-btn">About Us</Link>
    </nav>
  );
}

export default Navbar;

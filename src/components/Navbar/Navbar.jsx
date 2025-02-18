import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for burger menu
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <nav className="navbar">
        <div className="logo">Jo-Commerce</div>

        {/* Burger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/man" onClick={() => setMenuOpen(false)}>
              Man
            </Link>
          </li>
          <li>
            <Link to="/woman" onClick={() => setMenuOpen(false)}>
              Woman
            </Link>
          </li>
          <li>
            {localStorage.getItem("jocomtoken") ? (
              <Link to="/add" onClick={() => setMenuOpen(false)}>
                Add Product
              </Link>
            ) : null}
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;

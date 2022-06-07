import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <Logo />
        <nav className="navbar-links">
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/shop">
            Shop
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

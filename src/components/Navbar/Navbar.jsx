import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="nav">
      <div className="log">
        <h1>MovieCity</h1>
      </div>
      <nav className="navs" ref={navRef}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </ul>
      </nav>
      <button className="btn btn-primary">Login</button>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;

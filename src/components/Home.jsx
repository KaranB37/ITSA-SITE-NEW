// Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import "../styles/Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState("close");

  const toggleMenu = () => {
    setMenuOpen(menuOpen === "open" ? "close" : "open");
  };

  return (
    <section className="custom-section navbar">
      <nav>
        <div className="left">
          <span className="special-char"> ITSA-CSI </span>
          <span className="special-char2"> VPPCOE</span>
        </div>
        <div className="right">
          <div
            className={`nav-links ${menuOpen === "open" ? "open" : "close"}`}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Link to="/events">Events</Link>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              Contact
            </ScrollLink>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Home;

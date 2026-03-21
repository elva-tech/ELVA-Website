import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h3>ELVA</h3>
          <p>
            Engineering solutions for real-world problems.
            We build business management systems and solve
            foundational challenges through technology.
          </p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="/philosophy">Philosophy</Link></li>
            <li><Link to="/team">Team</Link></li> */}
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Solutions</h4>
          <ul>
            {/* <li><Link to="/products">Products</Link></li>
            <li><Link to="/initiatives">Initiatives</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Bangalore, India</p>
          <p>+91-96111 49957</p>
          <p>+91-99723 04620</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ELVA Tech. All Rights Reserved.
      </div>

    </footer>
  );
}
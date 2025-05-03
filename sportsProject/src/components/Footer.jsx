import React from 'react';
import './Footer.css';
// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-logo">
            <span style={{ color: '#ff3366' }}>sports</span><span style={{ color: '#fff' }}>era</span>
          </h2>
          <p className="footer-description">
            Your ultimate destination for tickets.<br />
            Experience the magic of live cricket with us.
          </p>
          {/* <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div> */}
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Plans</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Help & Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>123 abc<br />
            City,####12345</p>
          <p>Email: info@abctix.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SportsERA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

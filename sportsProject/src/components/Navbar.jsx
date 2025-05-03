import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setShowDropdown(!showDropdown);

  // 🔁 Auto-close dropdown when window is resized above 820px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setShowDropdown(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">SPORTS</div>

      <ul className="nav-links">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#plans">PLANS</a></li>
        <li><a href="#programs">ONLINE PROGRAMS</a></li>
        <li><a href="#more">MORE</a></li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        &#8942;
      </div>

      {showDropdown && (
        <div className="dropdown-menu">
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#plans">PLANS</a>
          <a href="#programs">ONLINE PROGRAMS</a>
          <a href="#more">MORE</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

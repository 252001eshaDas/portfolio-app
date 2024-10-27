import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo"></div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about-me" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
            <li><a href="#resume" onClick={toggleMenu}>Resume</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Me</a></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
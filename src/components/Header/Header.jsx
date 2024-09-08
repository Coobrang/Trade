import React, { useState } from "react";
import "./Header.css";
import headerData from "../../Data/Header.json";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const imagePath = (imageName) => {
    try {
      return require(`../../assets/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  return (
    <div className="header">
      {headerData.map((header, index) => (
      <div className="row-wrapper">

        {/* Logo */}
        <div className="logo">
          <img src={imagePath((header.imageSrc))} alt="" />
        </div>

        {/* Menu */}
        <div className="menu">
          <ul>
            {header.menuItems.map((item, idx) => (
              <li key={idx}><a href={item.link}>{item.text}</a></li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <i className={isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </button>

          <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul>
                {header.menuItems.map((item, idx) => (
                  <li className={idx}>
                    <a href={item.link}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
          </nav>

        {/* Button */}
        <div className="button">
          <a href={header.button.link}>{header.button.text}</a>
        </div>

      </div>
      ))}
    </div>
  );
};

export default Header;

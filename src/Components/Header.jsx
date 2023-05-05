import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header">
      <div className="title">FROSTY NARWHALS</div>
      <div className="box">
        <div className="item">HOME</div>
        <div className="item">MISSION</div>
        <div className="item">ABOUTUS</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {isMenuOpen && (
          <div className="menu">
            <HashLink to="/#roadmap" smooth>
              ROADMAP
            </HashLink>
            <a href="#">COLLABS</a>
            <HashLink to="/#mint" smooth>
              MINT
            </HashLink>
            <HashLink to="/#donate" smooth>
              DONATE
            </HashLink>
            <HashLink to="/#shop" smooth>
              SHOP
            </HashLink>
          </div>
        )}
      </div>
    </div>
  );
}

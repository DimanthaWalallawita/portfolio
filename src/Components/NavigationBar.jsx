import React, { useState } from "react";
import "../Assets/CSS/navigation.css";
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import logo from "../Assets/Images/mylogo.png";

const NavigationBar = () => {
  const [isHoverd, setIsHovered] = useState(false);

  return (
    <div className="Navbar">
      <div className="first-Button" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {isHoverd ? <FiChevronDown /> : <FiAlignJustify />}
      </div>

      <div className="my-content">
        <h2>PROJECTS</h2>
        <h2><a href="/about">ABOUT</a></h2>
        <h2 className="contact"><a href="/contact">CONTACT</a></h2>
      </div>

      <div className="logo">
        <img className="my-logo" src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default NavigationBar;

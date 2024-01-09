// src/components/Header.js
import React from "react";
import "../Styles/header.css";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="dashboard-header">
      {/* Left Section */}
      <div className="profile-info">
        <img src="/images/logo.jpeg" alt="Profile" className="logo-photo" />
      </div>

      {/* Right Section */}
      <div className="logo-container">
        {/* User Information */}
        <div className="user-info">
          <img src="/images/Ram.jpg" alt="User" className="user-avatar" />
          <span className="user-name">XYZ Enterprices pvt.ltd</span>
        </div>
        <div className="arrow-box">
          <IoIosArrowDown
            style={{ width: "43px", height: "23px", marginTop: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

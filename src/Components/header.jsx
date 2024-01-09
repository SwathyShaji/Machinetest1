// src/components/Header.js
import React from "react";
import "../Styles/header.css";

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
          
        <img
          src="/images/logo.jpg" // Replace with the actual image source
          alt="Logo"
          className="logo"
        />
      </div>

    </div>
  );
};

export default Header;

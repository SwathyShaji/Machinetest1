// src/components/Sidebar.js
import React from "react";
import "../Styles/sidebar.css";
import { MdDashboard } from "react-icons/md";
import { PiPottedPlantFill, PiPuzzlePieceFill } from "react-icons/pi";
import { FaComments } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="profile-section">
        <div className="profile-image">
          <img src="/images/Ram.jpg" alt="Profile" className="profile-photo" />
        </div>
        <div className="profile-details">
          <span className="profile-name">Ram mohan<RiArrowRightSLine style={{color:"blue",marginBottom:"-4px"}}/></span>
          <span className="profile-email">rammohan@example.com</span>
        </div>
      </div>
      <div className="profile-border"></div>

      <ul>
        <li>
          <MdDashboard className="icon" />
          Dashboard
        </li>
        <li>
          <PiPottedPlantFill className="icon" />
          Perks
        </li>
        <li>
          <PiPuzzlePieceFill className="icon" />
          Addons
        </li>
        <li>
          <FaComments className="icon" />
          FAQ
        </li>
        <li>
          <GrDocumentUser className="icon" />
          Support
        </li>
      </ul>

      <div className="logout-button">
        <div className="centered-content">
          logout <RiLogoutCircleRLine />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

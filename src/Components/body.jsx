// src/components/Body.js
import React from "react";
import Card from "./card";
import "../Styles/body.css";

const Body = () => {
  const basicDetails = [
    { icon: "user", label: "User", text: "Upto 25 users" },
    { icon: "cloud", label: "Cloud", text: "Upto 25GB storage" },
    { icon: "email", label: "Email", text: "Email Support" },
  ];

  const standardDetails = [
    { icon: "user", label: "User", text: "Upto 50 users" },
    { icon: "cloud", label: "Cloud", text: "Upto 60GB storage" },
    { icon: "email", label: "Email", text: " Email+Chat Support" },
  ];

  const premiumDetails = [
    { icon: "user", label: "User", text: "Upto 75 users" },
    { icon: "cloud", label: "Cloud", text: "Upto 100GB storage" },
    { icon: "email", label: "Email", text: "Email+Chat+Whatsapp Support" },
  ];

  const freeDetails = [
    { icon: "user", label: "User", text: "Upto 8 users" },
    { icon: "cloud", label: "Cloud", text: "upto 3 gb storage" },
    { icon: "email", label: "Email", text: "Email Support" },
    {
      icon: "tick",
      label: "tick",
      text: "Basics of Documents,Task Flow,Voting,Notes,Investor,Director and Team Management included",
    },
  ];

  const enterpriseDetails = [
    { icon: "user", label: "User", text: "More than 75 users" },
    {
      icon: "tick",
      label: "tick",
      text: "Customization of all other features",
    },
  ];

  return (
    <div>
      <h2 className="plan-heading">Choose a plan that's best for you</h2>
      <div className="plan-toggle">
        <span className="toggle-label">Monthly</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span className="toggle-label">Annually</span>
      </div>

      <div className="cards-container">
        <Card
          type="Basic"
          price="$9.99/mo"
          initialPrice="$89.99/mo"
          details={basicDetails}
        />
        <Card
          type="Standard"
          price="$99.99/month"
          initialPrice="$189.99/month"
          details={standardDetails}
        />
        <Card
          type="Premium"
          price="$199.99/mo"
          initialPrice="$389.99/mo"
          details={premiumDetails}
        />
        <Card type="Free Starter" specialdetails={freeDetails} />
        <Card type="Enterprise plan" specialdetails={enterpriseDetails} />
      </div>
      <div style={{ marginTop: "20px", color: "blue", alignItems: "right" }}>
        <p style={{ textAlign: "right" }}>
          *some unique features are provided as add-ons with individual plans
          for each features
        </p>
      </div>
    </div>
  );
};

export default Body;

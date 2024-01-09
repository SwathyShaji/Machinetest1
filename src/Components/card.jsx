import React from "react";
import { LiaUserSolid } from "react-icons/lia";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { BsCheckAll } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiSolidRightArrow } from "react-icons/bi";


import "../Styles/card.css";

const Card = ({ type, price, specialdetails, details, initialPrice }) => {
  const isSpecialCard = type === "Free Starter" || type === "Enterprise plan";

  return (
    <div
      className={`card ${type.toLowerCase()} ${
        isSpecialCard ? "special-card" : ""
      }`}
    >
      <div className="card-header" style={{ maxWidth: "420px" }}>
        {isSpecialCard && (
          <>
            {type === "Free Starter" ? (
              <button className="freeForeverButton">Free forever</button>
            ) : (
              <button className="letsConnectButton">Let's connect</button>
            )}
          </>
        )}{" "}
        <h3>{type}</h3>
        {initialPrice && !isSpecialCard && (
          <p className="initial-price">
            <span className="strike-through">{initialPrice}</span>
          </p>
        )}
        {!isSpecialCard && (
          <>
            <p>{price}</p>
            <button className="get-started-button">
              Get Started
              <span style={{ marginLeft: "8px" }}>
                <FaArrowRightLong />
              </span>
            </button>
            <div className="border"></div>
          </>
        )}
      </div>
      <div className="card-details">
        {isSpecialCard ? (
          <div className="special-card-details">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span>
                {type === "Free Starter"
                  ? "The quickest and easiest way to try protocols with basic functionalities "
                  : "Effortlessly customise and fine-tune services as your needs shift,ensuring the perfect tools for success"}
              </span>

              <button
                className="get-started-button"
                style={{
                  backgroundColor:
                    type === "Free Starter" ? " #c1f834" : " #37a0ea",
                }}
              >
                {" "}
                {type === "Free Starter" ? "Get Started" : "Contact us"}
              </button>
            </div>

            <div style={{ marginTop: "-100px" }}>
              <p>What you'll get:</p>
              {typeof specialdetails === "string" ? (
                <p>{details}</p>
              ) : (
                specialdetails.map((detail, index) => (
                  <div key={index} className="detail-item">
                    {detail.icon === "user" && <LiaUserSolid />}
                    {detail.icon === "cloud" && <TiCloudStorageOutline />}
                    {detail.icon === "email" && <MdOutlineEmail />}
                    {detail.icon === "tick" && <BsCheckAll />}

                    <span style={{ marginLeft: "10px" }}>{detail.text}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <>
            <p>What you'll get:</p>
            {typeof details === "string" ? (
              <p>{details}</p>
            ) : (
              details.map((detail, index) => (
                <div key={index} className="detail-item">
                  {detail.icon === "user" && <LiaUserSolid />}
                  {detail.icon === "cloud" && <TiCloudStorageOutline />}
                  {detail.icon === "email" && <MdOutlineEmail />}
                  <span style={{ marginLeft: "10px" }}>{detail.text}</span>
                </div>
              ))
            )}
           
      <p className="explore-features" style={{display:"flex",alignItems:"center"}}>
  <u >EXPLORE FEATURES</u>
  <BiSolidRightArrow style={{ color: type === "Basic" ? "#efc90a" : type === "Premium" ? "#e587ff" : "#f19813" ,marginLeft:"1px"}} />
</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
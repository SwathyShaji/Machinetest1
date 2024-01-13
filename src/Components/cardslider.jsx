// CardSlider.js
import React from "react";
import Slider from "react-slick";
import Card from "./card"; // Update the path to your Card component

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <Card {...card} />
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;

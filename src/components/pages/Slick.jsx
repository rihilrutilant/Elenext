import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import as from "../Images/r1.svg";
import React, { Component } from "react";
import Slider from "react-slick";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div   >
          <img src={as} alt=" " />
        </div>
        <div   >
          <img src={as} alt=" " />
        </div>
        <div   >
          <img src={as} alt=" " />
        </div>
        <div   >
          <img src={as} alt=" " />
        </div>
      </Slider>
    </div>
  );
};
export default Slick;

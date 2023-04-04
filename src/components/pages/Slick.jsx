import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import star from "../Images/star.svg";

const Slick = () => {
  return (
    <div className="center-imt">
      <div className="popular_pro_info">
        <img
          src={require("../Images/popular-img1.png")}
          alt=" popular-img"
          className="popular-cnt-img"
        />
        <h4>Instax Mini 9</h4>
        <div className="review-part">
          <img src={star} alt="star" />
          <span>(10 Reviews)</span>
        </div>
        <h5>
          $45.00 <span>$50.00</span>
        </h5>
      </div>
    </div>
  );
};
export default Slick;

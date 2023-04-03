import React from 'react'
import Slider from "react-slick";
import start from "../Images/star.svg";

function Slick() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
     <Slider {...settings}>
                    <div className="pr-slider">
                      <div className="pro-1">
                        <img src={require("../Images/sp1.png")} alt="" />
                        <div className="pro-1-info">
                          <h3>Realme C33 2023</h3>
                          <img src={start} alt="" />
                          <div className="price-sec">
                            <h3>$179.49</h3>
                            <h4>$209.99</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pro-2">
                        <img src={require("../Images/sp1.png")} alt="" />
                        <div className="pro-2-info">
                          <h3>Realme C33 2023</h3>
                          <img src={start} alt="" />
                          <div className="price-sec">
                            <h3>$179.49</h3>
                            <h4>$209.99</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 2nd */}
                    <div className="pr-slider">
                      <div className="pro-1">
                        <img src={require("../Images/sp1.png")} alt="" />
                        <div className="pro-1-info">
                          <h3>Realme C33 2023</h3>
                          <img src={start} alt="" />
                          <div className="price-sec">
                            <h3>$179.49</h3>
                            <h4>$209.99</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pro-2">
                        <img src={require("../Images/sp1.png")} alt="" />
                        <div className="pro-2-info">
                          <h3>Realme C33 2023</h3>
                          <img src={start} alt="" />
                          <div className="price-sec">
                            <h3>$179.49</h3>
                            <h4>$209.99</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
    </>
  )
}

export default Slick

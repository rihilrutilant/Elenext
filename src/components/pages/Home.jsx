import React from "react";
import { Link } from 'react-router-dom'
import "../Styles/Home.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../Images/hero-slider-img1.svg"
import slide2 from "../Images/hero-slider-img2.svg"
import SHOP_SUB from "./Shop_Sub";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    // arrows: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="slider-part1 slider-point">
          <div className="hero-slider slide1">
            <div className="slider-img">
              <img src={slide1} alt="sony headset" />
            </div>
            <div className="slider-content">
              <h3>NEW Collection</h3>
              <h2>Sony WH-CH510 Headset</h2>
              <h4>SALE UPTO 20% OFF</h4>
              <Link to="#">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="slider-part2 slider-point">
          <div className="hero-slider slide2">
            <div className="slider-img">
              <img src={slide2} alt="sony headset" />
            </div>
            <div className="slider-content">
              <h3>NEW ARRIVAL</h3>
              <h2>Google Pixel Buds
                Pro</h2>
              <h4>SALE UPTO 20% OFF</h4>
              <Link to="#">Shop Now</Link>
            </div>
          </div>
        </div>
      </Slider>
      <section className="category-section">
        <div className="category-inner">
          <h3>Top Category Of the Month</h3>
          <div className="category-cnt">
            <div className="category-detail">
              <img src={require('../Images/category-tshirt.png')} alt="tshirt" />
              <h4>T-shirt</h4>
            </div>
            <div className="category-detail">
              <img src={require('../Images/category-laptop.png')} alt="tshirt" />
              <h4>Laptop</h4>
            </div>
            <div className="category-detail">
              <img src={require('../Images/category-shoes.png')} alt="tshirt" />
              <h4>Shoes</h4>
            </div>
            <div className="category-detail">
              <img src={require('../Images/category-sport.png')} alt="tshirt" />
              <h4>Sport</h4>
            </div>
            <div className="category-detail">
              <img src={require('../Images/category-game.png')} alt="tshirt" />
              <h4>Games</h4>
            </div>
            <div className="category-detail">
              <img src={require('../Images/category-bag.png')} alt="tshirt" />
              <h4>Bag</h4>
            </div>
          </div>
        </div>
      </section>

      <SHOP_SUB />
    </>
  )
}

export default Home
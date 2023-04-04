import React from "react";
import { Link } from 'react-router-dom'
import "../Styles/Home.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../Images/hero-slider-img1.svg"
import slide2 from "../Images/hero-slider-img2.svg"
import SHOP_SUB from "./Shop_Sub";
import star from "../Images/star.svg"

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

      <section className="popular-product">
        <div className="container-fluid">
          <div className="popular-product-title">
            <h3>Popular Product</h3>
            <Link to="#">View All Product</Link>
          </div>
          <SHOP_SUB />
        </div>
      </section>

      <section className="new_arrival">
        <div className="container-fluid">
          <div className="new_arrival_cnt">
            <div className="shadesofstyle new_arrival_info">
              <img src={require("../Images/shades.png")} alt="shades" />
              <div className="shadesofstyle_cnt">
                <h2>Shades Of Style</h2>
                <h3>Complete Your Look With The prefect Pair</h3>
              </div>
            </div>
            <div className="stayuptodate new_arrival_info">
              <img src={require("../Images/smartwatch.png")} alt="smartwatch" />
              <div className="stayuptodate_cnt">
                <h2>Stay Up TO date</h2>
                <h3>With Smart Watch</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hot_deals">
        <div className="container-fluid">
          <div className="hot_deals_combo">
            <div className="hot_deals_part">
              <h2>Hot Deals Of The Day</h2>
              <div className="hot_deals_info">
                <div className="hot_deals_img">
                  <img src={require("../Images/hot-deals.png")} alt="hot deal" />
                </div>
                <div className="hot_deals_cnt">
                  <h3>Sony Bravia 108 cm</h3>
                  <h4>$160.00 <span>$200.00</span></h4>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <Link to="#" className="addtocart_btn">Add To cart</Link>
                  <Link to="#" className="buynow_btn">Buy Now</Link>
                  <ul>
                    <li><h5>01 <span>Day</span></h5></li>
                    <li><h5>02 <span>Hour</span></h5></li>
                    <li><h5>41 <span>Min</span></h5></li>
                    <li><h5>22 <span>Sec</span></h5></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="top_seller">
              <h2>Top 20 Best Seller</h2>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img1.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>Macbook Pro 3</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img2.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>iPhone 13</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img3.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>Apple Watch</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clothing-product">
        <div className="container-fluid">
          <div className="clothing-product-title">
            <h3>Clothing Departments</h3>
            <Link to="#">View All Product</Link>
          </div>
          <SHOP_SUB />
        </div>
      </section>

      <section className="offer-section">
        <div className="container-fluid">
          <div className="offer-info">
            <div className="top_seller explore_more">
              <h2>Explore More</h2>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img1.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>Macbook Pro 3</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img2.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>iPhone 13</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img3.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>Apple Watch</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
            </div>
            <div className="top_seller best_offer">
              <h2>Upto 60% Off</h2>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img1.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>Macbook Pro 3</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img2.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>iPhone 13</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img3.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>Apple Watch</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
            </div>
            <div className="top_seller best_seller">
              <h2>Best Seller</h2>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img1.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>Macbook Pro 3</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img2.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>iPhone 13</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
              <div className="top_seller_info">
                <div className="top_seller_img">
                  <img src={require("../Images/top-seller-img3.png")} alt="top seller img" />
                </div>
                <div className="top_seller_cnt">
                  <h3>Apple Watch</h3>
                  <div className='review-part'>
                    <img src={star} alt="star" />
                    <span>(10 Reviews)</span>
                  </div>
                  <h5>$45.00 <span>$50.00</span></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="discount_show">
        <div className="container-fluid">
          <div className="discount_info">
            <div className="discount_cnt">
              <h3>20% FLAT DISCOUNT</h3>
              <h2>All Kind of Electronics,
                Home Appliances.</h2>
              <p>Aliquam erat volutpat. Proin enim justo.</p>
              <Link to="#" className="seenow_btn">See Now</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="consumer_electric">
        <div className="container-fluid">
          <div className="consumer_electric_title">
            <h3>Consumer Electric</h3>
            <Link to="#">View All Product</Link>
          </div>
          <SHOP_SUB />
        </div>
      </section>

      <section className="electronic_companies">
        <div className="container-fluid">
          <div className="elec_comp_info">
            <img src={require("../Images/daewoo-electronics.png")} alt="daewoo electronics" />
            <img src={require("../Images/lg-electronics.png")} alt="" />
            <img src={require("../Images/sony-electronics.png")} alt="" />
            <img src={require("../Images/beijer-electronics.png")} alt="" />
            <img src={require("../Images/viking-electronics.png")} alt="" />
            <img src={require("../Images/emerson-electronics.png")} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
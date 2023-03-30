import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Shop_2.css";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Shop_2 = () => {
  return (
    <>
      <div className="container-fluid">
        <p className="s_header">
          <Link to="/">Home</Link>&nbsp;&gt; Shop
        </p>

        <div className="main_banner">
          <div className="inner_text">
            <p className="collection">Accessories Collection</p>
            <p className="smart">SMART WRIST WATCHES</p>
            <p className="lorem">Fusce egestas elit eget lorem</p>
          </div>
          <div className="inner-headset">
            <img
              className="headset"
              src={require("../Images/headset.png")}
              alt=" "
            />
          </div>
        </div>
      </div>

      <section className="category-section">
        <div className="category-inner">
          <h3>Top Category Of the Month</h3>
          <div className="category-cnt">
            <div className="category-detail">
              <img
                src={require("../Images/category-tshirt.png")}
                alt="tshirt"
              />
              <h4>T-shirt</h4>
            </div>
            <div className="category-detail">
              <img
                src={require("../Images/category-laptop.png")}
                alt="tshirt"
              />
              <h4>Laptop</h4>
            </div>
            <div className="category-detail">
              <img src={require("../Images/category-shoes.png")} alt="tshirt" />
              <h4>Shoes</h4>
            </div>
            <div className="category-detail">
              <img src={require("../Images/category-sport.png")} alt="tshirt" />
              <h4>Sport</h4>
            </div>
            <div className="category-detail">
              <img src={require("../Images/category-game.png")} alt="tshirt" />
              <h4>Games</h4>
            </div>
            <div className="category-detail">
              <img src={require("../Images/category-bag.png")} alt="tshirt" />
              <h4>Bag</h4>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="main_filter_div">
          <div className="col-md-4">
            <div className="filter-top-nav">
              <p className="filter">Filter</p>
              <p className="clearall">Clear All</p>
            </div>
          </div>
            <div className="col-md-8">
              <div className="side_nav">
                <p className="sort-by">Sort By:</p>
                <div class="menu">
                  <button class="toggle">Default Sorting</button>
                  <ul class="list">
                    <li class="list-item">A to Z list View</li>
                    <li class="list-item">Z to A list View</li>
                    <li class="list-item">Low To Hight List View</li>
                    <li class="list-item">Hight To Low List View</li>
                  </ul>
                </div>
              </div>
              <div className="end-div">
                <p className="reset">Reset</p>
                <BsFillGridFill />
                <BsList />
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Shop_2;

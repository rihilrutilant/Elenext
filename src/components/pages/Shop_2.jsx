import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Shop_2.css";
import { BsFillGridFill, BsList } from "react-icons/bs";
import $ from "jquery";

const Shop_2 = () => {
  var hideModal = (hideModalInfo) => {
    $("#offcanvasNavbar").modal("hide");
  };
  return (
    <>
      <div className="container-fluid">
        <p className="s_header">
          <Link className="home_hover" to="/">Home</Link>&nbsp;&gt; Shop
        </p>

        <div className="main_banner">
          <div className="inner_text">
            <p className="collection">Accessories Collection</p>
            <p className="smart">SMART WRIST WATCHES</p>
            <p className="lorem">Fusce egestas elit eget lorem</p>
            <input type="submit" value="Shop Now" className="send_Header" />
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
            <nav
              className="filter-top-nav navbar-expand-lg navbar-LIGHT bg-LIGHT"
              aria-label="Eighth navbar example"
            >
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                {/* <span className="navbar-toggler-icon"></span> */}
                <i className="fa-solid fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarsExample08">
                <ul className="navbar-nav1 me-auto mb-2 mb-lg-0 navpadle text-center">
                  <li className="nav-item navspace1">
                    <p className="filter">Filter</p>
                    <p className="clearall">Clear All</p>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="col-md-4">
            <div className="side_nav">
              <p className="sort-by">Sort By:</p>
              <div className="menu">
                <button className="toggle">Default Sorting</button>
                <ul className="list">
                  <li className="list-item">A to Z list View</li>
                  <li className="list-item">Z to A list View</li>
                  <li className="list-item">Low To Hight List View</li>
                  <li className="list-item">Hight To Low List View</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="end-div">
              <p className="reset">Reset</p>
              <BsFillGridFill />
              <BsList />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------- */}

      <nav className="navbar navbar-light bg-light fixed-top">
        <div
          className="offcanvas offcanvas-end text-bg-light"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="inner-padding">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Filter
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link nav-link1"
                    aria-current="page"
                    href="#"
                  >
                    All Categories
                  </a>
                  <ul className="inner_ul">
                    <li className="inner_li">Accessories</li>
                    <li className="inner_li">Babies</li>
                    <li className="inner_li">Beauty</li>
                    <li className="inner_li">Computer</li>
                    <li className="inner_li">Decoration</li>
                    <li className="inner_li">Electronics</li>
                    <li className="inner_li">Fashion</li>
                    <li className="inner_li">Food</li>
                    <li className="inner_li">Furniture</li>
                    <li className="inner_li">Kitchen</li>
                    <li className="inner_li">Medical</li>
                    <li className="inner_li">Sports</li>
                    <li className="inner_li">Food</li>
                    <li className="inner_li">Watches</li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link1" href="#">
                    Price
                  </a>
                  <ul className="inner_ul">
                    <li className="inner_li">Under $10.00</li>
                    <li className="inner_li">$10.00 - $50.00</li>
                    <li className="inner_li">$50.00 - $100.00</li>
                    <li className="inner_li">$100.00 - $200.00</li>
                  </ul>
                  <div className="end_inner_ul">
                    <input type="text" value="Max" className="max" />
                    <p className="dash">-</p>
                    <input type="text" value="Min" className="max" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="submit" value="Go" className="go" />
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link1" href="#">
                    Color
                  </a>
                  <div className="inner_checkbox">
                    <label class="outer_checkbox">
                      Blue
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="outer_checkbox">
                      Green
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="outer_checkbox">
                      Black
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="outer_checkbox">
                      Red
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="outer_checkbox">
                      White
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </li>
                <input type="submit" value="Reset" className="send_reset" />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Shop_2;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Shop_2.css";
import { BsFillGridFill, BsList } from "react-icons/bs";
// import $ from "jquery";
import star from "../Images/star.svg";
import ShopSub from "./Shop_Sub";
import { useRef } from "react";

const Shop_2 = () => {
  const catMenu = useRef(null);
  const [openSlide, setopenSlide] = useState("");

  const closeOpenMenus = (e) => {
    if (catMenu.current && openSlide && !catMenu.current.contains(e.target)) {
      setopenSlide(false);
    }
  };

  document.addEventListener('mousedown',closeOpenMenus)

  const [listGrid, setlistGrid] = useState(true);

  const gridTolist = () => {
    if (listGrid === true) {
      setlistGrid(false);
    }
  };

  const listTOgrid = () => {
    if (listGrid === false) {
      setlistGrid(true);
    }
  };

  return (
    <>
      {/* --------Sitemap------- */}
      <div className="container-fluid">
        <p className="s_header">
          <Link className="home_hover" to="/">
            Home
          </Link>
          &nbsp;&gt; Shop
        </p>

        <div className="main_banner">
          <div className="inner_text">
            <p className="collection">Accessories Collection</p>
            <p className="smart">SMART WRIST WATCHES</p>
            <p className="lorem">Fusce egestas elit eget lorem</p>
            <input
              type="button"
              defaultValue="Shop Now"
              className="send_Header"
            />
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

      {/* -------Top Category----- */}
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

      {/* ----------Main Header--------- */}
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
                <i
                  className="fa-solid fa-bars"
                  style={{ fontSize: "20px" }}
                ></i>
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
              {/* <div className="menu">
                <button className="toggle">Default Sorting</button>
                <ul className="list">
                  <li className="list-item">A to Z list View</li>
                  <li className="list-item">Z to A list View</li>
                  <li className="list-item">Low To Hight List View</li>
                  <li className="list-item">Hight To Low List View</li>
                </ul>
              </div> */}

              <label className="dropdown">
                <div className="dd-button">Default Sorting</div>

                <input type="checkbox" className="dd-input" id="test" />

                <ul className="dd-menu">
                  <li>A to Z list View</li>
                  <li>Z to A list View</li>
                  <li>Low To Hight List View</li>
                  <li>Hight To Low List View</li>
                </ul>
              </label>
            </div>
          </div>

          <div className="col-md-4">
            <div className="end-div">
              <p className="reset">Reset</p>
              <BsFillGridFill className="grid_btns" onClick={listTOgrid} />
              <BsList className="grid_btns" onClick={gridTolist} />
            </div>
          </div>
        </div>
      </div>

      {/* --------Main Content------ */}
      <div className="container-fluid second_part">
        {/* ------Desktop Sidebar------- */}
        <div className="dj">
          <Link className="nav-link nav-link1" aria-current="page">
            All Categories
          </Link>
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
          <Link className="nav-link nav-link1" href="#">
            Price
          </Link>
          <ul className="inner_ul">
            <li className="inner_li">Under $10.00</li>
            <li className="inner_li">$10.00 - $50.00</li>
            <li className="inner_li">$50.00 - $100.00</li>
            <li className="inner_li">$100.00 - $200.00</li>
          </ul>
          <div className="end_inner_ul">
            <input type="button" defaultValue="Max" className="max" />
            <p className="dash">-</p>
            <input type="button" defaultValue="Min" className="max" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" defaultValue="Go" className="go" />
          </div>
          <Link className="nav-link nav-link1" href="#">
            Color
          </Link>
          <div className="inner_checkbox">
            <label className="outer_checkbox">
              Blue
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="outer_checkbox">
              Green
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="outer_checkbox">
              Black
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="outer_checkbox">
              Red
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="outer_checkbox">
              White
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        {/* --------List View------ */}
        {/* <div div className="img">
          <div className="img1">
            <div className="non_image">
              <img
                src={require("../Images/popular-img1.png")}
                alt=" "
                className="inner_img"
              />
            </div>
            <div className="top_seller_cnt123">
              <h3>Instax Mini 9</h3>
              <div className="review-part123">
                <img src={star} alt="star" />
                <span>(10 Reviews)</span>
              </div>
              <h5>
                $45.00 <span>$50.00</span>
              </h5>
              <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>
              <p className="below_in_stoke">
                Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
                tincidunt vitae semper quis lectus. Aliquam id diam maecenas
                ultricies..
              </p>
              <div className="two_btn">
                <input
                  type="text"
                  defaultValue="Add To cart"
                  className="send_cart"
                />
                <input type="text" defaultValue="Buy It Now" className="buy" />
              </div>
            </div>
          </div>
          <div className="img1">
            <div className="non_image">
              <img
                src={require("../Images/popular-img1.png")}
                alt=" "
                className="inner_img"
              />
            </div>
            <div className="top_seller_cnt123">
              <h3>Instax Mini 9</h3>
              <div className="review-part123">
                <img src={star} alt="star" />
                <span>(10 Reviews)</span>
              </div>
              <h5>
                $45.00 <span>$50.00</span>
              </h5>
              <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>
              <p className="below_in_stoke">
                Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
                tincidunt vitae semper quis lectus. Aliquam id diam maecenas
                ultricies..
              </p>
              <div className="two_btn">
                <input
                  type="text"
                  defaultValue="Add To cart"
                  className="send_cart"
                />
                <input type="text" defaultValue="Buy It Now" className="buy" />
              </div>
            </div>
          </div>
          <div className="img1">
            <div className="non_image">
              <img
                src={require("../Images/popular-img2.png")}
                alt=" "
                className="inner_img"
              />
            </div>
            <div className="top_seller_cnt123">
              <h3>Instax Mini 9</h3>
              <div className="review-part123">
                <img src={star} alt="star" />
                <span>(10 Reviews)</span>
              </div>
              <h5>
                $45.00 <span>$50.00</span>
              </h5>
              <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>
              <p className="below_in_stoke">
                Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
                tincidunt vitae semper quis lectus. Aliquam id diam maecenas
                ultricies..
              </p>
              <div className="two_btn">
                <input
                  type="text"
                  defaultValue="Add To cart"
                  className="send_cart"
                />
                <input type="text" defaultValue="Buy It Now" className="buy" />
              </div>
            </div>
          </div>
          <div className="img1">
            <div className="non_image">
              <img
                src={require("../Images/popular-img3.png")}
                alt=" "
                className="inner_img"
              />
            </div>
            <div className="top_seller_cnt123">
              <h3>Instax Mini 9</h3>
              <div className="review-part123">
                <img src={star} alt="star" />
                <span>(10 Reviews)</span>
              </div>
              <h5>
                $45.00 <span>$50.00</span>
              </h5>
              <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>
              <p className="below_in_stoke">
                Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
                tincidunt vitae semper quis lectus. Aliquam id diam maecenas
                ultricies..
              </p>
              <div className="two_btn">
                <input
                  type="text"
                  defaultValue="Add To cart"
                  className="send_cart"
                />
                <input type="text" defaultValue="Buy It Now" className="buy" />
              </div>
            </div>
          </div>
          <div className="img1">
            <div className="non_image">
              <img
                src={require("../Images/popular-img4.png")}
                alt=" "
                className="inner_img"
              />
            </div>
            <div className="top_seller_cnt123">
              <h3>Instax Mini 9</h3>
              <div className="review-part123">
                <img src={star} alt="star" />
                <span>(10 Reviews)</span>
              </div>
              <h5>
                $45.00 <span>$50.00</span>
              </h5>
              <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>
              <p className="below_in_stoke">
                Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
                tincidunt vitae semper quis lectus. Aliquam id diam maecenas
                ultricies..
              </p>
              <div className="two_btn">
                <input
                  type="text"
                  defaultValue="Add To cart"
                  className="send_cart"
                />
                <input type="text" defaultValue="Buy It Now" className="buy" />
              </div>
            </div>
          </div>
          <div className="img1">
            <div className="non_image">
              <img
                src={require("../Images/popular-img5.png")}
                alt=" "
                className="inner_img"
              />
            </div>
            <div className="top_seller_cnt123">
              <h3>Instax Mini 9</h3>
              <div className="review-part123">
                <img src={star} alt="star" />
                <span>(10 Reviews)</span>
              </div>
              <h5>
                $45.00 <span>$50.00</span>
              </h5>
              <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>
              <p className="below_in_stoke">
                Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
                tincidunt vitae semper quis lectus. Aliquam id diam maecenas
                ultricies..
              </p>
              <div className="two_btn">
                <input
                  type="text"
                  defaultValue="Add To cart"
                  className="send_cart"
                />
                <input type="text" defaultValue="Buy It Now" className="buy" />
              </div>
            </div>
          </div>
          <div className="img1">
            <div className="non_image">
              <img
                src={require("../Images/popular-img6.png")}
                alt=" "
                className="inner_img"
              />
            </div>
            <div className="top_seller_cnt123">
              <h3>Instax Mini 9</h3>
              <div className="review-part123">
                <img src={star} alt="star" />
                <span>(10 Reviews)</span>
              </div>
              <h5>
                $45.00 <span>$50.00</span>
              </h5>
              <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>
              <p className="below_in_stoke">
                Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
                tincidunt vitae semper quis lectus. Aliquam id diam maecenas
                ultricies..
              </p>
              <div className="two_btn">
                <input
                  type="text"
                  defaultValue="Add To cart"
                  className="send_cart"
                />
                <input type="text" defaultValue="Buy It Now" className="buy" />
              </div>
            </div>
          </div>
          <div className="img1">
            <div className="non_image">
              <img
                src={require("../Images/popular-img7.png")}
                alt=" "
                className="inner_img"
              />
            </div>
            <div className="top_seller_cnt123">
              <h3>Instax Mini 9</h3>
              <div className="review-part123">
                <img src={star} alt="star" />
                <span>(10 Reviews)</span>
              </div>
              <h5>
                $45.00 <span>$50.00</span>
              </h5>
              <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>
              <p className="below_in_stoke">
                Ultrices eros in cursus turpis massa cursus mattis. Volutpat ac
                tincidunt vitae semper quis lectus. Aliquam id diam maecenas
                ultricies..
              </p>
              <div className="two_btn">
                <input
                  type="text"
                  defaultValue="Add To cart"
                  className="send_cart"
                />
                <input type="text" defaultValue="Buy It Now" className="buy" />
              </div>
            </div>
          </div>
        </div> */}

        {listGrid ? (
          <div className="Grid-view">
            <ShopSub />
          </div>
        ) : (
          <div div className="img">
            <div className="img1">
              <div className="non_image">
                <img
                  src={require("../Images/popular-img1.png")}
                  alt=" "
                  className="inner_img"
                />
              </div>
              <div className="top_seller_cnt123">
                <h3>Instax Mini 9</h3>
                <div className="review-part123">
                  <img src={star} alt="star" />
                  <span>(10 Reviews)</span>
                </div>
                <h5>
                  $45.00 <span>$50.00</span>
                </h5>
                <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>

                <div className="two_btn">
                  <input
                    type="button"
                    defaultValue="Add To cart"
                    className="send_cart"
                  />
                  <input
                    type="button"
                    defaultValue="Buy It Now"
                    className="buy"
                  />
                </div>
              </div>
            </div>
            <div className="img1">
              <div className="non_image">
                <img
                  src={require("../Images/popular-img1.png")}
                  alt=" "
                  className="inner_img"
                />
              </div>
              <div className="top_seller_cnt123">
                <h3>Instax Mini 9</h3>
                <div className="review-part123">
                  <img src={star} alt="star" />
                  <span>(10 Reviews)</span>
                </div>
                <h5>
                  $45.00 <span>$50.00</span>
                </h5>
                <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>

                <div className="two_btn">
                  <input
                    type="button"
                    defaultValue="Add To cart"
                    className="send_cart"
                  />
                  <input
                    type="button"
                    defaultValue="Buy It Now"
                    className="buy"
                  />
                </div>
              </div>
            </div>
            <div className="img1">
              <div className="non_image">
                <img
                  src={require("../Images/popular-img2.png")}
                  alt=" "
                  className="inner_img"
                />
              </div>
              <div className="top_seller_cnt123">
                <h3>Instax Mini 9</h3>
                <div className="review-part123">
                  <img src={star} alt="star" />
                  <span>(10 Reviews)</span>
                </div>
                <h5>
                  $45.00 <span>$50.00</span>
                </h5>
                <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>

                <div className="two_btn">
                  <input
                    type="button"
                    defaultValue="Add To cart"
                    className="send_cart"
                  />
                  <input
                    type="button"
                    defaultValue="Buy It Now"
                    className="buy"
                  />
                </div>
              </div>
            </div>
            <div className="img1">
              <div className="non_image">
                <img
                  src={require("../Images/popular-img3.png")}
                  alt=" "
                  className="inner_img"
                />
              </div>
              <div className="top_seller_cnt123">
                <h3>Instax Mini 9</h3>
                <div className="review-part123">
                  <img src={star} alt="star" />
                  <span>(10 Reviews)</span>
                </div>
                <h5>
                  $45.00 <span>$50.00</span>
                </h5>
                <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>

                <div className="two_btn">
                  <input
                    type="button"
                    defaultValue="Add To cart"
                    className="send_cart"
                  />
                  <input
                    type="button"
                    defaultValue="Buy It Now"
                    className="buy"
                  />
                </div>
              </div>
            </div>
            <div className="img1">
              <div className="non_image">
                <img
                  src={require("../Images/popular-img4.png")}
                  alt=" "
                  className="inner_img"
                />
              </div>
              <div className="top_seller_cnt123">
                <h3>Instax Mini 9</h3>
                <div className="review-part123">
                  <img src={star} alt="star" />
                  <span>(10 Reviews)</span>
                </div>
                <h5>
                  $45.00 <span>$50.00</span>
                </h5>
                <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>

                <div className="two_btn">
                  <input
                    type="button"
                    defaultValue="Add To cart"
                    className="send_cart"
                  />
                  <input
                    type="button"
                    defaultValue="Buy It Now"
                    className="buy"
                  />
                </div>
              </div>
            </div>
            <div className="img1">
              <div className="non_image">
                <img
                  src={require("../Images/popular-img5.png")}
                  alt=" "
                  className="inner_img"
                />
              </div>
              <div className="top_seller_cnt123">
                <h3>Instax Mini 9</h3>
                <div className="review-part123">
                  <img src={star} alt="star" />
                  <span>(10 Reviews)</span>
                </div>
                <h5>
                  $45.00 <span>$50.00</span>
                </h5>
                <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>

                <div className="two_btn">
                  <input
                    type="button"
                    defaultValue="Add To cart"
                    className="send_cart"
                  />
                  <input
                    type="button"
                    defaultValue="Buy It Now"
                    className="buy"
                  />
                </div>
              </div>
            </div>
            <div className="img1">
              <div className="non_image">
                <img
                  src={require("../Images/popular-img6.png")}
                  alt=" "
                  className="inner_img"
                />
              </div>
              <div className="top_seller_cnt123">
                <h3>Instax Mini 9</h3>
                <div className="review-part123">
                  <img src={star} alt="star" />
                  <span>(10 Reviews)</span>
                </div>
                <h5>
                  $45.00 <span>$50.00</span>
                </h5>
                <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>

                <div className="two_btn">
                  <input
                    type="button"
                    defaultValue="Add To cart"
                    className="send_cart"
                  />
                  <input
                    type="button"
                    defaultValue="Buy It Now"
                    className="buy"
                  />
                </div>
              </div>
            </div>
            <div className="img1">
              <div className="non_image">
                <img
                  src={require("../Images/popular-img7.png")}
                  alt=" "
                  className="inner_img"
                />
              </div>
              <div className="top_seller_cnt123">
                <h3>Instax Mini 9</h3>
                <div className="review-part123">
                  <img src={star} alt="star" />
                  <span>(10 Reviews)</span>
                </div>
                <h5>
                  $45.00 <span>$50.00</span>
                </h5>
                <h6 style={{ padding: "5px 0", opacity: 0.6 }}>In Stoke</h6>

                <div className="two_btn">
                  <input
                    type="button"
                    defaultValue="Add To cart"
                    className="send_cart"
                  />
                  <input
                    type="button"
                    defaultValue="Buy It Now"
                    className="buy"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------Grid View----- */}
        {/* <div className="Grid-view">
          <Shop_Sub />
        </div> */}
      </div>

      {/* ------123----- */}
      <div className="container-fluid nothing">
        <h4 className="show123">Showing 1-12 of 61 Products</h4>
        <div className="page">
          &laquo;
          <span className="first_page">1</span>
          <span>2</span>
          <span>3</span>
          &raquo;
        </div>
      </div>

      {/* ---------Mobile Sidebar------------ */}

      <nav nav className="navbar navbar-light bg-light fixed-top">
        <div
          className="offcanvas offcanvas-end text-bg-light"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="inner-padding">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Filter
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link nav-link1"
                    aria-current="page"
                    href="#"
                  >
                    All Categories
                  </Link>
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
                  <Link className="nav-link nav-link1" href="#">
                    Price
                  </Link>
                  <ul className="inner_ul">
                    <li className="inner_li">Under $10.00</li>
                    <li className="inner_li">$10.00 - $50.00</li>
                    <li className="inner_li">$50.00 - $100.00</li>
                    <li className="inner_li">$100.00 - $200.00</li>
                  </ul>
                  <div className="end_inner_ul">
                    <input type="text" defaultValue="Max" className="max" />
                    <p className="dash">-</p>
                    <input type="text" defaultValue="Min" className="max" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" defaultValue="Go" className="go" />
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link1" href="#">
                    Color
                  </Link>
                  <div className="inner_checkbox">
                    <label className="outer_checkbox">
                      Blue
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="outer_checkbox">
                      Green
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="outer_checkbox">
                      Black
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="outer_checkbox">
                      Red
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="outer_checkbox">
                      White
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </li>
                <input
                  type="button"
                  defaultValue="Reset"
                  className="send_reset"
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Shop_2;

import React from "react";
import "../Styles/Product.css";
import r1 from "../Images/r1.svg";
import r2 from "../Images/r2.svg";
import r3 from "../Images/r3.svg";
import r4 from "../Images/r4.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slick from "./Slick";
import start from "../Images/star.svg"

const Product = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <>
      {/* remale-c33 - section */}

      <section>
        <div className="container-fluid">
          <div className="f-sec">
            {/* first-part */}

            <div className="f-part">
              <div className="f-part-inner">
                <Carousel className="main-slider">
                  <div className="img-inner">
                    <img className="r-img" src={r1} alt="" />
                  </div>
                  <div className="img-inner">
                    <img className="r-img" src={r2} alt="" />
                  </div>
                  <div className="img-inner">
                    <img className="r-img" src={r3} alt="" />
                  </div>
                  <div className="img-inner">
                    <img className="r-img" src={r4} alt="" />
                  </div>
                </Carousel>

                {/* real-me- seaction */}

                <div className="realme">
                  <h3>Realme C33 2023</h3>
                  <div className="price-sec">
                    <h3>$179.49</h3>
                    <h4>$209.99</h4>
                  </div>
                  <div className="stock">
                    <img src={require("../Images/right.png")} alt="" />
                    <h3>In Stock</h3>
                  </div>
                  <div className="info">
                    <div className="in1">
                      <p>
                        <strong>Category :</strong>
                        Electronics
                      </p>
                    </div>
                    <div className="in1">
                      <p>
                        <strong> SKU : </strong>
                        MS46891387
                      </p>
                    </div>
                    <div className="in1">
                      <p>
                        <strong>Tags : </strong> 3 Columns, 4 Columns, 5
                        Columns, 6 Columns, 7 <br />
                        Columns, 8Columns, Both Sidebar, Boxed, Full Width,{" "}
                        <br /> Horizontal, Infinite, Off Canvas, Right Sidebar
                      </p>
                    </div>
                  </div>
                  <div className="ind">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                  <div className="cart-now-btn">
                    <button className="cart">Add To cart</button>
                    <button className="buy">Buy It Now</button>
                  </div>
                  <hr />

                  <h6 className="b1">BRANDS: Honda</h6>
                  <h6 className="s1">SKU:VF577</h6>
                  <div className="soc">
                    <h6 className="share">SHARE : </h6>
                    <button>
                      {" "}
                      <img src={require("../Images/twi.png")} alt="" />
                    </button>
                    <button>
                      {" "}
                      <img src={require("../Images/fb.png")} alt="" />
                    </button>
                    <button>
                      {" "}
                      <img src={require("../Images/p.png")} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
              {/* slider-info */}
              {/* 1st */}
              <div className="info-slid">
                <section className="tab" id="first-tab">
                  <nav>
                    <a href="#first-tab " className="active">
                      Description
                    </a>
                    <a href="#second-tab">Specification</a>
                    <a href="#third-tab">Customer Reviews (1)</a>
                    <a href="#fourth-tab">Vendor Info</a>
                  </nav>
                  <div className="tab-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt arcu cursus vitae congue
                      mauris. Sagittis id consectetur purus ut. Tellus rutrum
                      tellus pelle Vel pretium lectus quam id leo in vitae
                      turpis massa.
                    </p>
                    <div className="tb-info">
                      <p>
                        ✓ Nunc nec porttitor turpis. In eu risus enim. In vitae
                        mollis elit.
                      </p>

                      <p>✓ Vivamus finibus vel mauris ut vehicula.</p>

                      <p>
                        ✓ Nullam a magna porttitor, dictum risus nec, faucibus
                        sapien.
                      </p>

                      <p>
                        ✓ Ultrices eros in cursus turpis massa tincidunt ante in
                        nibh mauris.
                      </p>
                    </div>
                  </div>
                </section>
                {/* 2nd */}
                <section className="tab" id="second-tab">
                  <nav>
                    <a href="#first-tab ">Description</a>
                    <a href="#second-tab" className="active">
                      Specification
                    </a>
                    <a href="#third-tab">Customer Reviews (1)</a>
                    <a href="#fourth-tab">Vendor Info</a>
                  </nav>
                  <div className="tab-box">
                    <div className="snd-info1">
                      <h6>Color </h6>
                      <p> Black, Blue, Green, Gray</p>
                    </div>
                    <div className="snd-info2">
                      <h6>Size</h6>
                      <p> Extra Large, Large, Medium, Small</p>
                    </div>
                  </div>
                </section>
                {/* 3rd */}
                <section className="tab" id="third-tab">
                  <nav>
                    <a href="#first-tab ">Description</a>
                    <a href="#second-tab">Specification</a>
                    <a href="#third-tab" className="active">
                      Customer Reviews (1)
                    </a>
                    <a href="#fourth-tab">Vendor Info</a>
                  </nav>
                  <div className="tab-box">
                    <h3>Submit Your Review</h3>
                    <p>
                      Your Email Address Will Not Be Published. Required Fields
                      Are Marked *
                    </p>
                    <div className="rat">
                      <h6>Your Rating : </h6>
                      <img src={start} alt="" />
                    </div>
                    <div className="rev">
                      <label className="review">
                        Write Your Review Here... :
                      </label>
                      <textarea className="review-area" rows="3"></textarea>
                    </div>
                    <div className="name-email">
                      <div className="name1">
                        <label className="review">your Name</label>
                        <textarea className="review-area" rows="2"></textarea>
                      </div>
                      <div className="email1">
                        <label className="review">Your Email</label>
                        <textarea className="review-area" rows="2"></textarea>
                      </div>
                    </div>
                    <div className="check-p">
                      <input type="checkbox" name="vehicle1" value="Bike" />
                      <label for="vehicle1">
                        Save My Name, Email, and Website In This Browser For The
                        Next Time I Comment.
                      </label>
                      <br></br>
                    </div>
                    <button className="sub">Submit Review</button>
                    <hr />
                    <div className="pro">
                      <img
                        className="pic"
                        src={require("../Images/person.png")}
                        alt=""
                      />
                      <div className="p-info">
                        <div className="p-name">
                          <h3 className="doe">John doe </h3>
                          <h6 className="march"> March 25, 2021 8:19</h6>
                        </div>
                        <img className="p-star" src={start} alt="" />
                        <p className="p-paragraph">
                          Fringilla urna porttitor rhoncus dolor purus. Luctus
                          venenatis lectus semper bibendum Diam maecenas
                          ultricies mi eget mauris. Nibh tellus molestie nunc
                          non isse faucibus .
                        </p>
                      </div>
                    </div>
                  </div>
                </section> 
                {/* 4th */}
                <section className="tab" id="fourth-tab">
                  <nav>
                    <a href="#first-tab ">Description</a>
                    <a href="#second-tab">Specification</a>
                    <a href="#third-tab">Customer Reviews (1)</a>
                    <a href="#fourth-tab" className="active">
                      Vendor Info
                    </a>
                  </nav>
                  <div className="tab-box">
                    <div className="nike">
                      <div className="n-pic">
                        <img src={require("../Images/nic.png")} alt="" />
                      </div>
                      <div className="n-info">
                        <div className="p-name">
                          <h3 className="doe">John doe </h3>
                          <h6 className="march"> March 25, 2021 8:19</h6>
                        </div>
                        <div className="star-rev">
                          <img className="r-star" src={start} alt="" />
                          <h6>(5 Review)</h6>
                        </div>
                      </div>
                    </div>
                    <div className="detail">
                      <div className="s-name">
                        <h6>Store Name : </h6>
                        <p> Trident Store</p>
                      </div>
                      <div className="add">
                        <h6>Address : </h6>
                        <p> London, United Kingdome (UK)</p>
                      </div>
                      <div className="phone">
                        <h6>Phone : </h6>
                        <p> 121555143553</p>
                      </div>
                    </div>
                    <p className="vendor-p1">
                      Fringilla urna porttitor rhoncus dolor purus. Luctus
                      venenatis lectus semper bibendum Diam maecenas ultricies
                      mi eget mauris. Nibh tellus molestie nunc non isse
                      faucibus Ultrices eros in cursus turpis massa tincidunt.
                      Ante in nibh mauri eger enim neque volu lectus. Etiam non
                      quam lacus suspendisse faucibus.Fringilla urna porttitor
                      rhoncus dolor purus. Luctus venenatis lectus semper
                      bibendum Diam maecenas ultricies mi eget mauris.
                    </p>
                    <p className="vendor-p2">
                      Fringilla urna porttitor rhoncus dolor purus. Luctus
                      venenatis lectus semper bibendum Diam maecenas ultricies
                      mi eget mauris. Nibh tellus molestie nunc non isse
                      faucibus Ultrices eros in cursus turpis massa tincidunt.
                      Ante in nibh mauri eger enim neque volu lectus. Etiam non
                      quam lacus suspendisse faucibus.Fringilla urna porttitor
                      rhoncus dolor purus. Luctus venenatis lectus semper
                      bibendum Diam maecenas ultricies mi eget mauris.
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* free-part */}

            <div className="third-sec">
              <div className="free-part">
                <div className="fp-1">
                  <img src={require("../Images/ship.png")} alt="" />
                  <div className="fp-inf0">
                    <h3>Free Shipping & Returns</h3>
                    <p>For all orders over $99</p>
                  </div>
                </div>
                <hr />
                <div className="fp-1">
                  <img src={require("../Images/secure.png")} alt="" />
                  <div className="fp-inf0">
                    <h3>Secure Payment</h3>
                    <p>We ensure secure payment</p>
                  </div>
                </div>
                <hr />
                <div className="fp-1">
                  <img src={require("../Images/money.png")} alt="" />
                  <div className="fp-inf0">
                    <h3>Money Back Guarantee</h3>
                    <p>Any back within 30 days</p>
                  </div>
                </div>
              </div>

              <div className="sale-ban">
                <img src={require("../Images/sale.jpg")} alt="" />
              </div>

              {/* product-slider-part */}
              <div className="p-inner">
                <h3 className="m-pro">More Products</h3>
                <div className="pro-slider-inner ">
                  {/* 
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
                  {/* <div className="pr-slider">
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
                    </div> */}
                </div>
                {/* -------- */}
              </div>
            </div>
          </div>
          <Slick />
          {/* latest products */}
          {/* <h3 className="latest">Latest Products</h3>
          <hr /> */}
        </div>
      </section>
    </>
  );
};

export default Product;

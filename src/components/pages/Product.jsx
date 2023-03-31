import React from "react";
import "../Styles/Product.css";
import start from "../Images/star.svg";

const Product = () => {
  return (
    <>
      {/* remale-c33 - section */}

      <section>
        <div className="container-fluid">
          <div className="f-sec">
            {/* first-part */}

            <div className="f-part">
              <div className="f-part-inner">
                <div className="f-realme">
                  <img src={require("../Images/realme1.jpg")} alt="" />
                  <div className="s-sec">
                    <img src={require("../Images/r1.png")} alt="" />
                    <img src={require("../Images/r2.png")} alt="" />
                    <img src={require("../Images/r3.png")} alt="" />
                    <img src={require("../Images/r4.png")} alt="" />
                  </div>
                </div>

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
                    <h6>SHARE : </h6>
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
                <section class="tab" id="first-tab">
                  <nav>
                    <a href="#first-tab " class="active">
                      Description
                    </a>
                    <a href="#second-tab">Specification</a>
                    <a href="#third-tab">Customer Reviews (1)</a>
                    <a href="#fourth-tab">Vendor Info</a>
                  </nav>
                  <div class="tab-box">
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
                <section class="tab" id="second-tab">
                  <nav>
                    <a href="#first-tab ">Description</a>
                    <a href="#second-tab" class="active">
                      Specification
                    </a>
                    <a href="#third-tab">Customer Reviews (1)</a>
                    <a href="#fourth-tab">Vendor Info</a>
                  </nav>
                  <div class="tab-box">
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
                <section class="tab" id="third-tab">
                  <nav>
                    <a href="#first-tab ">Description</a>
                    <a href="#second-tab">Specification</a>
                    <a href="#third-tab" class="active">
                      Customer Reviews (1)
                    </a>
                    <a href="#fourth-tab">Vendor Info</a>
                  </nav>
                  <div class="tab-box">
                    <p>Built with only CSS.</p>
                  </div>
                </section>
                {/* 4th */}
                <section class="tab" id="fourth-tab">
                  <nav>
                    <a href="#first-tab ">Description</a>
                    <a href="#second-tab">Specification</a>
                    <a href="#third-tab">Customer Reviews (1)</a>
                    <a href="#fourth-tab" class="active">
                      Vendor Info
                    </a>
                  </nav>
                  <div class="tab-box">
                    <p>Built with only CSS.</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

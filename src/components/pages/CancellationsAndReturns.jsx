import React from "react";
import { Link } from "react-router-dom";
import "../Styles/CancellationsAndReturns.css";

const CancellationsAndReturns = () => {
  return (
    <div className="container-fluid">
      <div className="payment_disc">
        <div className="pd_header">
          Elenext Help Center | 24x7 Customer Care Support
        </div>
        <p className="pd_ans">
          The Elenext Help Centre page lists out various types of issues that
          you may have encountered so that there can be quick resolution and you
          can go back to shopping online. For example, you can get more
          information regarding order tracking, delivery date changes, help with
          returns (and refunds), and much more. The Elenext Help Centre also
          lists out more information that you may need regarding Elenext Plus,
          payment, shopping, and more. The page has various filters listed out
          on the left-hand side so that you can get your queries solved quickly,
          efficiently, and without a hassle. You can get the Elenext Help Centre
          number or even access Elenext Help Centre support if you need
          professional help regarding various topics. The support executive will
          ensure speedy assistance so that your shopping experience is positive
          and enjoyable. You can even inform your loved ones of the support page
          so that they can properly get their grievances addressed as well. Once
          you have all your queries addressed, you can pull out your shopping
          list and shop for all your essentials in one place. You can shop
          during festive sales to get your hands on some unbelievable deals
          online. This information is updated on 05-Apr-23
        </p>
        <br />

        <div className="main-inner-content">
          <div className="type-of-issue">
            <h6>Type Of Issue</h6>
            <hr className="hr123" />
            <ul>
              <li>
                <Link> Help with your Issues</Link>
              </li>
              <li>
                <Link>Help with your order</Link>
              </li>
              <li>
                <Link>Help with other Issues</Link>
              </li>
            </ul>
            <hr className="hr123" />
            <h6>Type Of Issue</h6>
            <hr className="hr123" />
            <ul>
              <li>
                <Link>Order</Link>
              </li>
              <li>
                <Link>Cancellations and Returns</Link>
              </li>
              <li>
                <Link>Payment</Link>
              </li>
              <li>
                <Link>Shopping</Link>
              </li>
              <li>
                <Link>Wallet</Link>
              </li>
              <li>
                <Link>Others</Link>
              </li>
              <li>
                <Link>Insurance</Link>
              </li>
              <li>
                <Link>Elenext Quick</Link>
              </li>
              <li>
                <Link>SuperCoins</Link>
              </li>
              <li>
                <Link>Refurbished</Link>
              </li>
              <li>
                <Link>Elenext Travel</Link>
              </li>
              <li>
                <Link>Electric Vehicle</Link>
              </li>
              <li>
                <Link>Elenext Plus</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar">
            <div className="sidebar-shadow">
              <div className="upper-sitebar">Help Centre</div>

              {/* Not Login */}
              {/* <div className="shop-img">
                <img src={require("../Images/shop.png")} alt="" />
                <p className="login-text">
                  Login to get help with your recent orders and issues
                </p>
                <input
                  type="submit"
                  value="Login/Register"
                  className="send_Header"
                />
              </div> */}

              {/* Product Page(with login) */}
              {/* <div className="ali">
                <p className="login-text">
                  Select an item to track, check order status or call the
                  delivery agent
                </p>

                <div className="flex-photo">
                  <div className="pendrive">
                    <img src={require("../Images/pendrive.png")} alt=" " />
                  </div>
                  <div className="pendrive-other">
                    <p className="des">
                      TANTRA v5.0 Car Bluetooth Device with Audio Receiver,
                      Transmitter, Adapter Dongle, 3.5mm Connector
                    </p>
                    <p className="de">
                      <span className="dot"></span>&nbsp;&nbsp;Delivery expected
                      by Apr 09
                    </p>
                  </div>
                </div>
                <br />
                <p className="view-more">View More</p>
              </div> */}
            </div>
            <br />
            <div className="sidebar-shadow">
              <p className="sidebar-title">What issue are you facing?</p>
              <hr className="hr123" />
              <div className="ineer-button">
                <div className="flex-left">
                  <p className="inner-button-first">I want to track my order</p>
                  <p className="inner-button-second">
                    Check order status & call the delivery agent
                  </p>
                </div>
                <div className="flex-right">&gt;</div>
              </div>
              <hr className="hr123" />
              <div className="ineer-button">
                <div className="flex-left">
                  <p className="inner-button-first">
                    I want to manage my order
                  </p>
                  <p className="inner-button-second">
                    Cancel, change delivery date & address
                  </p>
                </div>
                <div className="flex-right">&gt;</div>
              </div>
              <hr className="hr123" />
              <div className="ineer-button">
                <div className="flex-left">
                  <p className="inner-button-first">
                    I want help with returns & refunds
                  </p>
                  <p className="inner-button-second">
                    Manage and track returns
                  </p>
                </div>
                <div className="flex-right">&gt;</div>
              </div>
              <hr className="hr123" />
              <div className="ineer-button">
                <div className="flex-left">
                  <p className="inner-button-first">
                    I want help with other issues
                  </p>
                  <p className="inner-button-second">
                    Offers, payment, Elenext Plus & all other issues
                  </p>
                </div>
                <div className="flex-right">&gt;</div>
              </div>
              <hr className="hr123" />
              <div className="ineer-button">
                <div className="flex-left">
                  <p className="inner-button-first">
                    I want to contact the seller
                  </p>
                </div>
                <div className="flex-right">&gt;</div>
              </div>
            </div>
            <br />
            <p className="bottom-text-want">
              Want to reach us old style? Here is our &nbsp;
              <span style={{ color: "#1C6DC1", cursor: "pointer" }}>
                postal address
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationsAndReturns;

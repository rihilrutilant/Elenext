import React, { useState } from "react";
import "../Styles/CancellationsAndReturns.css";

const CancellationsAndReturns = () => {

  const [Nav_toggle, setNav_toggle] = useState(false);
  const [Nav_toggle2, setNav_toggle2] = useState(false);
  const [Nav_toggle3, setNav_toggle3] = useState(false);
  const [Nav_toggle4, setNav_toggle4] = useState(false);
  const [Nav_toggle5, setNav_toggle5] = useState(false);
  const [Nav_toggle6, setNav_toggle6] = useState(false);
  const [Nav_toggle7, setNav_toggle7] = useState(false);
  const [Nav_toggle8, setNav_toggle8] = useState(false);
  const [Nav_toggle9, setNav_toggle9] = useState(false);
  const [Nav_toggle10, setNav_toggle10] = useState(false);
  const [Nav_toggle11, setNav_toggle11] = useState(false);
  const [Nav_toggle12, setNav_toggle12] = useState(false);
  const [Nav_toggle13, setNav_toggle13] = useState(false);
  const [Nav_toggle14, setNav_toggle14] = useState(false);

  const toggle_nav = () => {
    if (Nav_toggle === false) {
      setNav_toggle(true);
      setNav_toggle2(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle(false);
    }
  };

  const toggle_nav2 = () => {
    if (Nav_toggle2 === false) {
      setNav_toggle2(true);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle2(false);
    }
  };
  const toggle_nav3 = () => {
    if (Nav_toggle3 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(true);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle3(false);
    }
  };
  const toggle_nav4 = () => {
    if (Nav_toggle4 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(true);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle4(false);
    }
  };
  const toggle_nav5 = () => {
    if (Nav_toggle5 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(true);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle5(false);
    }
  };
  const toggle_nav6 = () => {
    if (Nav_toggle6 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(true);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle6(false);
    }
  };
  const toggle_nav7 = () => {
    if (Nav_toggle7 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(true);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle7(false);
    }
  };
  const toggle_nav8 = () => {
    if (Nav_toggle8 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(true);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle8(false);
    }
  };
  const toggle_nav9 = () => {
    if (Nav_toggle9 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(true);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle9(false);
    }
  };
  const toggle_nav10 = () => {
    if (Nav_toggle10 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(true);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle10(false);
    }
  };
  const toggle_nav11 = () => {
    if (Nav_toggle11 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(true);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle11(false);
    }
  };
  const toggle_nav12 = () => {
    if (Nav_toggle12 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(true);
      setNav_toggle13(false);
      setNav_toggle14(false);
    } else {
      setNav_toggle12(false);
    }
  };
  const toggle_nav13 = () => {
    if (Nav_toggle13 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(true);
      setNav_toggle14(false);
    } else {
      setNav_toggle13(false);
    }
  };
  const toggle_nav14 = () => {
    if (Nav_toggle14 === false) {
      setNav_toggle2(false);
      setNav_toggle(false);
      setNav_toggle3(false);
      setNav_toggle4(false);
      setNav_toggle5(false);
      setNav_toggle6(false);
      setNav_toggle7(false);
      setNav_toggle8(false);
      setNav_toggle9(false);
      setNav_toggle10(false);
      setNav_toggle11(false);
      setNav_toggle12(false);
      setNav_toggle13(false);
      setNav_toggle14(true);
    } else {
      setNav_toggle14(false);
    }
  };

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
          <div className="types-of-issue">
            <h6 className="type_of_issue">Type Of Issue</h6>
            <hr className="hr123" />
            <ul className="main_sidebar_upper_ul">
              <li className="main_sidebar_upper_li">
                <div
                  onClick={toggle_nav}
                  className={`${
                    Nav_toggle ? "active123123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  {" "}
                  Help with your Issues
                </div>
              </li>
            </ul>
            <hr className="hr123" />
            <h6 className="type_of_issue">Type Of Issue</h6>
            <hr className="hr123" />
            <ul className="main_sidebar_upper_ul">
              <li className="main_sidebar_upper_li">
                <div
                  onClick={toggle_nav2}
                  className={`${
                    Nav_toggle2 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Order
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav3}
                  className={`${
                    Nav_toggle3 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Cancellations and Returns
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav4}
                  className={`${
                    Nav_toggle4 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >Payment</div>
              </li>
              <li>
                <div
                  onClick={toggle_nav5 }
                  className={`${
                    Nav_toggle5 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >Shopping</div>
              </li>
              <li>
                <div
                  onClick={toggle_nav6}
                  className={`${
                    Nav_toggle6 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >Wallet</div>
              </li>
              <li>
                <div
                  onClick={toggle_nav7}
                  className={`${
                    Nav_toggle7 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >Others</div>
              </li>
              <li>
                <div
                  onClick={toggle_nav8}
                  className={`${
                    Nav_toggle8 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >Insurance</div>
              </li>
              <li>
                <div
                  onClick={toggle_nav9}
                  className={`${
                    Nav_toggle9 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >Elenext Quick</div>
              </li>
              <li>
                <div
                  onClick={toggle_nav10}
                  className={`${
                    Nav_toggle10 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >SuperCoins</div>
              </li>
              <li>
                <div
                  onClick={toggle_nav11}
                  className={`${
                    Nav_toggle11 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >Refurbished</div>
              </li>
              <li>
                <div
                  onClick={toggle_nav12}
                  className={`${
                    Nav_toggle12 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >Elenext Travel</div>
              </li>
              <li>
                <div
                  onClick={toggle_nav13}
                  className={`${
                    Nav_toggle13 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Electric Vehicle
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav14}
                  className={`${
                    Nav_toggle14 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >Elenext Plus</div>
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

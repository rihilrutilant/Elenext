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

  const [ShowOrder, setShowOrder] = useState(false)
  const [ShowIssues, setShowIssues] = useState(true)
  const [ShowCAndR, setShowCAndR] = useState(false)
  const [ShowPayment, setShowPayment] = useState(false)
  const [ShowShopping, setShowShopping] = useState(false)
  const [ShowWallet, setShowWallet] = useState(false)
  const [ShowOthers, setShowOthers] = useState(false)
  const [ShowInsurance, setShowInsurance] = useState(false)
  const [ShowQuick, setShowQuick] = useState(false)
  const [ShowSuperCoins, setShowSuperCoins] = useState(false)
  const [ShowRefurbished, setShowRefurbished] = useState(false)
  const [ShowTravel, setShowTravel] = useState(false)
  const [ShowVehicle, setShowVehicle] = useState(false)
  const [ShowPlus, setShowPlus] = useState(false)

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

      setShowIssues(true);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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


      setShowIssues(false);
      setShowOrder(true);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(true);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(true);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(true);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(true);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(true);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(true);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(true);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(true);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(true);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(true);
      setShowVehicle(false);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(true);
      setShowPlus(false);
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

      setShowIssues(false);
      setShowOrder(false);
      setShowCAndR(false);
      setShowPayment(false);
      setShowShopping(false);
      setShowWallet(false);
      setShowOthers(false);
      setShowInsurance(false);
      setShowQuick(false);
      setShowSuperCoins(false);
      setShowRefurbished(false);
      setShowTravel(false);
      setShowVehicle(false);
      setShowPlus(true);
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
            {/* <hr className="hr123" /> */}
            <ul className="main_sidebar_upper_ul">
              <li className="main_sidebar_upper_li">
                <div
                  onClick={toggle_nav}
                  className={`${Nav_toggle ? "active123" : "main_sidebar_upper_li_div"
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
            {/* <hr className="hr123" /> */}
            <ul className="main_sidebar_upper_ul">
              <li className="main_sidebar_upper_li">
                <div
                  onClick={toggle_nav2}
                  className={`${Nav_toggle2 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Order
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav3}
                  className={`${Nav_toggle3 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Cancellations and Returns
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav4}
                  className={`${Nav_toggle4 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Payment
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav5}
                  className={`${Nav_toggle5 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Shopping
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav6}
                  className={`${Nav_toggle6 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Wallet
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav7}
                  className={`${Nav_toggle7 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Others
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav8}
                  className={`${Nav_toggle8 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Insurance
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav9}
                  className={`${Nav_toggle9 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Elenext Quick
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav10}
                  className={`${Nav_toggle10 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  SuperCoins
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav11}
                  className={`${Nav_toggle11 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Refurbished
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav12}
                  className={`${Nav_toggle12 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Elenext Travel
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav13}
                  className={`${Nav_toggle13 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Electric Vehicle
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav14}
                  className={`${Nav_toggle14 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Elenext Plus
                </div>
              </li>
            </ul>
          </div>

          {
            ShowIssues
              ?
              <div className="sidebar">
                <div className="sidebar-shadow">
                  <div className="upper-sitebar">Help Centre</div>

                  {/* Not Login */}
                  <div className="shop-img">
                    <img src={require("../Images/shop.png")} alt="" />
                    <p className="login-text">
                      Login to get help with your recent orders and issues
                    </p>
                    <input
                      type="submit"
                      value="Login/Register"
                      className="send_Header"
                    />
                  </div>

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
              : ""
          }

          {
            ShowOrder
              ?
              <div className="sidebar">
                <div className="sidebar-shadow">
                  <div className="order_content">
                    <div className="car_header">Order</div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                            I missed the delivery of my order today. What should I do?
                          </button>
                        </h2>
                        <div id="flush-collapse1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Will the delivery be tried again if I'm not able to collect my order the first time?
                          </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Will the delivery be tried again if I'm not able to collect my order the first time?
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            The delivery of my order is delayed. What should I do?
                          </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                            What should I do if my order is approved but hasn't been shipped yet?
                          </button>
                        </h2>
                        <div id="flush-collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                            Can I take the shipment after opening and checking the contents inside?
                          </button>
                        </h2>
                        <div id="flush-collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                            How do I know my order has been confirmed?
                          </button>
                        </h2>
                        <div id="flush-collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                            How quickly can I get my order delivered?
                          </button>
                        </h2>
                        <div id="flush-collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                            My order has reached the nearest delivery hub, but why isn't it out for delivery yet?
                          </button>
                        </h2>
                        <div id="flush-collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9">
                            My order status shows 'Out for Delivery, but I haven't got it yet. When will I get it?
                          </button>
                        </h2>
                        <div id="flush-collapse9" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10" aria-expanded="false" aria-controls="flush-collapse10">
                            Why can't I track my order even though it has been shipped?
                          </button>
                        </h2>
                        <div id="flush-collapse10" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse11" aria-expanded="false" aria-controls="flush-collapse11">
                            What should I do if I don't get the invoice for my order?
                          </button>
                        </h2>
                        <div id="flush-collapse11" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse12" aria-expanded="false" aria-controls="flush-collapse12">
                            How do I get invoices for my previous orders without having to check my e-mails?
                          </button>
                        </h2>
                        <div id="flush-collapse12" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse13" aria-expanded="false" aria-controls="flush-collapse13">
                            Should I call Elenext's Customer Care for installation once my product is delivered?
                          </button>
                        </h2>
                        <div id="flush-collapse13" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse14" aria-expanded="false" aria-controls="flush-collapse14">
                            Will my product be installed by the brand or Elenext? If it is installed by Elenext, will it affect the warranty of the product?
                          </button>
                        </h2>
                        <div id="flush-collapse14" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse15" aria-expanded="false" aria-controls="flush-collapse15">
                            How will my order be delivered?
                          </button>
                        </h2>
                        <div id="flush-collapse15" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse16" aria-expanded="false" aria-controls="flush-collapse16">
                            Why is the 'Cash on Delivery payment mode not available at my location?
                          </button>
                        </h2>
                        <div id="flush-collapse16" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse17" aria-expanded="false" aria-controls="flush-collapse17">
                            Where can I find the seller's returns policy?
                          </button>
                        </h2>
                        <div id="flush-collapse17" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse18" aria-expanded="false" aria-controls="flush-collapse18">
                            What does the tag 'Imported' beside a product mean?
                          </button>
                        </h2>
                        <div id="flush-collapse18" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse19" aria-expanded="false" aria-controls="flush-collapse19">
                            How can I place an order?
                          </button>
                        </h2>
                        <div id="flush-collapse19" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse20" aria-expanded="false" aria-controls="flush-collapse20">
                            I have a complaint about the courier executive who came to deliver my order.
                          </button>
                        </h2>
                        <div id="flush-collapse20" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false" aria-controls="flush-collapse21">
                            What should I do if a service centre denied my request to repair the product?
                          </button>
                        </h2>
                        <div id="flush-collapse21" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse22" aria-expanded="false" aria-controls="flush-collapse22">
                            Can I get my order delivered faster?
                          </button>
                        </h2>
                        <div id="flush-collapse22" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse23" aria-expanded="false" aria-controls="flush-collapse23">
                            How is a 'business day' different from a regular day?
                          </button>
                        </h2>
                        <div id="flush-collapse23" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse24" aria-expanded="false" aria-controls="flush-collapse24">
                            What is the estimated delivery time?
                          </button>
                        </h2>
                        <div id="flush-collapse24" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse25" aria-expanded="false" aria-controls="flush-collapse25">
                            How can I trust that the groceries that will be delivered are quality checked and fresh?
                          </button>
                        </h2>
                        <div id="flush-collapse25" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse26" aria-expanded="false" aria-controls="flush-collapse26">
                            My package shows as delivered but I can't find it, what should I do?
                          </button>
                        </h2>
                        <div id="flush-collapse26" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse27" aria-expanded="false" aria-controls="flush-collapse27">
                            Why was my package not delivered?
                          </button>
                        </h2>
                        <div id="flush-collapse27" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse28" aria-expanded="false" aria-controls="flush-collapse28">
                            What do the different order statuses in My Orders' mean?
                          </button>
                        </h2>
                        <div id="flush-collapse28" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse29" aria-expanded="false" aria-controls="flush-collapse29">
                            What is GSTIN Invoicing feature?
                          </button>
                        </h2>
                        <div id="flush-collapse29" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse30" aria-expanded="false" aria-controls="flush-collapse30">
                            Who are all eligible for this GSTIN feature?
                          </button>
                        </h2>
                        <div id="flush-collapse30" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              :
              ""
          }

          {
            ShowCAndR
              ?
              <div>
                this is Cancellations and Returns page
              </div>
              :
              ""
          }

          {
            ShowPayment
              ?
              <div>
                this is Payment page
              </div>
              :
              ""
          }

          {
            ShowShopping
              ?
              <div>
                this is Shopping page
              </div>
              :
              ""
          }

          {
            ShowWallet
              ?
              <div>
                this is Wallet page
              </div>
              :
              ""
          }

          {
            ShowOthers
              ?
              <div>
                this is Others page
              </div>
              :
              ""
          }

          {
            ShowInsurance
              ?
              <div>
                this is Insurance page
              </div>
              :
              ""
          }

          {
            ShowQuick
              ?
              <div>
                this is Elenext Quick page
              </div>
              :
              ""
          }

          {
            ShowSuperCoins
              ?
              <div>
                this is SuperCoins page
              </div>
              :
              ""
          }

          {
            ShowRefurbished
              ?
              <div>
                this is Refurbished page
              </div>
              :
              ""
          }

          {
            ShowTravel
              ?
              <div>
                this is Elenext Travel page
              </div>
              :
              ""
          }

          {
            ShowVehicle
              ?
              <div>
                this is Electric Vehicle page
              </div>
              :
              ""
          }

          {
            ShowPlus
              ?
              <div>
                this is Elenext Plus page
              </div>
              :
              ""
          }
        </div>
      </div>
    </div>
  );
};

export default CancellationsAndReturns;

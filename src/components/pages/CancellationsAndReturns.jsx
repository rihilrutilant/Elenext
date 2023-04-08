import React, { useState } from "react";
import "../Styles/CancellationsAndReturns.css";
import WasThis from "./WasThis";

const CancellationsAndReturns = () => {
  const [Nav_toggle, setNav_toggle] = useState(false);
  const [Nav_toggle2, setNav_toggle2] = useState(false);
  const [Nav_toggle3, setNav_toggle3] = useState(false);
  const [Nav_toggle4, setNav_toggle4] = useState(false);
  const [Nav_toggle41, setNav_toggle41] = useState(false);
  const [Nav_toggle42, setNav_toggle42] = useState(false);
  const [Nav_toggle43, setNav_toggle43] = useState(false);
  const [Nav_toggle44, setNav_toggle44] = useState(false);
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

  const [ShowOrder, setShowOrder] = useState(false);
  const [ShowIssues, setShowIssues] = useState(true);
  const [ShowCAndR, setShowCAndR] = useState(false);
  const [ShowPayment, setShowPayment] = useState(false);
  const [ShowShopping, setShowShopping] = useState(false);
  const [ShowWallet, setShowWallet] = useState(false);
  const [ShowOthers, setShowOthers] = useState(false);
  const [ShowInsurance, setShowInsurance] = useState(false);
  const [ShowQuick, setShowQuick] = useState(false);
  const [ShowSuperCoins, setShowSuperCoins] = useState(false);
  const [ShowRefurbished, setShowRefurbished] = useState(false);
  const [ShowTravel, setShowTravel] = useState(false);
  const [ShowVehicle, setShowVehicle] = useState(false);
  const [ShowPlus, setShowPlus] = useState(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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

  const toggle_nav41 = () => {
    if (Nav_toggle14 === false) {
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

      setNav_toggle41(true);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(false);

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
      setNav_toggle41(false);
    }
  };

  const toggle_nav42 = () => {
    if (Nav_toggle42 === false) {
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
      setNav_toggle14(true);

      setNav_toggle41(false);
      setNav_toggle42(true);
      setNav_toggle43(false);
      setNav_toggle44(false);

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
      setNav_toggle42(false);
    }
  };

  const toggle_nav43 = () => {
    if (Nav_toggle43 === false) {
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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(true);
      setNav_toggle44(false);

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
      setNav_toggle43(false);
    }
  };

  const toggle_nav44 = () => {
    if (Nav_toggle44 === false) {
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

      setNav_toggle41(false);
      setNav_toggle42(false);
      setNav_toggle43(false);
      setNav_toggle44(true);

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
      setNav_toggle44(false);
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
                  className={`${
                    Nav_toggle ? "active123" : "main_sidebar_upper_li_div"
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
              <li className="car_p_toggle">
                <div
                  onClick={toggle_nav4}
                  className={`${
                    Nav_toggle4
                      ? "active123 car_111"
                      : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Payment
                </div>
                <ul className="car_payments">
                  <li
                    onClick={toggle_nav41}
                    className={`${
                      Nav_toggle41
                        ? "active123 car_111 car_sub_payments"
                        : "main_sidebar_upper_li_div car_sub_payments"
                    }`}
                  >
                    Bajaj Finserv EMI
                  </li>
                  <li
                    onClick={toggle_nav42}
                    className={`${
                      Nav_toggle42
                        ? "active123 car_111 car_sub_payments"
                        : "main_sidebar_upper_li_div car_sub_payments"
                    }`}
                  >
                    SBI Pre-approved loan
                  </li>
                  <li
                    onClick={toggle_nav43}
                    className={`${
                      Nav_toggle43
                        ? "active123 car_111 car_sub_payments"
                        : "main_sidebar_upper_li_div car_sub_payments"
                    }`}
                  >
                    Credit Card No Cost EMI
                  </li>
                  <li
                    onClick={toggle_nav44}
                    className={`${
                      Nav_toggle44
                        ? "active123 car_111 car_sub_payments"
                        : "main_sidebar_upper_li_div car_sub_payments"
                    }`}
                  >
                    Elenext Axis Bank Credit Card
                  </li>
                </ul>
              </li>
              <li>
                <div
                  onClick={toggle_nav5}
                  className={`${
                    Nav_toggle5 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Shopping
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav6}
                  className={`${
                    Nav_toggle6 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Wallet
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav7}
                  className={`${
                    Nav_toggle7 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Others
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav8}
                  className={`${
                    Nav_toggle8 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Insurance
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav9}
                  className={`${
                    Nav_toggle9 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Elenext Quick
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav10}
                  className={`${
                    Nav_toggle10 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  SuperCoins
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav11}
                  className={`${
                    Nav_toggle11 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Refurbished
                </div>
              </li>
              <li>
                <div
                  onClick={toggle_nav12}
                  className={`${
                    Nav_toggle12 ? "active123" : "main_sidebar_upper_li_div"
                  }`}
                  to="/CancellationsAndReturns"
                >
                  Elenext Travel
                </div>
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
                >
                  Elenext Plus
                </div>
              </li>
            </ul>
          </div>

          {ShowIssues ? (
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
                    <p className="inner-button-first">
                      I want to track my order
                    </p>
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
          ) : (
            ""
          )}

          {ShowOrder ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Order</div>
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse1"
                          aria-expanded="false"
                          aria-controls="flush-collapse1"
                        >
                          I missed the delivery of my order today. What should I
                          do?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The courier service delivering your order usually
                            tries to deliver on the next business day in case
                            you miss a delivery. You can check your SMS for more
                            details on when the courier service will try to
                            deliver again.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Will the delivery be tried again if I'm not able to
                          collect my order the first time?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Couriers make sure that the delivery is re-attempted
                            the next working day if you can't collect your order
                            the first time.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          The delivery of my order is delayed. What should I do?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            On the rare occasion that your order is delayed,
                            please check your email & messages for updates. A
                            new delivery timeframe will be shared with you and
                            you can also track its status by visiting My Orders.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse4"
                          aria-expanded="false"
                          aria-controls="flush-collapse4"
                        >
                          What should I do if my order is approved but hasn't
                          been shipped yet?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Sellers usually ship orders 1-2 business days before
                            the delivery date so that they reach you on time. In
                            case your order hasn't been shipped within this time
                            please contact our Customer Support so that we can
                            look into it.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse5"
                          aria-expanded="false"
                          aria-controls="flush-collapse5"
                        >
                          Can I take the shipment after opening and checking the
                          contents inside?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            As per company policy, a shipment can't be opened
                            before delivery, but you can accept the shipment and
                            get in touch with us later in case you have any
                            concerns.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse6"
                          aria-expanded="false"
                          aria-controls="flush-collapse6"
                        >
                          How do I know my order has been confirmed?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            An e-mail & SMS will be sent once you've
                            successfully placed your order. We'll also let you
                            know as soon as the seller ships the item(s) to you
                            along with the tracking number(s) for your
                            shipment(s). You can track your orders from the 'My
                            Orders' section on your Elenext account.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse7"
                          aria-expanded="false"
                          aria-controls="flush-collapse7"
                        >
                          How quickly can I get my order delivered?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Orders will be delivered by the date you see on the
                            product page for your location.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse8"
                          aria-expanded="false"
                          aria-controls="flush-collapse8"
                        >
                          My order has reached the nearest delivery hub, but why
                          isn't it out for delivery yet?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse8"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The courier service delivering your order are
                            responsible for making sure that your order reaches
                            you within the delivery date. Rest assured, you'll
                            get an SMS once your shipment is out for delivery.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse9"
                          aria-expanded="false"
                          aria-controls="flush-collapse9"
                        >
                          My order status shows 'Out for Delivery, but I haven't
                          got it yet. When will I get it?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The courier service will contact you for delivery of
                            your order. Please check your SMS for more details.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse10"
                          aria-expanded="false"
                          aria-controls="flush-collapse10"
                        >
                          Why can't I track my order even though it has been
                          shipped?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse10"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Courier services usually take upto 24 hours to
                            activate tracking for an order once it's shipped.
                            Please check again after the mentioned time frame.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse11"
                          aria-expanded="false"
                          aria-controls="flush-collapse11"
                        >
                          What should I do if I don't get the invoice for my
                          order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse11"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Sellers send a hard copy of the invoice in the
                            shipments. A soft copy is also emailed to you within
                            24 hours of delivery in the delivery confirmation
                            email sent to your registered email ID. You can also
                            visit My Account › My Orders page to get invoices
                            for your orders.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse12"
                          aria-expanded="false"
                          aria-controls="flush-collapse12"
                        >
                          How do I get invoices for my previous orders without
                          having to check my e-mails?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse12"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can easily send invoices to your email ID from
                            your Elenext account. To do so, visit My Account ›
                            Orders, choose the order for which you'd like the
                            invoice for and click on the 'E-mail Invoice'
                            option.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse13"
                          aria-expanded="false"
                          aria-controls="flush-collapse13"
                        >
                          Should I call Elenext's Customer Care for installation
                          once my product is delivered?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse13"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To make sure that you have a smooth and hassle-free
                            experience, the installation is automatically
                            arranged for your product by the seller within 2-5
                            business after the item is delivered. You will also
                            get an SMS with the exact installation details after
                            delivery.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse14"
                          aria-expanded="false"
                          aria-controls="flush-collapse14"
                        >
                          Will my product be installed by the brand or Elenext?
                          If it is installed by Elenext, will it affect the
                          warranty of the product?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse14"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To make sure that you have a smooth and hassle-free
                            experience, the installation is automatically
                            arranged for your product by the seller within 2-5
                            business after the item is delivered. You will also
                            get an SMS with the exact installation details after
                            delivery.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse15"
                          aria-expanded="false"
                          aria-controls="flush-collapse15"
                        >
                          How will my order be delivered?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse15"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            All orders are shipped by sellers through courier
                            services who deliver the packages to your doorstep
                            or the nearest pick-up store if the option is
                            selected.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse16"
                          aria-expanded="false"
                          aria-controls="flush-collapse16"
                        >
                          Why is the 'Cash on Delivery payment mode not
                          available at my location?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse16"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Availability of the 'Cash on Delivery' payment mode
                            depends on the courier services delivering to your
                            location. Please enter your pin code on the product
                            page to check if this payment mode is available at
                            your location. Courier service providers also have
                            limits on the amount you can pay through cash on
                            delivery based on the destination and your order
                            could have exceeded this limit.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse17"
                          aria-expanded="false"
                          aria-controls="flush-collapse17"
                        >
                          Where can I find the seller's returns policy?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse17"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div> */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse18"
                          aria-expanded="false"
                          aria-controls="flush-collapse18"
                        >
                          What does the tag 'Imported' beside a product mean?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse18"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Sometimes items have to be sourced by sellers from
                            their international partners. Such items have the
                            tag 'Imported' on the product page and can take at
                            least 10 or more days to be delivered.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse19"
                          aria-expanded="false"
                          aria-controls="flush-collapse19"
                        >
                          How can I place an order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse19"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To place an order, please follow these steps: 1.
                            Select the product you'd like to buy and 'Check
                            Availability at' your preferred pincode 2. Add
                            products to your cart or just hit 'Buy Now' 3.
                            Choose or 'Add delivery address'. Use a preferred
                            payment mode and confirm the order
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse20"
                          aria-expanded="false"
                          aria-controls="flush-collapse20"
                        >
                          I have a complaint about the courier executive who
                          came to deliver my order.
                        </button>
                      </h2>
                      <div
                        id="flush-collapse20"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can contact our Customer Support team with the
                            details and we will get in touch with the courier
                            service provider to resolve your complaint.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse21"
                          aria-expanded="false"
                          aria-controls="flush-collapse21"
                        >
                          What should I do if a service centre denied my request
                          to repair the product?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse21"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please contact our Customer Support with the service
                            centre details so that we can look into this.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse22"
                          aria-expanded="false"
                          aria-controls="flush-collapse22"
                        >
                          Can I get my order delivered faster?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse22"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Your order will get delivered on or before the
                            delivery date promised at the time of placing the
                            order.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse23"
                          aria-expanded="false"
                          aria-controls="flush-collapse23"
                        >
                          How is a 'business day' different from a regular day?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse23"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Business days are otherwise known as working days of
                            the week. The expected date of delivery is
                            calculated based on business days. Typically, these
                            include Monday through Saturday. Public holidays and
                            Sundays are usually not considered.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse24"
                          aria-expanded="false"
                          aria-controls="flush-collapse24"
                        >
                          What is the estimated delivery time?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse24"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Sellers generally procure and ship the items within
                            the time specified on the product page. Business
                            days exclude public holidays and Sundays. Estimated
                            delivery time depends on the following factors: -
                            The seller offering the product- Product's
                            availability with the seller - The destination to
                            which you want the order shipped to and location of
                            the seller You can check the expected delivery date
                            of your order(s) on the 'My Orders' section of your
                            Elenext account on our website, app, or mobile site.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse25"
                          aria-expanded="false"
                          aria-controls="flush-collapse25"
                        >
                          How can I trust that the groceries that will be
                          delivered are quality checked and fresh?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse25"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Groceries on Elenext are available from top brands
                            such as HUL, P&G, ITC etc. which are renowned for
                            their quality products.Seller also checks the
                            freshness of groceries when they receive the stock
                            from vendors and before the dispatch of items in
                            order to ensure that only the best produce and
                            packaged groceries reach you.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse26"
                          aria-expanded="false"
                          aria-controls="flush-collapse26"
                        >
                          My package shows as delivered but I can't find it,
                          what should I do?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse26"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If your tracking information shows that your package
                            was delivered, but you can't find it: Check your
                            phone for any notification about attempted
                            delivery.See if any of your
                            neighbours/friends/relatives/house owner/security
                            guard has collected your product on your behalf.Wait
                            until the end of the day— sometimes packages can
                            show as delivered while still in transit. In the
                            unlikely event of you still not being able to locate
                            your item, please contact us and we will be happy to
                            help.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse27"
                          aria-expanded="false"
                          aria-controls="flush-collapse27"
                        >
                          Why was my package not delivered?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse27"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Sometimes, a package cannot be delivered due to one
                            of the following reasons:Incorrect Address: If the
                            address is incorrect or outdated, the package is
                            usually returned to the seller by the courier
                            service provider or the unintended recipient. Please
                            double-check your address carefully when placing a
                            new order.To remove an outdated or incorrect address
                            from your account, go to My Account &gt; My
                            Addresses. Click on the 3-dot button beside the
                            address you want to modify and select 'Edit' and
                            then Choose 'Save Changes'. Other Address Problems:
                            In rare cases, it is also possible that the address
                            label was difficult to decipher during the shipping
                            and handling process, or that the courier service
                            left the package at a different address than what
                            was printed on the label. Failed Delivery Attempts:
                            Most of the seller's partnered courier service
                            providers make more than one attempt to deliver a
                            package. If nobody is available to accept the
                            delivery after multiple attempts, the package is
                            returned to the seller. Damaged During Transit: If a
                            package is damaged on its way to you, the courier
                            service provider will return it to the seller
                            without attempting delivery. Note: A package once
                            returned to the seller cannot be delivered again by
                            the courier service provider. Please place a new
                            order on our website or app if you would still like
                            to purchase the item.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse28"
                          aria-expanded="false"
                          aria-controls="flush-collapse28"
                        >
                          What do the different order statuses in My Orders'
                          mean?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse28"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The different order statuses are as mentioned below:
                            Approved: Order you have placed for an item is
                            confirmed by the seller Ready to Ship: Your item is
                            packed and ready for pick up by a courier service
                            provider Dispatched: Your item has been picked up
                            from the seller by the courier service provider and
                            is on its way to a logistic facility Shipped: Your
                            item is on its way to you Out for delivery: A Wish
                            master is out to deliver your order Delivered: Your
                            item has been delivered Return requested: You have
                            created a return request for the item which is
                            pending confirmation from the seller Returned: You
                            have returned the item for
                            refund/replacement/exchange.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse29"
                          aria-expanded="false"
                          aria-controls="flush-collapse29"
                        >
                          What is GSTIN Invoicing feature?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse29"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Through GSTIN Invoicing feature customers can enter
                            their business entity details and GSTIN associated
                            with the business entity in order to receive a tax
                            invoice containing these details to claim input tax
                            credit. Please note, this is available on select
                            products for business purchases sold by
                            participating sellers.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse30"
                          aria-expanded="false"
                          aria-controls="flush-collapse30"
                        >
                          Who are all eligible for this GSTIN feature?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse30"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Customers that have GSTIN registered for their
                            business entity can avail this feature. Please note
                            that this is currently available on select products
                            for business purchases sold by participating
                            sellers. Customers can enter GSTIN and business
                            entity name while placing the order to receive a tax
                            invoice containing these details to claim input tax
                            credit.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {ShowCAndR ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Order</div>
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse9"
                          aria-expanded="false"
                          aria-controls="flush-collapse9"
                        >
                          If I request for a replacement, when will I get it?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Visit My Orders to check the status of your
                            replacement. In most locations, the replacement item
                            is delivered to you at the time of pick-up. In all
                            other areas, the replacement is initiated after the
                            originally delivered item is picked up. Please check
                            the SMS & email we send you for your replacement
                            request for more details.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse1"
                          aria-expanded="false"
                          aria-controls="flush-collapse1"
                        >
                          Which products are not eligible for returns?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The following list of products that are not eligible
                            for returns as per the seller’s Returns Policy: Auto
                            Accessories, Automobiles, Bath and Spa, Baby Care,
                            Cleaning Products, Computer Accessories, Food and
                            Nutrition, Footwear Accessories, Gardening Products,
                            Health Care, Home Products, Hygiene, Inner-wear,
                            Jewellery, Music Instrument Accessories, Party
                            Supplies, Festive Supplies, Personal Care, Pet
                            Supplies, Sexual Wellness
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Can items be returned after the time period mentioned
                          in the seller's Returns Policy?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, sellers will not be able to accept returns after
                            the time period mentioned in the seller's Returns
                            Policy.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Do I have to return the freebie when I return a
                          product?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, the freebie has to be returned along with the
                            product.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          How do returns work?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can raise a request to return your items with
                            these simple steps: 1. Log into your Elenext account
                            2. Go to My Orders 3. Click on 'Return' against the
                            item you wish to return or exchange 4. Fill in the
                            details and raise a return request Once you raise a
                            request, you'll get an email and SMS confirming that
                            your request is being processed. Based on the item,
                            your request may be automatically approved or you
                            may be contacted for more details. If the request is
                            approved, the item will be picked up after which you
                            will get a replacement or refund. You can also track
                            the status of your return request instantly from the
                            'My Orders' section of your Elenext account.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse4"
                          aria-expanded="false"
                          aria-controls="flush-collapse4"
                        >
                          I see the 'Cancel' button but I can't click on it.
                          Why?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            A greyed out and disabled 'Cancel' button can mean
                            any one of the following: 1. The item has been
                            delivered already OR 2. The item is non-refundable
                            (e.g. Gift Card)
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse5"
                          aria-expanded="false"
                          aria-controls="flush-collapse5"
                        >
                          What is the Buyer Protection policy?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The Buyer Protection policy mediates buyer-seller
                            disputes. In case a seller declines your request for
                            a return of an item and you are not convinced with
                            the reason given, you can write to us at
                            resolution@elenext.com for Buyer Protection. You can
                            dispute the resolution that the seller has shared
                            for your issue until 45 days from the date of
                            delivery and concern is looked into by us on a
                            case-to-case basis.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse6"
                          aria-expanded="false"
                          aria-controls="flush-collapse6"
                        >
                          What should I do if I have an issue with my product
                          after the return period?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can get in touch with the brand or an authorised
                            service centre of the brand to claim the warranty
                            for your product (wherever applicable).
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse7"
                          aria-expanded="false"
                          aria-controls="flush-collapse7"
                        >
                          How can I return or exchange an item?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To return/exchange your order, follow these simple
                            steps: 1. Go to My Orders 2. Choose the item you
                            wish to return or exchange 3. Fill in the details 4.
                            Choose Request Return.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse10"
                          aria-expanded="false"
                          aria-controls="flush-collapse10"
                        >
                          When is a return of an item not possible?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse10"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Sellers cannot accept returns of item(s) in the
                            following cases: 1. When an item is damaged because
                            of use or when it is not in the same condition as
                            you received it 2. When any consumable item has been
                            used or installed 3. When anything is missing from
                            the package you've received including price tags,
                            labels, original packing, freebies & accessories 4.
                            When non-returnable items are involved such as
                            innerwear. lingerie etc. 5. When items are tampered
                            with or have missing serial numbers
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse11"
                          aria-expanded="false"
                          aria-controls="flush-collapse11"
                        >
                          How can I know the status of my refund?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse11"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can visit 'My Orders' to know the status of your
                            refund. For orders cancelled before shipping,
                            refunds are processed immediately. If the order has
                            been shipped. refund will be processed as soon as
                            the courier service provider confirms the return of
                            the item(s).
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse12"
                          aria-expanded="false"
                          aria-controls="flush-collapse12"
                        >
                          What are the modes of refund available after
                          cancellation?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse12"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The different refund modes available are: 1. PhonePe
                            Wallet - available for orders with select sellers.
                            You will get this option for eligible orders during
                            cancellation 2. Back to source - available for
                            orders with all sellers. The amount is refunded to
                            the payment mode that was originally used to pay for
                            the order 3. NEFT transfer - available for all
                            Cash-on-Delivery orders. As per policy, cash refunds
                            are not possible
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse13"
                          aria-expanded="false"
                          aria-controls="flush-collapse13"
                        >
                          When are refunds given?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse13"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Refunds are given when: - The seller cannot provide
                            a replacement- A dispute has been ruled in your
                            favour in-line with Buyer Protection- Sellers allow
                            refunds on select categories under certain
                            conditions Please check the seller's Returns Policy
                            on the product page for more details.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse14"
                          aria-expanded="false"
                          aria-controls="flush-collapse14"
                        >
                          I ordered a wrong item. Can I return it?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse14"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The sellers' return policies don't support the
                            return of item(s) ordered wrongly. You can refer the
                            respective seller's Returns policy on the product
                            page.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse15"
                          aria-expanded="false"
                          aria-controls="flush-collapse15"
                        >
                          What should I do if I find the package open or
                          tampered on delivery?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse15"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can request for the item to be replaced by
                            visiting 'My Orders'. Use the 'Return' option & fill
                            out the details of the issue so that we can help
                            you.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse16"
                          aria-expanded="false"
                          aria-controls="flush-collapse16"
                        >
                          Can I change the address for the pick-up the of
                          item(s) in my order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse16"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If the pincode of the new address is serviceable for
                            pick-up, the address can be changed while creating
                            the return. The address cannot be changed in case
                            the new address is not serviceable.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse17"
                          aria-expanded="false"
                          aria-controls="flush-collapse17"
                        >
                          Why have I been asked to ship the item?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse17"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            When pickup facility is not available for your
                            location as per the courier service providers, you
                            may be asked to ship the item back to the seller.
                            Since the seller can arrange for a refund or a
                            replacement only after the item reaches them, please
                            make sure that the item is sent to the address
                            mentioned in the return related email within 30 days
                            of the email being sent to you. The seller may not
                            be able to proceed with the return request if the
                            item does not reach the specified address within 30
                            days.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse18"
                          aria-expanded="false"
                          aria-controls="flush-collapse18"
                        >
                          What is the pickup process?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse18"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Once your return or replacement or exchange request
                            is accepted, the pickup of the originally delivered
                            product will be scheduled. An SMS with more details
                            will be sent to you on the day of the pickup. In
                            cases where pickup service is not available from the
                            courier service providers at your location, you may
                            be asked to ship the item back to the seller within
                            30 days of the return related email being sent to
                            you.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse19"
                          aria-expanded="false"
                          aria-controls="flush-collapse19"
                        >
                          I have requested for a return for my item. When will
                          it happen?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse19"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can now track the status of your return easily
                            right from your Elenext account or mobile app. Just
                            visit the 'My Orders' page to see its status along
                            with the date of pick-up and status of your refund
                            if applicable. You will also receive an email & SMS
                            with the details of your return.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse20"
                          aria-expanded="false"
                          aria-controls="flush-collapse20"
                        >
                          I have requested a replacement, when will I get it?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse20"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You may visit 'My Orders' to check the status of
                            your replacement. In most locations, the replacement
                            item is delivered to you at the time of pick-up. In
                            all other areas, the replacement is initiated after
                            the originally delivered item is picked up. Please
                            check the SMS & email that will be sent to you for
                            your replacement request for more details.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse21"
                          aria-expanded="false"
                          aria-controls="flush-collapse21"
                        >
                          I've still not received the refund in my bank account.
                        </button>
                      </h2>
                      <div
                        id="flush-collapse21"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If you have received a mail from us confirming your
                            refund request, it means that the refund has been
                            initiated. You can also contact your bank with the
                            ARN you would have received for an update on the
                            status of your refund. In the rare event of the
                            amount not being credited by the date promised, you
                            can contact us as we will work with the bank to get
                            it done.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse22"
                          aria-expanded="false"
                          aria-controls="flush-collapse22"
                        >
                          What are the refund timelines if I cancel or return a
                          product?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse22"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The refund timelines will depend on the payment
                            modes as listed below: Debit card - 7-9 Business
                            days Credit - 7-9 Business days Netbanking - 3-7
                            business days COD - IMPS, 1 Business days EMI
                            (Standard+No cost+Debit card) - 7- 9 Business days
                            Elenext Pay Later - 24 to 48 hours Gift Card - 24
                            hours PhonePe: PhonePe wallet - 24 hours PhonePe UPI
                            - 1 business day PhonePe Credit/Debit card - 7
                            business days Note: Refunds will be credited to the
                            payment source used at the time of placing an
                            order.The mode of refund in case of payment through
                            'Cash on Delivery' will be IMPS
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse23"
                          aria-expanded="false"
                          aria-controls="flush-collapse23"
                        >
                          How will I get my refund for returning an item I paid
                          for using 'Cash on Delivery' mode?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse23"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            For orders placed using 'Cash on Delivery' as the
                            payment mode, refunds can be processed to your bank
                            account via Immediate Payment Service (IMPS). You
                            can update the details of the bank account where you
                            would like to receive the refund while creating the
                            return request for an item. You will need to update
                            following information for the seller to process a
                            refund to your account: The Bank Account Number IFSC
                            Code Account Holder's Name Bank Branch Bank Name
                            IMPS refunds will typically be processed in one
                            business day by sellers.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse24"
                          aria-expanded="false"
                          aria-controls="flush-collapse24"
                        >
                          I have not received the reimbursement of my courier
                          charges. What should I do?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse24"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please follow the below-mentioned steps on our
                            website to upload a scanned copy of the receipt from
                            the courier service provider so that we can request
                            the seller for a reimbursement: Go to Elenext Help
                            Center and select the relevant order for which the
                            refund has been requested From the issue types,
                            choose 'Others' and select 'Email Us' Now click on
                            the attachment icon and select the image/document
                            you wish to upload Please include the return ID in
                            your email and click 'Send Email' After the
                            verification, the amount will be refunded to you as
                            a Gift Card in your Elenext account. Note: This
                            amount is not withdrawable to your bank account.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse25"
                          aria-expanded="false"
                          aria-controls="flush-collapse25"
                        >
                          How will I get my refund for returning an item I paid
                          for with Cash on Delivery?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse25"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            For your 'Cash on Delivery order, you will receive
                            the refund in the form of NEFT. Please update your
                            bank account details after you choose this option.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse26"
                          aria-expanded="false"
                          aria-controls="flush-collapse26"
                        >
                          How long does it take to cancel an order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse26"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Cancellation of item(s) in an order happens
                            immediately if the order hasn't been shipped yet by
                            the seller. If your order has been shipped, it will
                            be cancelled as soon as the courier service confirms
                            that the shipment is being returned to the seller.
                            Orders from certain categories cannot be cancelled
                            after 24 hours, please check the product page for
                            more details.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse27"
                          aria-expanded="false"
                          aria-controls="flush-collapse27"
                        >
                          What are the checks done for an item that I'm
                          returning?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse27"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            During pick-up, your product will be checked for the
                            following conditions:Complete Product, Unused
                            Product, Undamaged Product, Undamaged Product.{" "}
                            <br />
                            The field executive may refuse to accept the return
                            if any of the above conditions are not met. For any
                            products for which a refund is to be given, the
                            refund will be processed once the returned product
                            has been received by the seller.  View a complete
                            list of all non-returnable products here.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse28"
                          aria-expanded="false"
                          aria-controls="flush-collapse28"
                        >
                          Why do I see a Return fee applicable to the order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse28"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If your return requests are significantly higher
                            than most customers, a return fee will apply to your
                            order. This is levied to compensate sellers for the
                            huge losses they incur as part of each return
                            request. In case of an issue with the item, you can
                            choose to exchange or replace it instead of
                            returning it to avoid these fees. For more details,
                            you can click 'Know more' beside the return fee
                            information on the app at the time of creating a
                            return request.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse29"
                          aria-expanded="false"
                          aria-controls="flush-collapse29"
                        >
                          How is the Return Fee determined?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse29"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {ShowPayment ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Order</div>
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse9"
                          aria-expanded="false"
                          aria-controls="flush-collapse9"
                        >
                          What is Elenext's credit card EMI payment option?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            With Elenext ’s credit card EMI option, you can
                            choose to pay in easy instalments of 3, 6, 9, 12,
                            18, or 24 months, with credit cards from the
                            following banks: HDFC, Citi, ICICI, Kotak, Axis,
                            Induslnd, SBI, Standard Chartered HSBC *18 & 24
                            months EMI options are available from select banks
                            only. Please refer to the table below for more
                            details:
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse1"
                          aria-expanded="false"
                          aria-controls="flush-collapse1"
                        >
                          How can I order for large quantities of the product as
                          part of a corporate order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can write to corporatesales@Elenext.com for your
                            corporate gifting requirements.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          How can I label my saved cards?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, sellers will not be able to accept returns after
                            the time period mentioned in the seller's Returns
                            Policy.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          What is a 'card label'?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, the freebie has to be returned along with the
                            product.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          What is the 'Save Card' feature?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can raise a request to return your items with
                            these simple steps: 1. Log into your Elenext account
                            2. Go to My Orders 3. Click on 'Return' against the
                            item you wish to return or exchange 4. Fill in the
                            details and raise a return request Once you raise a
                            request, you'll get an email and SMS confirming that
                            your request is being processed. Based on the item,
                            your request may be automatically approved or you
                            may be contacted for more details. If the request is
                            approved, the item will be picked up after which you
                            will get a replacement or refund. You can also track
                            the status of your return request instantly from the
                            'My Orders' section of your Elenext account.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse4"
                          aria-expanded="false"
                          aria-controls="flush-collapse4"
                        >
                          How does Elenext prevent card fraud?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            A greyed out and disabled 'Cancel' button can mean
                            any one of the following: 1. The item has been
                            delivered already OR 2. The item is non-refundable
                            (e.g. Gift Card)
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse5"
                          aria-expanded="false"
                          aria-controls="flush-collapse5"
                        >
                          How do I pay using Elenext's credit card EMI option?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The Buyer Protection policy mediates buyer-seller
                            disputes. In case a seller declines your request for
                            a return of an item and you are not convinced with
                            the reason given, you can write to us at
                            resolution@elenext.com for Buyer Protection. You can
                            dispute the resolution that the seller has shared
                            for your issue until 45 days from the date of
                            delivery and concern is looked into by us on a
                            case-to-case basis.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse6"
                          aria-expanded="false"
                          aria-controls="flush-collapse6"
                        >
                          How is my EMI debited?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can get in touch with the brand or an authorised
                            service centre of the brand to claim the warranty
                            for your product (wherever applicable).
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse7"
                          aria-expanded="false"
                          aria-controls="flush-collapse7"
                        >
                          I have a query about the EMI charge. What should I do?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To return/exchange your order, follow these simple
                            steps: 1. Go to My Orders 2. Choose the item you
                            wish to return or exchange 3. Fill in the details 4.
                            Choose Request Return.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse10"
                          aria-expanded="false"
                          aria-controls="flush-collapse10"
                        >
                          What are the interest rates for the Credit card EMI
                          plans?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse10"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Sellers cannot accept returns of item(s) in the
                            following cases: 1. When an item is damaged because
                            of use or when it is not in the same condition as
                            you received it 2. When any consumable item has been
                            used or installed 3. When anything is missing from
                            the package you've received including price tags,
                            labels, original packing, freebies & accessories 4.
                            When non-returnable items are involved such as
                            innerwear. lingerie etc. 5. When items are tampered
                            with or have missing serial numbers
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse11"
                          aria-expanded="false"
                          aria-controls="flush-collapse11"
                        >
                          Which Credit cards are eligible for EMI?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse11"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can visit 'My Orders' to know the status of your
                            refund. For orders cancelled before shipping,
                            refunds are processed immediately. If the order has
                            been shipped. refund will be processed as soon as
                            the courier service provider confirms the return of
                            the item(s).
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse12"
                          aria-expanded="false"
                          aria-controls="flush-collapse12"
                        >
                          Can I pay with any Credit card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse12"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The different refund modes available are: 1. PhonePe
                            Wallet - available for orders with select sellers.
                            You will get this option for eligible orders during
                            cancellation 2. Back to source - available for
                            orders with all sellers. The amount is refunded to
                            the payment mode that was originally used to pay for
                            the order 3. NEFT transfer - available for all
                            Cash-on-Delivery orders. As per policy, cash refunds
                            are not possible
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse13"
                          aria-expanded="false"
                          aria-controls="flush-collapse13"
                        >
                          Can I use any Debit Card to pay for my order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse13"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Refunds are given when: - The seller cannot provide
                            a replacement- A dispute has been ruled in your
                            favour in-line with Buyer Protection- Sellers allow
                            refunds on select categories under certain
                            conditions Please check the seller's Returns Policy
                            on the product page for more details.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse14"
                          aria-expanded="false"
                          aria-controls="flush-collapse14"
                        >
                          Can I use the Cash on Delivery payment option for
                          every product I buy on Elenext?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse14"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The sellers' return policies don't support the
                            return of item(s) ordered wrongly. You can refer the
                            respective seller's Returns policy on the product
                            page.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse15"
                          aria-expanded="false"
                          aria-controls="flush-collapse15"
                        >
                          How can I get the 3D Secure password for my
                          Credit/Debit Card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse15"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can request for the item to be replaced by
                            visiting 'My Orders'. Use the 'Return' option & fill
                            out the details of the issue so that we can help
                            you.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse16"
                          aria-expanded="false"
                          aria-controls="flush-collapse16"
                        >
                          How can I pay with a saved Credit/Debit Card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse16"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If the pincode of the new address is serviceable for
                            pick-up, the address can be changed while creating
                            the return. The address cannot be changed in case
                            the new address is not serviceable.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse17"
                          aria-expanded="false"
                          aria-controls="flush-collapse17"
                        >
                          How can I pay for my order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse17"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            When pickup facility is not available for your
                            location as per the courier service providers, you
                            may be asked to ship the item back to the seller.
                            Since the seller can arrange for a refund or a
                            replacement only after the item reaches them, please
                            make sure that the item is sent to the address
                            mentioned in the return related email within 30 days
                            of the email being sent to you. The seller may not
                            be able to proceed with the return request if the
                            item does not reach the specified address within 30
                            days.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse18"
                          aria-expanded="false"
                          aria-controls="flush-collapse18"
                        >
                          How do I pay for my Cash-on-Delivery order if I choose
                          to pick up the product from the pick-up store?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse18"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Once your return or replacement or exchange request
                            is accepted, the pickup of the originally delivered
                            product will be scheduled. An SMS with more details
                            will be sent to you on the day of the pickup. In
                            cases where pickup service is not available from the
                            courier service providers at your location, you may
                            be asked to ship the item back to the seller within
                            30 days of the return related email being sent to
                            you.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse19"
                          aria-expanded="false"
                          aria-controls="flush-collapse19"
                        >
                          How do I pay using a credit or debit card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse19"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can now track the status of your return easily
                            right from your Elenext account or mobile app. Just
                            visit the 'My Orders' page to see its status along
                            with the date of pick-up and status of your refund
                            if applicable. You will also receive an email & SMS
                            with the details of your return.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse20"
                          aria-expanded="false"
                          aria-controls="flush-collapse20"
                        >
                          How does the 3D Secure password add security to my
                          online transactions?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse20"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You may visit 'My Orders' to check the status of
                            your replacement. In most locations, the replacement
                            item is delivered to you at the time of pick-up. In
                            all other areas, the replacement is initiated after
                            the originally delivered item is picked up. Please
                            check the SMS & email that will be sent to you for
                            your replacement request for more details.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse21"
                          aria-expanded="false"
                          aria-controls="flush-collapse21"
                        >
                          If I have a saved card on Elenext, will I be able to
                          use a new card for my next payment?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse21"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If you have received a mail from us confirming your
                            refund request, it means that the refund has been
                            initiated. You can also contact your bank with the
                            ARN you would have received for an update on the
                            status of your refund. In the rare event of the
                            amount not being credited by the date promised, you
                            can contact us as we will work with the bank to get
                            it done.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse22"
                          aria-expanded="false"
                          aria-controls="flush-collapse22"
                        >
                          What is a 3D Secure password?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse22"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The refund timelines will depend on the payment
                            modes as listed below: Debit card - 7-9 Business
                            days Credit - 7-9 Business days Netbanking - 3-7
                            business days COD - IMPS, 1 Business days EMI
                            (Standard+No cost+Debit card) - 7- 9 Business days
                            Elenext Pay Later - 24 to 48 hours Gift Card - 24
                            hours PhonePe: PhonePe wallet - 24 hours PhonePe UPI
                            - 1 business day PhonePe Credit/Debit card - 7
                            business days Note: Refunds will be credited to the
                            payment source used at the time of placing an
                            order.The mode of refund in case of payment through
                            'Cash on Delivery' will be IMPS
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse23"
                          aria-expanded="false"
                          aria-controls="flush-collapse23"
                        >
                          What is the amount I can shop for with Cash on
                          Delivery payment option?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse23"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            For orders placed using 'Cash on Delivery' as the
                            payment mode, refunds can be processed to your bank
                            account via Immediate Payment Service (IMPS). You
                            can update the details of the bank account where you
                            would like to receive the refund while creating the
                            return request for an item. You will need to update
                            following information for the seller to process a
                            refund to your account: The Bank Account Number IFSC
                            Code Account Holder's Name Bank Branch Bank Name
                            IMPS refunds will typically be processed in one
                            business day by sellers.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse24"
                          aria-expanded="false"
                          aria-controls="flush-collapse24"
                        >
                          What is Cash on Delivery?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse24"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please follow the below-mentioned steps on our
                            website to upload a scanned copy of the receipt from
                            the courier service provider so that we can request
                            the seller for a reimbursement: Go to Elenext Help
                            Center and select the relevant order for which the
                            refund has been requested From the issue types,
                            choose 'Others' and select 'Email Us' Now click on
                            the attachment icon and select the image/document
                            you wish to upload Please include the return ID in
                            your email and click 'Send Email' After the
                            verification, the amount will be refunded to you as
                            a Gift Card in your Elenext account. Note: This
                            amount is not withdrawable to your bank account.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse25"
                          aria-expanded="false"
                          aria-controls="flush-collapse25"
                        >
                          Why is my card being saved on Elenext?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse25"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            For your 'Cash on Delivery order, you will receive
                            the refund in the form of NEFT. Please update your
                            bank account details after you choose this option.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse26"
                          aria-expanded="false"
                          aria-controls="flush-collapse26"
                        >
                          What all card information does Elenext store?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse26"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Cancellation of item(s) in an order happens
                            immediately if the order hasn't been shipped yet by
                            the seller. If your order has been shipped, it will
                            be cancelled as soon as the courier service confirms
                            that the shipment is being returned to the seller.
                            Orders from certain categories cannot be cancelled
                            after 24 hours, please check the product page for
                            more details.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse27"
                          aria-expanded="false"
                          aria-controls="flush-collapse27"
                        >
                          Can I delete my saved cards?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse27"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            During pick-up, your product will be checked for the
                            following conditions:Complete Product, Unused
                            Product, Undamaged Product, Undamaged Product.{" "}
                            <br />
                            The field executive may refuse to accept the return
                            if any of the above conditions are not met. For any
                            products for which a refund is to be given, the
                            refund will be processed once the returned product
                            has been received by the seller.  View a complete
                            list of all non-returnable products here.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse28"
                          aria-expanded="false"
                          aria-controls="flush-collapse28"
                        >
                          How many cards can I save on Elenext?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse28"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If your return requests are significantly higher
                            than most customers, a return fee will apply to your
                            order. This is levied to compensate sellers for the
                            huge losses they incur as part of each return
                            request. In case of an issue with the item, you can
                            choose to exchange or replace it instead of
                            returning it to avoid these fees. For more details,
                            you can click 'Know more' beside the return fee
                            information on the app at the time of creating a
                            return request.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse29"
                          aria-expanded="false"
                          aria-controls="flush-collapse29"
                        >
                          What cards can I save on Elenext?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse29"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse30"
                          aria-expanded="false"
                          aria-controls="flush-collapse30"
                        >
                          How do I make a payment using a saved card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse30"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse31"
                          aria-expanded="false"
                          aria-controls="flush-collapse31"
                        >
                          If I have a saved card on Elenext, will I be able to
                          use a new card for my next payment?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse31"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse32"
                          aria-expanded="false"
                          aria-controls="flush-collapse32"
                        >
                          How can I delete my saved card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse32"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse33"
                          aria-expanded="false"
                          aria-controls="flush-collapse33"
                        >
                          What is a card label?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse33"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse34"
                          aria-expanded="false"
                          aria-controls="flush-collapse34"
                        >
                          How can I add a card label to my saved card?{" "}
                        </button>
                      </h2>
                      <div
                        id="flush-collapse34"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse35"
                          aria-expanded="false"
                          aria-controls="flush-collapse35"
                        >
                          What are the pre-requisites for using the saved card
                          feature?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse35"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse36"
                          aria-expanded="false"
                          aria-controls="flush-collapse36"
                        >
                          I had opted to save my card at the time of payment but
                          my card was not saved. Why?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse36"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse37"
                          aria-expanded="false"
                          aria-controls="flush-collapse37"
                        >
                          I typed an incorrect card number by mistake when
                          adding my card. How do I correct it?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse37"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse38"
                          aria-expanded="false"
                          aria-controls="flush-collapse38"
                        >
                          Can I use my saved cards for making a payment on
                          Elenext's mobile site/app?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse38"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse39"
                          aria-expanded="false"
                          aria-controls="flush-collapse39"
                        >
                          What if I do not want my cards to be imported?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse39"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse40"
                          aria-expanded="false"
                          aria-controls="flush-collapse40"
                        >
                          Can I use Credit/Debit Card to pay on Elenext through
                          the Elenext app?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse40"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse41"
                          aria-expanded="false"
                          aria-controls="flush-collapse41"
                        >
                          Can I combine the balance on my Gift Cards with Cash
                          on Delivery to pay for an order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse41"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The return fee is determined based on the selling
                            price of the product. Lower the selling price of the
                            product, lower the return fee and vice versa.
                          </p>
                          <br />
                          <WasThis />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {ShowShopping ? <div>this is Shopping page</div> : ""}

          {ShowWallet ? <div>this is Wallet page</div> : ""}

          {ShowOthers ? <div>this is Others page</div> : ""}

          {ShowInsurance ? <div>this is Insurance page</div> : ""}

          {ShowQuick ? <div>this is Elenext Quick page</div> : ""}

          {ShowSuperCoins ? <div>this is SuperCoins page</div> : ""}

          {ShowRefurbished ? <div>this is Refurbished page</div> : ""}

          {ShowTravel ? <div>this is Elenext Travel page</div> : ""}

          {ShowVehicle ? <div>this is Electric Vehicle page</div> : ""}

          {ShowPlus ? <div>this is Elenext Plus page</div> : ""}
        </div>
      </div>
    </div>
  );
};

export default CancellationsAndReturns;

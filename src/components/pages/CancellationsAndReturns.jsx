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
  const [Nav_toggle51, setNav_toggle51] = useState(false);
  const [Nav_toggle6, setNav_toggle6] = useState(false);
  const [Nav_toggle7, setNav_toggle7] = useState(false);
  const [Nav_toggle71, setNav_toggle71] = useState(false);
  const [Nav_toggle72, setNav_toggle72] = useState(false);
  const [Nav_toggle73, setNav_toggle73] = useState(false);
  const [Nav_toggle74, setNav_toggle74] = useState(false);
  const [Nav_toggle75, setNav_toggle75] = useState(false);
  const [Nav_toggle76, setNav_toggle76] = useState(false);
  const [Nav_toggle77, setNav_toggle77] = useState(false);
  const [Nav_toggle78, setNav_toggle78] = useState(false);
  const [Nav_toggle79, setNav_toggle79] = useState(false);
  const [Nav_toggle710, setNav_toggle710] = useState(false);
  const [Nav_toggle711, setNav_toggle711] = useState(false);
  const [Nav_toggle8, setNav_toggle8] = useState(false);
  const [Nav_toggle81, setNav_toggle81] = useState(false);
  const [Nav_toggle82, setNav_toggle82] = useState(false);
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

  const [ShowBajaj, setShowBajaj] = useState(false);
  const [ShowSBI, setShowSBI] = useState(false);
  const [ShowCredit, setShowCredit] = useState(false);
  const [ShowAxis, setShowAxis] = useState(false);
  const [ShowPhonepe, setPhonepe] = useState(false);

  const [ShowShipping, setShipping] = useState(false);
  const [ShowEleFirst, setEleFirst] = useState(false);
  const [ShowSellingOn, setSellingOn] = useState(false);
  const [ShowPReview, setPReview] = useState(false);
  const [ShowLogin, setLogin] = useState(false);
  const [ShowPandS, setPandS] = useState(false);
  const [ShowWarranty, setWarranty] = useState(false);
  const [ShowGiftCard, setGiftCard] = useState(false);
  const [ShowPickup, setPickup] = useState(false);
  const [ShowInstallation, setInstallation] = useState(false);
  const [ShowEleTravel, setEleTravel] = useState(false);
  const [ShowAgionLife, setAgionLife] = useState(false);
  const [ShowCovid19, setCovid19] = useState(false);

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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
    } else {
      setNav_toggle14(false);
    }
  };

  const toggle_nav41 = () => {
    if (Nav_toggle41 === false) {
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
      setNav_toggle51(false);

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
      setShowPlus(false);

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(true);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle14(false);

      setNav_toggle41(false);
      setNav_toggle42(true);
      setNav_toggle43(false);
      setNav_toggle44(false);
      setNav_toggle51(false);

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
      setShowPlus(false);

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(true);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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
      setShowPlus(false);

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(true);
      setShowAxis(false);
      setPhonepe(false);
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
      setNav_toggle51(false);

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
      setShowPlus(false);

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(true);
      setPhonepe(false);
    } else {
      setNav_toggle44(false);
    }
  };

  const toggle_nav51 = () => {
    if (Nav_toggle51 === false) {
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
      setNav_toggle51(true);

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
      setShowPlus(false);

      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(true);
    } else {
      setNav_toggle51(false);
    }
  };

  const toggle_nav71 = () => {
    if (Nav_toggle71 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(true);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(true);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle71(false);
    }
  };
  const toggle_nav72 = () => {
    if (Nav_toggle72 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(true);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(false);
      setEleFirst(true);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle72(false);
    }
  };
  const toggle_nav73 = () => {
    if (Nav_toggle73 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(true);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(true);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle73(false);
    }
  };
  const toggle_nav74 = () => {
    if (Nav_toggle74 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(true);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(true);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle74(false);
    }
  };
  const toggle_nav75 = () => {
    if (Nav_toggle75 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(true);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(true);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle75(false);
    }
  };
  const toggle_nav76 = () => {
    if (Nav_toggle76 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(true);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(true);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle76(false);
    }
  };
  const toggle_nav77 = () => {
    if (Nav_toggle77 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(true);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(true);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle77(false);
    }
  };
  const toggle_nav78 = () => {
    if (Nav_toggle78 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(true);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(true);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle78(false);
    }
  };
  const toggle_nav79 = () => {
    if (Nav_toggle79 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(true);
      setNav_toggle710(false);
      setNav_toggle711(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(true);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle79(false);
    }
  };
  const toggle_nav710 = () => {
    if (Nav_toggle710 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(true);
      setNav_toggle711(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(false);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(true);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle710(false);
    }
  };
  const toggle_nav711 = () => {
    if (Nav_toggle711 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(true);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(true);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(true);
      setAgionLife(false);
      setCovid19(false);
    } else {
      setNav_toggle711(false);
    }
  };

  const toggle_nav81 = () => {
    if (Nav_toggle81 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(true);
      setNav_toggle82(false);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(true);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(true);
      setCovid19(false);
    } else {
      setNav_toggle81(false);
    }
  };

  const toggle_nav82 = () => {
    if (Nav_toggle82 === false) {
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
      setNav_toggle51(false);
      setNav_toggle71(false);
      setNav_toggle72(false);
      setNav_toggle73(false);
      setNav_toggle74(false);
      setNav_toggle75(false);
      setNav_toggle76(false);
      setNav_toggle77(false);
      setNav_toggle78(false);
      setNav_toggle79(false);
      setNav_toggle710(false);
      setNav_toggle711(false);
      setNav_toggle81(false);
      setNav_toggle82(true);

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
      setShowPlus(false);

      setShowBajaj(false);
      setShowSBI(false);
      setShowCredit(false);
      setShowAxis(false);
      setPhonepe(false);
      setShipping(true);
      setEleFirst(false);
      setSellingOn(false);
      setPReview(false);
      setLogin(false);
      setPandS(false);
      setWarranty(false);
      setGiftCard(false);
      setPickup(false);
      setInstallation(false);
      setEleTravel(false);
      setAgionLife(false);
      setCovid19(true);
    } else {
      setNav_toggle82(false);
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
              <li className="car_p_toggle">
                <div
                  onClick={toggle_nav4}
                  className={`${Nav_toggle4
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
                    className={`${Nav_toggle41
                      ? "active123 car_111 car_sub_payments"
                      : "main_sidebar_upper_li_div car_sub_payments"
                      }`}
                  >
                    Bajaj Finserv EMI
                  </li>
                  <li
                    onClick={toggle_nav42}
                    className={`${Nav_toggle42
                      ? "active123 car_111 car_sub_payments"
                      : "main_sidebar_upper_li_div car_sub_payments"
                      }`}
                  >
                    SBI Pre-approved loan
                  </li>
                  <li
                    onClick={toggle_nav43}
                    className={`${Nav_toggle43
                      ? "active123 car_111 car_sub_payments"
                      : "main_sidebar_upper_li_div car_sub_payments"
                      }`}
                  >
                    Credit Card No Cost EMI
                  </li>
                  <li
                    onClick={toggle_nav44}
                    className={`${Nav_toggle44
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
                  className={`${Nav_toggle5 ? "active123" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Shopping
                </div>
              </li>
              <li className="wallet_p_toggle">
                <div
                  onClick={toggle_nav6}
                  className={`${Nav_toggle6
                    ? "active123 car_222"
                    : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Wallet
                </div>
                <ul className="wallet_phonepe">
                  <li
                    onClick={toggle_nav51}
                    className={`${Nav_toggle51
                      ? "active123 car_222 wallet_pay"
                      : "main_sidebar_upper_li_div wallet_pay"
                      }`}
                  >
                    Phone Pe
                  </li>
                </ul>
              </li>
              <li className="other_p_toggle">
                <div
                  onClick={toggle_nav7}
                  className={`${Nav_toggle7 ? "active123 other_700" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Others
                </div>
                <ul className="other_options">
                  <li
                    onClick={toggle_nav71}
                    className={`${Nav_toggle71
                      ? "active123 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav72}
                    className={`${Nav_toggle72
                      ? "active123 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav73}
                    className={`${Nav_toggle73
                      ? "active123 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav74}
                    className={`${Nav_toggle74
                      ? "active123 car_222 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav75}
                    className={`${Nav_toggle75
                      ? "active123 car_222 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav76}
                    className={`${Nav_toggle76
                      ? "active123 car_222 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav77}
                    className={`${Nav_toggle77
                      ? "active123 car_222 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav78}
                    className={`${Nav_toggle78
                      ? "active123 car_222 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav79}
                    className={`${Nav_toggle79
                      ? "active123 car_222 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav710}
                    className={`${Nav_toggle710
                      ? "active123 car_222 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav711}
                    className={`${Nav_toggle711
                      ? "active123 car_222 other_700 other_dropd"
                      : "main_sidebar_upper_li_div other_dropd"
                      }`}
                  >
                    Phone Pe
                  </li>
                </ul>
              </li>
              <li className="insurance_toggle">
                <div
                  onClick={toggle_nav8}
                  className={`${Nav_toggle8 ? "active123 insurance_800" : "main_sidebar_upper_li_div"
                    }`}
                  to="/CancellationsAndReturns"
                >
                  Insurance
                </div>
                <ul className="insurance_dropd">
                  <li
                    onClick={toggle_nav81}
                    className={`${Nav_toggle81
                      ? "active123 insurance_800 insurance_opt"
                      : "main_sidebar_upper_li_div insurance_opt"
                      }`}
                  >
                    Phone Pe
                  </li>
                  <li
                    onClick={toggle_nav82}
                    className={`${Nav_toggle82
                      ? "active123 insurance_800 insurance_opt"
                      : "main_sidebar_upper_li_div insurance_opt"
                      }`}
                  >
                    Phone Pe
                  </li>
                </ul>
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
                  <div className="car_header">Cancellations and Returns</div>
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
                  <div className="car_header">Payment</div>
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
                            You can specify a card label at the time of saving a
                            card on Elenext through the 'My Account' section.
                            You can also add/edit the label anytime through 'My
                            Saved Cards' in the 'My Account' section on Elenext.
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
                            A card label is a name you give to your card while
                            saving it on Elenext. This helps in identifying the
                            card at the time of making a payment. Even if you
                            don't specify a card label, you can still identify
                            the card by the first 2 and last 4 digits of the
                            card number which are visible to you when the saved
                            card is shown.
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
                            The 'Save Card' option lets you save your
                            credit/debit cards on your Flipkart account. This
                            helps you complete your transactions in a quick and
                            easy way.
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
                            Online payments are monitored by our systems for any
                            suspicious activity and some transactions are
                            verified through extensive checks if we find that
                            they are not authorised by the owner of the card.
                            When we're not able to rule fraud out in rare cases,
                            the transaction is kept on hold and we ask the
                            shopper to share relevant proofs. This is done to
                            make sure that the transaction is genuine and
                            authorised.
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
                            When you're prompted to choose a payment method for
                            your order, select EMI and then choose the bank and
                            the plan you would prefer. Enter your credit card
                            and follow the prompts. Once the payment is
                            authorised, your order will be processed and
                            shipped. <br />
                            You'll need to pay the total amount in the
                            predetermined number of instalments as per your
                            credit card billing cycles.Please note, an amount
                            equivalent to your card limit will be blocked on the
                            day of the transaction, your card limit will be
                            reset with every successful EMI payment.
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
                            If you have paid for your order using the EMI
                            payment mode, the full amount will be charged to
                            your card the day of the transaction. Within 7 days,
                            you will see a credit for the full amount. The first
                            EMI charge will occur subsequently. If your card's
                            billing date falls within those 7 working days, you
                            need to pay only the EMI amount to the bank.
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
                            You can get in touch with your card issuing bank to
                            know about EMI transaction charges as they may vary
                            across banks.
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
                            You will see the actual interest rates and the
                            amount charged by the bank for your credit card EMI
                            plan during checkout after choosing the EMI payment
                            method while placing your order.
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
                            EMI is available for Credit cards from the following
                            banks: ICICI, Citi, SBI, HDFC, Kotak,, Standard
                            Chartered, HSBC, Axis, IndusInd.
                            <br /> Please check the specific product page for
                            more details as this list is updated frequently.
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
                            You can choose to pay on Elenext with any Visa,
                            MasterCard or American Express credit card issued in
                            India.
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
                            You can choose to pay for your order on Elenext with
                            any Visa, MasterCard or Maestro Debit Card.
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
                            The availability of Cash on Delivery option depends
                            on factors like the delivery pincode, type of
                            products etc. Please enter your pin code on the
                            product page to check if CoD is available at your
                            location. If this option is available for your pin
                            code, you can shop for products up to ₹49,999 using
                            this.
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
                            You can get a 3D Secure password by registering your
                            Credit/Debit Card on your bank's website.
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
                            Your saved cards can be seen when you choose the
                            credit or debit card option to pay for your order.
                            Enter the CVV number of that card (we do not store
                            it) and click on the 'Pay' button. You'll also have
                            to enter the card's 3D Secure password to complete
                            the transaction.
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
                            You can choose to pay for an order using any of the
                            below methods: Cash on Delivery, Net Banking, Gift
                            Card, PhonePe Wallet Visa, MasterCard, Maestro and
                            American Express Credit or Debit cards issued in
                            India and 21 other countries
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
                            You can directly pay for your order at the pickup
                            outlet for Cash on Delivery orders.
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
                            You may choose the credit card or debit card option
                            to pay during checkout and enter the details when
                            prompted. You would need to keep your card number,
                            expiry date, three digit CVV number ready, which you
                            can find on your card. For added security, you'll
                            also need to use your card's online password that is
                            verified by Visa, MasterCard Secure Code etc.
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
                            The 3D Secure password is something that only you
                            would know, ensuring no one else can use your card
                            to shop online.
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
                            Yes. Even if you have saved your card on Elenext,
                            you always have the option to use any other
                            credit/debit card for making a payment.
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
                            A 3D Secure password adds an extra layer of security
                            through identity verification for your online Credit
                            & Debit card transactions (VISA & MasterCard).
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
                            You can shop up to Rs. 49,999 using Cash on Delivery
                            (CoD) option.
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
                            Cash on Delivery is a mode of payment in which you
                            can pay cash at the time of delivery of your order.
                            You can also pay using a credit card/ debit card if
                            the Courier Executive carries a swiping machine.
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
                            It's quicker. You can save the hassle of typing in
                            the complete card information every time you shop on
                            Elenext by saving your card details. You can make
                            your payment by selecting the saved card of your
                            choice at checkout. While this is obviously faster,
                            it is also very secure.
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
                            We only store your card number, cardholder name and
                            card expiry date. We do not store your card's CVV
                            number or the 3D secure password. Elenext stores
                            your card information only when you select the
                            option.We only store your card number, cardholder
                            name and card expiry date. We do not store your
                            card's CVV number or the 3D secure password. Elenext
                            stores your card information only when you select
                            the option.
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
                            Yes, you can delete your saved cards at any given
                            time.
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
                            As of now, you can save up-to 10 cards using the
                            'Save Card' option.
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
                            You can save any credit or debit VISA, MasterCard,
                            Maestro or American Express card issued by a bank in
                            India.
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
                          data-bs-target="#flush-collapse99"
                          aria-expanded="false"
                          aria-controls="flush-collapse99"
                        >
                          How do I save my card(s) on Elenext?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse99"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Your card is saved automatically when you make a
                            successful payment by entering the card details
                            while purchasing on Elenext. Alternatively, you can
                            also save your card by navigating to 'My Accounts
                            &gt; Payments &gt; My Saved Cards'. To save the card
                            you'll need the card number and the expiry date. You
                            can also add a card label to better identify a saved
                            card.
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
                            You can view your saved cards by selecting the
                            credit/debit card payment option at checkout. Select
                            a saved card that you wish to use to make the
                            payment. Enter the CVV number of that card (we do
                            not store it) and click the 'Pay' button to initiate
                            your payment. You will also have to enter the card's
                            3D Secure password to complete the transaction.
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
                            Yes. Even if you've saved your card details on
                            Elenext, you always have the option to use any other
                            credit/debit card to pay.
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
                            You can delete your saved card information on
                            Elenext from the 'My Account' section. Go to 'My
                            Account &gt; Payments &gt; My Saved Cards' and you
                            will be able to see your saved card(s). You can then
                            click on 'Remove this card'.
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
                            A card label is the name you give to your card while
                            saving it on Elenext. This helps in identifying the
                            card at the time of making a payment. Even if you do
                            not specify a card label, you will still be able to
                            identify the card by the first 2 and last 4 digits
                            of your card number which will be visible to you
                            when the saved card is displayed.
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
                            You can specify a card label at the time of saving a
                            card on Elenext through the My Account section. If
                            you did not specify any card label at the time of
                            saving the card, you can still add/edit the label
                            anytime through the "My Saved Cards" menu in the My
                            Account section on Elenext.
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
                            You should have a registered account with Elenext to
                            which you should be logged in. Due to security
                            reasons, this feature is not available during guest
                            checkout.
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
                            If you choose to save your card at the time of
                            making the payment, then the only time your card may
                            not get saved is when the payment fails due to card
                            being invalid. If the payment was successful and the
                            card was not saved, then you may contact us and we
                            will help you out.
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
                            If you typed an incorrect card number, name or card
                            expiry date, you need to first delete the entered
                            details by clicking on "Remove this card" and then
                            add the card again with the correct details.
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
                            Absolutely! Any cards that you save on Elenext's
                            website can be used on Elenext app and mobile site
                            as well. You can also save cards through your mobile
                            and use them on Elenext's website.
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
                            You can manage these cards from the 'Saved Cards'
                            section on PhonePe or Elenext. If you wish to delete
                            a card from both PhonePe and Elenext, you need to
                            perform this operation independently in both the
                            applications.
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
                            Yes, you can use your Debit/Credit Card to shop on
                            our mobile app, website, and mobile site too!
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
                            Cash on Delivery payments cannot be combined with
                            other payments modes.
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

          {ShowBajaj ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Bajaj Finserv EMI</div>
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
                          Can I cancel my EMI after I've placed the order using
                          the Bajaj Finserv payment option?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Since payment modes cannot be changed after an order
                            is placed, to cancel your EMI, your order will need
                            to be cancelled. *Certain items cannot be cancelled
                            after 24 hours of placing the order.
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
                          Can I get the refund for the item to any other mode if
                          I have paid using the Bajaj Finserv payment option?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, the refund for an order placed using the Bajaj
                            Finserv payment mode can only be done to the bank
                            account linked to the Bajaj Finserv EMI Card.
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
                            You can specify a card label at the time of saving a
                            card on Elenext through the 'My Account' section.
                            You can also add/edit the label anytime through 'My
                            Saved Cards' in the 'My Account' section on Elenext.
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
                          Do I need to make a down payment to buy an item using
                          the Bajaj Finserv EMI payment mode?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, a down payment is not required for buying an
                            item using the Bajaj Finserv EMI option.
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
                          How can I get a Bajaj Finserv EMI card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can check the eligibility and process of getting
                            a Bajaj Finserv No Cost EMI card on their website:
                            www.bajajfinserv.in/finance.
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
                          I chose the wrong EMI plan while making the payment
                          using Bajaj Finserv No Cost EMI option. Can I change
                          it now?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            EMI plan chosen while paying through the Bajaj
                            Finserv No Cost EMI payment option cannot be changed
                            once the order has been placed. If your order hasn't
                            been delivered yet, you can cancel it and place a
                            new order with the preferred EMI plan.
                            <br /> Certain items cannot be cancelled after 24
                            hours of placing the order."
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
                          What are the EMI plans available if I pay using the
                          Bajaj Finserv payment mode?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Available EMI plans can be checked by clicking 'No
                            Cost EMI' on the Bajaj Finserv Card below the listed
                            price of the item on the product page.
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
                          How can I pay for my order using the Bajaj Finserv
                          payment mode?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            While paying for your order, choose 'Bajaj Finserv
                            No Cost EMI' as the payment option & select the EMI
                            plan of your choice from the available EMI plans.
                            You can then complete the payment using your Bajaj
                            Finserv EMI Card after OTP verification. <br />
                            Please note, the Bajaj Finserv EMI option will not
                            be available if your cart contains more than 1 item.
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
                          How is Bajaj Finserv payment mode different from the
                          credit card EMI payment mode?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            In credit card EMIs, banks charge an interest rate
                            based on the EMI plan chosen whereas Bajaj Finserv
                            EMI Card holders are not charged any interest on the
                            EMI. Unlike other credit card based EMI options, you
                            don't need to have a credit card to avail EMI plans.
                            The EMI payments are deducted by Bajaj Finserv from
                            your bank account linked to the Bajaj Finserv EMI
                            Card.
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
                          What are the benefits of the Bajaj Finserv payment
                          mode?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse10"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            With Bajaj Finserv, you get a hassle-free payment
                            experience with the following benefits:No interest
                            on EMIsZero processing & cancellation
                            chargesComplete refund of the amount paid for your
                            order if the item is returned Quick resolutions &
                            end-to-end support from Bajaj Finserv for any
                            related concerns subject to the T&Cs of Bajaj
                            Finserv.
                            <br />
                            Terms & conditions apply:
                            http://www.flipkart.com/s/help/cancellation-returns.
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
                          Why can't I see Bajaj Finserv as a payment mode for
                          some items?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse11"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Bajaj Finserv No Cost EMI payment mode is available
                            for select items with certain sellers. Please check
                            the product page of the item you'd like to shop for
                            on our app to see if the option is available.
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
                          Is Bajaj Finserv payment mode available on both the
                          website and app?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse12"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, the Bajaj Finserv payment mode is available
                            both on the Flipkart app and website.
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
                          What is Bajaj Finserv payment mode?{" "}
                        </button>
                      </h2>
                      <div
                        id="flush-collapse13"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Bajaj Finserv No Cost EMI' is a payment option on
                            Flipkart exclusively for Bajaj Finserv EMI Card
                            holders. This option enables you to pay for select
                            items listed by specific sellers, with an EMI plan
                            of your choice without any interest. The monthly
                            installments are deducted by Bajaj Finserv from the
                            bank account linked to your Bajaj Finserv EMI Card.
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
                          How can I foreclose my EMI with Bajaj Finserv?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse14"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can contact Bajaj Finserv at 0869801010 for help
                            with the foreclosure of your EMI with them.
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
                          I did not get the OTP while I was paying through the
                          'Bajaj Finserv No Cost EMI' payment mode. What should
                          I do?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse15"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please contact Bajaj Finserv at 08698010101 for
                            support
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
                          I did not get the OTP while I was paying through the
                          'Bajaj Finserv No Cost EMI' payment mode. What should
                          I do?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse16"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please contact Bajaj Finserv at 08698010101 for
                            support
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
                          If I have paid for my order using the Bajaj Finserv No
                          Cost EMI payment option, will I get a complete refund
                          if the item is cancelled or returned?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse17"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, you will get a complete refund to the extent of
                            the EMIs paid by you (if any) for the item in case
                            it is canceled or returned. However, any amount
                            charged as a penalty by Bajaj Finserv for the
                            remaining EMIs cannot be refunded. You may reach
                            Bajaj Finserv at 08698010101 for more details.
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
                          Can I foreclose my EMI with Bajaj Finserv?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse18"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, you can foreclose your loan without any charges
                            by logging in to your customer portal – Experia.
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
                          What is the credit limit on the Bajaj Finserv card for
                          shopping on Flipkart?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse19"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The credit limit varies based on the type of Bajaj
                            Finserv EMI Card you hold. For more details, please
                            check Bajaj Finserv support FAQs here:
                            https://www.bajajfinserv.in/insta-emi-card You can
                            also contact Bajaj Finserv at 08698010101 for
                            support.
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

          {ShowSBI ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">SBI Pre-approved loan</div>
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
                          What are the EMI plans available if I choose the
                          'Pre-approved EMI' payment option?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can choose from the following EMI plans with
                            zero processing fees:
                            <ul
                              style={{
                                listStyle: "initial",
                                marginLeft: "30px",
                              }}
                            >
                              <li>6 months</li>
                              <li>9 months</li>
                              <li>12 months</li>
                            </ul>
                            Note: Interest rate is 14% irrespective of the EMI
                            plan chosen and is subject to change based on SBI’s
                            T&Cs.
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
                          What is the pre-approved EMI limit for shopping on
                          Flipkart?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please contact SBI’s Customer Care on 1800 425 3800
                            to know the credit limit you are eligible for
                            shopping on Flipkart.
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
                          Is SBI’s 'Pre-approved EMI' payment option available
                          both on Flipkart’s website and app?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            This payment option is available on all our
                            platforms - Website, App (Windows, iOS and Android)
                            as well as through Flipkart lite.
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
                          Can I get the refund for the item through any other
                          mode if I have paid for my order using the
                          'Pre-approved EMI' payment option?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, the refund mode cannot be changed for an order
                            that was paid for using SBI's 'Pre-approved EMI'
                            payment option.
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
                          Can I buy any item using the 'Pre-approved EMI'
                          payment option?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can buy any item with a minimum value of ₹ 5,000
                            and a maximum value of ₹ 75,000 from sellers on
                            Flipkart. Please note that the upper limit may vary
                            as it depends on the credit amount you are eligible
                            for.
                          </p>
                          <br />
                          <p>
                            Please note, the 'Pre-approved EMI option is only
                            available on select products.
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

          {ShowCredit ? (
            <>
              <div className="sidebar">
                <div className="sidebar-shadow">
                  <div className="order_content">
                    <div className="car_header">Credit Card No Cost EMI</div>
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
                            I did not get an OTP while paying through the
                            'Credit Card No Cost EMI' payment mode. What should
                            I do?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Please contact your card issuing bank for OTP
                              support.
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
                            Is 'Credit Card No Cost EMI' payment mode available
                            on Flipkart’s website and mobile app?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, ‘Credit Card No Cost EMI' payment mode is
                              available on our website, mobile app, and Flipkart
                              Lite, our mobile site
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
                            What are the benefits of the 'Credit Card No Cost
                            EMI' payment mode?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Shopping with ‘Credit Card No Cost EMI’ has
                              benefits like no cost of interest & zero down
                              payment as you get an instant cash-back from the
                              seller for the amount you are charged as interest
                              by the bank.
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
                            How can I foreclose my EMI for an item I bought
                            using the 'Credit Card No Cost EMI'?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              You will need to contact the card issuing bank to
                              foreclose your EMI.
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
                            Can I cancel an order placed using the 'Credit Card
                            No Cost EMI' payment option?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, you can cancel the order irrespective of the
                              payment mode used for it. However, orders for
                              certain items cannot be cancelled after 24 hours
                              of order placement.
                            </p>
                            <br />
                            <p>
                              Please check the seller's cancellation policy on
                              the product page for details.
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
                            Can I foreclose my EMIs for products purchased using
                            the 'Credit Card No Cost EMI' payment mode?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, you can foreclose your EMIs if you've paid
                              for your order using 'Credit Card No Cost EMI'
                              payment mode.
                            </p>
                            <br />
                            <p>
                              Please contact the card-issuing bank for
                              foreclosure of your EMI.
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
                            Can I get the refund for the item through any other
                            mode if I have paid using the 'Credit Card No Cost
                            EMI' payment option?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse7"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              No, the refund for an order placed using the
                              'Credit Card No Cost EMI' payment mode can only be
                              done to the credit card from which the payment was
                              made.
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
                            Do I need to make a down payment to buy an item
                            using the 'Credit Card No Cost EMI' payment mode?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse8"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              No, you don't need to make a down payment to buy
                              an item using the 'Credit Card No Cost EMI'
                              payment mode.
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
                            How can I pay for my order using the 'Credit Card No
                            Cost EMI' payment mode?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse9"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              You can pay for your order using the 'Credit Card
                              No Cost EMI' payment mode by following these
                              simple steps:
                              <ul
                                style={{
                                  listStyle: "auto",
                                  marginLeft: "30px",
                                }}
                              >
                                <li>Add item(s) to your cart.</li>
                                <li>Go to 'Payments'.</li>
                                <li>Choose EMI › No Cost EMI.</li>
                                <li>
                                  Select the bank & credit card of your choice
                                  and complete the payment.
                                </li>
                              </ul>
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
                            How is 'Credit Card No Cost EMI' different from
                            'Credit Card EMI' payment mode?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse10"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              For 'Credit Card EMI', you are charged a
                              non-refundable interest based on the tenure of
                              your EMI plan whereas with 'Credit Card No Cost
                              EMI', although interest is charged, you get an
                              instant discount from the seller for the amount
                              you pay as interest to the bank.
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
                            I chose the wrong EMI plan while making the payment
                            using 'Credit Card No Cost EMI' option. Can I change
                            it now?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse11"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              No. However, in case your order hasn't been
                              delivered yet, you can cancel it and place a new
                              order by selecting your preferred EMI plan.
                              <br />
                              Orders for certain items cannot be cancelled after
                              24 hours of order placement. Please check the
                              seller's cancellation policy on the product page
                              for details.
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
                            My payment using the 'Credit Card No Cost EMI'
                            payment mode did not go through, but the amount has
                            been blocked on my card. What should I do?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse12"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              In case the amount was deducted from your card,
                              but the payment was unsuccessful, the blocked card
                              limit will be reinstated by the bank within 5-7
                              business days. Please get in touch with your card
                              issuing bank if the amount is not credited within
                              this time period.
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
                            What are the EMI plans available if I pay using the
                            'Credit Card No Cost EMI' payment mode?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse13"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              The EMI plans vary based on your card issuing
                              bank. Visit Payments › EMI › No Cost EMI to see
                              available plans.
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
                            What is 'Credit Card No Cost EMI'?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse14"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              'Credit Card No Cost EMI' is a payment mode with
                              which you can shop for items from select sellers
                              on Flipkart with no interest & zero down payment.
                              With this payment mode, you get an instant
                              cash-back from the seller for the amount you are
                              charged by the bank as interest.
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
                            What is No Cost EMI and how can I avail it?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse15"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              No Cost EMI is a payment option available for
                              Bajaj Finserv EMI Card holders and can be availed
                              for purchases on Flipkart for select items with
                              some of the sellers. To avail the option, proceed
                              to pay for your order as usual and choose the
                              option 'Bajaj Finserv (No Cost EMI)' for payment.
                              Then, select the EMI plan of your choice out of
                              the available options and complete your payment.
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
                            What is the credit limit on the 'Credit Card No Cost
                            EMI' card for shopping on Flipkart?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse16"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              The credit limit depends on the respective card.
                              Please get in touch with your card issuing bank
                              for more details.
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
                            Why can't I see 'Credit Card No Cost EMI' as a
                            payment mode for some items?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse18"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              'Credit Card No Cost EMI' payment mode is only
                              available for certain items from select sellers.
                              Please check the product page for availability.
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
                            Is 'Credit Card No Cost EMI' payment mode available
                            on Flipkart's Windows and iOS apps?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse19"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, 'Credit Card No Cost EMI' payment mode is
                              available on our Windows, iOS and Android apps.
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
                            Will I get a complete refund if the item is
                            cancelled or returned if I have paid for the order
                            using the 'Credit Card No Cost EMI' payment option?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse20"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, you will get a complete refund to the extent
                              of the EMIs paid (if any) in case the order is
                              cancelled or returned.
                              <br />
                              However, banks may charge some cancellation/refund
                              or pre-closure charges. Please check with your
                              respective bank for their policy for
                              cancellations, refunds, and pre-closures.
                              <br />
                              *Orders for certain items cannot be cancelled
                              after 24 hours of order placement, or returned
                              once delivered. Please check the seller's
                              cancellations & returns policy on the product page
                              for details.
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
            </>
          ) : (
            ""
          )}

          {ShowAxis ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">
                    Elenext Axis Bank Credit Card
                  </div>
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
                          I have an Axis Bank Buzz Credit Card, can I still
                          apply for the Elenext Axis Bank Credit Card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, if you are an Axis Bank Buzz credit cardholder,
                            you are eligible to apply for the Elenext Axis Bank
                            Credit Card. You can apply for the card by visiting
                            our Home Page and clicking on the 'Apply Now' option
                            on the banner.
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
                          What will happen to my Axis Bank Buzz Credit Card if I
                          apply for the Elenext Axis Bank Credit Card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Your Axis Bank Buzz credit card will be deactivated
                            within 45 days.
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
                          What are the documents required to complete this
                          application?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Currently, there are no documents needed during the
                            application process. However, you may be required to
                            submit a set of officially valid documents in case
                            the bank requests for it.
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
                          Can I resume an incomplete application?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, you can resume filling an incomplete
                            application within 4 hours of initiation by clicking
                            on the 'Resume Application' button available on the
                            banner on our homepage. If you are trying to resume
                            the application after four hours, then you will have
                            to restart the application process from the
                            beginning.
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
                          How can I track my application status from my Elenext
                          Account?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The application status will be immediately
                            communicated to you once the application process is
                            completed. You can also view the details by visiting
                            the 'My Account' section of your Elenext account and
                            clicking on 'Elenext Axis Bank Credit Card' section.
                            (1) The application status is immediately
                            communicated to you on the app after the application
                            process is completed. You'll also get an SMS / email
                            from AXIS Bank as soon as the application is
                            processed.
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
                          Is there any annual fee?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, there's an annual fee of Rs. 500 applicable on
                            the card. The annual fee will be waived off if you
                            spend Rs. 2 lakh with the card within a year.
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
                          What can I purchase using Elenext Axis Bank Credit
                          Card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can use this credit card for all your purchases,
                            both on and off Elenext.
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
                          Will I earn cash back if I have used someone else's
                          Elenext Axis Bank Credit Card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse8"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Please note that the cash back will be credited to
                            the account of the card used.
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
                          How can I use the earnings?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            All cash back is credited as cash to your credit
                            card account which can be used for your future
                            purchases three days before the statement for the
                            next month is generated,
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
                          Can I transfer ownership of my Elenext Axis Bank
                          Credit Card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse10"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, ownership of the credit card cannot be
                            transferred.
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
                          What will happen to the cash back if I return a
                          product?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse11"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If you return a product within the same credit card
                            billing cycle in which the purchase was made,
                            applicable cash back will be debited in the same
                            cycle. Otherwise, it will be adjusted in the next
                            billing cycle.
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
                          How will I get the PIN for the card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse12"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can get the PIN for the card by visiting this
                            link:
                            https://www.axisbank.com/retail/cards/credit-card/useful-links/credit-card-authentication
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
                          I did not get the correct cashback as per my
                          transactions on Elenext. What should I do?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse13"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To know more about cashback, please reach out to
                            Axis Bank customer support at 1860 419 5555.
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
                          I want to know the CVV number on the card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse14"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The virtual card and CVV are available in the
                            Elenext Axis Bank Credit Card section under 'My
                            Accounts' section of the app. Once the physical card
                            is delivered to you, the CVV number is available
                            behind your card.Disclaimer: Please do not disclose
                            your PIN or CVV to anyone. In case your card is
                            misused, Bank or Elenext won't be responsible for
                            any unauthorised transactions that may have happened
                            due to the disclosure.
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
                          How can I pay the outstanding bill?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse15"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To know about payment options, please reach out to
                            Axis Bank customer support at 1860 419 5555.
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
                          Will the card number and CVV remain the same for both
                          the physical and the virtual card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse16"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>Yes, it will remain the same.</p>
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
                          When will I get the physical card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse18"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The physical credit card will be delivered to your
                            registered address with Axis Bank within 7 to 10
                            business days of application approval.
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
                          What are the key benefits of Elenext Axis Bank Credit
                          Card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse19"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Some of the benefits of Elenext Axis Bank Credit
                            Card are:- 5% cashback for spends on Elenext,
                            Myntra, 2Gud- 4% cashback for spends on preferred
                            partners (MakeMyTrip/GoIbibo, Uber, PVR, Curefit,
                            UrbanClap)- 1.5% cashback for spends on all other
                            merchants- No Cost EMI applicable for purchases on
                            Elenext for all tenures- Four complimentary domestic
                            lounge access visits- 1% Fuel surcharge waiver upto
                            Rs. 500 per month.
                            <br /> Welcome benefits:- Elenext Gift Card of Rs.
                            500 as an activation benefit for transacting with
                            the card anywhere, for any amount- 15% cashback upto
                            Rs. 500 on Myntra- Rs. 500 off on domestic hotels
                            via Makemytrip- Rs. 500 off on domestic hotels on
                            Goibibo- Benefits of upto Rs. 900. Unlimited access
                            to 6 months of Gaana Plus membership. 50% off for
                            the next 6 months- 20% off upto Rs. 400 on UrbanClap
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
                          How can I apply for Elenext Axis Bank Credit Card? Am
                          I eligible for the card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse20"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can apply for the Elenext Axis Bank Credit Card
                            by visiting the Elenext Home Page and clicking on
                            'Apply Now' on the banner or by going to the Elenext
                            Axis Bank Credit Card section under 'My Account'.
                            Alternatively, you can apply for the card through
                            Axis Bank's channels such as by visiting any of
                            their branches, tablet sourcing, Axis Bank mobile
                            banking app, etc.
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

{ShowShopping ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Shopping</div>
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
                          Why do I see different prices for the same product?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You could see different prices for the same product,
                            as it could be listed by many Sellers.
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
                          Is installation offered for all products?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Installation and demo are offered for certain items
                            by sellers through the brand or an authorised
                            service provider. Please check the individual
                            product page to see if these services are offered
                            for the item.
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
                          Is it necessary to have an account to shop on Elenext?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, it's necessary to log into your Elenext account
                            to shop. Shopping as a logged-in user is fast &
                            convenient and also provides extra security. You'll
                            have access to a personalised shopping experience
                            including recommendations and quicker check-out.
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
                          What does 'Preorder' or 'Forthcoming' mean?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Items marked as 'Preorder' or 'Forthcoming' are
                            expected to be released soon and you can pre-book
                            them with sellers. Such items will be shipped after
                            their official release by the seller with whom
                            you've pre-booked them.
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
                          Do sellers on Elenext ship internationally?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Currently, sellers on Elenext only ship within
                            India.
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
                          Can I use an item that has been given to me as a gift
                          from a state sponsored or an NGO-funded freebie
                          distribution programme to get discounts through
                          exchange offers?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, as per company policy, such items are not
                            eligible for discounts under exchange offers. You
                            can also refer to the 'Exchange Offers' section in
                            the 'Terms of Use' page for more details.
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
                          Will I get a wall mount for my television in the box?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If mentioned in the sales package the wall mount for
                            your television will be in the box. However, in some
                            cases, the wall mount, if applicable for the model,
                            will be with the installation team.
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
                          Can I order a product that is 'Out of Stock' or
                          'Temporarily Unavailable'?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse8"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The products listed as 'Out of Stock' or
                            'Temporarily Unavailable' are not available for
                            sale. Please use the 'Notify Me' feature to be
                            informed of the product's availability with sellers
                            on Elenext.
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
                          What does 'Out of Stock' mean?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            An item is marked as 'Out of stock' when it is not
                            available with any sellers at the moment; you won't
                            be able to buy it now. Use 'Notify Me' feature to
                            know once it's available with sellers for purchase.
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
                          What does 'Permanently Discontinued' or 'Out of Print'
                          mean?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse10"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            An item is marked as 'Out of stock' when it is not
                            available with any sellers at the moment; you won't
                            be able to buy it now. Use 'Notify Me' feature to
                            know once it's available with sellers for purchase.
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
                          What is Elenext Buyer Protection?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse11"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Elenext Buyer Protection helps shoppers in case they
                            have concerns with product(s) bought and haven't got
                            a satisfactory solution from the seller.
                            <br /> Under this program, we look into your concern
                            on a case-by-case basis & do our best to be fair to
                            both parties. Elenext's decision on the resolution
                            will be final for the concern raised.
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
                          How does 'Instant Cashback' work?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse12"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            'Instant Cashback' is applied directly to the
                            product or order value in your cart and you do not
                            have to wait for the cashback to be credited to your
                            bank account/credit or debit card at a later date.
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
                          Are there any hidden charges (Octroi or Sales Tax)
                          when I shop on Elenext?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse13"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            There are NO hidden charges when you shop on
                            Elenext. The price you see on the product page is
                            final and it's exactly what you pay. Note: There can
                            be additional delivery charges based on the seller's
                            policy.
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
                          Why do I see different prices for books with the same
                          title?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse14"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can find various editions of books with the same
                            title on Elenext -- from paperbacks or hardcovers to
                            collector's editions. Some of them are
                            re-published/printed within India, while some
                            editions are imported. The price of the titles
                            varies based on this and the seller offering it. All
                            other available editions and their prices for a
                            particular title are mentioned on the respective
                            product page under 'Other Editions'.
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
                          Can I club my orders from different sellers to be
                          delivered together?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse15"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Currently, there is no option to club orders from
                            different sellers to be delivered together as
                            sellers could be located in different locations and
                            the delivery timelines would vary based on their
                            partnered courier service providers. To ensure your
                            items reach you at the earliest, each seller ships
                            their products as per their individual timelines.
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
                          Why do I see a 'delivery charge'?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse16"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            It usually costs sellers more to ship some items.
                            So, sometimes they choose to add a delivery charge.
                            The delivery charge is waived off by some sellers if
                            you shop with them for a certain amount. For more
                            information, check the individual seller's policy on
                            the product page.
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
                          Is Elenext Advantage the same as 'Plus'?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse18"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No. While Elenext Advantage was the tag for all
                            items listed by sellers who used our partner
                            warehouse services, the 'Plus' badge is only given
                            to select items based on certain criteria such as
                            product quality and delivery timeline.
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
                          Do I have to pay extra for items with the Plus badge?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse19"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, you can shop for items with the Plus badge at no
                            extra charge.
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
                          data-bs-target="#flush-collapse200"
                          aria-expanded="false"
                          aria-controls="flush-collapse200"
                        >
                          Why do I see a shipping charge for an item with the
                          Plus badge?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse200"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Sellers may charge a nominal fee for shipping, even
                            for products with the Plus badge, if the order is
                            less than ₹ 500. Shipping is free for items with the
                            Plus badge if the order value is more than ₹ 500.
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
                          data-bs-target="#flush-collapse201"
                          aria-expanded="false"
                          aria-controls="flush-collapse201"
                        >
                          Is there a filter available through which I can only
                          see items with a Plus badge?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse201"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, there is a filter available through which you
                            can shop only for items with the Plus badge.
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
                          data-bs-target="#flush-collapse202"
                          aria-expanded="false"
                          aria-controls="flush-collapse202"
                        >
                          What are the benefits of buying an item with a Plus
                          badge?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse202"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Items with the Plus badge are extensively quality
                            checked from storage to transit safe packaging and
                            also comes along with fast & free delivery from our
                            best sellers. Free shipping for orders above Rs. 500
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
                          data-bs-target="#flush-collapse203"
                          aria-expanded="false"
                          aria-controls="flush-collapse203"
                        >
                          What does the badge Plus mean?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse203"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The Plus badge is a seal of quality and speed.
                            Products with this badge meet our extensive quality
                            & packaging guidelines along with having faster
                            delivery timelines. With stringent seller & product
                            selection combined with fast & free delivery, 'Plus'
                            guarantees you a superior and hassle-free shopping
                            experience every time. Free shipping for orders
                            above ₹500
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

          {ShowWallet ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Wallet</div>
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
                          What can I do if the balance in my wallet is not
                          enough to pay for my order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can pay part of the amount through your wallet
                            and the remaining through any other prepaid payment
                            modes like Credit/Debit Cards, and Elenext Gift
                            Cards.
                            <br /> Please note that wallet cannot be combined
                            with Cash/Card on Delivery (CoD) payment mode for
                            now, and bank offers will not applicable for partial
                            payments from the wallet.
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

          {ShowPhonepe ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Shopping</div>
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
                          Why do I see different prices for the same product?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You could see different prices for the same product,
                            as it could be listed by many Sellers.
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
                          Is installation offered for all products?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Installation and demo are offered for certain items
                            by sellers through the brand or an authorised
                            service provider. Please check the individual
                            product page to see if these services are offered
                            for the item.
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
                          Is it necessary to have an account to shop on Elenext?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, it's necessary to log into your Elenext account
                            to shop. Shopping as a logged-in user is fast &
                            convenient and also provides extra security. You'll
                            have access to a personalised shopping experience
                            including recommendations and quicker check-out.
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
                          What does 'Preorder' or 'Forthcoming' mean?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Items marked as 'Preorder' or 'Forthcoming' are
                            expected to be released soon and you can pre-book
                            them with sellers. Such items will be shipped after
                            their official release by the seller with whom
                            you've pre-booked them.
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
                          Do sellers on Elenext ship internationally?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Currently, sellers on Elenext only ship within
                            India.
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
                          Can I use an item that has been given to me as a gift
                          from a state sponsored or an NGO-funded freebie
                          distribution programme to get discounts through
                          exchange offers?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, as per company policy, such items are not
                            eligible for discounts under exchange offers. You
                            can also refer to the 'Exchange Offers' section in
                            the 'Terms of Use' page for more details.
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
                          Will I get a wall mount for my television in the box?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If mentioned in the sales package the wall mount for
                            your television will be in the box. However, in some
                            cases, the wall mount, if applicable for the model,
                            will be with the installation team.
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
                          Can I order a product that is 'Out of Stock' or
                          'Temporarily Unavailable'?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse8"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The products listed as 'Out of Stock' or
                            'Temporarily Unavailable' are not available for
                            sale. Please use the 'Notify Me' feature to be
                            informed of the product's availability with sellers
                            on Elenext.
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
                          What does 'Out of Stock' mean?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            An item is marked as 'Out of stock' when it is not
                            available with any sellers at the moment; you won't
                            be able to buy it now. Use 'Notify Me' feature to
                            know once it's available with sellers for purchase.
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
                          What does 'Permanently Discontinued' or 'Out of Print'
                          mean?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse10"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            An item is marked as 'Out of stock' when it is not
                            available with any sellers at the moment; you won't
                            be able to buy it now. Use 'Notify Me' feature to
                            know once it's available with sellers for purchase.
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
                          What is Elenext Buyer Protection?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse11"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Elenext Buyer Protection helps shoppers in case they
                            have concerns with product(s) bought and haven't got
                            a satisfactory solution from the seller.
                            <br /> Under this program, we look into your concern
                            on a case-by-case basis & do our best to be fair to
                            both parties. Elenext's decision on the resolution
                            will be final for the concern raised.
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
                          How does 'Instant Cashback' work?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse12"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            'Instant Cashback' is applied directly to the
                            product or order value in your cart and you do not
                            have to wait for the cashback to be credited to your
                            bank account/credit or debit card at a later date.
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
                          Are there any hidden charges (Octroi or Sales Tax)
                          when I shop on Elenext?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse13"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            There are NO hidden charges when you shop on
                            Elenext. The price you see on the product page is
                            final and it's exactly what you pay. Note: There can
                            be additional delivery charges based on the seller's
                            policy.
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
                          Why do I see different prices for books with the same
                          title?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse14"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            You can find various editions of books with the same
                            title on Elenext -- from paperbacks or hardcovers to
                            collector's editions. Some of them are
                            re-published/printed within India, while some
                            editions are imported. The price of the titles
                            varies based on this and the seller offering it. All
                            other available editions and their prices for a
                            particular title are mentioned on the respective
                            product page under 'Other Editions'.
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
                          Can I club my orders from different sellers to be
                          delivered together?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse15"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Currently, there is no option to club orders from
                            different sellers to be delivered together as
                            sellers could be located in different locations and
                            the delivery timelines would vary based on their
                            partnered courier service providers. To ensure your
                            items reach you at the earliest, each seller ships
                            their products as per their individual timelines.
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
                          Why do I see a 'delivery charge'?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse16"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            It usually costs sellers more to ship some items.
                            So, sometimes they choose to add a delivery charge.
                            The delivery charge is waived off by some sellers if
                            you shop with them for a certain amount. For more
                            information, check the individual seller's policy on
                            the product page.
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
                          Is Elenext Advantage the same as 'Plus'?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse18"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No. While Elenext Advantage was the tag for all
                            items listed by sellers who used our partner
                            warehouse services, the 'Plus' badge is only given
                            to select items based on certain criteria such as
                            product quality and delivery timeline.
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
                          Do I have to pay extra for items with the Plus badge?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse19"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, you can shop for items with the Plus badge at no
                            extra charge.
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
                          data-bs-target="#flush-collapse200"
                          aria-expanded="false"
                          aria-controls="flush-collapse200"
                        >
                          Why do I see a shipping charge for an item with the
                          Plus badge?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse200"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Sellers may charge a nominal fee for shipping, even
                            for products with the Plus badge, if the order is
                            less than ₹ 500. Shipping is free for items with the
                            Plus badge if the order value is more than ₹ 500.
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
                          data-bs-target="#flush-collapse201"
                          aria-expanded="false"
                          aria-controls="flush-collapse201"
                        >
                          Is there a filter available through which I can only
                          see items with a Plus badge?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse201"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, there is a filter available through which you
                            can shop only for items with the Plus badge.
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
                          data-bs-target="#flush-collapse202"
                          aria-expanded="false"
                          aria-controls="flush-collapse202"
                        >
                          What are the benefits of buying an item with a Plus
                          badge?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse202"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Items with the Plus badge are extensively quality
                            checked from storage to transit safe packaging and
                            also comes along with fast & free delivery from our
                            best sellers. Free shipping for orders above Rs. 500
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
                          data-bs-target="#flush-collapse203"
                          aria-expanded="false"
                          aria-controls="flush-collapse203"
                        >
                          What does the badge Plus mean?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse203"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The Plus badge is a seal of quality and speed.
                            Products with this badge meet our extensive quality
                            & packaging guidelines along with having faster
                            delivery timelines. With stringent seller & product
                            selection combined with fast & free delivery, 'Plus'
                            guarantees you a superior and hassle-free shopping
                            experience every time. Free shipping for orders
                            above ₹500
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

          {ShowOthers ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Others</div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {ShowShipping ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Shipping</div>
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
                          Why are faster delivery options not available at my
                          location?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Faster delivery options may not be available at your
                            location due to courier related reasons but we’re
                            trying to expand our services to include more
                            places. Stay tuned for updates!
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
                          Why can't I get some items shipped to my location?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Some sellers prefer not to ship to certain locations
                            due to the cost involved and this is entirely at
                            their discretion. You can check with your pincode on
                            the product page to see any other sellers ship to
                            your location.
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
                          Are faster delivery options like Same Day & In-a-Day
                          available on return requests?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            No, however, we try our best to have your item(s)
                            picked up by our courier service providers & get you
                            the replacement as soon as possible.
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
                          What are the standard shipping speeds and delivery
                          charges?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Standard Shipping Speeds and Delivery charges for
                            F-Assured (Elenext Assured) and Non F-Assured items
                            vary based on the destination pincode entered.Orders
                            with items that are F-Assured worth Rs. 500 or more
                            will qualify for free delivery, else, a delivery
                            charge of Rs. 40 will be applicable. <br />
                            All grocery (F-Supermart) orders worth Rs. 1200 or
                            more are eligible for free delivery. You can check
                            if an F-Assured item can be delivered to your
                            location by entering a delivery pincode on the
                            product page (this widget is placed next to the
                            section 'Delivery') and hitting enter. Available
                            shipping speeds and delivery charges as per your
                            location will be displayed. For certain items, you
                            can choose the delivery speed accordingly in 'Order
                            Summary' page while placing the order. For Grocery
                            orders, you can choose from the following delivery
                            slots1. 7:00 AM to 9:30 AM2. 9:30 AM to 12:00 PM3.
                            5:00 PM to 7:30 PM4. 7:30 PM to 1:00 PM) Standard
                            shipping speeds and delivery charges for non
                            F-Assured items Delivery charges and shipping
                            timelines may vary based on seller. <br />
                            Delivery timeline is displayed on the product page.
                            You can choose a delivery pincode on the product
                            page and it will display the list of sellers who
                            cater to that location and the applicable shipping
                            charges.
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
                          Why didn't my order qualify for free delivery?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Your order qualifies for free delivery if you order
                            F-Assured products worth Rs. 500 and above. If your
                            order value for F-Assured products is less than Rs.
                            500, a delivery fee of Rs. 40 will be charged. For
                            products that are non-F-Assured, delivery charges if
                            any will be decided by the sellers and will vary.
                            <br />
                            Please click on 'View sellers' under the seller
                            rating on the product page for information about
                            sellers selling any particular product and their
                            respective delivery charges.
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
                          Why am I unable to order products like television,
                          air-conditioner, refrigerator, washing machine,
                          furniture, microwave, treadmill, etc. at my location?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The delivery of large category products at a
                            particular location depends on the following
                            factors: Dimensions and weight Location of the
                            seller Serviceability of the seller's partnered
                            service provider.
                            <br /> Always ensure to update your preferred
                            delivery location/address to verify if the seller is
                            offering the product or deal at your location.
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
                          How do I contact seller's partnered courier service
                          providers?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Here are the contact details of some of the leading
                            courier service providers: E-Kart -
                            www.ekartlogistics.com Gati - www.Gati.com Delhivery
                            - www.delhivery.com Blue Dart -
                            www.bluedarttrackings.in Ecom - www.ecomexpress.in
                            DotZot - www.dotzot.in Speed Post - India Post -
                            www.indiapost.gov.in
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

          {ShowEleFirst ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Elenext First</div>
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
                          How can I buy using a Gift card?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            It’s simple! When you’re prompted to choose a
                            Payment Method for your order, choose ‘Gift Card’ as
                            the Payment Method &<br /> 1. Enter your 16-digit
                            Gift Card Number & the 6-digit Gift Card PIN <br />
                            2. Click ‘Confirm Order’ <br />
                            You can apply a total of 15 Gift Cards per order &
                            if your Gift Card value is less than the order
                            amount, you’ll be asked to select an additional
                            payment method to complete the payment.
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

          {ShowSellingOn ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Selling on Elenext</div>
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
                          How can I become a seller and start selling products
                          on Elenext?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To become a seller on Elenext, register here with
                            your details.
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

          {ShowPReview ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Product Reviews</div>
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
                          Are there any guidelines for writing product reviews?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Product reviews on Elenext.com are a great way to
                            help other customers decide what to buy & avoid.
                            <br />
                            Here are some tips to writing great product reviews:
                            Have you used this product?It's always better to
                            review a product you have personally used. Educate
                            your readers.Provide a relevant, unbiased overview
                            of the product. Readers are interested in the pros
                            and the cons of the product. Make sure your review
                            stands the test of time, and what you write today is
                            relevant even after years. <br />
                            Be yourself, be informative. Let your personality
                            shine through, but it's equally important to provide
                            facts to back up your opinion. Get your facts right!
                            Nothing is worse than inaccurate information. If
                            you're not really sure, research always helps. Stay
                            concise.Be creative but also remember to stay on
                            topic. <br />A catchy title will always get
                            attention! Easy to read, easy on the eyes.A quick
                            edit & spell check will work wonders for your
                            credibility. Also, break reviews into small, easy
                            paragraphs.
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
                          data-bs-target="#flush-collapse2"
                          aria-expanded="false"
                          aria-controls="flush-collapse2"
                        >
                          Are there any guidelines for writing product reviews?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Product reviews on Elenext.com are a great way to
                            help other customers decide what to buy & avoid.
                            <br />
                            Here are some tips to writing great product reviews:
                            Have you used this product?It's always better to
                            review a product you have personally used. Educate
                            your readers.Provide a relevant, unbiased overview
                            of the product. Readers are interested in the pros
                            and the cons of the product. Make sure your review
                            stands the test of time, and what you write today is
                            relevant even after years. <br />
                            Be yourself, be informative. Let your personality
                            shine through, but it's equally important to provide
                            facts to back up your opinion. Get your facts right!
                            Nothing is worse than inaccurate information. If
                            you're not really sure, research always helps. Stay
                            concise.Be creative but also remember to stay on
                            topic. <br />A catchy title will always get
                            attention! Easy to read, easy on the eyes.A quick
                            edit & spell check will work wonders for your
                            credibility. Also, break reviews into small, easy
                            paragraphs.
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
                          data-bs-target="#flush-collapse3"
                          aria-expanded="false"
                          aria-controls="flush-collapse3"
                        >
                          What's not allowed in product reviews?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Customer reviews should be relevant to the product
                            in question. The product review section on
                            Elenext.com is for you to share your opinion on the
                            product, and for other customers to research better
                            and have an informed buying decision. Elenext.com
                            reserves the right to remove reviews that include
                            any of the following: <br />- Irrelevant review
                            (Review consisting of a combination of random
                            characters, random words, repeated content, reviews
                            on another product) <br />- Service feedback,
                            including availability, order or payment related
                            queries. You may use the Contact Us form for such
                            queries <br />- HTML embedded in text references to
                            other retailers <br />- Pricing related comments-
                            Personal information (Phone numbers, postal address,
                            email address and others)
                            <br /> - Profane comments. Inflammatory comments.
                            Copyrighted comments - Plagiarised content (Any
                            content found elsewhere on the internet, even if
                            you're the original author)
                            <br /> - Promotional content - Reviews by or on
                            behalf of a person or company with a financial
                            interest in the product or a competitors product
                            (Reviews by authors, artists, publishers
                            manufacturers without disclosure) <br />- Reviews
                            written for any form of compensation- Reviews given
                            using fake ids, irrelevant user email ids- Asking
                            for helpful votes
                            <br /> - Review in any language other than English
                            (Unless there is a clear connection to the product,
                            like a regional book or a regional music album) -
                            Feedback about errors in the product description
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

          {ShowLogin ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Login & My Account</div>
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
                          Can I reactivate my inactive Elenext account?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes. To reactivate your Elenext account, simply log
                            in with your registered email ID or mobile
                            number/password combination used before
                            deactivation. Your account data will be fully
                            restored, default subscription settings applied.
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
                          Do I need to verify my mobile number or email address
                          every time I log in?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            As the verification step is a one time process, you
                            won't have to do it again once your account is
                            verified.
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
                          What should I do if I don't get the OTP or
                          verification code?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Sometimes, SMS messages may be delayed by a few
                            minutes because of network issues. You can
                            regenerate the code through the 'Resend Code'
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
                          data-bs-target="#flush-collapse4"
                          aria-expanded="false"
                          aria-controls="flush-collapse4"
                        >
                          What is an OTP or verification code?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            An OTP (One Time Password) or verification code is a
                            password/code used to verify your mobile number or
                            email ID when you log into your Elenext account for
                            the first time. OTP verification will be also be
                            done in other cases like creating an account,
                            password recovery, and updating email/mobile
                            details.
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
                          Why do I need to verify my mobile number or email
                          address to log into my Elenext account?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To make sure that your account details are always
                            secure, verification by OTP (One Time Password) is
                            important. This is a one-time process and you can
                            log into your Elenext account without any hassles
                            once this is done.
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
                          How can I add a new delivery address to my Elenext
                          account?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To add a new delivery address, follow these simple
                            steps:1. Log into your Elenext account 1. Log into
                            your Elenext account 2. Go to My Account › Settings
                            › Addresses 3. Add details of your new address 4.
                            Choose 'Save Changes'
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
                          How can I change the password for my Elenext account?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To change the password for your Elenext account,
                            follow these simple steps: 1. Log in to your Elenext
                            account 2. Go to My Account › Settings › Change
                            password 3. Enter your old password 4. Enter your
                            new password 5. Choose 'Save Changes'
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
                          How can I use a new email address to log in to my
                          Elenext account?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse8"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To log in to your Elenext account with a new email
                            address, you can update your email ID with these
                            simple steps: 1. Log in to your Elenext account 2.
                            Go to My Account › Settings › Update Email/Mobile 3.
                            Add the new email ID 4. Enter the verification code
                            sent to the new email ID 5. Choose 'Save Changes'
                            Please note, once your email address is updated,
                            you'll no longer be able to sign in using your old
                            email id.
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
                          How can I deactivate my account?{" "}
                        </button>
                      </h2>
                      <div
                        id="flush-collapse9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To deactivate your Elenext account, follow these
                            simple steps: 1. Log into your Elenext account 2. Go
                            to My Account › Settings › Deactivate 3. Enter the
                            password for your account 4. Choose 'Confirm
                            Deactivation'
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
                          How can I change the email ID linked with my Elenext
                          account?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse10"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To change the email ID associated with your Elenext
                            account, follow these simple steps on our website:
                            1. Log in to your Elenext account 2. Go to My
                            Account › Settings › Update Email/Mobile 3. Add the
                            new email ID 4. Enter the verification code sent to
                            your old and new email IDs 5. Choose 'Save Changes'
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
                          Can I use an international number to sign up?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse11"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, you can use an international number to sign up.
                            This number can only be used for logging in and
                            subscribing to order-related updates and
                            confirmation details.
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
                          How can I use my mobile number to login on the Elenext
                          mobile app?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse12"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To log into the Elenext mobile app, update your
                            mobile number from your Elenext account on our
                            website with these simples steps: 1. Go to My
                            Account › Settings › Update Email/Mobile 2. Add your
                            mobile number 3. Enter the OTP received on your
                            registered mobile number 4. Select 'Save Changes'
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
                          Can I use a corporate email ID to sign up?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse13"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, you can use a corporate email ID. However,
                            please ensure that you have updated your current
                            active email address to continue using your account
                            in the unlikely event of your account getting
                            deleted or deactivated.
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
                          I'm getting an error message that says, 'You've
                          exceeded the maximum number of attempts to enter
                          correct verification code'. How can I log in to my
                          Elenext account now?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse14"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If a wrong code is entered for verification more
                            than a specific number of times, this error message
                            will be seen and for security reasons, your account
                            will be blocked for the next 24 hours. To log in,
                            please try again after 24 hours by entering the
                            correct OTP.'
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
                          I always login using my phone number, but I recently
                          lost my phone. I have also forgotten the password to
                          my Elenext account. How do I access it?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse15"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If you have forgotten the password for your account,
                            you can reset it using the 'Forgot password' option
                            available on the home page. Just enter your
                            registered email ID to get an OTP, once you have the
                            OTP simply follow the prompts. If you regain access
                            to your phone number, you can always log in using
                            OTP else, if an email ID is registered with your
                            account, you can click on 'Forget Password' and
                            attempt to log in. In the unlikely event of these
                            not working, you can contact our customer support
                            team for further assistance.
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

          {ShowPandS ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Privacy & Security</div>
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
                          How do I report a listing infringement?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If you think that your IP right has been infringed
                            by any of our sellers, you can follow the below
                            process. We require that the Intellectual Property
                            right owner or authorized agent provide the
                            following details and email it to
                            infringement@Elenext.com, Identification or
                            description of the copyrighted work/ trademark that
                            has been infringed. Clear identification or
                            description of where the material that you claim is
                            infringing is located on www.Elenext.com with
                            adequate particulars. Product ID / website links of
                            infringing products (in case of copyright
                            infringement). Elenext is unable to process requests
                            which do not specify exact product IDs or URLs.
                            Please do not provide links to browse pages or links
                            of search queries as these pages are dynamic and
                            their contents change with time. Your address,
                            telephone number, and email address. A statement by
                            you that you have a good faith belief that the use
                            of the material complained of is not authorized by
                            the copyright or intellectual property owner, its
                            agent, or the law. A statement by you, that the
                            information in your notice is accurate and that you
                            are the copyright or intellectual property owner or
                            authorized to act on the copyright or intellectual
                            property owner's behalf Brand Name (in case of
                            Trademark infringement) Details of the intellectual
                            property being infringed (Provide copyrighted images
                            or trademark certificates as attachments)
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
                          data-bs-target="#flush-collapse2"
                          aria-expanded="false"
                          aria-controls="flush-collapse2"
                        >
                          If I have found a security Bug/Vulnerability/Issue
                          what should I do?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            We take security very seriously at Elenext. If you
                            have found an issue on Elenext, you can report it to
                            security@Elenext.com with the below details: 1.
                            Steps to reproduce the bug/issue 2. Your web
                            browser/mobile browser's name and version 3.
                            Screenshot/screencast (if any).
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

          {ShowInstallation ? (
            <div className="sidebar">
              <div className="sidebar-shadow">
                <div className="order_content">
                  <div className="car_header">Installation</div>
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
                          What all is covered as part of standard installation?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Split air conditioners: Parts/services covered under
                            standard Installation:a. Copper Pipe with Sleeve -
                            3Mtr b. POWER CABLE 3 Core - 3Mtr, c. Remote - 1Nos,
                            d. Remote Batteries Parts not covered as part of
                            standard Installation and their respective
                            charges:a. Outdoor unit stand - Rs. 750, b. Extra
                            copper pipes - Rs 750 per meter without sleeves &
                            power cable, c. Drain pipe extension if any. (per
                            meter cost) - Rs. 125, d. Wiring extension from
                            meter to site, (per meter cost) Rs. 86 Services not
                            covered as part of standard installation and
                            chargeablea. Stabilizer required for the
                            installation if available with the technician, f.
                            Plumbing and Masonry Work, g. <br /><br />Powerpoint/MCB fitting
                            and any other electrical work, h. Carpentry work, i.
                            Dismantling/Shifting of Old AC's Masonry, j. Core
                            Cutting Fabrication and Electrical The authorised
                            service engineer will provide a detailed demo that
                            includesa. Usage of the product, b. Explain all the
                            functionality of the product, c. <br /><br />Preventive
                            maintenance action to be taken Televisions: If wall
                            mount is part of the sales package: The wall mount
                            will be provided free of cost and will be available
                            in the product boxThe installation and demo service
                            will be provided free of costAll additional
                            accessories not part of the the package will be
                            charged separately The authorized service engineer
                            will be providing detailed demo that includes:1.
                            Physical check of all ports, including power and USB
                            ports2. Checking also of accessories3. <br /><br />Understanding
                            your new TV's features with complete demonstration
                            of features and settings4. Quick run-through on how
                            to operate the TV5. Preventive maintenance action to
                            be taken If wall mount is not a part of the sales
                            package and needs to be purchased separately: The
                            installation & first demo service will be provided
                            free of cost. All additional accessories not part of
                            the the package will be charged separately.The
                            service engineer will install your new TV, either on
                            wall mount or on table top. The wall mount is not
                            provided free of cost and is chargeable. The cost of
                            wall mount is Rs. 499 (inclusive of applicable
                            taxes) and will be available with service engineer
                            for purchase.<br /><br />The authorised service engineer will be
                            providing detailed demo that includes the
                            following:a. Physical check of all ports, including
                            power and USB ports. b. Checking of accessories c.
                            Understanding your new TV's features with complete
                            demonstration of features and settings d. Quick
                            run-through on how to operate the TV e. Preventive
                            maintenance action to be taken Washing Machine -
                            Front load The installation and demo service will be
                            provided free of cost. All additional accessories
                            not part of the the package will be charged
                            separately.The authorised service engineer will
                            provide detailed demo that includes the following:
                            1. Usage of the product2. Explain all the
                            functionality of the product3. <br /><br />Preventive
                            maintenance action to be taken Washing machine - Top
                            Load The features of the product are presented in
                            the user manual that comes with it. <br /><br />Hence, the
                            manufacturer does not provide on-site installation
                            or demo for the product.
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
                          data-bs-target="#flush-collapse2"
                          aria-expanded="false"
                          aria-controls="flush-collapse2"
                        >
                          Will I be charged for installation?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Air-conditioners: The installation of an
                            air-conditioner is chargeable and needs to be paid
                            directly to the service engineer. Standard
                            installation charges for split AC will be Rs. 1599
                            (inclusive of taxes). <br /><br />Please check the offer details
                            to know if free installation or any other special
                            offer price is available at the time of purchase.
                            Television (Wall mount is part of sales package):The
                            service engineer will install your new television,
                            either on a wall mount or on a table top.<br /><br />
                            Installation and demo are provided free of cost.
                            Television (Wall mount is not part of sales
                            package):The wall mount is not provided free of cost
                            and is chargeable. <br /><br />The cost of wall mount is Rs. 499
                            (inclusive of applicable taxes) and will be
                            available with service engineer for purchase.
                            Washing machine/Refrigerator:The installation and
                            demo service will be provided free of cost. All
                            additional accessories not part of the package will
                            be charged separately.
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

          {ShowInsurance ? <div>this is Insurance page</div> : ""}

          {ShowQuick ? <div>this is Elenext Quick page</div> : ""}

          {ShowSuperCoins ? <div>this is SuperCoins page</div> : ""}

          {ShowRefurbished ? <div>this is Refurbished page</div> : ""}

          {ShowTravel ? <div>this is Elenext Travel page</div> : ""}

          {ShowVehicle ? <div>this is Electric Vehicle page</div> : ""}

          {ShowPlus ? <div>this is Elenext Plus page</div> : ""}

          {ShowPhonepe ? <div>this is Elenext Phone Pe</div> : ""}
        </div>
      </div>
    </div>
  );
};

export default CancellationsAndReturns;

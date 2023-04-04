import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import BlogDetails from "./components/pages/BlogDetails";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import PangNotFound from "./components/pages/PangNotFound";
import Product from "./components/pages/Product";
import SHOP_2 from "./components/pages/Shop_2";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import WishList from "./components/pages/WishList";
import CheckOut from "./components/pages/CheckOut";
import YourAccount from "./components/pages/YourAccount";

import Slick from "./components/pages/Slick";
import Your_Name from "./components/pages/Your_Name";
import AddressChange from "./components/pages/AddressChange";
import Tracking from "./components/pages/Tracking";
import Email from "./components/pages/Email";

import Mail_otp from "./components/pages/Mail_otp";
import Change_num from "./components/pages/Change_num";
import Change_pw from "./components/pages/Change_pw";
import Reset_pwd from "./components/pages/Reset_pwd";
import PhoneOtp from "./components/pages/PhoneOtp";
import PhoneOtp2nd from "./components/pages/PhoneOtp2nd";
import TsVerification from "./components/pages/TsVerification";
import Tsveri2nd from "./components/pages/Tsveri2nd";
import Tsveri3rd from "./components/pages/Tsveri3rd";
import Compromise_account from "./components/pages/Compromise_account";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<SHOP_2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PangNotFound />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/youraccount" element={<YourAccount />} />
          <Route path="/your_name" element={<Your_Name />} />
          <Route path="/addressChange" element={<AddressChange />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/Email" element={<Email />} />
          <Route path="/Phone_Otp" element={<PhoneOtp />} />
          <Route path="/Mail_otp" element={<Mail_otp />} />
          <Route path="/Change_num" element={<Change_num />} />
          <Route path="/Change_pw" element={<Change_pw />} />
          <Route path="/Reset_pwd" element={<Reset_pwd />} />
          <Route path="/PhoneOtp2nd" element={<PhoneOtp2nd />} />
          <Route path="/TsVerification" element={<TsVerification />} />
          <Route path="/Tsveri2nd" element={<Tsveri2nd />} />
          <Route path="/Tsveri3rd" element={<Tsveri3rd />} />
          <Route path="/slick" element={<Slick />} />
          <Route path="/compromise_account" element={<Compromise_account/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import BlogDetails from "./components/pages/BlogDetails";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import PangNotFound from "./components/pages/PangNotFound";
import Product from "./components/pages/Product";
import SHOP2 from "./components/pages/Shop_2";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import WishList from "./components/pages/WishList";
import CheckOut from "./components/pages/CheckOut";
import YourAccount from "./components/pages/YourAccount";
import Slick from "./components/pages/Slick";
import YourName from "./components/pages/Your_Name";
import AddressChange from "./components/pages/AddressChange";
import Tracking from "./components/pages/Tracking";
import Email from "./components/pages/Email";
import MailOtp from "./components/pages/Mail_otp";
import ChangeNum from "./components/pages/Change_num";
import ChangePw from "./components/pages/Change_pw";
import ResetPwd from "./components/pages/Reset_pwd";
import PhoneOtp from "./components/pages/PhoneOtp";
import PhoneOtp2nd from "./components/pages/PhoneOtp2nd";
import TsVerification from "./components/pages/TsVerification";
import Tsveri2nd from "./components/pages/Tsveri2nd";
import Tsveri3rd from "./components/pages/Tsveri3rd";
import CompromiseAccount from "./components/pages/Compromise_account";
import Tsveri4th from "./components/pages/Tsveri4th";
import CSecure from "./components/pages/CSecure";
import CSecure2nd from "./components/pages/CSecure2nd";
import PaymentDiscription from "./components/pages/PaymentDiscription";
import ShippingDiscription from "./components/pages/ShippingDiscription";
import SafeAndSecureDesc from "./components/pages/SafeAndSecureDesc";
import ReturnPolicy from "./components/pages/ReturnPolicy";
import TermAndCondtion from "./components/pages/TermsAndCondition";
import CancellationsAndReturns from "./components/pages/CancellationsAndReturns";
import Privacy from "./components/pages/Privacy";
import GrievanceRedressal from "./components/pages/Grievance_Redressal";
import EPRCompliances from "./components/pages/EPRCompliances";
import AllCatagories from "./components/pages/AllCatagories";
import Demo from "./components/pages/demo";
import Review from "./components/pages/Review";
import RefundAndReturnOrder from "./components/pages/RefundAndReturnOrder";
import OrdePage from "./components/pages/OrdePage";
import CancelOrder from "./components/pages/CancelOrder";
import ExchangeAndRefund from "./components/pages/ExchangeAndRefund";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<SHOP2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/youraccount" element={<YourAccount />} />
          <Route path="/your_name" element={<YourName />} />
          <Route path="/addressChange" element={<AddressChange />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/Email" element={<Email />} />
          <Route path="/Phone_Otp" element={<PhoneOtp />} />
          <Route path="/Mail_otp" element={<MailOtp />} />
          <Route path="/Change_num" element={<ChangeNum />} />
          <Route path="/Change_pw" element={<ChangePw />} />
          <Route path="/Resetpwd" element={<ResetPwd />} />
          <Route path="/PhoneOtp2nd" element={<PhoneOtp2nd />} />
          <Route path="/TsVerification" element={<TsVerification />} />
          <Route path="/Tsveri2nd" element={<Tsveri2nd />} />
          <Route path="/Tsveri3rd" element={<Tsveri3rd />} />
          <Route path="/slick" element={<Slick />} />
          <Route path="/compromise_account" element={<CompromiseAccount />} />
          <Route path="/Tsveri4th" element={<Tsveri4th />} />
          <Route path="/CSecure" element={<CSecure />} />
          <Route path="/CSecure2nd" element={<CSecure2nd />} />
          <Route path="/paymentdiscription" element={<PaymentDiscription />} />
          <Route
            path="/shippingdiscription"
            element={<ShippingDiscription />}
          />
          <Route path="/safeandsecuredesc" element={<SafeAndSecureDesc />} />
          <Route path="/returnpolicy" element={<ReturnPolicy />} />
          <Route path="/TermAndCondtion" element={<TermAndCondtion />} />
          <Route path="/CancellationsAndReturns" element={<CancellationsAndReturns />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/Grievance_Redressal" element={<GrievanceRedressal />} />
          <Route path="/eprcompliances" element={<EPRCompliances />} />
          <Route path="/allcatagories" element={<AllCatagories />} />
          <Route path="/review" element={<Review />} /> 
          <Route path="/RefundAndReturnOrder" element={<RefundAndReturnOrder />} /> 
          <Route path="/OrdePage" element={<OrdePage />} /> 
          <Route path="/CancelOrder" element={<CancelOrder />} /> 
          <Route path="/ExchangeAndRefund" element={<ExchangeAndRefund />} /> 


          <Route path="*" element={<PangNotFound />} />
          <Route path="/demo" element={<Demo/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

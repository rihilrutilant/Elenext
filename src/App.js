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
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/youraccount" element={<YourAccount/>} />
          <Route path="/your_name" element={<Your_Name/>} />
          <Route path="/addressChange" element={<AddressChange/>} />
          <Route path="/tracking" element={<Tracking/>} />
          
          <Route path="/slick" element={<Slick/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

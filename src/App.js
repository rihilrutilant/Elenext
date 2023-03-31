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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

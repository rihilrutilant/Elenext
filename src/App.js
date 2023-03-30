import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import Shop_2 from "./components/pages/Shop_2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop_2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

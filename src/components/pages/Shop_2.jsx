import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Shop_2.css";

const Shop_2 = () => {
  return (
    <div className="container-fluid">
      <p className="s_header">
        <Link to="/">Home</Link>&nbsp;&gt; Shop
      </p>

      <div className="main_banner">
        <div className="inner_text">
          <p className="collection">Accessories Collection</p>
          <p className="smart">SMART WRIST WATCHES</p>
          <p className="lorem">Fusce egestas elit eget lorem</p>
        </div>
        <div className="inner-headset">
          <img
            className="headset"
            src={require("../Images/headset.png")}
            alt=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Shop_2;

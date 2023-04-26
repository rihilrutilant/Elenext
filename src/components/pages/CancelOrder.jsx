import React from 'react'
import "../Styles/CancelOrder.css"
import { Link } from "react-router-dom";
import choose from "../Images/choose.svg"

const CancelOrder = () => {
    return (
        <>
            <div className="container-fluid">
                <p className="s_header">
                    <Link className="home_hover" to="/">
                        Home
                    </Link>
                    &nbsp;&gt;  Cancel Order
                </p>
                <div className="main_banner">
                    <div className="inner_text">
                        <p className="collection">Accessories Collection</p>
                        <p className="smart">SMART WRIST WATCHES</p>
                        <p className="lorem">Fusce egestas elit eget lorem</p>
                        <input type="submit" value="Send Now" className="send_Header" />
                    </div>
                    <div className="inner-headset">
                        <img
                            className="headset"
                            src={require("../Images/headset.png")}
                            alt=" "
                        />
                    </div>
                </div>

                <div className="main_choose">
                    <p>Choose items to return</p>

                    <div className="choose">
                        <img src={choose} alt="" />
                        <div className="side-choose">
                            <p>Bose Sport Hedphone - True Wireless...</p>
                            <p>Color: Triple Black</p>
                            <p>$179.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CancelOrder
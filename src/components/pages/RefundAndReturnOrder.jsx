import React from 'react'
import { Link } from "react-router-dom";

const RefundAndReturnOrder = () => {
    return (
        <>
            <div className="container-fluid">
                <p className="s_header">
                    <Link className="home_hover" to="/">
                        Home
                    </Link>
                    &nbsp;&gt; Contact Us
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
            </div>
        </>
    )
}

export default RefundAndReturnOrder
import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/RefundAndReturnOrder.css"

const RefundAndReturnOrder = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

    return (
        <>
            <div className="container-fluid">
                <p className="s_header">
                    <Link className="home_hover" to="/">
                        Home
                    </Link>
                    &nbsp;&gt;  Refund And Return Order
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

                <div className="main-randrorder">
                    <div className="left-side-randr">
                        <div className="uperside-left">
                            <div className="order_placed">
                                <p>ORDER PLACED</p>
                                <span>18 March 2023</span>
                            </div>
                            <div className="total">
                                <p>TOTAL </p>
                                <span>₹1,699.00</span>
                            </div>
                            <div className="ship">
                                <p>SHIP TO</p>
                                <span style={{ color: "#0E4DC5", cursor: "pointer" }}>Rutilant Technology</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-randr">
                        <p>ORDER # 404-9197942-3768339</p>
                        <span onClick={onButtonClick}>View order details | Invoice</span>
                    </div>
                </div>

                <div className="middle-part">
                    <p>Return Product</p>
                    <h6>Your return is complete.&nbsp;<Link to='/CancellationsAndReturns'><span style={{ cursor: 'pointer' }}>When will I get my refund?</span></Link></h6>


                    <div className="main-middle-part">
                        <div className="inner-middle-part">
                            <img src={require("../Images/cart_1.png")} alt=" " />
                            <p>Noise Pulse Go Buzz Smart Watch with Latest Bluetooth Calling tech, 1.69" Clear Display, 550Nits, 150+ Watch face, Comfort Strap, Heart Rate, Steps & Sleep Tracker, IP68, 7 Days Battery(Mist Grey)</p>
                        </div>

                        <div className="end-right-side">
                            <Link to='/Tracking' className='track-parage'>Track package</Link>
                            <Link className='track-parage' to='/CancellationsAndReturns'>Problem with Order</Link>
                            <Link className='cancel-items' to='/ExchangeAndRefund'>Return items</Link>
                            <Link className='cancel-items' to='/Review'>Leave seller feedback</Link>
                            <Link className='cancel-items' to='/Review'>Write a product review</Link>
                        </div>
                    </div>
                </div>

                <div className="arachive">
                    <Link to='/Product'>
                        <p>
                            Archive order
                        </p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RefundAndReturnOrder
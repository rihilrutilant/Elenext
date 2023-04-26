import React, { useState } from 'react'
import "../Styles/CancelOrder.css"
import { Link } from "react-router-dom";
import choose from "../Images/choose.svg"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CancelOrder = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

                    <select name="" id="">
                        <option disabled selected value="">Select Cancellation Reason</option>
                        <option value="">Order Created by Mistake</option>
                        <option value="">Item(s) Would Not Arrive on Time</option>
                        <option value="">Shipping Cost Too High</option>
                        <option value="">Item Price Too High</option>
                        <option value="">Found Cheaper Somewhere Else</option>
                        <option value="">Need to Change Shipping Address</option>
                        <option value="">Need to Change Billing Address</option>
                        <option value="">Need to Change Payment Method</option>
                        <option value="">Need to Change Shipping Speed</option>
                        <option value="">Other</option>
                    </select>

                    <div className="comments">
                        <p>Comments<span style={{ color: "red" }}>*</span></p>
                        <textarea name="" id="" rows="7"></textarea>
                        <p className='continue' onClick={handleShow}>Continue</p>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Cancellation</Modal.Title>
                        </Modal.Header>
                        <div className="display-flex-body">
                            <img src={require("../Images/discount.png")} alt=" " />
                            <Modal.Body>You saved ₹2200 on this product!</Modal.Body>
                            <img src={require("../Images/cart_1.png")} alt=" " className='headset_popop'/>
                        </div>
                        <div className="down-body">
                            <Modal.Body>If you cancel now, you may not be able to avail this deal again. Do you still want to cancel?</Modal.Body>
                        </div>
                        <Modal.Footer>
                            <Button style={{background: "#FFFFFF", color: "#000000"}} onClick={handleClose} className="inner-modal-footer">
                                Cancel Order
                            </Button>
                            <Button style={{background: "#FEA700", color: "#FFFFFF"}} onClick={handleClose} className="inner-modal-footer">
                                Don't cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default CancelOrder
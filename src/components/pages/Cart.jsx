import React from 'react'
import "../Styles/Cart.css"
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <>
            <div className="container-fluid">

                <p className="s_header">
                    <Link className="home_hover" to="/">Home</Link>&nbsp;&gt; Wishlist
                </p>

                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <span className="alert_body">
                        <strong><i class="fa-solid fa-check"></i></strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;Product Successfully Removed.
                    </span>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                <div className="cart_contant">
                    <div className="cc_header">
                        My Wishlist
                    </div>
                    <div className="cc_body">
                        <div className='cc_text2'>
                            <img src={require("../Images/cart_1.png")} className='cart_img' alt=" " />
                            <div className="sun_body">
                                <div className="bd_txt">Headphone boat Rockz 550</div>
                                <div className='cc_price'>$220.25</div>
                                <div className="cc_btn">
                                    <span>
                                        <i class="fa-solid fa-plus cc_btn_sub"></i>
                                        1
                                        <i class="fa-solid fa-minus cc_btn_sub"></i>
                                    </span>
                                </div>
                                <span className='cc_btns'>
                                    <button className='cc_bn'>Buy Now</button>
                                    <button className='cc_atc'>Add To Cart</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
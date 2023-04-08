import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const WishList = () => {

    let [num, setNum] = useState(0);
    let [num2, setNum2] = useState(0);
    let [num3, setNum3] = useState(0);

    let incNum = () => {
        if (num < 100) {
            setNum(Number(num) + 1);
        }
    };

    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    };

    let incNum2 = () => {
        if (num2 < 100) {
            setNum2(Number(num2) + 1);
        }
    };

    let decNum2 = () => {
        if (num2 > 0) {
            setNum2(num2 - 1);
        }
    };

    let incNum3 = () => {
        if (num3 < 100) {
            setNum3(Number(num3) + 1);
        }
    };

    let decNum3 = () => {
        if (num3 > 0) {
            setNum3(num3 - 1);
        }
    };

    return (
        <>
            <div className="container-fluid">

                <p className="s_header">
                    <Link className="home_hover" to="/">Home</Link>&nbsp;&gt; Wishlist
                </p>

                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <span className="alert_body">
                        <strong><i className="fa-solid fa-check"></i></strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;Product Successfully Removed.
                    </span>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                {/* ---------------empty cart--------------- */}
                <section className='emt_cart'>
                    <img src={require("../Images/wishlist.png")} className='emt_img' alt="" />
                    <div className="emt_text">No Product Added To The Wishlist</div>
                    <input type="submit" value="Go Shop" className='send_Header' />
                </section>
                {/* ---------------empty cart--------------- */}

                <div className="cart_contant">
                    <div className="cc_header">
                        My Wishlist
                    </div>
                    <div className="cc_body">
                        <div className='cc_text2'>
                            <div className='cc_imgs'>
                                <img src={require("../Images/cart_1.png")} className='cart_img' alt=" " />
                                <div className="close_btn">
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className="sun_body">
                                <div className="bd_txt">Headphone boat Rockz 550</div>
                                <div className='cc_price'>$220.25</div>
                                <div className="cc_btn">
                                    <span>
                                        <i className="fa-solid fa-plus cpt_btn_sub" onClick={incNum}></i>
                                        {num}
                                        <i className="fa-solid fa-minus cpt_btn_sub" onClick={decNum}></i>
                                    </span>
                                </div>
                                <span className='cc_btns'>
                                    <button className='cc_bn'>Buy Now</button>
                                    <button className='cc_atc'>Add To Cart</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="cc_body">
                        <div className='cc_text2'>
                            <div className='cc_imgs'>
                                <img src={require("../Images/cart_1.png")} className='cart_img' alt=" " />
                                <div className="close_btn">
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className="sun_body">
                                <div className="bd_txt">Headphone boat Rockz 550</div>
                                <div className='cc_price'>$220.25</div>
                                <div className="cc_btn">
                                    <span>
                                        <i className="fa-solid fa-plus cpt_btn_sub" onClick={incNum2}></i>
                                        {num2}
                                        <i className="fa-solid fa-minus cpt_btn_sub" onClick={decNum2}></i>
                                    </span>
                                </div>
                                <span className='cc_btns'>
                                    <button className='cc_bn'>Buy Now</button>
                                    <button className='cc_atc'>Add To Cart</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="cc_body">
                        <div className='cc_text2'>
                            <div className='cc_imgs'>
                                <img src={require("../Images/cart_1.png")} className='cart_img' alt=" " />
                                <div className="close_btn">
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className="sun_body">
                                <div className="bd_txt">Headphone boat Rockz 550</div>
                                <div className='cc_price'>$220.25</div>
                                <div className="cc_btn">
                                    <span>
                                        <i className="fa-solid fa-plus cpt_btn_sub" onClick={incNum3}></i>
                                        {num3}
                                        <i className="fa-solid fa-minus cpt_btn_sub" onClick={decNum3}></i>
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

export default WishList
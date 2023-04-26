import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/OrdePage.css"
import ReviewStar from "../Images/review_star.svg"

const OrdePage = () => {
  return (
    <>
      <div className='order_page'>
        <div className="container-fluid">
          <p className="s_header">
            <Link className="home_hover" to="/">
              Home
            </Link>
            &nbsp;&gt; My Order
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
          <div className="cart_contant">
            <div className="cc_header">
              My Order
            </div>
            <div className="cc_body">
              <Link className='cc_text2'>
                <div className='cc_imgs'>
                  <img src={require("../Images/cart_1.png")} className='cart_img' alt=" " />
                </div>
                <div className="sun_body">
                  <div className="bd_txt">Headphone boat Rockz 550</div>
                  <div className='cc_price'>$220.25</div>
                  <div className='order_cnt order_suc'>
                    <h2><span className='order_p_c order_s'></span> Delivered on Apr 06</h2>
                    <h3>Your item has been delivered</h3>
                    <Link to="#" className='R_R_link'><img src={ReviewStar} alt="review star" /> Rate & Review Product</Link>
                  </div>
                </div>
              </Link>
            </div>
            <div className="cc_body">
              <Link className='cc_text2'>
                <div className='cc_imgs'>
                  <img src={require("../Images/cart_1.png")} className='cart_img' alt=" " />
                </div>
                <div className="sun_body">
                  <div className="bd_txt">Headphone boat Rockz 550</div>
                  <div className='cc_price'>$220.25</div>
                  <div className='order_cnt order_can'>
                    <h2><span className='order_p_c order_c'></span> Delivered on Apr 06</h2>
                    <h3>You requested a cancellation due to quality issues with the product.</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="cc_body">
              <Link className='cc_text2'>
                <div className='cc_imgs'>
                  <img src={require("../Images/cart_1.png")} className='cart_img' alt=" " />
                </div>
                <div className="sun_body">
                  <div className="bd_txt">Headphone boat Rockz 550</div>
                  <div className='cc_price'>$220.25</div>
                  <div className='order_cnt order_ret'>
                    <h2><span className='order_p_c order_r'></span> Return Request on Apr 05</h2>
                    <h3>You requested a Request due to quality issues with the product.</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrdePage
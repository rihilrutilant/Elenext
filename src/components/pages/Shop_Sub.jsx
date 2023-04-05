import React from 'react'
import "../Styles/Shop_Sub.css"
import star from "../Images/star.svg"

const Shop_Sub = () => {
    return (
        <>
            <div className="popular-cnt">
                <div className='popular_pro_info'>
                    <img src={require("../Images/popular-img1.png")} alt=" popular-img" className='popular-cnt-img' />
                    <h4>Instax Mini 9</h4>
                    <div className='review-part'>
                        <img src={star} alt="star" />
                        <span>(10 Reviews)</span>
                    </div>
                    <h5>$45.00 <span>$50.00</span></h5>
                </div>
                <div className='popular_pro_info'>
                    <img src={require("../Images/popular-img2.png")} alt=" popular-img" className='popular-cnt-img' />
                    <h4>Alexis 31 Bag</h4>
                    <div className='review-part'>
                        <img src={star} alt="star" />
                        <span>(50 Reviews)</span>
                    </div>
                    <h5>$45.00 <span>$50.00</span></h5>
                </div>
                <div className='popular_pro_info'>
                    <img src={require("../Images/popular-img3.png")} alt=" popular-img" className='popular-cnt-img' />
                    <h4>Sony WH-1000XM5</h4>
                    <div className='review-part'>
                        <img src={star} alt="star" />
                        <span>(6 Reviews)</span>
                    </div>
                    <h5>$45.00 <span>$50.00</span></h5>
                </div>
                <div className='popular_pro_info'>
                    <img src={require("../Images/popular-img4.png")} alt=" popular-img" className='popular-cnt-img' />
                    <h4>Fire-Boltt Phoenix</h4>
                    <div className='review-part'>
                        <img src={star} alt="star" />
                        <span>(8 Reviews)</span>
                    </div>
                    <h5>$45.00 <span>$50.00</span></h5>
                </div>
                <div className='popular_pro_info'>
                    <img src={require("../Images/popular-img5.png")} alt=" popular-img" className='popular-cnt-img' />
                    <h4>Noise Pulse Go Buzz</h4>
                    <div className='review-part'>
                        <img src={star} alt="star" />
                        <span>(65 Reviews)</span>
                    </div>
                    <h5>$45.00 <span>$50.00</span></h5>
                </div>
                <div className='popular_pro_info'>
                    <img src={require("../Images/popular-img6.png")} alt=" popular-img" className='popular-cnt-img' />
                    <h4>Redmi 11 Prime 5G</h4>
                    <div className='review-part'>
                        <img src={star} alt="star" />
                        <span>(10 Reviews)</span>
                    </div>
                    <h5>$45.00 <span>$50.00</span></h5>
                </div>
                <div className='popular_pro_info'>
                    <img src={require("../Images/popular-img7.png")} alt=" popular-img" className='popular-cnt-img' />
                    <h4>Sony Bravia 108 cm</h4>
                    <div className='review-part'>
                        <img src={star} alt="star" />
                        <span>(10 Reviews)</span>
                    </div>
                    <h5>$45.00 <span>$50.00</span></h5>
                </div>
                <div className='popular_pro_info'>
                    <img src={require("../Images/popular-img8.png")} alt=" popular-img" className='popular-cnt-img' />
                    <h4>Logitech M235 Wireless</h4>
                    <div className='review-part'>
                        <img src={star} alt="star" />
                        <span>(10 Reviews)</span>
                    </div>
                    <h5>$45.00 <span>$50.00</span></h5>
                </div>
                <div className='popular_pro_info'>
                    <img src={require("../Images/popular-img9.png")} alt=" popular-img" className='popular-cnt-img' />
                    <h4>Noise Newly Launched</h4>
                    <div className='review-part'>
                        <img src={star} alt="star" />
                        <span>(10 Reviews)</span>
                    </div>
                    <h5>$45.00 <span>$50.00</span></h5>
                </div>
                <div className='popular_pro_info'>
                    <img src={require("../Images/popular-img10.png")} alt=" popular-img" className='popular-cnt-img' />
                    <h4>Dell Gaming G15 5525</h4>
                    <div className='review-part'>
                        <img src={star} alt="star" />
                        <span>(10 Reviews)</span>
                    </div>
                    <h5>$45.00 <span>$50.00</span></h5>
                </div>
            </div>
        </>
    )
}

export default Shop_Sub
import React, { useState } from 'react'
import "../Styles/Checkout.css"
import { Link } from 'react-router-dom'

const CheckOut = () => {

    const countries = require("country-state-city").Country
    const States = require("country-state-city").State
    const Cities = require("country-state-city").City

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <>
            <div className="container-fluid">
                <p className="s_header">
                    <Link className="home_hover" to="/">Home</Link>&nbsp;&gt;&nbsp; <Link className="home_hover" to="/cart">Shopping Cart</Link>&nbsp;&gt;&nbsp;Checkout
                </p>

                <section className='checkout_content'>

                    {/* product total  */}
                    <div className="co_product_total">
                        <div className="cpt_content">
                            <div className="cpt_images">
                                <img className='cpt_img' src={require("../Images/cart_1.png")} alt="product" />
                                <div className="cpt_close_btn">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className="cpt_body">
                                <div className="cpt_txt">
                                    <div className="cpt_p_name"><strong>Headphone Boat Power</strong></div>
                                    <div className="cpt_v_name"><strong>Vendor:</strong>  Trident Store</div>
                                </div>
                                <div className="cpt_price">$25.00</div>
                                <div className="cpt_btn">
                                    <span>
                                        <i className="fa-solid fa-plus cpt_btn_sub"></i>
                                        3
                                        <i className="fa-solid fa-minus cpt_btn_sub"></i>
                                    </span>
                                </div>
                                <div className="cpt_price">$75.00</div>
                            </div>
                        </div>
                        <div className="cpt_content">
                            <div className="cpt_images">
                                <img className='cpt_img' src={require("../Images/cart_1.png")} alt="product" />
                                <div className="cpt_close_btn">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className="cpt_body">
                                <div className="cpt_txt">
                                    <div className="cpt_p_name"><strong>Headphone Boat Power</strong></div>
                                    <div className="cpt_v_name"><strong>Vendor:</strong>  Trident Store</div>
                                </div>
                                <div className="cpt_price">$25.00</div>
                                <div className="cpt_btn">
                                    <span>
                                        <i className="fa-solid fa-plus cpt_btn_sub"></i>
                                        3
                                        <i className="fa-solid fa-minus cpt_btn_sub"></i>
                                    </span>
                                </div>
                                <div className="cpt_price">$75.00</div>
                            </div>
                        </div>
                        <div className="cpt_content">
                            <div className="cpt_images">
                                <img className='cpt_img' src={require("../Images/cart_1.png")} alt="product" />
                                <div className="cpt_close_btn">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className="cpt_body">
                                <div className="cpt_txt">
                                    <div className="cpt_p_name"><strong>Headphone Boat Power</strong></div>
                                    <div className="cpt_v_name"><strong>Vendor:</strong>  Trident Store</div>
                                </div>
                                <div className="cpt_price">$25.00</div>
                                <div className="cpt_btn">
                                    <span>
                                        <i className="fa-solid fa-plus cpt_btn_sub"></i>
                                        3
                                        <i className="fa-solid fa-minus cpt_btn_sub"></i>
                                    </span>
                                </div>
                                <div className="cpt_price">$75.00</div>
                            </div>
                        </div>
                    </div>

                    {/* Cart total  */}
                    <div className="cart_total">
                        <div className="ct_outer">
                            <div className="ct_header">
                                checkout_content
                            </div>
                            <div className="ct_sub_header">
                                <div className="ct_text1">Subtotal</div>
                                <div className="ct_text2">$1,060.00</div>
                            </div>
                            <hr />
                            <div className="ct_text1">
                                Shipping
                            </div>
                            <div className="ct_radio">
                                <div class='px'>
                                    <label className='radio_lable'>
                                        <input type="checkbox" class="option-input checkbox" />
                                        Flat rate: $5.00
                                    </label>
                                    <br />
                                    <label className='radio_lable'>
                                        <input type="checkbox" class="option-input checkbox" />
                                        Free Shipping
                                    </label>
                                    <br />
                                    <label className='radio_lable'>
                                        <input type="checkbox" class="option-input checkbox" />
                                        Local Pickup
                                    </label>
                                </div>
                            </div>
                            <div className="ct_dropdown">
                                <div className="ct_dd_header">
                                    Shipping To CA, United State (US).
                                </div>

                                <select className='ct_dd' value={selectedCountry} onChange={handleCountryChange}>
                                    <option value="">Select Country</option>
                                    {countries.getAllCountries().map((country) => (
                                        <option key={country.isoCode} value={country.isoCode}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>

                                <select className='ct_dd' value={selectedState} onChange={handleStateChange}>
                                    <option value="">Select State</option>
                                    {States.getStatesOfCountry(selectedCountry).map((state) => (
                                        <option key={state.isoCode} value={state.isoCode}>
                                            {state.name}
                                        </option>
                                    ))}
                                </select>

                                <select className='ct_dd' value={selectedCity} onChange={handleCityChange}>
                                    <option value="">Select City</option>
                                    {Cities.getCitiesOfState(selectedCountry, selectedState).map((city) => (
                                        <option key={city.isoCode} value={city.isoCode}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                                <input type="text" className='ct_txt' placeholder='PIN Code' />

                                <button className='ct_btns'>Add Cart Product</button>
                            </div>
                            <hr />
                            <div className="ct_sub_header">
                                <div className="ct_text1">Total</div>
                                <div className="ct_text2">$1,060.00</div>
                            </div>
                            <div className="ct_procide">
                                <button className='ct_btns2'>Proceed To Checkout&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i> </button>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </>
    )
}

export default CheckOut
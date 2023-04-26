import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/ExchangeAndRefund.css"

const ExchangeAndRefund = () => {
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);

  const handleCheckbox1Change = () => {
    setCheckbox1Checked(!checkbox1Checked);
    setCheckbox2Checked(false);
  };

  const handleCheckbox2Change = () => {
    setCheckbox2Checked(!checkbox2Checked);
    setCheckbox1Checked(false);
  };

  const handleCheckbox3Change = () => {
    setCheckbox3Checked(!checkbox3Checked);
    setCheckbox4Checked(false);
  };

  const handleCheckbox4Change = () => {
    setCheckbox4Checked(!checkbox4Checked);
    setCheckbox3Checked(false);
  };

  return (
    <>
      <div className='ex_re_detail'>
        <div className='container-fluid'>
          <p className="s_header">
            <Link className="home_hover" to="/">
              Home
            </Link>
            &nbsp;&gt; Return/Exchange
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
          <div className='ret_exch_cnt'>
            <h2>Choose items to return</h2>
            <div className='ret_exch_product'>
              <div className='cc_imgs'>
                <img src={require("../Images/cart_1.png")} className='cart_img' alt=" " />
              </div>
              <div className='ret_exch_prod_part'>
                <label>
                  <input type="checkbox" checked={checkbox1Checked} onChange={handleCheckbox1Change} />
                  Exchange for an item of your choice
                  <span>We'll apply the amount of your refund to an exchange of one item of your choice</span>
                  {checkbox1Checked && (
                    <div className='exchange_check'>
                      <label>
                        <input type="checkbox" />
                        I agree to send the original item(s) back within 30 days or I will be charged the original price using
                      </label>
                    </div>
                  )}
                </label>

                <br />
                <label>
                  <input type="checkbox" checked={checkbox2Checked} onChange={handleCheckbox2Change} />
                  Refund to your original payment method
                </label>
                <br />
                {checkbox2Checked && (
                  <div>
                    <label>
                      <input type="radio" checked={checkbox3Checked} onChange={handleCheckbox3Change} />
                      Add to your Bank
                      {checkbox3Checked && (
                        <div className='exchange_check'>
                          
                        </div>
                      )}
                    </label>

                    <br />
                    <label>
                      <input type="radio" checked={checkbox4Checked} onChange={handleCheckbox4Change} />
                      Refund to your original payment method
                    </label>
                    <br />
                    {checkbox4Checked && (
                      <div>
                        <p>dfgdfgdgdfgdfgdfgdfgdfg</p>
                      </div>
                    )}
                  </div>
                )}

                <button className='continue_btn'>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExchangeAndRefund
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

  const [ifscCode, setIfscCode] = useState('');
  const [bankDetails, setBankDetails] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://ifsc.razorpay.com/${ifscCode}`
      );
      const data = await response.json();
      setBankDetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  const [accnumber, setAccNumber] = useState('');

  const handleNameChange = event => {
    const limit = 17;
    setAccNumber(event.target.value.slice(0, limit));
  };

  const [reaccnumber, setReAccNumber] = useState('');

  const handleNameCha = event => {
    const limit = 17;
    setReAccNumber(event.target.value.slice(0, limit));
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
                <label className='exchange_part'>
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
                  <div className='bankacc_fill'>
                    <label>
                      <input type="radio" checked={checkbox3Checked} onChange={handleCheckbox3Change} />
                      Add to your Bank
                      {checkbox3Checked && (
                        <div className='bankacc_detail'>
                          <h2>Add a new bank account</h2>
                          <form onSubmit={handleSubmit}>
                            <label> IFSC code: <br />
                              <input type="text" value={ifscCode} onChange={(event) => setIfscCode(event.target.value)} />
                            </label>
                            <button type="submit">Search</button>
                          </form>
                          {bankDetails && (
                            <div className='ifsc_detail'>
                              <p><strong>Bank name:</strong> {bankDetails.BANK}</p>
                              <p><strong>State:</strong> {bankDetails.STATE}</p>
                              <p><strong>Branch:</strong> {bankDetails.BRANCH}</p>
                            </div>
                          )}
                          <label>
                            Account Number <span>up to 17 digits no hyphens*</span> <br />
                            <input type="number" value={accnumber} onChange={handleNameChange} />
                          </label>
                          <label>
                            Re-enter Account Number <span>up to 17 digits no hyphens*</span> <br />
                            <input type="number" value={reaccnumber} onChange={handleNameCha} />
                          </label>

                          <button className='add_bank'>Add bank account</button>
                          <p>By adding this account, you are authorizing Elenext to share your bank account details with our banking partner to facilitate the refund.</p>
                        </div>
                      )}
                    </label>

                    <br />
                    <label>
                      <input type="radio" checked={checkbox4Checked} onChange={handleCheckbox4Change} />
                      Other UPI Apps
                    </label>
                    <br />
                    {checkbox4Checked && (
                      <div className='upi_detail'>
                        <input type="text" name="upi" id="upi" placeholder='Enter UPI ID' />
                        <button className='verify_btn'>Verify</button>
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
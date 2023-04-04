import React, { useState } from "react";
import "../Styles/Change_num.css";
import PhoneInput from "react-phone-number-input";

function Change_num() {
  const [value, setValue] = useState();
  return (
    <>
      <section>
        <div className="container-fluid">
          <h3 className="name">Change Mobile Number</h3>
          <div className="inner-part">
            <p className="old">Old mobile number : </p>
            <p className="num">IN +91 9785597455</p>
            <p className="y-num">Enter Your Mobile Number</p>
            <PhoneInput value={value} onChange={setValue} />
            <p className="pgh">
              By enrolling your mobile phone number, you consent to receive
              automated security notifications <br /> via text message from
              Amazon. Message and data rates may apply.
            </p>
            <button className="save-btn">Continue</button> <br />
            <button className="cnl-btn">Cancel</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Change_num;

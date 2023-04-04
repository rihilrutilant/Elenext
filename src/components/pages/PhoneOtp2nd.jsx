import React from "react";
import "../Styles/PhoneOtp2nd.css";
import { Link } from "react-router-dom";

function PhoneOtp2nd() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <h3 className="name">Phone Number</h3>

          <div className="inner-info">
            <div className="change-phn">
              <p>+919785597455</p>
              <Link to="#"> Change</Link>
            </div>
            <p>
              'We've sent a One Time Password (OTP) to your phone number. Please{" "}
              <br />
              enter it below.' similar short paragraph with more option
            </p>
            <label htmlFor="fname" className="lab">
              {" "}
              <b>Enter OTP</b>
            </label>
            <br />
            <input type="number" id="fname" name="fname" className="ipt" />
            <br />
            <a className="r-otp" href="#">
              Resend OTP
            </a>
            <button className="save-btn">Continue</button> <br />
            <p className="apply">Message and data rates may apply.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PhoneOtp2nd;

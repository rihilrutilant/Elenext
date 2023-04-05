import React from "react";
import "../Styles/Mail_otp.css";
import { Link } from "react-router-dom";

function Mail_otp() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <h3 className="name">E-mail Address</h3>
          <div className="inner-info">
            <div className="inner-change">
              <p>anilchovatiya178@gmail.com </p>
              <Link href="#"> Change</Link>
            </div>
            <p>
              'We've sent a Code to your E-mail address. Please enter it below.'
              similar <br /> short paragraph with more option
            </p>
            <label htmlFor="fname" className="lab">
              {" "}
              <b>Enter OTP</b>
            </label>
            <br />
            <input type="number" id="fname" name="fname" className="ipt" />
            <br />
            <button className="save-btn">Continue</button> <br />
            <Link href="#">Reset OTP</Link>
            <p className="apply">Message and data rates may apply.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mail_otp;

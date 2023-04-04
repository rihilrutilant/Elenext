import React from "react";

const PhoneOtp = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <h3 className="name">Phone Number</h3>
          <div className="inner-info">
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
};

export default PhoneOtp;

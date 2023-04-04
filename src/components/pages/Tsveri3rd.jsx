import React from "react";
import "../Styles/Tsveri3rd.css";
import { Link } from "react-router-dom";

function Tsveri3rd() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <h6 className="stp">Step 1 to 2</h6>
          <div className="inner-info1">
            <h3 className="name1">Phone Number</h3>
            <p className="p-pgh">
              'We've sent a One Time Password (OTP) to your phone number. Please
              enter it below.' <br /> similar short paragraph with more option
            </p>
            <label htmlFor="fname" className="lab">
              {" "}
              <b>Enter OTP</b>
            </label>
            <br />
            <input type="number" id="fname" name="fname" className="ipt1" />
            <br />
            <button className="save-btn">Continue</button>
            <Link to="#">Resend OTP</Link>
            <p>Message and data rates may apply.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tsveri3rd;

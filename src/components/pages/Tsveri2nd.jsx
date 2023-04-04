import React, { useState } from "react";
import "../Styles/Tsveri2nd.css";
import PhoneInput from "react-phone-number-input";

function Tsveri2nd() {
  const [value, setValue] = useState();
  return (
    <>
      <section>
        <div className="container-fluid">
          <h6 className="st2">Step 1 to 2</h6>
          <div className="verification-inner">
            <h3>Phone Number</h3>
            <p className="inner-p">
              Please specify the mobile number that you wish to use as your
              authenticator. Once you <br /> attempt to log in, a single-use
              password will be sent via text message to this number <br /> for
              authentication purposes. This additional security measure helps to
              safeguard your <br />
              account against unauthorized access. Thank you.
            </p>
            <h3 className="y-num">Enter Your Mobile Number</h3>
            <PhoneInput value={value} onChange={setValue} />
            <button className="ctn">Continue</button>
            <p className="msg">Message and data rates may apply.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tsveri2nd;

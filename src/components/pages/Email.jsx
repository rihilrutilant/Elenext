import React from "react";

function Email() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <h3 className="name">Change your email address</h3>
          <div className="inner-info">
            <p>Current email address: anil.rutilant@gmail.com</p>
            <p>
              Enter the new email address you would like to associate with your
              account <br /> below. We will send a One Time Password (OTP) to
              that address.
            </p>
            <label htmlFor="fname" className="lab">
              {" "}
              <b>New email address</b>
            </label>
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              className="ipt"
              placeholder="Enter your Email Address"
            />
            <br />
            <button className="save-btn">Continue</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Email;

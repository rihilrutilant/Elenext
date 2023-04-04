import React from "react";
import "../Styles/Reset_pwd.css";

function Reset_pwd() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <h3 className="name">Password reset required</h3>
          <div className="inner-info">
            <p className="c-prh">
              Please set a new password for your account that you have not{" "}
              <br /> used elsewhere. We'll send a One Time Password (OTP) to{" "}
              <br /> authenticate this change.
            </p>
            <h3>Send OTP to</h3>
            <div className="inp">
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                className="r-btn"
                value="JavaScript"
                
              />
          
                <label for="javascript">h*************t@gmail.com</label>
              <br />
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                className="r-btn"
                value="JavaScript"
              />
                <label for="javascript">+919*****7455</label>
              <br />

              <button className="save-btn">Save Changes</button>
            </div>
            <p className="act">
              Cannot access your email and mobile number? Contact{" "}
              <a href="#"> Customer Service</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reset_pwd;

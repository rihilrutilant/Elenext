import React from "react";
import "../Styles/TsVerification.css";
function TsVerification() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <p id="tit">Two-Step Verification</p>
          <h3 className="t1">Two-Step Verification</h3>
          <p className="t1-1">
            Enable two-factor authentication with password and OTP verification
          </p>

          <h3 className="t1">Why do I need this?</h3>
          <p className="t1-1">
            Using the same password for multiple sites puts you at risk for
            password theft. By enabling Two-Step Verification on your Amazon
            account, you can ensure that your account remains secure even if
            your password is compromised.
          </p>
          <h3 className="t1">How does it work?</h3>
          <p className="t1-1">
            After activating Two-Step Verification, the process of signing in
            will undergo some changes.
          </p>
          <p className="p1">
            1. To sign in to your account, start by entering your password as
            usual.
          </p>
          <p className="p1">
            2. You will then receive an OTP via a text message, email, or
            authenticator app.
          </p>
          <p className="p1">
            3. Finally, enter the OTP on the screen to complete the sign-in
            process and access your account.
          </p>

          <img className="log" src={require("../Images/noti.png")} alt="" />
          <p className="chlg">
            If you use a particular computer regularly, you can opt to bypass
            the OTP challenge.
          </p>
          <h3 className="t1">What do I need to get started?</h3>
          <p className="t1-1">
            To use Two-Step Verification, you will require a phone capable of
            receiving text messages, and we will guide you through the process
            of setting up an authenticator app on your smartphone.
          </p>
          <p className="p1">
            Click on "Get Started" to initiate the process of enabling Two-Step
            Verification for your account.
          </p>
          <button className="g-start">Get Started</button>
        </div>
      </section>
    </>
  );
}

export default TsVerification;

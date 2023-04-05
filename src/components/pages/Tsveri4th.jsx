import React from "react";
import "../Styles/Tsveri4th.css";

function Tsveri4th() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <h6 className="stp-2">Step 2 to 2</h6>
          <h3 className="Almost">Almost done...</h3>
          <p className="t-more">Just two more important things to know:</p>
          <h4 className="p-h4">1. Legacy device Sign-In method</h4>
          <p className="some">
            Some devices are unable to display a second screen prompting you to
            enter the OTP, but Two-Step Verification will still be <br />{" "}
            required. Here's how it will work:
          </p>
          <div className="legacy">
            <p className="prd">
              1. Sign in with your password. An error <br /> message will occur.
            </p>
            <p className="prd">
              2. An OTP will be sent to your preferred <br /> phone. You may
              also use an <br /> authenticator app.
            </p>
            <p className="prd">
              3. Add ("append") the OTP to the <br /> end of your password, and
              click <br />
              "Sign-In" again.
            </p>
          </div>
          <p className="p-be">
            You will then be signed in to your Amazon account.
          </p>
          <h4 className="p-h4">2. Suppress OTP challenge during Sign-In</h4>
          <p className="some">
            You may suppress future OTP challenges by selecting "Don't require
            OTP on this browser". As long as the OTP suppression cookie <br />{" "}
            is present, a Sign-In from that browser or application will only
            require a password. (Note: This option is enabled separately for{" "}
            <br />
            each browser that you use.)
          </p>
          <input
            className="ch2"
            type="checkbox"
            id="music"
            name="interest"
            value="music"
          />
          <label for="music">Don't require OTP on this browser</label>
          <br />
          <button className="turn-btn">
            I Got It. Please Turn On The Two-Step Verification
          </button>
        </div>
      </section>
    </>
  );
}

export default Tsveri4th;

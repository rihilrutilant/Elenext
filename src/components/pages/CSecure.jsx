import React from "react";
import "../Styles/CSecure.css";

function CSecure() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="inner-prt">
            <div className="in-info">
              <img
                className="sr-img"
                src={require("../Images/s-rgt.png")}
                alt=""
              />
              <h3 className="y-ac">Secure Your Account </h3>
              <p className="protect">
                To protect your Amazon account, we recommend taking the
                following steps immediately.
              </p>
            </div>
            <div className="inner-1">
              <p className="st-p">
                {" "}
                <b>Step 1 : </b> Update your email settings
              </p>
              <hr />
              <p className="u-pwd">
                Use a strong, unique password for your account not used anywhere{" "}
                <br />
                else. Check for "email forwarding" rules and remove any found.
              </p>
              <p className="u-pwd2">
                {" "}
                <b> Tip : </b>If your email account password was hacked, your
                Amazon <br /> account might be at risk. If your email was
                forwarded to another <br /> address, your account might be at
                risk
              </p>
            </div>
            <div className="inner-1">
              <p className="st-p">
                {" "}
                <b>Step 2 : </b> Set mobile PIN/passcode
              </p>
              <hr />
              <p className="u-pwd">
                Contact your mobile phone provider and add a PIN/Passcode to{" "}
                <br />
                protect your mobile phone account.
              </p>
              <p className="u-pwd2">
                {" "}
                <b> Tip : </b> If your mobile account or SMS is hacked, your
                Amazon account might be at risk.
              </p>
            </div>
            <div className="inner-1">
              <p className="st-p">
                {" "}
                <b>Step 3 : </b> Sign out of all apps, devices and web browsers
              </p>
              <hr />
              <p className="u-pwd">
                Contact your mobile phone provider and add a PIN/Passcode to{" "}
                <br />
                protect your mobile phone account.
              </p>
              <p className="u-pwd2">
                {" "}
                <b> Tip : </b> For maximum security, sign out of everything. It
                may take up to 15 minutes to sign out of devices, apps and web
                browsers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CSecure;

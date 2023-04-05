import React from "react";
import "../Styles/CSecure2nd.css";

function CSecure2nd() {
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
                You will be signed out of all apps, devices and browsers except
                this <br /> one. We will also turn off third- party access to
                your Amazon Wallet/ <br /> payment methods.
              </p>
            </div>

            <div className="inner-1">
              <p className="st-p">
                {" "}
                <b>Before you go, change your password</b>
              </p>
              <hr />
              <p className="u-pwd">
                To protect your account, your current password will no longer
                work. You'll be asked to change your password the next time you
                Sign-in. You may choose to Sign-out and change it now if you
                like.
              </p>
              <button className="c-pwd">Change Password</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CSecure2nd;

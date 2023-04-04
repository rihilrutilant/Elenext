import React from "react";
import "../Styles/Change_pw.css";

function Change_pw() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <h3 className="name">Change Password</h3>
          <div className="inner-info">
            <p className="c-prh">
              Use the form below to change the password for your Amazon <br />{" "}
              account
            </p>
            <div className="inp">
              <label htmlFor="fname" className="lab">
                <b>Current password:</b>
              </label>
              <br />
              <input type="number" id="fname" name="fname" className="ipt" />
              <br />
              <label htmlFor="fname" className="lab">
                <b>New password:</b>
              </label>
              <br />
              <input type="number" id="fname" name="fname" className="ipt" />
              <br />
              <label htmlFor="fname" className="lab">
                <b>Enter new password:</b>
              </label>
              <br />
              <input type="number" id="fname" name="fname" className="ipt" />
              <br />
              <button className="save-btn">Save Changes</button>
            </div>
            <p className="act">Unusual activity?</p>
            <p className="act">Lost or stolen device? </p>
            <div className="s-ac">
              <a href="#">Secure your account </a>
              <p>instead</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Change_pw;

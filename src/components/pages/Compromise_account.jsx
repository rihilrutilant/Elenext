import React from "react";
import "../Styles/Compromise_account.css";
const Compromise_account = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="secure_acc">
            <div className="acc_top">
              <img src={require("../Images/Frame.png")} alt="" />
              <h1>Secure Your Account </h1>
              <p>
                To protect your Amazon account, we recommend taking the
                following steps immediately.
              </p>
            </div>
            <div className="step_one"></div>
            <div className="step_two"></div>
            <div className="step_three"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Compromise_account;

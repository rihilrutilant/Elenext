import React from "react";
import "../Styles/Login.css";

const Login = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="id">
            <div className="login">
              <h1>Login</h1>
              <div className="mail">
                <label className="labels" htmlFor="y_Name">
                  Username Or Email Address{" "}
                  <sup>
                    <i class="fa-solid fa-star-of-life" id="font_star"></i>
                  </sup>
                </label>
                <input className="textbox" type="text" />
              </div>

              <div className="password">
                <label className="labels" htmlFor="y_Name">
                  Password{" "}
                  <sup>
                    <i class="fa-solid fa-star-of-life" id="font_star"></i>
                  </sup>
                </label>
                <input className="textbox" type="password" name="password"/>

              </div>
            </div>
            <div className="register"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

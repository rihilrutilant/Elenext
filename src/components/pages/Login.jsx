import React from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { useState } = React;
  const [inputtext, setinputtext] = useState({
    email: "",
  });

  const [eye, seteye] = useState(true);
  const [eye2, seteye2] = useState(true);
  const [eye3, seteye3] = useState(true);

  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false);
  console.log(type);

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputtext((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const Eye = () => {
    if (password === "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    } else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  };

  const Eye2 = () => {
    if (password === "password") {
      setpassword("text");
      seteye2(false);
      settype(true);
    } else {
      setpassword("password");
      seteye2(true);
      settype(false);
    }
  };
  const Eye3 = () => {
    if (password === "password") {
      setpassword("text");
      seteye3(false);
      settype(true);
    } else {
      setpassword("password");
      seteye3(true);
      settype(false);
    }
  };

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="form">
            <div className="login">
              <h1>Login</h1>
              <div className="mail" id="text">
                <label className="labels" htmlFor="y_Name">
                  Username Or Email Address{" "}
                  <sup>
                    <i className="fa-solid fa-star-of-life" id="font_star"></i>
                  </sup>
                </label>
                <input className="textbox" type="text" />
              </div>

              <div className="password" id="text">
                <label className="labels" htmlFor="y_Name">
                  Password{" "}
                  <sup>
                    <i className="fa-solid fa-star-of-life" id="font_star"></i>
                  </sup>
                </label>

                <div className="input-text">
                  <input
                    type={password}
                    className="passcode"
                    value={inputtext.password}
                    onChange={inputEvent}
                    name="password"
                  />
                  <i
                    onClick={Eye}
                    className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                  ></i>
                </div>
              </div>

              <div className="login_bottom">
                <div className="login_btn">
                  <button>Log In</button>
                  <input type="checkbox" className="check" />
                  <label>Remember Me</label>
                  <b />
                </div>

                <div className="forgot_password">
                  <Link href="#">Forgot Password</Link>
                </div>
              </div>
            </div>

            {/* ------------------- register-------------------  */}

            <div className="register">
              <h1>Register</h1>
              <div className="name_1" id="text">
                <label className="labels" htmlFor="y_Name">
                  Name{" "}
                  <sup>
                    <i className="fa-solid fa-star-of-life" id="font_star"></i>
                  </sup>
                </label>
                <input className="textbox" type="text" />
              </div>

              <div className="mail_1" id="text">
                <label className="labels" htmlFor="y_Name">
                  Email Address{" "}
                  <sup>
                    <i className="fa-solid fa-star-of-life" id="font_star"></i>
                  </sup>
                </label>
                <input className="textbox" type="text" />
              </div>

              <div className="phoneNo" id="text">
                <label className="labels" htmlFor="y_Name">
                  Primary Mobile No.{" "}
                  <sup>
                    <i className="fa-solid fa-star-of-life" id="font_star"></i>
                  </sup>
                </label>
                <input className="textbox" type="number" />
                <p>
                  Quickly Sign In, Easily Recover Passwords, And Receive
                  Security Notifications With This Mobile No.
                </p>
              </div>

              <div className="password" id="text">
                <label className="labels" htmlFor="y_Name">
                  Password{" "}
                  <sup>
                    <i className="fa-solid fa-star-of-life" id="font_star"></i>
                  </sup>
                </label>

                <div className="input-text">
                  <input
                    type={password}
                    className="passcode"
                    value={inputtext.password}
                    onChange={inputEvent}
                    name="password"
                  />
                  <i
                    onClick={Eye2}
                    className={`fa ${eye2 ? "fa-eye-slash" : "fa-eye"}`}
                  ></i>
                </div>
              </div>

              <div className="password" id="text">
                <label className="labels" htmlFor="y_Name">
                  Re-Password{" "}
                  <sup>
                    <i className="fa-solid fa-star-of-life" id="font_star"></i>
                  </sup>
                </label>

                <div className="input-text">
                  <input
                    type={password}
                    className="passcode"
                    value={inputtext.password}
                    onChange={inputEvent}
                    name="password"
                  />
                  <i
                    onClick={Eye3}
                    className={`fa ${eye3 ? "fa-eye-slash" : "fa-eye"}`}
                  ></i>
                </div>
              </div>

              <div className="register_btn">
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

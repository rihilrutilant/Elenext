import React from "react";
import "../Styles/YourAccount.css";

const YourAccount = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="yourAccount">
            <div className="detail_edit">
              <div className="title">
                <h3>Name :</h3>
                <p>Anil Chovatiya</p>
              </div>
              <div className="edit_btn">
                <button>Edit</button>
              </div>
            </div>

            <hr />

            <div className="detail_edit">
              <div className="title">
                <h3>E-mail :</h3>
                <p>anilchovatiya178@gmail.com</p>
              </div>
              <div className="edit_btn">
                <button>Edit</button>
              </div>{" "}
            </div>

            <hr />

            <div className="detail_edit">
              <div className="title">
                <h3>Primary mobile number :</h3>
                <p>+919785597455</p>
                <p>
                  Quickly sign in, easily recover passwords, and receive
                  security notifications with this mobile number.
                </p>
              </div>
              <div className="edit_btn">
                <button>Edit</button>
              </div>{" "}
            </div>

            <hr />

            <div className="detail_edit">
              <div className="title">
                <h3>Password :</h3>
                <p>**********</p>
              </div>
              <div className="edit_btn">
                <button>Edit</button>
              </div>{" "}
            </div>

            <hr />

            <div className="detail_edit">
              <div className="title">
                <h3>2-step verification :</h3>
                <p>
                  Add a layer of security. Require a verification code in
                  addition to your password.
                </p>
              </div>
              <div className="edit_btn">
                <button>Turn On</button>
              </div>{" "}
            </div>

            <hr />

            <div className="detail_edit">
              <div className="title">
                <h3>Compromised account?</h3>
                <p>
                  Take steps like changing your password and signing out
                  everywhere
                </p>
              </div>
              <div className="edit_btn">
                <button>Start</button>
              </div>{" "}
            </div>
          </div>

          <div className="done_btn">
            <button>Done</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default YourAccount;

import React from "react";
import "../Styles/your_Name.css";

function Your_Name() {
  return (
    <>
      {/* your name page */}
      <section>
        <div className="container-fluid">
          <h3 className="name">Change Your Name</h3>
          <div className="inner-info">
            <p>
              If you want to change the name associated with your Amazon
              customer account, you may do so <br /> below. Be sure to click the
              <b> Save Changes</b> button when you are done.
            </p>
            <label htmlFor="fname" className="lab">
              {" "}
              <b>New Name</b>
            </label>
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              className="ipt"
              placeholder="Anil Chovatiya"
            />
            <br />
            <button className="save-btn">Save Changes</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Your_Name;

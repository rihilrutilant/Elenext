import React, { useState } from "react";
import "../Styles/AddressChange.css";

const AddressChange = () => {
  const countries = require("country-state-city").Country;
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [selectedState, setSelectedState] = useState("");
  const States = require("country-state-city").State;
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="change_address">
            <div className="new_address">
              <h1>Add a new address</h1>
              <p>Or find an Amazon collection location near you</p>
            </div>
            <div className="autofill">
              <h3>Save time. Autofill your current location.</h3>
              <button>Autofill</button>
            </div>
            <div className="changeAddress_form">
              <div className="location">
                <label className="label_address" htmlFor="c_Name">
                  Country/Region{" "}
                </label>
                <select
                  className="text_box"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  {countries.getAllCountries().map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="location">
                <label className="label_address" htmlFor="c_Name">
                  Full name (First and Last name){" "}
                </label>
                <input className="text_box" type="text" />
              </div>

              <div className="location">
                <label className="label_address" htmlFor="c_Name">
                  Mobile number{" "}
                </label>

                <input
                  className="text_box"
                  type="number"
                  name="pin"
                  pattern="[0-9]{6}"
                  maxLength="6"
                  required
                />
              </div>

              <div className="location">
                <label className="label_address" htmlFor="c_Name">
                  Pincode{" "}
                </label>
                <input
                  className="text_box"
                  placeholder="6 digits [0-9] PIN code"
                  type="number"
                />
              </div>

              <div className="location">
                <label className="label_address" htmlFor="c_Name">
                  Flat, House no., Building, Company, Apartment{" "}
                </label>
                <input className="text_box" type="text" />
              </div>

              <div className="location">
                <label className="label_address" htmlFor="c_Name">
                  Flat, House no., Building, Company, Apartment{" "}
                </label>
                <input className="text_box" type="text" />
              </div>

              <div className="location">
                <label className="label_address" htmlFor="c_Name">
                  Area, Street, Sector, Village{" "}
                </label>
                <input className="text_box" type="text" />
              </div>

              <div className="location">
                <label className="label_address" htmlFor="c_Name">
                  Landmark{" "}
                </label>
                <input
                  className="text_box"
                  placeholder="E.g. near apollo hospital"
                  type="text"
                />
              </div>

              <div className="location">
                <label className="label_address" htmlFor="c_Name">
                  State{" "}
                </label>
                <select
                  className="text_box"
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  <option value="">Select State</option>
                  {States.getStatesOfCountry(selectedCountry).map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="address_bottom">
              <div className="OTP_require">
                <input type="checkbox" className="check" />
                <label> Don't require OTP on this browser </label>
              </div>
              <div className="verify_form">
                <button>I Got It. Please Turn On The Two-Step Verification</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddressChange;

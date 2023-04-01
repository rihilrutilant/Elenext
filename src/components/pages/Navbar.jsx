import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/logo.svg"
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <header>
        <div className="middle-header">
          <div className="container-fluid">
            <div className="middle-header-inn">
              <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
              <div className="input-part">
                <form action="/" name="register-form">
                  <input type="text" placeholder="Search Product" required />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </form>
              </div>
              <div className="login-option">
                <Link to="#" className="customicon login-modal"><i className="fa-solid fa-cart-shopping"></i></Link>
                <Link className="customicon cart-show" to="#"><i className="fa-regular fa-heart"></i></Link>
                <Link className="login-signup" to="#"><i className="fa-solid fa-user"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-LIGHT bg-LIGHT" aria-label="Eighth navbar example">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navpadle text-center">
              <li className="nav-item navspace">
                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
              </li>
              <li className="nav-item navspace">
                <Link className="nav-link" to="#">Grocery</Link>
              </li>
              <li className="nav-item navspace">
                <Link className="nav-link" to="#">Mobile</Link>
              </li>
              <li className="nav-item navspace">
                <Link className="nav-link" to="#">Fashion</Link>
              </li>
              <li className="nav-item navspace">
                <Link className="nav-link" to="#">Appliances</Link>
              </li>
              <li className="nav-item navspace">
                <Link className="nav-link" to="#">Health & Beauty</Link>
              </li>
              <li className="nav-item navspace">
                <Link className="nav-link" to="#">Top Offer</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
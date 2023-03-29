import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Footer.css"
import logo from "../Images/f-logo.svg"
import cards from "../Images/payment-method.svg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container-fluid'>
          <div className='logo-part'>
            <img src={logo} alt="logo" />
          </div>
          <div className='footer-links'>
            <ul>
              <li>
                <h3>ABOUT</h3>
                <Link to="#">Contact Us</Link>
                <Link to="#">About Us</Link>
                <Link to="#">Careers</Link>
                <Link to="#">Flipkart Stories</Link>
                <Link to="#">Press</Link>
                <Link to="#">Flipkart Wholesale</Link>
                <Link to="#">Corporate Information</Link>
              </li>
              <li>
                <h3>HELP</h3>
                <Link to="#">Payments</Link>
                <Link to="#">Shipping</Link>
                <Link to="#">Cancellation & Returns</Link>
                <Link to="#">FAQ</Link>
                <Link to="#">Report Infringement</Link>
              </li>
              <li>
                <h3>CONSUMER POLICY</h3>
                <Link to="#">Return Policy</Link>
                <Link to="#">Terms Of Use</Link>
                <Link to="#">Security</Link>
                <Link to="#">Privacy</Link>
                <Link to="#">Sitemap</Link>
                <Link to="#">Grievance Redressal</Link>
                <Link to="#">EPR Compliance</Link>
              </li>
              <li>
                <h3>SOCIAL</h3>
                <Link to="#">Facebook</Link>
                <Link to="#">Twitter</Link>
                <Link to="#">YouTube</Link>
              </li>
            </ul>
          </div>
          <div className='policy-part'>
            <p>©2022 Elenext All rights reserved</p>
            <img src={cards} alt="payment-method" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
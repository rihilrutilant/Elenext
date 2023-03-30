import React from 'react'
// import { Link } from 'react-router-dom'
import "../Styles/Contact.css"

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        {/* <div className="c_header">
          <span className='C_nav'><Link>Home</Link> &gt; Contact Us</span>
        </div> */}
        <section className='c_information'>
          <div className="c_info">
            <div className="c_info_header">
              Contact Information
            </div>
            <div className="c_info_sub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </div>
            <div className="c_cards">
              <div className="c_sub_cards">
                <img className='c_img' src={require("../Images/contact1.png")} alt="first" />
                <div className="card_title">Email Address</div>
                <div className="card_body">mail@example.com</div>
              </div>
              <div className="c_sub_cards">
                <img className='c_img' src={require("../Images/contact2.png")} alt="first" />
                <div className="card_title">Phone Number</div>
                <div className="card_body">(123) 456-1155 / (123) 456-1515</div>
              </div>
              <div className="c_sub_cards">
                <img className='c_img' src={require("../Images/contact3.png")} alt="first" />
                <div className="card_title">Address</div>
                <div className="card_body">Lawrence, NY 11326, USA</div>
              </div>
              <div className="c_sub_cards">
                <img className='c_img' src={require("../Images/contact4.png")} alt="first" />
                <div className="card_title">FAX</div>
                <div className="card_body">1-800-555-7777</div>
              </div>
            </div>
          </div>
        </section>
        <hr />

        <section className='send_dm'>
          
          <div className="asks">
            <div className="asks_header">
              People Usually ask These
            </div>
            <div className="accord">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item acco_item">
                  <h2 className="accordion-header">
                    <button className="accordion-button acco_header" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                      How Can I Cancel my Order?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body dm_body">
                      Fringilla urna porttitor rhoncus dolor purus. Luctus venenatis rhoncus dolor lectus Dia aecenas ultricies mi eget mauris. Nibh tellus rhoncus dolormolestie nunc ultrices eros in cursus rhoncus dolorturpis massa tincidunt. Ante in nibh mauri lectus. Etiam novh im lacus suspendisse faucibus.
                    </div>
                  </div>
                </div>
                <div className="accordion-item acco_item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed acco_header" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Why is my registration delayed?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Fringilla urna porttitor rhoncus dolor purus. Luctus venenatis rhoncus dolor lectus Dia aecenas ultricies mi eget mauris. Nibh tellus rhoncus dolormolestie nunc ultrices eros in cursus rhoncus dolorturpis massa tincidunt. Ante in nibh mauri lectus. Etiam novh im lacus suspendisse faucibus.
                    </div>
                  </div>
                </div>
                <div className="accordion-item acco_item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed acco_header" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      What do I need to buy products?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Fringilla urna porttitor rhoncus dolor purus. Luctus venenatis rhoncus dolor lectus Dia aecenas ultricies mi eget mauris. Nibh tellus rhoncus dolormolestie nunc ultrices eros in cursus rhoncus dolorturpis massa tincidunt. Ante in nibh mauri lectus. Etiam novh im lacus suspendisse faucibus.
                    </div>
                  </div>
                </div>
                <div className="accordion-item acco_item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed acco_header" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      How can I track an order?
                    </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Fringilla urna porttitor rhoncus dolor purus. Luctus venenatis rhoncus dolor lectus Dia aecenas ultricies mi eget mauris. Nibh tellus rhoncus dolormolestie nunc ultrices eros in cursus rhoncus dolorturpis massa tincidunt. Ante in nibh mauri lectus. Etiam novh im lacus suspendisse faucibus.
                    </div>
                  </div>
                </div>
                <div className="accordion-item acco_item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed acco_header" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      How can I get money back?
                    </button>
                  </h2>
                  <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Fringilla urna porttitor rhoncus dolor purus. Luctus venenatis rhoncus dolor lectus Dia aecenas ultricies mi eget mauris. Nibh tellus rhoncus dolormolestie nunc ultrices eros in cursus rhoncus dolorturpis massa tincidunt. Ante in nibh mauri lectus. Etiam novh im lacus suspendisse faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dm_us">
            <div className="asks_header">
              Send Us a Message
            </div>
            <div className="asks_body">
              <form action="#">
                <div className="asks_boxes">
                  <label className='asks_labels' htmlFor="y_Name">Your Name</label>
                  <input className='asks_textbox' type="text" />
                </div>
                <div className="asks_boxes">
                  <label className='asks_labels' htmlFor="y_Name">Your Email</label>
                  <input className='asks_textbox' type="email" />
                </div>
                <div className="asks_boxes">
                  <label className='asks_labels' htmlFor="y_Name">Your Message</label>
                  <textarea className='asks_textarea' cols="30" rows="10"></textarea>
                </div>
                <input type="submit" value="Send Now" className='send' />
              </form>
            </div>
          </div>

        </section>
      
      </div>
    </>
  )
}

export default Contact
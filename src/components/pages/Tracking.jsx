import React from 'react'
import "../Styles/Tracking.css"
import { Link } from 'react-router-dom'
import ProgressBar from "@ramonak/react-progress-bar";

const Tracking = () => {
  return (
    <>
      <div className="container-fluid">


        <p className="s_header">
          <Link className="home_hover" to="/">Home</Link>
          &nbsp;&gt;&nbsp;
          <Link className="home_hover" to="#">My Order</Link>
          &nbsp;&gt;&nbsp;
          <Link className="home_hover" to="#">Order Detail</Link>
          &nbsp;&gt;&nbsp;
          Tracking
        </p>

        <section className='tc_bar'>
          <div className="tc_header">
            Arriving Thursday
          </div>
          <div className="tc_process_bar">
            {/* 4 order  */}
            {/* 31 Shipped  */ }
            {/* 60 out for Delivery  */}
            {/* 100 arrived  */}

            <ProgressBar completed={60} className='tc_p_bar' customLabel=" " />
            <div className="tc_body">
              <span className='tc_sub_body'>
                <strong>
                  Ordered
                </strong>
                <div className="o_date">26/02/23</div>
                <div className="o_date">22:23</div>
              </span>
              <span className='tc_sub_body'>
                <strong>
                  Shipped
                </strong>
                <div className="o_date">26/02/23</div>
                <div className="o_date">22:23</div>
              </span>
              <span className='tc_sub_body'>
                <strong>
                  Out For Delivery
                </strong>
                <div className="o_date">26/02/23</div>
                <div className="o_date">22:23</div>
              </span>
              <span className='tc_sub_body'>
                <strong>
                  Arriving Thursday
                </strong>
                <div className="o_date">26/02/23</div>
                <div className="o_date">22:23</div>
              </span>
            </div>
          </div>
        </section>

        <section className='tc_table'>
          <div className="tc_table_header">
            Updates:
          </div>
          <div className="tc_grid">
            <div className="tc_event"> <strong>Event</strong></div>
            <div className="tc_Location"> <strong>Location</strong></div>
            <div className="tc_date"><strong>Date</strong></div>
          </div>
          <hr />
          <div className="tc_grid">
            <div className="tc_event"> 
            <strong>Shipped</strong>
              <p>Carrier : TNT</p>
              <p>Tracking Nr : F847154435314</p>
            </div>
            <div className="tc_Location"> <strong>Roma, IT</strong></div>
            <div className="tc_date"><strong>20/06/17 - 17:32</strong></div>
          </div>
          <hr />
          <div className="tc_grid">
            <div className="tc_event"> 
            <strong>Ready</strong>
              <p>Waiting For Carrier</p>
            </div>
            <div className="tc_Location"> <strong>Roma, IT</strong></div>
            <div className="tc_date"><strong>20/06/17 - 18:32</strong></div>
          </div>
          <hr />
          <div className="tc_grid">
            <div className="tc_event"> <strong>Ordered</strong></div>
            <div className="tc_Location"> <strong>-</strong></div>
            <div className="tc_date"><strong>19/06/17 - 17:32</strong></div>
          </div>
          <hr />
          <div className="tc_btn">
            <button className='tc_btod'>Back to Order Details</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Tracking

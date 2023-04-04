import React from 'react'
import "../Styles/Tracking.css"
import { Link } from 'react-router-dom'
import ProgressBar from "@ramonak/react-progress-bar";
import $ from 'jquery';

const Tracking = () => {
  var state = 0;
  var stateMax = 4;

  function next() {
    console.log("Next", state);
    // browser side functions here
  }

  function back() {
    console.log("Back", state);
    // browser side functions here
  }

  $("#next").click(function () {
    if (state < stateMax) {
      next();

      state += 1;

      // Enables 'back' button if disabled
      $("#back").removeClass("disabled");

      // Adds class to make nodes green
      $(".nConfirm" + state).each(function () {
        $(this).addClass("done");
      });

      // Progress bar animation
      var pBar = (state / stateMax) * 100;
      $(".pBar").css("width", `${pBar}%`);

      // Disables 'next' button if end of steps
      if (state == 4) {
        $("#next").addClass("disabled");
      }
    }
  });

  $("#back").click(function () {
    if (state > 0) {
      back();

      // Enables 'next' button if disabled
      $("#next").removeClass("disabled");

      // removes class that makes nodes green
      $(".nConfirm" + state).each(function () {
        $(this).removeClass("done");
      });

      state -= 1;

      // Progress bar animation
      var pBar = (state / stateMax) * 100;
      $(".pBar").css("width", `${pBar}%`);

      // Disables 'back' button if end of steps
      if (state == 0) {
        $("#back").addClass("disabled");
      }
    }
  });
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
            {/* 60 out for dileviry  */}
            {/* 100 arrived  */}

            <ProgressBar completed={31} className='tc_p_bar' customLabel=" " />
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
                  Out For Dilevery
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
          
        </section>
      </div>
    </>
  )
}

export default Tracking

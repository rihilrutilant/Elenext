import React from "react";
import "../Styles/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* ELENEXT  ------------------------------------------------------------------------------------------  */}
      <section>
        <div className="container-fluid">
          <div className="elenext">
            <img src={require("../Images/elenext_img.png")} alt="elenext" />
            <div className="elenext_note">
              <h3>Welcome to Elenext</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Leo vitae turpis sed
                tempus cras metus <br /> diam in netus. Egestas nisl fames at
                est pulvinar. Tortor mi elementum metus mollis.
                <br /> Porttitor orci luctus viverra sit amet phasellus eleifend
                tristique. Sit amet dignissim
                <br /> tincidunt volutpat arcu gravida vel.Lorem ipsum dolor sit
                amet consectetur. Leo <br /> vitae turpis sed tempus cras metus
                diam in netus. Egestas nisl fames at est <br /> pulvinar.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Leo vitae turpis sed
                tempus cras metus diam in netus. <br /> Egestas nisl fames at
                est pulvinar. Tortor mi elementum metus mollis.
                <br /> Porttitor orci luctus viverra sit amet phasellus eleifend
                tristique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OURTEAM  ------------------------------------------------------------------------------------------  */}
      <section>
        <div className="container-fluid">
          <div className="ourTeam">
            <div className="team_note">
              <h3>Our Team</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Leo vitae turpis sed
                tempus cras metus diam in netus. Egestas nisl fames at est
                pulvinar. Tortor mi elementum metus mollis. Porttitor orci
                luctus viverra sit amet phasellus eleifend tristique. Sit amet
                dignissim tincidunt volutpat arcu gravida vel.Lorem ipsum dolor
                sit amet consectetur. Leo vitae turpis sed tempus cras metus
                diam in netus. Egestas nisl fames at est pulvinar.
              </p>

              <button>Join Now</button>
            </div>
            <div className="team_img">
              <div className="teamImg_left">
                <img
                  id="teamLeft_top"
                  src={require("../Images/team-img1.png")}
                  alt=""
                />
                <img
                  id="teamLeft_bouutom"
                  src={require("../Images/team-img2.png")}
                  alt=""
                />
              </div>
              <div className="teamImg_right">
                <img
                  id="teamRight_top"
                  src={require("../Images/team-img3.png")}
                  alt=""
                />
                <img
                  id="teamRight_bouutom"
                  src={require("../Images/team-img4.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR-BLOG ------------------------------------------------------------------------------------------  */}
      <section>
        <div className="container-fluid">
          <div className="our_blog">
            <h1>From Our Blog</h1>
            <hr />

            <div>
              <div className="ourBlog_cards">
                <div className="logcard">
                  <img
                    src={require("../Images/blogcard-img1.png")}
                    alt="elenext"
                  />
                  <h5>Post Date : March 12, 2022</h5>
                  <h2>
                    Comfort Dressing: The nostalgic value of the high jewelry
                  </h2>

                  <Link to="/blogdetails">
                    <button>Read More +</button>
                  </Link>
                </div>

                <div className="logcard">
                  <img
                    src={require("../Images/blogcard-img2.png")}
                    alt="elenext"
                  />
                  <h5>Post Date : March 12, 2022</h5>
                  <h2>
                    Comfort Dressing: The nostalgic value of the high jewelry
                  </h2>
                  <Link to="/blogdetails">
                    <button>Read More +</button>
                  </Link>
                </div>

                <div className="logcard">
                  <img
                    src={require("../Images/blogcard-img3.png")}
                    alt="elenext"
                  />
                  <h5>Post Date : March 12, 2022</h5>
                  <h2>
                    Comfort Dressing: The nostalgic value of the high jewelry
                  </h2>
                  <Link to="/blogdetails">
                    <button>Read More +</button>
                  </Link>
                </div>
                <div className="logcard">
                  <img
                    src={require("../Images/blogcard-img1.png")}
                    alt="elenext"
                  />
                  <h5>Post Date : March 12, 2022</h5>
                  <h2>
                    Comfort Dressing: The nostalgic value of the high jewelry
                  </h2>
                  <Link to="/blogdetails">
                    <button>Read More +</button>
                  </Link>
                </div>

                <div className="logcard">
                  <img
                    src={require("../Images/blogcard-img2.png")}
                    alt="elenext"
                  />
                  <h5>Post Date : March 12, 2022</h5>
                  <h2>
                    Comfort Dressing: The nostalgic value of the high jewelry
                  </h2>
                  <Link to="/blogdetails">
                    <button>Read More +</button>
                  </Link>
                </div>

                <div className="logcard">
                  <img
                    src={require("../Images/blogcard-img3.png")}
                    alt="elenext"
                  />
                  <h5>Post Date : March 12, 2022</h5>
                  <h2>
                    Comfort Dressing: The nostalgic value of the high jewelry
                  </h2>
                  <Link to="/blogdetails">
                    <button>Read More +</button>
                  </Link>
                </div>
                <div className="logcard">
                  <img
                    src={require("../Images/blogcard-img1.png")}
                    alt="elenext"
                  />
                  <h5>Post Date : March 12, 2022</h5>
                  <h2>
                    Comfort Dressing: The nostalgic value of the high jewelry
                  </h2>
                  <Link to="/blogdetails">
                    <button>Read More +</button>
                  </Link>
                </div>

                <div className="logcard">
                  <img
                    src={require("../Images/blogcard-img2.png")}
                    alt="elenext"
                  />
                  <h5>Post Date : March 12, 2022</h5>
                  <h2>
                    Comfort Dressing: The nostalgic value of the high jewelry
                  </h2>
                  <Link to="/blogdetails">
                    <button>Read More +</button>
                  </Link>
                </div>

                <div className="logcard">
                  <img
                    src={require("../Images/blogcard-img3.png")}
                    alt="elenext"
                  />
                  <h5>Post Date : March 12, 2022</h5>
                  <h2>
                    Comfort Dressing: The nostalgic value of the high jewelry
                  </h2>
                  <Link to="/blogdetails">
                    <button>Read More +</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT ------------------------------------------------------------------------------------------   */}
      <section>
        <div className="container-fluid">
          <div className="client">
            <h1>Client Testimonials</h1>
            <div className="client_cards">
              <div className="client_note">
                <div className="clientcrad">
                  <p>
                    "Thanks for the great service.I would also like to say thank
                    you to all your staff." Thanks for the great service."
                  </p>
                </div>
                <div className="seth">
                  <img src={require("../Images/seth-img.png")} alt="" />
                  <div>
                    <h3>Seth Coleman</h3>
                    <p>New York, USA</p>
                  </div>
                </div>
              </div>

              <div className="client_note">
                <div className="clientcrad">
                  <p>
                    "It's incredible. If you want real marketing that works and
                    effective implementation - Real Estate's got you covered.
                    This is simply unbelievable!
                  </p>
                </div>
                <div className="seth">
                  <img src={require("../Images/seth-img.png")} alt="" />
                  <div>
                    <h3>Seth Coleman</h3>
                    <p>New York, USA</p>
                  </div>
                </div>
              </div>

              <div className="client_note">
                <div className="clientcrad">
                  <p>
                    "I'd be lost without Real Estate. Real Estate is worth much
                    more than I paid. The service was excellent."
                  </p>
                </div>
                <div className="seth">
                  <img src={require("../Images/seth-img.png")} alt="" />
                  <div>
                    <h3>Seth Coleman</h3>
                    <p>New York, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

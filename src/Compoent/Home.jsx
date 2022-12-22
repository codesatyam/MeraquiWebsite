import React from "react";
import h1 from "../images/h1.png";
import vector_pro from "../images/vector_pro.png";
import vector from "../images/Vector.png";
import pic from "../images/Rectangle76.png"
// import R1 from "../images/Rectangle4.png"
// import R2 from "../images/Rectangle7.png"
// import R3 from "../images/Rectangle8.png"
import h5 from "../images/h5.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import { Comsocial } from "./Comsocial";
import Footer from "./Footer";
import Publication from "./Publication";
const Home = () => {
  return (
    <div className="hom">
      <div className="home d-flex">
        <div className="left">
          <div className="header">
            <p>Bridging the Gap between Employees and Businesses</p>
          </div>
          <div className="para d-flex align-content-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              fugit vitae architecto a dolore ipsa nemo alias placeat tempore
              eum unde, esse sapiente cumque. Eius, ipsam vel. Sit, quaerat
              quis.
            </p>
          </div>
          <div className="but d-flex">
            <button type="button" class="btn btn-outline-info mx-4">
              For Businesses
            </button>
            <button type="button" class="btn btn-outline-info mx-4">
              For Employees
            </button>
          </div>
        </div>
        <div className="right my-3">
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={h1} class="d-block img" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={h1} class="d-block img" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={h1} class="d-block img " alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="home2">
        <img src={vector_pro} alt="" />
      </div>
      <div className="home3 my-5 d-flex flex-column justify-content-center align-content-center">
        <h4 className="d-flex  justify-content-center align-content-center">
          Curating the journey of people who work with you
        </h4>
        <p className="d-flex justify-content-center align-content-center mx-5">
          We are bridging the gap between employees and businesses since 2019!
        </p>
      </div>
      <ul className="boarding">
        <li>Digital pre-screening</li>
        <li>DIY Onboarding</li>
        <li>Payroll Management</li>
        <li>Compliance</li>
        <li>Upskilling</li>
        <li>Analytics</li>
      </ul>
      <div className="progress"></div>
      <div className="progress-img">
        <img src={vector} alt="error" />
      </div>
      <div className="h5 d-flex flex-row">
        <div className="lef">
          <img src={h5} alt="" />
        </div>
        <div className="rig">
          <div className="header">
            <h4>People Who’d love to provide value to your Business</h4>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim.
            </p>
          </div>
          <div className="more mx-4">
          <NavLink className=" btn-light" exact to="/Home">
                  Read more
                </NavLink>
          </div>
        </div>
      </div>
      <div className="home3 my-5 d-flex flex-column justify-content-center align-content-center">
        <h4 className="d-flex  justify-content-center align-content-center">
          Curating the journey of people who work with you
        </h4>
        <p className="d-flex justify-content-center align-content-center">
          We are bridging the gap between employees and businesses since 2019!
        </p>
      </div>
      <div className="h6 d-flex">
        <Common image="R1" title="Retail" para="We are bridging the gap between employees and businesses since 2019!"/>
        <Common image="R2" title="Logistics" para="We are bridging the gap between employees and businesses since 2019!"/>
        <Common image="R1" title="Maratine" para="We are bridging the gap between employees and businesses since 2019!"/>
      </div>
      <div className="home3 my-5 d-flex flex-column justify-content-center align-content-center">
        <h4 className="d-flex  justify-content-center align-content-center">
        Find us on our socials
        </h4>
        <p className="d-flex justify-content-center align-content-center">
          We are bridging the gap between employees and businesses since 2019!
        </p>
      </div>
      <div className="h7 d-flex  justify-content-center">
      <Comsocial title="Post caption " para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"/>
      <Comsocial title="Post caption " para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"/>
      </div>
      <div className="home3 my-5 d-flex flex-column justify-content-center align-content-center">
        <h4 className="d-flex  justify-content-center align-content-center">
        Meraqui in news
        </h4>
        <p className="d-flex justify-content-center align-content-center">
          We are bridging the gap between employees and businesses since 2019!
        </p>
      </div>
      <div className="h7 d-flex  justify-content-center">
      <Publication image="pc1" title="Post caption " para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"/>
      <Publication image="pc2" title="Post caption " para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"/>
      </div>
      <div className="h8-pre d-flex flex-column ">
        <h4 className="d-flex ">
        Featured Blogs
        </h4>
        <p className="d-flex">
        We are bridging the gap between employees and businesses since 2019!
        </p>
      </div>
      <div className="h8 d-flex justify-content-center">
        <div className="h8-left">
       <img src={pic} alt="" />
        </div>
        <div className="h8-right">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
     </div>
      <Footer/>
    </div>
  );
};

export default Home;

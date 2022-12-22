import React from "react";
import pic1 from "../images/about1.png";
import pic3 from "../images/about3.png";
import { Client } from "./Client";
import { FaMailBulk,FaPhone } from "react-icons/fa";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <p className="head">About MERAQUI</p>
          <p className="para">
            We are a SaaS-enabled workforce management platform specializing in
            employee lifecycle management, job and requisition management, and
            training and interview assessments. We link our expertise with your
            business demands and proactively begin HR procedures to meet your
            needs, harnessing the power of Artificial Intelligence. We have a
            robust pan-India presence in 22 states and 55 cities and are aiming
            to grow significantly in the times to come.
          </p>
        </div>
        <div className="right">
          <img src={pic1} alt="" />
        </div>
      </div>
      <h3 className="d-flex justify-content-center my-5">Why MERAQUI?</h3>
      <div className="about-2">
        <h4>Our Philospher</h4>
        <div className="about-para">
          {" "}
          <p>
            We believe that "The greatest asset of a company is its people”{" "}
            <br />
            Meraqui will assist your employees to stay up-to-date with our
            upskilling solutions and also helps them comply with any tasks that
            technology and trends throw their way. Our sterling apprenticeship
            programs and work environment ensure employee retention. <br />
            Meraqui's mission is to assist and build an organization that people
            desire to be a part of.
          </p>
        </div>
      </div>
      <div className="abou-3">
        <h2 className="journey d-flex justify-content-center">Journey</h2>
        <div className="about">
          <div className="left">
            <p className="head change-about-3-heading">The team</p>
            <p className=" para">
              We align our understanding according to your business needs and
              proactively initiate the HR processes to suit your requirements
              leveraging the power of Artificial Intelligence. We have a robust
              pan India presence in over 22 states, 55 cities, and are aiming to
              grow significantly in the times to come.
            </p>
          </div>
          <div className="right">
            <img src={pic3} alt="" />
          </div>
        </div>
      </div>
      <h4 className="d-flex justify-content-center"><span className="likes">100k+</span> Happy clients</h4>
       <p  className="d-flex justify-content-center">Here’s what they say about us</p>
       <div className=" clients d-flex justify-content-evenly">
        <Client  heading=" Client name, Industry" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." />
        <Client  heading=" Client name, Industry" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." />
        <Client  heading=" Client name, Industry" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." />
       </div>
       <div className=" supports d-flex justify-content-center ">
        <div className=" support email mx-5 d-flex">
        <a  href="/"> 
              <FaMailBulk
                size={20}
                style={{ color: "#1ABDDC", marginRight: "2rem" }}
              />
              </a>
             <p  >support.meraqui@gmail.com</p> 
        </div>
         
             <div className=" support email mx-5 d-flex">
             <a   href="/">
              <FaPhone
                size={20}
                style={{ color: "#1ABDDC", marginRight: "2rem" }}
              />
              </a>
             <p >+91 92564 65813</p>  
             </div>
             
          </div>
          <Footer/>
    </>
  );
};

export default About;

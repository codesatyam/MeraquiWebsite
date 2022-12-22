import React from "react";
import Footer from "./Footer";
import pic1 from "../images/contact1.png";
import Form from "./Form";
const Contact = () => {
  return (
    <>
      <div className="contact d-flex">
        <div className="left">
          <div className="header">
            <p>Let’s Get in touch</p>
          </div>
          <div className="para d-flex align-content-center my-5">
            <p>
              Workforce planning can help an organization better prepare for the
              future and forecast potential challenges. Connect with us to find
              the workforce that fits your business.
            </p>
          </div>
          <div className="but d-flex mx-5 my-5">
            <a href="/contact" type="button" class="btn btn-outline-info mx-4">
              Contact Us
            </a>
          </div>
        </div>
        <div className="right">
          <img src={pic1} alt="" />
        </div>
      </div>
      <Form/>
      <Footer />
    </>
  );
};

export default Contact;

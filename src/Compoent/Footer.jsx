import React from "react";
import {
  FaLocationArrow,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
export const Footer = () => {
   
  return (
    <>
    <div className="foot">
      <div className="footer d-flex ">
        <div className="fot1 d-flex flex-column ">
          <h2>MERAQUI</h2>
          <div className="location d-flex">
            <a href="/">
              <FaLocationArrow
                size={30}
                style={{ color: "#1ABDDC", marginRight: "2rem" }}
              />
            </a>
            <p>
              45 Rajwadkar Street, Colaba Mumbai, Maharashtra, 400005
              02222881876
            </p>
            <div></div>
          </div>
          <div className="email d-flex">
            <a href="/">
              <FaMailBulk
                size={20}
                style={{ color: "#1ABDDC", marginRight: "2rem" }}
              />
            </a>
            <p>satyamchaurasiya136@gmail.com</p>
          </div>
        </div>

        <div className="fot2 d-flex flex-column ">
          <h6>
            {" "}
            <span>Quick-links</span>
          </h6>
          <ul className=" d-flex flex-column">
            <li>Services</li>
            <li>Industries</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="fot3 d-flex flex-column ">
          <h6>Services</h6>
          <ul className=" d-flex flex-column">
            <li>HRMS</li>
            <li>Select</li>
            <li>Benefits</li>
            <li>Rockets</li>
          </ul>
        </div>
        <div className="fot4 d-flex flex-column ">
          <h6>Policies</h6>
          <ul className=" d-flex flex-column">
            <li>Contact Us</li>
            <li>Terms & Policy</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <h6 className=" d-flex justify-content-center">Follow our socials</h6>
      <div className="soci">
        
      </div>
      <div className="social d-flex justify-content-center">
        <a
          className="mar-foot"
          href="https://www.facebook.com/satyam.chaurasiya.351/"
        >
          <FaFacebook
            size={30}
            style={{ color: "#1ABDDC", marginRight: "2rem" }}
          />
        </a>
        <a
          className="marfoot"
          href="https://www.facebook.com/satyam.chaurasiya.351/"
        >
          <FaInstagram
            size={30}
            style={{ color: "#1ABDDC", marginRight: "2rem" }}
          />
        </a>
        <a className="mar-foot" href="https://twitter.com/SatyamC31079744">
          {" "}
          <FaTwitter
            size={30}
            style={{ color: "#1ABDDC", marginRight: "2rem" }}
          />
        </a>
        <a
          className="mar-foot"
          href="https://www.linkedin.com/in/satyam-chaurasiya-903039213/"
        >
          <FaLinkedin
            size={30}
            style={{ color: "#1ABDDC", marginRight: "2rem" }}
          />
        </a>
      </div>
      <div className="copy">
    <p >Copyright &copy; 2022 MERAQUI</p>
    </div>
      
    </div>
     
     
    </>
  );
};
export default Footer;

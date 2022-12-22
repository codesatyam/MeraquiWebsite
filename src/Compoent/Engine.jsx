import React from "react";
import Footer from "./Footer";
import pic1 from "../images/engine1.png";
import ques from "../images/ques.png";
export const Engine = () => {
  return (
    <>
      <div className="contact d-flex">
        <div className="left">
          <div className="header">
            <p>The M-Engine</p>
          </div>
          <div className="para d-flex align-content-center my-5">
            <p>
              Sheldon is an Al-based companion who uses chat bot functionality
              to interact with candidates and employers. He doesn’t generate
              just leads or qualified leads. He runs his proprietary match logic
              to zero in on the most suitable candidates. His Background
              verification engine ensures that only verified candidates get
              on-boarded.
            </p>
          </div>
        </div>
        <div className="right">
          <img src={pic1} alt="" />
        </div>
      </div>
      <h2 className="d-flex justify-content-center my-3">About M-Engine</h2>
      <div className="para-m">
        <p>With user-friendly On-boarding engine, Sheldon helps them with seamless self- onboarding. Sheldon’s role doesn’t end with hiring a candidate. He works tirelessly to record their daily attendance with a single motto: Candidates’ salary must get credited on time along with compliance. Every month. Flawlessly.
Sheldon comes handy in their times of dire need of money. He extends them salary advance, loans apart from their rightful cover under statutory dues and/or other insurance packages.
Sheldon tracks a candidate’s life cycle from hire to retire and becomes organisations go-to person to solve daily HR needs.</p>
      </div>
      <h2 className="d-flex justify-content-center my-3">Why you’ll love M-Engine</h2>
      <div className="m-engine d-flex">
        <div className="left">
          <div className="engine-h">
            <h2>Recruitment <span className="scale"> at Scale</span></h2>
          </div>
          <div className="para-engine d-flex align-content-center">
            <p>
            Sheldon allows employers to hire workers in large volumes in a number of industries across India.
            </p>
          </div>
          <div className="para-sec">
            <p><img src={ques} alt="" />Reducing sourcing costs & turnaround times by up to 30%</p>
            <p><img src={ques} alt="" />Reduce dependence on hundreds of recruitment vendors</p>
          </div>
        </div>
        <div className="right">
          <img src={pic1} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Engine;

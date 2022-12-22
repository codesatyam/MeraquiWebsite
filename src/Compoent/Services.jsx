import React from "react";
import Footer from "./Footer";
import pic1 from "../images/Services1.png";
import pic2 from "../images/Services2.png";
import pic3 from "../images/Services3.png";
import Form from "./Form";
// import { NavLink } from "react-router-dom";
const Services = () => {
  return (
    <>
      <div className="home d-flex">
        <div className="left">
          <div className="header">
            <p>Providing impactful services</p>
          </div>
          <div className="para d-flex align-content-center">
            <p>
              We enjoy the stature of being the first-ever tech-powered
              Workforce as a Solution platform that helps hire, manage talent as
              well as offer relevant gigs.
            </p>
          </div>
          <div className="but d-flex mx-5">
            <a href="/">
              <button type="button" class="btn btn-outline-info mx-4 my-3">
                View Services
              </button>
            </a>
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
                <img src={pic1} class="d-block img" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={pic1} class="d-block img" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={pic1} class="d-block img " alt="..." />
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
      <h2 className="d-flex justify-content-center my-3">Our Services</h2>
      <div className="contact d-flex">
        <div className="left">
          <div className="heade">
            <p>Temporary staffing</p>
          </div>
          <div className="para d-flex align-content-center my-5">
            <p>
              Provides dependable temporary staffing solutions that allow you to
              increase your staff strength without taking on full-time
              personnel, support overburdened employees at important moments,
              and keep projects going.
            </p>
          </div>
          <div className="but d-flex mx-5">
            <a href="/contact" type="button" class="btn btn-outline-info mx-4">
              Know more
            </a>
          </div>
        </div>
        <div className="right">
          <img src={pic2} alt="" />
        </div>
      </div>
      <div className="contact d-flex">
        <div className="right">
          <img src={pic3} alt="" />
        </div>
        <div className="left">
          <div className="header">
            <p className="d-flex justify-content-end mx-5">
              Permanent staffing
            </p>
          </div>
          <div className="para d-flex align-content-center my-1">
            <p>
              Permanent staff onboarding and integration into a single company
              is a vital commitment. These commitments are made to trusted and
              qualified individuals thanks to our permanent employment
              solutions. Our professional specialists simply assist you in
              identifying and placing the perfect personnel. We leverage our
              years of experience to give you just the most carefully screened
              and qualified individuals for every area and sector.
            </p>
          </div>
          <div className="but d-flex mx-5 ">
            <a href="/contact" type="button" class="btn btn-outline-info mx-4">
              Know more
            </a>
          </div>
        </div>
      </div>
      <div className="contact d-flex">
        <div className="left">
          <div className="heade">
            <p>Temporary staffing</p>
          </div>
          <div className="para d-flex align-content-center my-5">
            <p>
              Provides dependable temporary staffing solutions that allow you to
              increase your staff strength without taking on full-time
              personnel, support overburdened employees at important moments,
              and keep projects going.
            </p>
          </div>
          <div className="but d-flex mx-5 ">
            <a href="/contact" type="button" class="btn btn-outline-info mx-4">
              Know more
            </a>
          </div>
        </div>
        <div className="right">
          <img src={pic3} alt="" />
        </div>
      </div>
      <div className="contact d-flex">
        <div className="right">
          <img src={pic2} alt="" />
        </div>
        <div className="left">
          <div className="header">
            <p className="d-flex justify-content-end mx-5">
              Permanent staffing
            </p>
          </div>
          <div className="para d-flex align-content-center my-1">
            <p>
              Permanent staff onboarding and integration into a single company
              is a vital commitment. These commitments are made to trusted and
              qualified individuals thanks to our permanent employment
              solutions. Our professional specialists simply assist you in
              identifying and placing the perfect personnel. We leverage our
              years of experience to give you just the most carefully screened
              and qualified individuals for every area and sector.
            </p>
          </div>
          <div className="but d-flex mx-5 ">
            <a href="/contact" type="button" class="btn btn-outline-info mx-4">
              Know more
            </a>
          </div>
        </div>
      </div>
      <div className="contact d-flex">
        <div className="left">
          <div className="header">
            <p>Temporary staffing</p>
          </div>
          <div className="para d-flex align-content-center my-4">
            <p>
              Provides dependable temporary staffing solutions that allow you to
              increase your staff strength without taking on full-time
              personnel, support overburdened employees at important moments,
              and keep projects going.
            </p>
          </div>
          <div className="but d-flex mx-5">
            <a href="/contact" type="button" class="btn btn-outline-info mx-4">
              Know more
            </a>
          </div>
        </div>
        <div className="right">
          <img src={pic3} alt="" />
        </div>
      </div>
       <Form/>
      <Footer />
    </>
  );
};

export default Services;

import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div className="container-fluid mx-5">
                <NavLink className="navbar-brand" to="/Home">
                  MERAQUI
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-3">
                      <NavLink
                        activeClassName="menu-active"
                        exact
                        className="nav-link"
                        to="/about"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink
                        activeClassName="menu-active"
                        exact
                        className="nav-link"
                        to="/services"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink
                        activeClassName="menu-active"
                        exact
                        className="nav-link"
                        to="/solution"
                      >
                        Solution
                      </NavLink>
                      </li>
                    <li className="nav-item mx-3">
                      <NavLink
                        activeClassName=""
                        exact
                        className="nav-link"
                        to="/"
                      >
                      <p className="line"></p>
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink
                        activeClassName="menu-active"
                        exact
                        className="nav-link"
                        to="/engine"
                      >
                        M-Engine
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink
                        activeClassName="menu-active"
                        exact
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
    </>
  );
};
export default Navbar;

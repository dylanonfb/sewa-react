import React from "react";
import { Link } from "react-scroll/modules";
function Menu(props) {
  return (
    <>
      <section
        className="navbar navbar-default navbar-static-top"
        role="navigation"
        style={{ position: "sticky", top: "0" }}
      >
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>

            <a href="/">
              <img
                src="assets/images/logo.png"
                className="navbar-brand"
                style={{ height: "40px", padding: "0px" }}
                alt="logo"
              />
            </a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  to="top"
                  href="#top"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="smoothScroll"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="news"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="smoothScroll"
                  href="#news"
                >
                  Services
                </Link>
              </li>
              <li>
                <a href="#about" className="smoothScroll">
                  About Us
                </a>
              </li>
              <li>
                <a href="#google-map" className="smoothScroll">
                  Location
                </a>
              </li>
              <li className="appointment-btn">
                <Link
                  to="appointment"
                  href="#appointment"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="smoothScroll"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;

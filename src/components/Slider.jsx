import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-scroll";

function Slider(props) {
  return (
  <>
    <section id="home" className="slider" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <OwlCarousel className="owl-theme" items={1} 
          loop  
          nav  
          margin={8} >
            <div className="item item-first">
              <div className="caption">
                <div className="col-md-offset-1 col-md-10">
                  <h1>HEALTHCARE AT HOME</h1>
                  <Link
                     to="hospice"
                     href="#hospice"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                     className="section-btn btn btn-default smoothScroll"
                  
                  >
                    Hospice Care
                  </Link>
                </div>
              </div>
            </div>

            <div className="item item-second">
              <div className="caption">
                <div className="col-md-offset-1 col-md-10">
                  <h1>WHY CHOOSE SEWA</h1>
                  <a
                    href="#about"
                    className="section-btn btn btn-default btn-gray smoothScroll"
                  >
                    More About Us
                  </a>
                </div>
              </div>
            </div>

            <div className="item item-third">
              <div className="caption">
                <div className="col-md-offset-1 col-md-10">
                  <h1>HEAL WITH US</h1>
                  <Link
                     to="news"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                    className="section-btn btn btn-default smoothScroll"
                    href="#news"
                  > Explore Our Services</Link>
                 
                   
                  
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
   </>
  );
}

export default Slider;

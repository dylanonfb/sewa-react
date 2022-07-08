import React from 'react';

function Header(props) {
    return (
<header id="top">
          <div className="container">
               <div className="row">

                    <div className="col-md-4 col-sm-5">
                         <p>Welcome to Sewa Healthlink</p>
                    </div>
                         
                    <div className="col-md-8 col-sm-7 text-align-right">
                         <span className="phone-icon"><i className="fa fa-phone"></i> 6033-996-937 / 6033-996-944 (24x7)</span>
                         <span className="date-icon"><i className="fa fa-calendar-plus-o"></i> Office hour 9:00 AM - 4:00 PM (Mon-Sat)</span>
                         <span className="email-icon"><i className="fa fa-envelope-o"></i> contact@sewahealthlink.com</span>
                    </div>

               </div>
          </div>
     </header>
    );
}

export default Header;
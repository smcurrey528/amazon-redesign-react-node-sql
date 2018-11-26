import React, {Component} from 'react';
import './Footer.css';


function Footer() {
  return (
    <div>
        <footer>
        <div className="footer">
            <div className="airbnbFooter">
             <h6> Airbnb </h6>
             <p> Careers </p>
             <p> Press</p>
             <p> Policies</p>
             <p> Help </p>
             <p> Diversity & Belonging</p>
            </div>

            <div className="discoverFooter">
             <h6> Discover </h6>
             <p> Trust & Safety </p>
             <p> Travel Credit</p>
             <p> Gift Cards</p>
             <p> Airbnb Citizen </p>
             <p> Business Travel </p>
            </div>

            <div className="hostingFooter">
             <h6> Hosting </h6>
             <p> Hospitality </p>
             <p> Community Center</p>
             <p> Open Homes </p>
            </div>

            <div className="termsFooter">
             <p> Terms </p>
             <p> Privacy</p>
             <p> Site Map </p>
            </div>
            </div>
        </footer>
        <hr/>
        <div className="lastFoot">
        <img className="footLogo" src="https://d3iqwsql9z4qvn.cloudfront.net/wp-content/uploads/2017/05/18203729/Amazon-Logo-PNG.png" />
        <h6> © 1996-2018 </h6>
         <h6> Conditions of use & sale </h6>
        <h6> Privacy Notice </h6>
         <h6> Cookies & internet advertising </h6>
        <select className="footerbuttons">
          <option>🇺🇸 USA </option>
          <option>🇬🇧 United Kingdom </option>
          <option>🇯🇵 Japan </option>
        </select>
        </div>
    </div>

    )
}

export default Footer;

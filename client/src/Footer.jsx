import React, {Component} from 'react';
import './Footer.css';


function Footer() {
  return (
    <div className="fullfooter">
        <footer>
        <div className="footer">
            <div className="amazonFooter">
             <h6 className="boldFoot"> Get to know us </h6>
             <p> Careers </p>
             <p> About Us</p>
             <p> Policies</p>
             <p> Help </p>
             <p> Diversity & Belonging</p>
            </div>

            <div className="discoverFooter">
             <h6 className="boldFoot"> Make money with us </h6>
             <p> Sell on Amazon </p>
             <p> Sell on Amazon Business</p>
             <p> Associates Programme</p>
             <p> Fulfillment by Amazon </p>
             <p> Amazon Pay </p>
             <p> Become an Amazon Vendor </p>
            </div>

            <div className="hostingFooter">
             <h6 className="boldFoot"> Amazon Payments </h6>
             <p> Gift Cards </p>
             <p> Amazon Money Store</p>
             <p> Amazon Currency Converter </p>
             <p> Shop with Points</p>
             <p> Top your Account</p>
             <p> Payment Methods Help</p>
            </div>

            <div className="hostingFooter">
             <h6 className="boldFoot"> Let us help you </h6>
             <p> Track Packages</p>
             <p> Amazon Prime </p>
             <p> Returns & Replacements </p>
             <p> Manage your Content </p>
             <p> Amazon Mobile App</p>
             <p> Amazon Assitant</p>
             <p> Delivery Rates </p>
            </div>

            <div className="hostingFooter">
             <h6 className="boldFoot"> Other Brands </h6>
             <p> Amazon Music</p>
             <p> Amazon Tickets </p>
             <p> DPR Review </p>
             <p> Kindle direct </p>
             <p> Souq.com</p>
             <p> Abebooks.com</p>
             <p> More... </p>
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

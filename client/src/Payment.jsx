import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Payment.css';


class Payment extends Component {
  render() {
    return (
         <React.Fragment>
         <Nav/>
          <div className='checkout'>
           <div className='creditcard'>
             <div className='selectedAdd'>
             <img src='https://i.imgur.com/JlRpJ14.png'/>
             <p className='westside'> Apartment 5A, 129 West 81st Street, New York, New York </p>
             </div>
             <img src='https://i.imgur.com/rFTOXkH.png'/>
             <div className='boxwhite'>
               <h1 className='yourAdd'> Your Credit Cards </h1>
               <hr/>
               <div className='infoadd'>
                <img src='https://i.imgur.com/qlcsvcP.png'/>
                <img src='https://i.imgur.com/pYvSpq1.png'/>
                 <div className='nameAdd'>
                  <h1 className='receiver'> Josie Peralta </h1>
                  <p className='ccnum'> XXXX XXXX XXXX 1267</p>
                 </div>
               </div>
               <div className='infoadd'>
                <img src='https://i.imgur.com/ziSF0FH.png'/>
                <img src='https://i.imgur.com/HLoM51j.png'/>
                 <div className='nameAdd'>
                  <h1 className='receiver'> Sarah Currey </h1>
                  <p className='ccnum'> XXXX XXXX XXXX 0528</p>

                 </div>
               </div>
               <div className='infoadd'>
                <img className='plus' src='https://i.imgur.com/deABWat.png'/>
                 <div className='nameAdd'>
                  <h1 className='newAddress'> Add a new credit card </h1>
                 </div>
               </div>
               <hr/>
               <button className='use'> Use this credit card </button>
           </div>
          <img src='https://i.imgur.com/kvHALSV.png'/>
      </div>

          </div>
          <Footer/>
         </React.Fragment>
      )
  }
}

export default Payment;


import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Checkout.css';


class Checkout extends Component {
  render() {
    return (
         <React.Fragment>
         <Nav/>
          <div className='checkout'>
           <div className='address'>
             <img src='https://i.imgur.com/P0EEtw3.png'/>
             <div className='boxwhite'>
               <h1 className='yourAdd'> Your Addresses </h1>
               <hr/>
               <div className='infoadd'>
                <img src='https://i.imgur.com/qlcsvcP.png'/>
                 <div className='nameAdd'>
                  <h1 className='receiver'> Sarah Currey</h1>
                  <p> Apartment 5A, 129 West 81st Street, New York, New York </p>
                 </div>
               </div>
               <div className='infoadd'>
                <img src='https://i.imgur.com/ziSF0FH.png'/>
                 <div className='nameAdd'>
                  <h1 className='receiver'> P. Sherman </h1>
                  <p> 42 Wallaby Way, Sydney, Austrailia</p>
                 </div>
               </div>
               <div className='infoadd'>
                <img src='https://i.imgur.com/ziSF0FH.png'/>
                 <div className='nameAdd'>
                  <h1 className='receiver'> Sherlock Holmes </h1>
                  <p> 221B Baker St, London, England</p>
                 </div>
               </div>
               <div className='infoadd'>
                <img src='https://i.imgur.com/ziSF0FH.png'/>
                 <div className='nameAdd'>
                  <h1 className='receiver'> Sirius Black </h1>
                  <p> 12 Grimmauld Place, London, UK</p>
                 </div>
               </div>
               <div className='infoadd'>
                <img className='plus' src='https://i.imgur.com/deABWat.png'/>
                 <div className='nameAdd'>
                  <h1 className='newAddress'> Create New Address </h1>
                 </div>
               </div>
               <hr/>
               <Link to='/payment'><button className='use'> Use this address </button></Link>
           </div>
          <img src='https://i.imgur.com/yJCWdpm.png'/>
      </div>

          </div>
          <Footer/>
         </React.Fragment>
      )
  }
}

export default Checkout;

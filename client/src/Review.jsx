import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Review.css';


class Review extends Component {
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
             <img src='https://i.imgur.com/6ZDzf1W.png'/>
             <p className='westside'> Visa - Josie Peralta XXXX XXXX XXXX 1267  </p>
             <img src='https://i.imgur.com/t3WSQCv.png'/>
             <div className='boxwhite'>
               <h1 className='yourAdd'> Your Order </h1>
               <hr/>
               <div className='infoadd'>
                <img src='https://i.imgur.com/8rJTKO7.png'/>
                 <div className='nameAdd'>
                  <h1 className='receiver'> Alminette Pointy Toe Pump </h1>
                  <p className='ccnum'> Red- Size 6</p>
                 </div>
               </div>
               <div className='primedelivery'>
                 <div className='nameAdd'>
                  <h1 className='receiver'> Prime Delievery </h1>
                  <p className='ccnum'> Get it by Tuesday 4th December </p>

                 </div>
               </div>
               <div className='primetotal'>
                 <div className='nameAdd'>
                  <h1 className='newAddress'> Total:  $675.00 </h1>
                 </div>
               </div>
               <hr/>
               <button className='use'> Buy now </button>
           </div>
          <img src='https://i.imgur.com/kvHALSV.png'/>
      </div>

          </div>
          <Footer/>
         </React.Fragment>
      )
  }
}

export default Review;

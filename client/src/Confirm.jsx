import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Confirm.css';


class Confirm extends Component {
  render() {
    return (
         <React.Fragment>
         <Nav/>
          <div className='checkout'>
           <div className='creditcard'>
             <div className='boxwhite'>
             <div className='confirmed'>
               <img className='check' src='https://i.imgur.com/IFOTeap.png'/>
               <h1 className='thanks'> Thanks, your order has been placed </h1>
               <p className='eastside'> Your order number is 405-3981123-3028. We've sent you an email confirmation. </p>
               </div>
               <hr/>
               <Link to='/products'><button className='use'> Continue Shopping </button></Link>
           </div>
         <div className="recentviews">
              <ul className="textUL">
               <li className="textblack"> Recommendations </li>
               <li className="textcat"> Recently Viewed</li>
               <li className="textcat"> Friend's Purchases </li>
              </ul>
           </div>
           <div className="confirmProduct">
            <div className="productBox">
             <img className="imgProduct" src="https://images-na.ssl-images-amazon.com/images/I/61XE3rek%2BBL._UY395_.jpg"/>
             <h5> Sophie Heels by Kate Spade </h5>
             <h4> $ 250.00 </h4>
            </div>
            <div className="productBox">
             <img className="imgProduct" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/M/QU/MQUF2/MQUF2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1502831144597"/>
            <h5> Beats by Dre </h5>
             <h4> $ 99.00 </h4>
            </div>
            <div className="productBox">
             <img className="imgProduct" src="https://images-na.ssl-images-amazon.com/images/I/51SJl9whqSL.jpg"/>
             <h5> Timeless 7G by Rolex </h5>
             <h4> $ 150.00 </h4>
            </div>
            <div className="productBox">
             <img className="imgProduct" src= "https://cornellfootballassociation.org/wp-content/uploads/product-883681-Mens-Nike-Golf-Dri-Fit-Legacy-Polo-Shirt-Red-600x600.jpg"/>
             <h5> Polo by Ralph Lauren </h5>
             <h4> $ 70.00 </h4>
            </div>
              </div>
      </div>

          </div>
          <Footer/>
         </React.Fragment>
      )
  }
}

export default Confirm;

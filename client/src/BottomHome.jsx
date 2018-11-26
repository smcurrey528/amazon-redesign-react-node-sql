import React, {Component} from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Carousel from './Carousel';
import './BottomHome.css'

class BottomHome extends Component {
  render() {
    return (
         <React.Fragment>
          <div className="featured">
           <div className="purse">
           <img className="asscesories" src="https://i.imgur.com/aj5bR58.png" title="source: imgur.com" />
           <div className="whitebox">
           <div class="vl"></div>
             <div className="textbox">
                <h2 className="bold"> Items you've recently seen</h2>
                <br/>
                <p> Based on your history, we have gathered all the best offers for you </p>
              </div>
              </div>
           </div>
           <div className="categories">
              <ul className="textUL">
               <li className="textcat"> Featured </li>
               <li className="textcat"> Fashion</li>
               <li className="textcat"> Children </li>
               <li className="textcat"> Audio </li>
              </ul>
           </div>
           <div className="sectionProduct">
            <div className="productBox">
             <img className="imgProduct" src="https://images-na.ssl-images-amazon.com/images/I/61XE3rek%2BBL._UY395_.jpg"/>
             <h5> Title by Company </h5>
             <h4> $ 150.00 </h4>
            </div>
            <div className="productBox">
             <img className="imgProduct" src="https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/M/QU/MQUF2/MQUF2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1502831144597"/>
            <h5> Title by Company </h5>
             <h4> $ 150.00 </h4>
            </div>
            <div className="productBox">
             <img className="imgProduct" src="https://images-na.ssl-images-amazon.com/images/I/51SJl9whqSL.jpg"/>
             <h5> Title by Company </h5>
             <h4> $ 150.00 </h4>
            </div>
            <div className="productBox">
             <img className="imgProduct" src= "https://cornellfootballassociation.org/wp-content/uploads/product-883681-Mens-Nike-Golf-Dri-Fit-Legacy-Polo-Shirt-Red-600x600.jpg"/>
             <h5> Title by Company </h5>
             <h4> $ 150.00 </h4>
            </div>
              </div>
            </div>
         </React.Fragment>
      )
  }
}

export default BottomHome;

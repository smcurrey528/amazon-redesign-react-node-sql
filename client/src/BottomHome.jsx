import React, {Component} from 'react';
import Nav from './Nav';
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
               <li className="textblack"> Featured </li>
               <li className="textcat"> Fashion</li>
               <li className="textcat"> Children </li>
               <li className="textcat"> Audio </li>
              </ul>
           </div>
           <div className="sectionProduct">
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
              <div className="holshopping">
           <img className="holiday" src="https://i.imgur.com/3Fq17A0.png" title="source: imgur.com" />
           <div className="whitebox">

             <div className="textbox">
                <h2 className="bold"> Are you ready for the Holidays?</h2>
                <br/>
                <div class="vl"></div>
                <p> We have created a selection of items you will adore </p>
              </div>
              </div>
           </div>
             <div className="categories">
              <ul className="textUL">
               <li className="textblack"> Featured </li>
               <li className="textcat"> Fashion</li>
               <li className="textcat"> Food  </li>
               <li className="textcat"> Decoration </li>
              </ul>
           </div>
             <div className="sectionProduct">
            <div className="productBox">
             <img className="imgProduct" src="https://s3.thcdn.com/productimg/0/600/600/71/10269071-1402310186-858014.jpg"/>
             <h5> Rain Boots by Hunters </h5>
             <h4> $ 150.00 </h4>
            </div>
            <div className="productBox">
             <img className="imgProduct" src="https://slimages.macysassets.com/is/image/MCY/products/2/optimized/8700082_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$"/>
            <h5> Christmas Ornament by EOS </h5>
             <h4> $ 15.00 </h4>
            </div>
            <div className="productBox">
             <img className="imgProduct" src="http://cdn.shopify.com/s/files/1/0566/6837/products/100026x_grande.jpg?v=1448025125"/>
             <h5> Booze by Amazon </h5>
             <h4> $ 100.00 </h4>
            </div>
            <div className="productBox">
             <img className="imgProduct" src= "https://n.nordstrommedia.com/id/625adef3-d2dc-47a2-b40e-8cd6e711b55c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&quality=70"/>
             <h5> Gucci Guilty by Gucci </h5>
             <h4> $ 75.00 </h4>
            </div>
              </div>
            </div>
         </React.Fragment>
      )
  }
}

export default BottomHome;

import React from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';
import Footer from './Footer';


const Products = (props) => {

   const items = [
     {
    src: `${props.products.url}`
  },
  {
    src: `${props.products.url_two}`
  },
  {
    src: `${props.products.url_three}`
  }
]

  return (
   <React.Fragment>

    <div className="listings">
      <UncontrolledCarousel items={items} />
      <div className="info">
      <p> ENTIRE CONDOMINIUM </p>
      <h5 className="title">{props.listings.listing_title}</h5>


      <p className="details"> {props.listings.room_specifics}</p>
      <p> {props.listings.amenities_one}, {props.listings.amenities_two}, {props.listings.amenities_three}, {props.listings.amenities_four} </p>

      <Link to={`/products/${props.products.id}`}>Explore Listing</Link>

      </div>
      <div className="secondinfo">
      <h6 className="price"> {props.products.price}</h6>
      <p className="super"> {props.products.superhost_or_not} </p>
      <p> {props.products.cancellation} </p>
      </div>

    </div>
    </React.Fragment>
  )
}



export default Products;

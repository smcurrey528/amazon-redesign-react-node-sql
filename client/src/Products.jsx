import React from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';
import Footer from './Footer';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Products.css';


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
   <div className="indieProducts">
    <div className="demProducts">
     <Card >
        <CardImg width="40%" src={props.products.url} alt="Card image cap"/>
        <CardBody>
          <CardTitle>{props.products.title} by {props.products.company} </CardTitle>
          <CardText> {props.products.price}
          <hr/>
          <Link to={`/products/${props.products.id}`}>See More...</Link>
          </CardText>
        </CardBody>
      </Card>
      </div>
      </div>


    </React.Fragment>
  )
}



export default Products;

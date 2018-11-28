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
   <div className="listings">
    <div className="demProducts">
     <Card >
        <CardImg width="40%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>

      <div className="info">
      <p> Test Product Listing</p>
  <UncontrolledCarousel items={items} />

      <Link to={`/products/${props.products.id}`}>Explore Listing</Link>

      </div>
      <div className="secondinfo">
      <h6 className="price"> {props.products.price}</h6>

      </div>

    </div>
    </React.Fragment>
  )
}



export default Products;

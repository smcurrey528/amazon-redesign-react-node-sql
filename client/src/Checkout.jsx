import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';


class Checkout extends Component {
  render() {
    return (
         <React.Fragment>
         <Nav/>
          <h1> You checked out congrats </h1>
          <Footer/>
         </React.Fragment>
      )
  }
}

export default Checkout;

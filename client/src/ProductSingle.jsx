import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import Hello from './Hello';
import MenuBar from './MenuBar';
import './ProductSingle.css';

class ProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      apiDataLoaded: false,

    }
  }


  componentDidMount() {
    axios.get(`/products/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          products: res.data.data,
        })
      }).catch(err => console.log(err));
}



  renderListingsOrLoading() {
    if (this.state.apiDataLoaded) {
      return (
        <React.Fragment>
        <div className="single-listing">
          <Nav/>
          <div className="singleProduct">
             <div className="productBackground">
               <img className="singleImg" src={this.state.products.url} alt={this.state.products.title} />
               <p> {this.state.products.company} </p>
               <h2>  {this.state.products.title} </h2>
               <p> Stars go here </p>
               <p> Reviews: {this.state.products.review_number} </p>
               <p> Price: {this.state.products.price} </p>
             </div>
          </div>


        </div>
         <Footer/>
         </React.Fragment>
      )
    } else return <p className="loading">Loading...</p>
  }


  render() {
    return (
      <div className="listings-single">
        {this.renderListingsOrLoading()}
      </div>
    )
  }
}


export default ProductSingle;

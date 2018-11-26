import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import Hello from './Hello';
import MenuBar from './MenuBar';

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
        <div className="single-listing">
          <Nav/>
          <MenuBar/>
          <Hello/>
          <h6> Single Product</h6>
          <Footer/>

        </div>
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

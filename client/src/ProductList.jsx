import React, { Component } from 'react';
import axios from 'axios';
import Products from './Products';
import Nav from './Nav';
import './ProductList.css';
import Footer from './Footer';


class ProductList extends Component {
  state = {
      apiDataLoaded: false,
      apiData: null,
      dropdownOpen: false,
      filter: 'all'
    }

 componentDidMount() {
    axios.get('/products')
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          apiData: res.data.data,
        })
      })
  }

  renderListings() {
    if (this.state.apiDataLoaded) {
      return this.state.apiData.map(products => {
        return (
          <Products
          key={products.id}
          products={products}
          onFaveToggle={ () => this.props.onFaveToggle(products) }

  isFave = {() => this.props.products.includes()}/>
        );
      });
    } else return <div className="load-wrapp">
            <div className="load-3">
                <p>Loading...</p>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
  }

  handleFilterClick(filter) {
 console.log('setting filter to', filter)
 this.setState(prevState => ({
 filter
 }))
}

    toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
      // const favorites = this.props.faves
    const filterall = (this.state.filter) === 'all' ? 'is-active' : ''
    const filterfaves = (this.state.filter) === 'faves' ? 'is-active' : ''
    // const filterState = (this.state.filter) === 'faves' ? 'film-list' : 'no-faves'



    return (
      <React.Fragment>
      <Nav/>
      <div className="prodBar">
              <ul className="textUL">
               <li className="textcat"> Featured </li>
               <li className="textcat"> Fashion</li>
               <li className="textcat"> Children </li>
               <li className="textcat"> Audio </li>
              </ul>
       </div>
      <div> {this.renderListings()} </div>
      <Footer/>
      </React.Fragment>
    )
  }
}

export default ProductList;

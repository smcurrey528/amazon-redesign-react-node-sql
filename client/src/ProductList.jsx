import React, { Component } from 'react';
import axios from 'axios';
import Products from './Products';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Nav from './Nav';
import './ProductList.css'


class ProductList extends Component {
  state = {
      apiDataLoaded: false,
      apiData: null,
      dropdownOpen: false,
      filter: 'all'
    }

 componentDidMount() {
    axios.get('/listings')
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
          listings={products}
          onFaveToggle={ () => this.props.onFaveToggle(products) }

  isFave = {() => this.props.products.includes()}/>
        );
      });
    } else return <div class="load-wrapp">
            <div class="load-3">
                <p>Loading...</p>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
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
      <div> {this.renderListings()} </div>
      </React.Fragment>
    )
  }
}

export default ProductList;

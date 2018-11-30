import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import './Sell.css';
import D3 from './D3';
import * as d3 from "d3";
import * as c3 from "c3";

const columns = [
  ['Your Avg. Products Sold', 200, 400, 100],
  ['Other Vendors Avg.', 250, 300, 150]
];

class Sell extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      title: '',
      company: '',
      price: '',
      fireRedirect: false,
      chartType: 'bar',
    };
  }
//this handes onSubmit input
  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }
//on click submit button
  handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post('/products', {
        url: this.state.url,
        title: this.state.title,
        company: this.state.company,
        price: this.state.price,
      })
      .then(res => {
        console.log(res);
        this.setState({
          newId: res.data.data.id,
          fireRedirect: true,
        });
      })
      .catch(err => console.log(err));
    e.target.reset();
  }

  _setBarChart() {
    this.setState({
      chartType: 'bar' });
  }
  _setLineChart() {
    this.setState({
      chartType: 'line' });
  }

    _setDonutChart() {
    this.setState({
      chartType: 'donut' });
  }

  render() {
    return (
      <React.Fragment>
      <Nav/>
      <div className="whitesmoke">
      <h1 className="d3sell"> See how your products are selling compared to other vendors: </h1>
      <div className="dthreesection"/>
       <div className="d3">
        <D3
          columns={columns}
          chartType={this.state.chartType} />
        <p>
          Select Chart Type:
          <button className="d3button" onClick={() => this._setBarChart()}>Bar Mode</button>
          <button className="d3button" onClick={() => this._setLineChart()}>Line Mode</button>
          <button className="d3button" onClick={() => this._setDonutChart()}>Donut Mode (nom)</button>
        </p>
      </div>

      <div className="add">
         <h2 className="saradd"> Add a New Product on Sarazon </h2>
        <form className-="sell" onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>
            <input
              className="input"
              type="title"
              placeholder="Product Title"
              name="title"
              value={this.state.title}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <br/>
          <label>
            <input
            className="input"
              type="company"
              placeholder="Name"
              name="name"
              value={this.state.review_personone}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <br/>
          <label>
            <input
            className="input"
              type="price"
              placeholder="Price"
              name="price"
              value={this.state.price}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <br/>
           <label>
            <input
            className="input"
              type="url"
              placeholder="Product URL"
              name="url"
              value={this.state.url}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <br/>
          <input className="reviewButton" type="addProduct" value="Add your Product!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/products/${this.state.newId}`} />
          : ''}
      </div>
      </div>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default Sell;

import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AddReview extends Component {
  constructor() {
    super();
    this.state = {
      review_titleone: '',
      review_one: '',
      review_personone: '',
      fireRedirect: false,
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
        review_titleone: this.state.review_titleone,
        review_one: this.state.review_one,
        review_personone: this.state.review_personone,
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

  render() {
    return (
      <div className="newreview">
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>
            Review Title
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.review_titleone}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              placeholder="Description"
              name="desc"
              value={this.state.review_one}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Name
            <input
              type="number"
              placeholder="Name"
              name="name"
              value={this.state.review_personone}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <input className="reviewButton" type="submit" value="Submit your Review!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/products/${this.state.newId}`} />
          : ''}
      </div>
    );
  }
}

export default AddReview;

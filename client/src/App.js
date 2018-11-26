import React, { Component } from 'react';
import './App.css';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import ProductList from './ProductList';
import ProductSingle from './ProductSingle';
import ShoppingChart from './ShoppingCart';
import Checkout from './Checkout';
import YourAmazon from './YourAmazon';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/shoppingcart" component={ShoppingChart} />
            <Route exact path="/products/:id" component={ProductSingle} />
            <Route exact path="/your-amazon" component={YourAmazon} />
            <Route exact path="to/my/checkout" component={Checkout} />
          </Switch>
         </React.Fragment>
      </Router>
    );
  }
}

export default App;

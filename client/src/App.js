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
import Sell from './Sell';
import Music from './Music';
import Video from './Video';
import YourFriends from './YourFriends';

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
            <Route exact path="/sell" component={Sell} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/friends" component={YourFriends} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
         </React.Fragment>
      </Router>
    );
  }
}

export default App;

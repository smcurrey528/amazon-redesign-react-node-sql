import React, { Component } from 'react';
import './App.css';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import ProductList from './ProductList';
import ProductSingle from './ProductSingle';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:id" component={ProductSingle} />
          </Switch>
         </React.Fragment>
      </Router>
    );
  }
}

export default App;

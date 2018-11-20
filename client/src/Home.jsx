import React, {Component} from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Carousel from './Carousel';

class Home extends Component {
  render() {
    return (
         <React.Fragment>
          <Nav/>
         <Carousel />
         </React.Fragment>
      )
  }
}

export default Home;

import React, {Component} from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Carousel from './Carousel';
import BottomHome from './BottomHome';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
         <React.Fragment>
          <Nav/>
         <Carousel />
         <BottomHome/>
         <Footer/>
         </React.Fragment>
      )
  }
}

export default Home;

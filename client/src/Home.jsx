import React, {Component} from 'react';
import Nav from './Nav';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Carousel from './Carousel';
import BottomHome from './BottomHome';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
         <React.Fragment>
          <Nav/>
          <div className="controlImages">
         <Carousel />
         </div>
         <BottomHome/>
         <Footer/>
         </React.Fragment>
      )
  }
}

export default Home;

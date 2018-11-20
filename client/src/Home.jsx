import React, {Component} from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Home extends Component {
  render() {
    return (
         <React.Fragment>
          <Nav/>
         <img src="https://i.imgur.com/YlFBZwW.png" title="source: imgur.com" />
         </React.Fragment>
      )
  }
}

export default Home;

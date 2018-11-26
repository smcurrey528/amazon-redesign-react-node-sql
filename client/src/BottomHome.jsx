import React, {Component} from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Carousel from './Carousel';
import './BottomHome.css'

class BottomHome extends Component {
  render() {
    return (
         <React.Fragment>
          <div className="featured">
           <img className="asscesories" src="https://i.imgur.com/aj5bR58.png" title="source: imgur.com" />
           <div className="whitebox">
           <div class="vl"></div>
             <div className="textbox">
                <h2> Items you've recently seen</h2>
                <p> Based on your history, we have gathered all the best offers for you </p>
              </div>
           </div>

          </div>
         </React.Fragment>
      )
  }
}

export default BottomHome;

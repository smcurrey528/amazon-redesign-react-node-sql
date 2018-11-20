import React, {Component} from 'react';
import './MenuBar.css';

class MenuBar extends Component {
  render() {
    return (
        <ul className="menubar">
         <li className="menuli"> Your Amazon </li>
         <li className="menuli"> Orders</li>
         <li className="menuli"> Today's Deal</li>
         <li className="menuli"> Gift Cards </li>
         <li className="menuli"> Sell </li>
         <li className="menuli"> Help</li>
        </ul>
      )
  }
}

export default MenuBar;

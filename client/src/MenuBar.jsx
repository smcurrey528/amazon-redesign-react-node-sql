import React, {Component} from 'react';
import './MenuBar.css';
import { Link } from 'react-router-dom';

class MenuBar extends Component {
  render() {
    return (
        <ul className="menubar">
         <li className="menuli"><Link to="/your-amazon"> Your Amazon </Link></li>
         <li className="menuli"><Link to='/friends'> Your Friends</Link></li>
         <li className="menuli"><Link to="/products"> Today's Deal</Link></li>
         <li className="menuli"><Link to="/sell"> Sell</Link> </li>
        </ul>
      )
  }
}

export default MenuBar;

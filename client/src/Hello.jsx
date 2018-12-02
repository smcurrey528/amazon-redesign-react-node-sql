import React, {Component} from 'react';
import './Hello.css';
import { Link } from 'react-router-dom';

class Hello extends Component {
  render() {
    return (
      <div className="yellowbar">
      <h4> Hello, Sarah Currey </h4>
        <ul className="rightsideli">
         <li className="yellowli"><Link to='/products'> Prime </Link></li>
         <li className="yellowli"><Link to='/video'> Video</Link></li>
         <li className="yellowli" id="music"><Link to='/music'> Music</Link></li>
        </ul>
        </div>
      )
  }
}

export default Hello;

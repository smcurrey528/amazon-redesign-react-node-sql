import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div className="yellowbar">
      <h4> Hello, Sarah Currey </h4>
        <ul className="rightsideli">
         <li className="yellowli"> Prime </li>
         <li className="yellowli"> Video</li>
         <li className="yellowli"> Fresh</li>
         <li className="yellowli" id="music"> Music</li>
        </ul>
        </div>
      )
  }
}

export default Hello;

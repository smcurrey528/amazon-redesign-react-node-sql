import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './YourFriends.css';
import Friends from './Friends';
import { Link } from 'react-router-dom';

class YourFriends extends Component {
  render() {
    return (
         <React.Fragment>
          <Nav/>
          <div className="yourfriends">
              <div className="categories">
              <ul className="textUL">
               <li className="textblack"> Social </li>
               <li className="textcat"> Purchases</li>
               <li className="textcat"> Reviews </li>
              </ul>
           </div>
           <Friends/>
          </div>
         <Footer/>
         </React.Fragment>
      )
  }
}

export default YourFriends;

import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './YourAmazon.css'

class YourAmazon extends Component {
  render() {
    return (
         <React.Fragment>
          <Nav/>
          <div className="profile">
            <div className="aboutSarah">

              <img className="profpic" src="https://i.imgur.com/FonrfDe.png" alt="profpic"/>
              <div className="descSarah">
              <h1 className="boldinfo"> Sarah Currey </h1>
              <hr/>
              <p className="brand"> As an outgoing, health care lobbyist turned passionate software developer, my background in policy and project management gave me the analytical thinking and collaborative skills to build dynamic and responsive web applications. </p>
              </div>
            <div className="stats">
              <p className="boldinfo"> 528 </p>
              <p> Friends </p>
              <p className="boldinfo"> 45 </p>
               <p> Purchases </p>
              <p className="boldinfo"> 12 </p>
               <p> Reviews </p>
          </div>
          </div>
              <div className="categories">
              <ul className="textUL">
               <li className="textcat"> Social </li>
               <li className="textcat"> Purchases</li>
               <li className="textcat"> Reviews </li>
              </ul>
           </div>
          </div>
         <Footer/>
         </React.Fragment>
      )
  }
}

export default YourAmazon;

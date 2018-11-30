import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Music.css';


class Music extends Component {
  render() {
    return (
         <React.Fragment>
          <Nav/>
          <div className="amusic">
          <div className="load-wrapp">
            <div className="load-1">
                <p>Amazon Music</p>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
          </div>
        </div>
         <Footer/>
         </React.Fragment>
      )
  }
}

export default Music;

import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Maisel.css';


class Video extends Component {
  render() {
    return(
      <React.Fragment>
      <Nav/>
      <div>
        <h1 className='coming'> The Marvelous Mrs.Maisel Season 2: Coming December 5th! </h1>
        <img className='maisel' src='https://i.ytimg.com/vi/76bH1b9XreE/maxresdefault.jpg' alt='marvelous'/>
      </div>
      <Footer/>
      </React.Fragment>
      )
  }
}
export default Video;

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Nav.css';
import MenuBar from './MenuBar';
import Hello from './Hello';
import ShoppingCart from './ShoppingCart';

class Nav extends Component {
    constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
       <React.Fragment>
        <div className="headerNav">
         <div className="homelink">
                 <Link to='/'>
                 <img className="head-logo" src="https://vignette.wikia.nocookie.net/logopedia/images/9/9f/Amazon.com_A_Smile.svg/revision/latest?cb=20160806152417" title="source: imgur.com" />
                 </Link>
           </div>
           <Dropdown isOpen={this.state.dropdownOpen} toggle={() =>this.toggle()}>
              <DropdownToggle className="caret" caret>

              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><Link to='/'>Home</Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Amazon Music</DropdownItem>
                <DropdownItem>Prime Video</DropdownItem>
                <DropdownItem>Fire TV</DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link to='/add'>Amazon Fresh</Link></DropdownItem>
                <DropdownItem>Sign Up</DropdownItem>
                <DropdownItem>Login</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Help</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <form>
              <label>
                <div className="search-icon">
                    <svg className="search-picture">
                        <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
                     <input className="search-input" type="text"  name="query" placeholder="Search for anything"/>
                </div>
              </label>
            </form>
            </div>
            <ShoppingCart/>
            <MenuBar/>
            <Hello/>

         </React.Fragment>
      )
  }
}

export default Nav;

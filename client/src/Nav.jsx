import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Nav.css';
import MenuBar from './MenuBar';
import Hello from './Hello';
import ShoppingCart from './ShoppingCart';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
    constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      fireRedirect: false,
      productTitle: '',
    };
  }

    handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value)
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios
      .get('/products', {
        productTitle: this.state.title
      })
      .then(res => {
        console.log(res);
        this.setState({
          newId: res.data.data.id,
          fireRedirect: true,
        })
      })
      .catch(err => console.log(err));
      e.target.reset();
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
                <DropdownItem><Link to='/music'>Amazon Music</Link></DropdownItem>
                <DropdownItem><Link to='/video'>Prime Video</Link></DropdownItem>
                <DropdownItem><Link to='/products'> Today's Deals </Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link to='your-amazon'> Your Amazon </Link></DropdownItem>
                <DropdownItem><Link to='/sell'> Sell </Link></DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <form className="nav-form" onSubmit={(e) => this.handleFormSubmit(e)}>
              <label>
                <div className="search-icon">
                    <svg className="search-picture">
                        <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
                     <input
                        className="search-input"
                        type= "text"
                        name="Search"
                        value={this.state.productTitle}
                        onChange={(e) => this.handleInputChange(e)}
                        placeholder="Search for anything"/>
                </div>
              </label>
            </form>
                {this.state.fireRedirect
              ? <Redirect push to={`/products/`} />
              : ''}
            </div>
            <Link to="/shoppingcart"><img className="shopping" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIySURBVGhD7do7aBRRFIfxlaAY0EILBUuJETSFWlkIWmghRIKI2ipImogIFmIpggghKAimDTGQxHRqIaSx0M7GwsYHGgWxUQsfiIL6/YuBy3I2u3PnnrsMzAe/MvfMNbvziq2mpqaee4hnhjc4jtq0gn8dPEZtWm0jMoJa1G0j06hFozgZmEG4ke+41yeLuIQ1KN02/EG4mX7TZqJagrVgv9xHVIdgLdgv5xGVPpMvYC2a22usQ3T6V7AWzu0EKrUR32AtnstTRJ2x2rsDa0AOf7EfSdoNa0gOuoYkTfdb1iBPv7AdSTsFa5inKSRvLT7CGujhMzbBpauwhnq4CLdy3X9Vvvj1Uo77r8oXv17yvv9KdvHrloa8hHUQVSW9+HVrF37DOpCqJpEl/TaewDqIKt5BN6dZPlJqHO0HcQM638fagKxtwReEm3iF9ahV1xBuQo6gdum0GG7iLmpZ+5f8OZadXUDyriPcSA56oEveVnyCNdCLy0bUHuhMZQ314LYRNYDDOAddVzwdQFO3BqHH3ss4g82omtY4C62pF+ia4do+vEf4Of4KvcmPbQxaI1zzLfbCJb2o6/TM/gM7ULad+AlrzQ9wuQ/Tl88aWIh543EL1loFnVCSdxPWsMIjlE0/Y61VcHkddAXWsMIsyjYHa62CvvzJG8Zqb1COomzHYK0lmjUEl3QTp+fq9qG3EZv1glwzJuCa3qIsQP+ZQH8K03m/aqfxAFpzHgfR1NSUrFbrP4crPcxfrBdlAAAAAElFTkSuQmCC"/></Link>
            <MenuBar/>
            <Hello/>

         </React.Fragment>
      )
  }
}

export default Nav;

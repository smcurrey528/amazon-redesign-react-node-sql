import React,  {Component} from 'react';
import './CartSummary.css';

class CartSummary extends Component {
  render() {
     const qty = this.props.cartQty;
    return (
      <h2 className='cartsum'>Current Cart: {qty} items</h2>
      )
  }
}
export default CartSummary;

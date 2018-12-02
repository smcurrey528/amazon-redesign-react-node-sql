import React, { Component } from 'react';
import {
  CartComponent,
  ProductComponent,
  CheckoutButtonComponent,
  cartLocalization,
} from 'react-shopping-cart';
import 'font-awesome/css/font-awesome.min.css';
import Nav from './Nav';
import './ShoppingCart.css';
import {AppProvider, Banner} from '@shopify/polaris';
import Footer from './Footer';

const { getDefaultLocalization } = cartLocalization;


const itemLocalization = {
  color: 'Color',
  Shoes: 'Alminette Pointy Toe Pump',
  red: 'Red',
  black: 'Black',
  blue: 'Royal Blue',
  GBP: '£',
  EUR: '€',
  USD: '$',
};


class ShoppingCart extends Component {

  state = {
    products: {},
    product: {
      name: 'Alminette Pointy Toe Pump',
      id: 'Alminette Pointy Toe Pump',
      path: '/shop/Alminette Pointy Toe Pump/',
      properties: {
        color: ['red', 'black', {
          additionalCost: {
            GBP: 1,
            EUR: 2,
            USD: 90.50,
          },
          value: 'blue',
        }],
      },
      propertiesToShowInCart: ['color'],
      prices: { GBP: 70, EUR: 80, USD: 675 },
      currency: 'USD',
      imageSrc: '1-483x321.jpeg',
    },
    getProductLocalization:
      getDefaultLocalization(
        'product',
        'en',
        {
          ...itemLocalization
        }
      ),
    getCheckoutButtonLocalization:
      getDefaultLocalization(
        'checkoutButton',
        'en',
        itemLocalization,
      ),
    getCartLocalization:
      getDefaultLocalization(
        'cart',
        'en',
        itemLocalization
      )
  };

  addProduct = (key, product, currency) =>
    void this.setState(
      (
        {
          products:
            {
              [key]: cartProduct = { quantity: 0 },
              ...restOfProducts
            }
        }
      ) => ({
        products: {
          ...restOfProducts,
          [key]: {
            ...product,
            quantity:
              product.quantity +
              cartProduct.quantity,
          }
        }
      })
    );

  generateProductKey = (id, properties) =>
    `${id}/${Object.entries(properties).join('_')}`;

  updateProduct = (key, updatedProduct) => void console.log(':)');

  removeProduct = key => void console.log(':C');

  render() {

    const {
      addProduct,
      generateProductKey,
      updateProduct,
      removeProduct,
      state,
    } = this;

    const {
      getProductLocalization,
      getCheckoutButtonLocalization,
      getCartLocalization,
      products,
      product,
    } = state;

    const checkoutButtonElement =
      <CheckoutButtonComponent
        grandTotal={675}
        hidden={false}
        checkoutURL="/checkout"
        currency="USD"
        getLocalization={getCheckoutButtonLocalization}
      />;
    return (
      <div>

      <Nav/>
      <AppProvider>
      <Banner
      className="usps"
  title="USPS has updated their rates"
  action={{content: 'Learn more'}}
  status="info"
  onDismiss={() => {}}
>
  <p>Make sure you know how these changes affect your store.</p>
</Banner>
</AppProvider>
      <div className="addtocart">
       <img className='cartshoe' src='https://n.nordstrommedia.com/id/5f61e17a-f79c-498e-983c-583a94d451da.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&quality=70' />
        <ProductComponent
          {...product}

          onAddProduct={
            addProduct
            // Help product to get into the cart
          }
          generateProductKey={
            generateProductKey
                    // create product key as you wish
          }
          getLocalization={getProductLocalization}
        />


        <CartComponent
          products={
            products
            // Provide your own product's Object(Look at Products)
          }
          onUpdateProduct={
            updateProduct
            // Update something
          }
          getLocalization={
            getCartLocalization
          }
          currency="USD"
          onRemoveProduct={
            removeProduct
            // Remove something
          }
          checkoutButton={
            checkoutButtonElement
          }
          isCartEmpty={
            false
          }
          getLocalization={getCartLocalization}
        />
      </div>
      <Footer/>
      </div>
    );
  }
}

export default ShoppingCart;

//use npm package react-shopping-cart

import React, { Component } from 'react';
import {
  CartComponent,
  ProductComponent,
  CheckoutButtonComponent,
  cartLocalization,
} from 'react-shopping-cart';
import 'font-awesome/css/font-awesome.min.css';

const { getDefaultLocalization } = cartLocalization;


const iPadCaseLocalization = {
  color: 'Color',
  iPadCase: 'iPad case',
  red: 'Red',
  green: 'Green',
  yellow: 'Yellow',
  GBP: '£',
  EUR: '€',
  USD: '$',
};


class ShoppingChart extends Component {

  state = {
    products: {},
    product: {
      name: 'iPadCase',
      id: 'ipad-case',
      path: '/shop/ipad-case/',
      properties: {
        color: ['red', 'green', {
          additionalCost: {
            GBP: 1,
            EUR: 2,
            USD: 3.50,
          },
          value: 'yellow',
        }],
      },
      propertiesToShowInCart: ['color'],
      prices: { GBP: 70, EUR: 80, USD: 90 },
      currency: 'GBP',
      imageSrc: '1-483x321.jpeg',
    },
    getProductLocalization:
      getDefaultLocalization(
        'product',
        'en',
        {
          ...iPadCaseLocalization
        }
      ),
    getCheckoutButtonLocalization:
      getDefaultLocalization(
        'checkoutButton',
        'en',
        iPadCaseLocalization,
      ),
    getCartLocalization:
      getDefaultLocalization(
        'cart',
        'en',
        iPadCaseLocalization
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
        grandTotal={500}
        hidden={false}
        checkoutURL="/to/my/checkout"
        currency="USD"
        getLocalization={getCheckoutButtonLocalization}
      />;
    return (
      <div className="container">
        <ProductComponent
          {...product}
          checkoutButton={checkoutButtonElement}
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
          currency="GBP"
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
    );
  }
}

export default ShoppingChart;

//use npm package react-shopping-cart
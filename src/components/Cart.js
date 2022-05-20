import React from 'react';
import withContext from '../withContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { Figure } from 'react-bootstrap';
import headerCart from '../images/header-cart.png';
import ProductsCarousel from './ProductsCarousel';

const Cart = (props) => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});

  return (
    <>
      <div
        className="columns is-centered"
        style={{ width: '60%', height: '250px', margin: 'auto' }}
      >
        <Figure.Image
          width="100%"
          max-height="100px"
          src={headerCart}
          alt="product-header"
        />
      </div>
      <ProductsCarousel />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline is-size-4">
            {cartKeys.map((key) => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning is-size-4 "
                >
                  Clear cart
                </button>{' '}
                <Link to="/checkout">
                  <button className="button is-success is-size-4">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light is-size-4">
              No item in cart!
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default withContext(Cart);

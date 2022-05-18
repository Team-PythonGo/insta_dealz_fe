import React from "react";
import withContext from "../withContext";
import CartItem from "./CartItem";
import {Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import ad from '../images/ad-1.png';
import adTwo from '../images/ad-2.png';
import adThree from '../images/ad-3.png';
import headerCart from '../images/header-cart.png';


const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});


  return (
    <>
      <Figure.Image width="100%"
        max-height="50%"
        src={headerCart}
        alt="product-header"
      />

      <div className="columns is-centered">
    <div className="column ">
    <Carousel>
  <Carousel.Item>
  <Figure.Image width="100%"
        height={200}
        src={ad}
        alt="games-sale"
      />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Figure.Image width="100%"
        height={200}
        src={adTwo}
        alt="produce-sale"
      />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Figure.Image width="100%"
        height={200}
        src={adThree}
        alt="brandonImage"
      />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>

      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline is-size-4">
            {cartKeys.map(key => (
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
                </button>{" "}
                <Link to="/checkout">
                <button
                  className="button is-success is-size-4"
                >
                  Checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light is-size-4">No item in cart!</div>
          </div>
        )}
      </div>
      
    </>
  );
};

export default withContext(Cart);
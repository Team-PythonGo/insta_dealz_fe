import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";
import { Carousel } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import ad from '../images/ad-1.png';
import adTwo from '../images/ad-2.png';
import adThree from '../images/ad-3.png';
import headerProduct from '../images/header-products.png';

const ProductList = props => {
  const { products } = props.context;

  return (
    <>
      <div className="columns is-centered">
        <Figure.Image width="1300px"
        max-height="30%"
        src={headerProduct}
        alt="product-header"
      />
      </div>
      
      <div className="columns is-centered">

    <Carousel>
  <Carousel.Item>
  <Figure.Image width="1300px"
        height={200}
        src={ad}
        alt="games-sale"
      />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Figure.Image width="1300px"
        height={200}
        src={adTwo}
        alt="produce-sale"
      />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Figure.Image width="1300px"
        height={200}
        src={adThree}
        alt="brandonImage"
      />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


      <div className="container ">
        <div className="column columns is-multiline is=half has-text-left">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
                handleSelctedProduct={props.context.handleSelctedProduct}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);

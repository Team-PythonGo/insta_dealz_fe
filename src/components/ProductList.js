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
      
        <Figure.Image width="100%"
        max-height="30%"
        src={headerProduct}
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
        <div className="column columns is-multiline  has-text-left">
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

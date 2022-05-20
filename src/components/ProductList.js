import React from 'react';
import ProductItem from './ProductItem';
import withContext from '../withContext';
import { Figure } from 'react-bootstrap';
import headerProduct from '../images/header-products.png';
import ProductsCarousel from './ProductsCarousel';

const ProductList = (props) => {
  const { products } = props.context;

  return (
    <>
      <div
        className="columns is-centered"
        style={{ width: '60%', height: '250px', margin: 'auto' }}
      >
        <Figure.Image
          width="100%"
          max-height="100px"
          src={headerProduct}
          alt="product-header"
        />
      </div>
      <ProductsCarousel />
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
              <span className="title has-text-grey-light">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);

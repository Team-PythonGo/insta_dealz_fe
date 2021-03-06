import React from 'react';
import withContext from '../withContext';
import { Figure } from 'react-bootstrap';
import '../CSS/ProductDetail.css';
import { Link } from 'react-router-dom';
import ProductsCarousel from './ProductsCarousel';

const ProductDetail = (props) => {
  const product = props.context.selectedProduct;
  return (
    <>
      <ProductsCarousel />
      <div className="detail" style={{ width: '60%', margin: 'auto' }}>
        <div className="box is-size-4">
          <div className="media is-size-6 ">
            <div className="media-left">
              <Figure className="image" src={product.image}>
                <img
                  src={product.image}
                  alt={product.name}
                  width="40%"
                  height="300px"
                />
              </Figure>
              <Link to="/products">
                <button className="button is-small is-outlined is-primary is-size-6">
                  Back
                </button>
              </Link>
            </div>
            <div className="media-content has-text-justified">
              <div>
                {' '}
                <b>{product.name}</b>
              </div>
              <div>
                {' '}
                <b>Price:</b> ${product.price}
              </div>
              <br></br>
              <div>{product.description}</div>
              <br></br>
              <div>{product.details}</div>
            </div>
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                onClick={() =>
                  props.context.addToCart({
                    id: product.name,
                    product,
                    amount: 1,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withContext(ProductDetail);

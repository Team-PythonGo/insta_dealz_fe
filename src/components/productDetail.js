import React from 'react';
import withContext from '../withContext';

const ProductDetail = (props) => {
  const product = props.context.selectedProduct;
  return (
    <div>
      <figure className="image is-64x64">
        <img src={product.image} alt={product.name} />
      </figure>
      <div>{product.price}</div>
      <div>{product.description}</div>
      <div>{product.details}</div>
    </div>
  );
};

export default withContext(ProductDetail);

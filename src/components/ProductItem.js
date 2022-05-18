import React from 'react';
import { useHistory } from 'react-router-dom';
import withContext from '../withContext';
import '../CSS/ProductItem.css';
import { Figure } from 'react-bootstrap';

const ProductItem = (props) => {
  const { product } = props;
  const history = useHistory();

  function handlePath() {
    history.push(`/products/${product.id}`);
    props.context.handleSelectedProduct(product);
  }
  return (
    <div className=" column is-half is-size-6">
      <div className="box">
        <div className="media" >
          <div className="media-left" >
            <Figure
              className="image"
              onClick={() => {
                handlePath();
              }}
            >
              <img src={product.image} alt={product.name}  />
            </Figure>
          </div>
          <div className="media-content is-size-6">
            <b className="is-size-4" style={{ textTransform: 'capitalize' }}>
              {product.name}{' '}&nbsp;
              <span className="tag is-primary ">${product.price}</span>
            </b>
            
            <div className="is-size-6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{product.description}</div>
            {product.stock > 0 ? (
              <small>{product.stock + ' Available'}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-size-6 is-primary   is-pulled-right"
                onClick={() =>
                  props.addToCart({
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
    </div>
  );
};

export default withContext(ProductItem);

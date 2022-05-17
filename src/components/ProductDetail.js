import React from 'react';
import withContext from '../withContext';
const ProductDetail = (props) => {
  const product = props.context.selectedProduct;
  return (
    <div className='detail'>
      <div className=" column is-half">
        <div className="box">
          <div className="media">
            <div className="media-left">
              <figure
                className="image is-500x500"
              >
                <img src={product.image} alt={product.name} />
              </figure>
            </div>
            <div className="media-content">
              <div> Price: ${product.price}</div>
              <div>{product.description}</div>
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
    </div>
  );
};




export default withContext(ProductDetail);

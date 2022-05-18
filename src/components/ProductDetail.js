import React from 'react';
import withContext from '../withContext';
import { Card, Button } from 'react-bootstrap';

// const ProductDetail = (props) => {
//   const product = props.context.selectedProduct;
//   return (
//     <Card style={{ width: '18rem' }} className="App">
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// };

const ProductDetail = (props) => {
  const product = props.context.selectedProduct;
  return (
    <div className="App" style={{ margin: 'auto', width: '60%' }}>
      {/* <div className=" column is-half"> */}
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-500x500">
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
      {/* </div> */}
    </div>
  );
};

export default withContext(ProductDetail);

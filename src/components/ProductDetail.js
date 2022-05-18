import React from 'react';
import withContext from '../withContext';
import {Figure} from 'react-bootstrap';
import '../CSS/ProductDetail.css';
import { Carousel } from 'react-bootstrap';
import ad from '../images/ad-1.png';
import adTwo from '../images/ad-2.png';
import adThree from '../images/ad-3.png';
import { Link } from 'react-router-dom';


const ProductDetail = (props) => {
  const product = props.context.selectedProduct;
  return (
    <>
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
    <div className='detail'>
      
      


      <div className=" column is-three-quarters ">
        <div className="box is-size-4">
          <div className="media is-size-6 ">
            <div className="media-left">
              <Figure
                className="image"
                src={product.image}
              >
                <img src={product.image} alt={product.name} width="40%"height="300px"/>
              </Figure>
              <Link to="/products">
                <button
                  className="button is-small is-outlined is-primary is-size-6"
                >
                  Back
                </button>
                </Link> 
            </div>
            <div className="media-content has-text-justified">
              <div> <b>{product.name}</b></div>
              <div> <b>Price:</b> ${product.price}</div>
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
    </div>
    </>
  );
};




export default withContext(ProductDetail);

import { Carousel } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import ad from '../images/ad-1.png';
import adTwo from '../images/ad-2.png';
import adThree from '../images/ad-3.png';

const ProductsCarousel = (props) => {
  return (
    <div
      className="columns is-centered"
      style={{ width: '61%', margin: 'auto' }}
    >
      <div className="column ">
        <Carousel>
          <Carousel.Item>
            <Figure.Image width="100%" height={200} src={ad} alt="games-sale" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Figure.Image
              width="100%"
              height={200}
              src={adTwo}
              alt="produce-sale"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Figure.Image
              width="100%"
              height={200}
              src={adThree}
              alt="brandonImage"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductsCarousel;

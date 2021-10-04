import { Carousel, } from 'react-bootstrap';
import firstSlide from '../../src/images/SK-A-91.jpg';
import secondSlide from '../../src/images/SK-A-358.jpg';
import thirdSlide from '../../src/images/SK-A-1595.jpg';



function Home() {
  return (
    <>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-50 h-50"
            src={firstSlide}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-50 h-50"
            src={secondSlide}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-50  h-50"
            src={thirdSlide}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    </>
  );
}

export default Home;
import { Carousel } from 'react-bootstrap';
import firstSlide from '../../src/images/SK-A-91.jpg';
import secondSlide from '../../src/images/SK-A-358.jpg';
import thirdSlide from '../../src/images/SK-A-1595.jpg';



function Home() {
  return (
    <>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={firstSlide}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={secondSlide}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={thirdSlide}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

    </>
  );
}

export default Home;
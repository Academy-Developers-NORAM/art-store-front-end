import { Carousel, } from 'react-bootstrap';

function Home() {
  return (
    <>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-50 h-50"
            src='images/SK-A-91.jpg'
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-50 h-50"
            src='/images/SK-A-358.jpg'
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-50  h-50"
            src='/images/SK-A-1595.jpg'
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    </>
  );
}

export default Home;
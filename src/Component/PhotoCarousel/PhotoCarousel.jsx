import Carousel from 'react-bootstrap/Carousel';
import Image1 from './image/image1.jpg';
import Image2 from './image/image2.jpg';
import Image3 from './image/image3.jpg';
import './PhotoCarousel.css';

function PhotoCarousel(){
    return(
        <Carousel>
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                src={Image1}
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                src={Image2}
                alt="Second slide"
            />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>
    );
}
 
export default PhotoCarousel;
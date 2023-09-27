import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="carousel-images"
          src="images/1.jpg"
          alt="First Slide"
          style={{ height: "300px", objectFit: "cover", width: "100%" }}
        ></img>
        <Carousel.Caption>
          <LinkContainer to="/product-details" style={cursorP}>
            <h3>First slide label</h3>
          </LinkContainer>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="carousel-images"
          src="images/carousel/4.jpg"
          alt="Second Slide"
          style={{ height: "300px", objectFit: "cover" }}
        ></img>
        <Carousel.Caption>
          <LinkContainer to="/product-details" style={cursorP}>
            <h3>Second slide label</h3>
          </LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="carousel-images"
          src="images/carousel/6.jpg"
          alt="Third Slide"
          style={{ height: "300px", objectFit: "cover" }}
        ></img>
        <Carousel.Caption>
          <LinkContainer to="/product-details" style={cursorP}>
            <h3>Third slide label</h3>
          </LinkContainer>

          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;

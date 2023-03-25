import Carousel from "react-bootstrap/Carousel";
import "./style.css";

export default function PinnedRepoCarousel() {
  return (
    <Carousel variant="dark" id="carousel">
      <Carousel.Item interval={3000} className="carousel-slide">
        <div className="half-slide"><h1>Stared Repo Here!</h1></div>
        <div className="half-slide"><h1>Stared Repo Here!</h1></div>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="carousel-slide">
        <div className="half-slide"><h1>Stared Repo Here!</h1></div>
        <div className="half-slide"><h1>Stared Repo Here!</h1></div>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="carousel-slide">
        <div className="half-slide"><h1>Stared Repo Here!</h1></div>
        <div className="half-slide"><h1>Stared Repo Here!</h1></div>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
  </Carousel.Item> 
    </Carousel>
  );
}
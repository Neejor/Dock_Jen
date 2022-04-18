import { Carousel, CarouselItem } from "react-bootstrap";
import { useState } from "react";

const CarouselD = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="CarSection" id="Carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqy6JBLW9CZbUTum69KDj9bzwYlPlp8tIug&usqp=CAU"
            alt="First slide"
          />
          <div className="CarouselCap">
            <p>Testimony</p>
            <h3>Happy Customer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div>
              <p>
                Web Developer <span>Cognizer</span>
              </p>
            </div>
          </div>

          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqy6JBLW9CZbUTum69KDj9bzwYlPlp8tIug&usqp=CAU"
            alt="Second slide"
          />

          <div className="CarouselCap">
            <p>Testimony</p>
            <h3>Happy Customer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div>
              <p>
                App Developer <span>Cognizer</span>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqy6JBLW9CZbUTum69KDj9bzwYlPlp8tIug&usqp=CAU"
            alt="Third slide"
          />

          <div className="CarouselCap">
            <p>Testimony</p>
            <h3>Happy Customer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div>
              <p>
                Web Designer <span>Cognizer</span>
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default CarouselD;

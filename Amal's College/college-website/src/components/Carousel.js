import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

const Carousel = () => {
  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item>
        <img className="d-block w-100" src="/SVGIMG2.png" alt="First slide" />
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img className="d-block w-100" src="/SVGIMG3.png" alt="Second slide" />
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img className="d-block w-100" src="/SVGIMG1.png" alt="Third slide" />
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};

export default Carousel;

import React from 'react';
import '../../assets/styles/DescriptionStyles/MainDescriptionImages.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { data } from '../../assets/Mockup/data';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MainDescriptionImages = () => {
  return (
    <div className="main__description__images">
      <div className="images__carousel">
        <Carousel
          responsive={responsive}
          infinite={true}
          className="owl-carousel owl-theme skill-slider"
        >
          {
            data.map(item => item.url)
              .map((image, index) =>
              <div
                  key={index}>
                <img src={image} alt={image} />
              </div>
            )
          }
        </Carousel>
      </div>
    </div>
  );
};

export default MainDescriptionImages;

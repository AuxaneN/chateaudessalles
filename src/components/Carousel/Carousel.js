import React, {useState} from 'react'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import styled from 'styled-components';

const CarouselWrapper = styled(Carousel)`
  button.BrainhubCarousel__arrows.BrainhubCarousel__arrowRight{
    background-color:#77686830;
    position:absolute;
    right:0;
  }
  button.BrainhubCarousel__arrows.BrainhubCarousel__arrowLeft{
    background-color:#77686830;
    position:absolute;
    left:0;
    z-index:99;
  }
`
const SlideShow = ({images, thumbnails})=> {
  const [value, setValue] = useState(0);
  const onChange = value => {
  setValue(value);
  }
  return (
    <div>
      <CarouselWrapper
        value={value}
        onChange={onChange}
        plugins={[
          {
            resolve: slidesToShowPlugin,
            options: {
             numberOfSlides: 1
            }
          },
        ]}
        arrows
        centered
      >
       {images}
      </CarouselWrapper>
      <Dots
        value={value}
        onChange={onChange}
        thumbnails={thumbnails}
      />
    </div>
  );
}

export default SlideShow;
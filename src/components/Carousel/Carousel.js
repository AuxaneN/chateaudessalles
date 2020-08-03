import React, {useState} from 'react'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const WACarousel = ({images, thumbnails})=> {
  const [value, setValue] = useState(0);

  const onChange = value => {
  setValue(value);
  }

  return (
    <div>
      <Carousel
        value={value}
        onChange={onChange}
        plugins={[
          {
            resolve: slidesToShowPlugin,
            options: {
             numberOfSlides: 1
            }
          },
          'arrows',
        ]}
      >
      {images}
      </Carousel>
      <Dots
        value={this.state.value}
        onChange={this.onChange}
        thumbnails={thumbnails}
      />
    </div>
  );

}

export default WACarousel;
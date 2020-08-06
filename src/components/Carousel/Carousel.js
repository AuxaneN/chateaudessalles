import React, {useState} from 'react'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import styled from 'styled-components';

const CarouselWrapper = styled(Carousel)`

  width:100vw;
  height:auto;
  
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
const ArrowLeft = styled.div`
  content:' ';
  display:block;

  min-height:20px;
  min-width:20px;
  height:20px;
  width:20px;

  transform: rotate(45deg);
  top:calc(800px + (100px - 20px));
  position:absolute;
  z-index:98;

  cursor:pointer;
  border-bottom:4px white solid;
  border-left:4px white solid;

  right:calc(1000px - 40px);

  z-index:99;

  @media screen AND (max-width:900px){
  right:calc(900px - 40px);
  border:10px red solid;
  }
  @media screen AND (max-width:600px){
  right:calc(600px - 40px);
  }
  @media screen AND (max-width:400px){
  right:calc(400px - 40px);
  }


`
const ArrowRight = styled.div`
  content:' ';
  display:block;

  min-height:20px;
  min-width:20px;
  height:20px;
  width:20px;

  transform: rotate(45deg);
  top:calc(1000px + (100px - 20px));
  position:absolute;
  z-index:98;

  cursor:pointer;

  background:none;

  border-top:4px white solid;
  border-right:4px white solid;

  left:calc(1000px - 40px);
`
const DotWrapper = styled(Dots)`
max-width:1000px;
width:100vw;
overflow-x:scroll;
scrollbar-width:none;
scroll-behavior:smooth;
position:relative;
justify-content:flex-start;
`

var getNextSibling = function (elem, selector) {

	// Get the next sibling element
	var sibling = elem.nextElementSibling;

	// If the sibling matches our selector, use it
	// If not, jump to the next sibling and continue the loop
	while (sibling) {
		if (sibling.matches(selector)) return sibling;
		sibling = sibling.nextElementSibling
	}

};

const scrollLeft = (el)=>{
  let thumbnails = getNextSibling(el.target, '.BrainhubCarousel__dots');
  thumbnails.scrollLeft -= 300;
}

const scrollRight = (el)=>{
  let thumbnails = getNextSibling(el.target, '.BrainhubCarousel__dots');
  thumbnails.scrollLeft += 300;
}


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
        itemWidth={1940}
        offset={0}

        breakpoints={{
          900:{
            itemWidth:820,
          },
          600:{
            itemWidth:400,
          },
          400:{
            itemWidth:300,
            arrows:false
          },
          300:{
            itemWidth:300,
            arrows:false
          }
        }}
      >
       {images}
      </CarouselWrapper>
      <ArrowLeft onClick={scrollLeft}/>
      <ArrowRight onClick={scrollRight}/>
      <DotWrapper
        value={value}
        onChange={onChange}
        thumbnails={thumbnails}
      />
    </div>
  );
}

export default SlideShow;
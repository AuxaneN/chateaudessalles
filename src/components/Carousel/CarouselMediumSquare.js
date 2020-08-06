import React, {useState} from 'react'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import styled from 'styled-components';

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

  left:20px;

  z-index:99;

  @media screen AND (max-width:700px){
    display:none;
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
  top:calc(800px + (100px - 20px));
  position:absolute;
  z-index:98;

  cursor:pointer;

  background:none;

  border-top:4px white solid;
  border-right:4px white solid;

  right:20px;


  @media screen AND (max-width:700px){
    display:none;
  }
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
const CarouselWrapper = styled(Carousel)`
  position: relative;
  max-width:1000px;
  width:100vw;
  max-height:800px;
  height:auto;
  margin:auto;
  
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
    <div style={{position:'relative'}}>
      <CarouselWrapper
        value={value}
        onChange={onChange}
        plugins={[
          'centered',
          {
            resolve: slidesToShowPlugin,
            options: {
             numberOfSlides: 1
            }
          },
        ]}
        arrows
        centered
        itemWidth={1100}
        offset={45}
 

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
import React from 'react'

import styled from 'styled-components'
import colors from '../colors'

const TextAndImageWrapper = styled.div`
display:flex;
flex-direction: ${props => props.reversed ? 'reverse-row' : 'row'};
justify-content:space-between;
align-items: flex-end;

position:relative;

height:max-content;
width:100vw;

margin:40px auto;
  .text{ 
    position:absolute;
    right:15vw;
    bottom:50px;

    width:45vw;
    padding:40px;
    background-color:#eee7ddd4;

    z-index: 99;
  }
  .image{ 
    max-width: 50vw;
    height:auto;
    width:700px;

    flex: 1 0 60%;
  }

  @media screen AND (max-width:700px){
    .text{
      order:2;
    }
    .image{
      order:1;
    }
  }

`
const TextAndImage = ({text, image, reversed}) => (
  <TextAndImageWrapper>
    <div className="text">
      {text}
    </div>
    <div className="image">
      {image}
    </div>

  </TextAndImageWrapper>

)

export default TextAndImage
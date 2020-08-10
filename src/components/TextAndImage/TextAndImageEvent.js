import React from 'react'

import styled from 'styled-components'
import colors from '../colors'

const TextAndImageWrapper = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
justify-content:space-around;
align-items: stretch;
position:relative;

height:auto;
width:70vw;
max-width:100vw;
margin:40px auto;
  .text{ 
    position: relative;
    width:calc(50% - 10px);
    max-width:100vw;
    flex: 0 0 calc(45% - 10px);;

    color: ${colors.olive};
    text-align:justify;
    z-index: 99;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:${props => props.reversed ? `flex-start` : `flex-end`};

    ${props => props.reversed ? `border-left: 1px ${colors.olive} solid;` : `border-right: 1px ${colors.olive} solid;`}
    .options{
      align-self:stretch;
      flex:1;
      width:100%;
      text-align:center;
      h3{
        text-transform:uppercase;
      }
      p{
        padding:10px;
        text-align:left;
        font-size:24px;
      }
    }
    .tarifs{
      text-align:right;
      display:flex;
      flex-direction:row;
      align-items:flex-end;
      justify-content:${props => props.reversed ? `space-between` : `flex-end`};;
      
      width:100%;
     
      .tarif{
        width:200px;
        padding:10px;
        flex:0 0 40%;

        background:${colors.beige};

        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        p{
          flex:0 0 50%;
          margin:0px;
        }
      }

      .tarif2{
        position:relative;
        ::before{
          content:' ';
          display:block;
          height:140%;
          min-width:1px;
          background:${colors.olive};
          z-index:99;

          position:absolute;
          bottom:0px;
          left:0px;
        }
      }
    }
  }
  .image{ 
    max-width: 50vw;
    height:auto;
    max-height:450px;
    overflow-y:hidden;
    width:calc(50% - 10px);

    flex: 0 0 calc(45% - 10px);;
  }

  @media screen AND (max-width:800px){
    .text{ 
      position:inherit;
      order:2;
      left:0;
      right:0;
      flex: 0 0 100%;
    }
    .image{
      max-width:100%;
      flex: 1 0 100%;
      order:1;
    }
  }
`
const TextAndImageEvent = (props) => (
  <TextAndImageWrapper reversed={props.reversed}>
    <div className="text">
      <div className="options">
        {props.options}
      </div>
      <div className="tarifs">
        <div className="tarif"><p>{props.name1}</p><p>{props.tarif1}€<br/>TTC</p></div>
        {
          props.tarif2 ? 
          <div className="tarif tarif2" style={{marginLeft:'1.5rem'}}><p>{props.name2}</p><p>{props.tarif2}€<br/>TTC</p></div> : ''
        }
      </div>
    </div>
    <div className="image">
      {props.image}
    </div>
  </TextAndImageWrapper>

)

export default TextAndImageEvent
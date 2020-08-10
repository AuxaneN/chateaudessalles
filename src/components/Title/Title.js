import React from 'react'
import styled from 'styled-components'
import colors from '../colors';
import BranchL from '../../images/CDS_BrancheL.png';
import BranchR from '../../images/CDS_BrancheR.png';

const TitleWrapper = styled.div`
max-width:100vw;
width:100%;
height: 100px;
margin:40px auto;

background-color: ${colors.beige};
color: ${colors.olive};

display:flex;
flex-direction:row;
justify-content:center;
align-items:center;


  img{
    width:60px;
    height:auto;
    vertical-align:baseline;
  }
  h1, img{margin:0px;}
  
`

const Title = ({title, id}) => (
  <TitleWrapper id={id}>
    <img src={BranchL} alt="logo gauche"/>
    <h1>{title}</h1>
    <img src={BranchR} alt="logo droite"/>
  </TitleWrapper>
)

export default Title
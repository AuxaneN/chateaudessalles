import React from 'react'
import styled from 'styled-components'
import colors from '../colors';

const SubTitleWrapper = styled.div`

width:max-content;
height: 60px;
margin:40px 0px;

background-color: ${colors.beige};
color: ${colors.olive};

display:flex;
flex-direction:row;
justify-content:center;
align-items:center;

h1{
  margin:0px;
  margin-left:calc(100vw - 1600px);
  padding:20px;
}
`

const Title = ({title}) => (
  <SubTitleWrapper>
    <h1>{title}</h1>
  </SubTitleWrapper>
)

export default Title
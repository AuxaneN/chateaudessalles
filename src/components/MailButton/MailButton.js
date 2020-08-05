import React from 'react'
import styled from 'styled-components';
import colors from '../colors'


const MailButtonWrapper = styled.button`
display:block;

width:max-content;
margin-right:10vw;
margin-left:auto;
padding:20px;

border:none;
background-color:${colors.olive};

color:white;
font-size:24px;

cursor:pointer;
transition:0.5s;

:hover{
  transition:0.5s;
  background-color:${colors.beige};
  color:${colors.olive};
}
`
const MailButton = () => (
  <a href="mailto:chateaudessalles@gmail.com" style={{textDecoration:'none'}}>
    <MailButtonWrapper type="button">
      chateaudessalles@gmail.com
    </MailButtonWrapper>
  </a>

)

export default MailButton;
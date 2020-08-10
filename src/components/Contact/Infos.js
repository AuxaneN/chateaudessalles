import React from 'react'
import styled from 'styled-components'

import {SocialIcon} from 'react-social-icons'
import colors from '../colors'
// import SubTitle from '../Title/SubTitle'


const InfoWrapper = styled.div`
 width:100%;
 max-width:100vw;


 display:flex;
 flex-direction:row;
 justify-content: flex-start;
 margin:40px 0px;

 h1{
   background-color:${colors.beige};
   color:${colors.olive};
   padding:20px;
   align-self:stretch;
 }
 .item p{
   padding:20px;
   color:${colors.olive};
 }
 .item:last-child > *:not(h1){
  margin-left:20px;
 }
  > *{
    flex: 0 1 25%;
 }
 @media screen AND (max-width:600px){
  flex-direction:column;
  > *{
    flex: 1 1 25%;
 }
 }
`

const Infos = () => (
  <InfoWrapper>
  <div className="item">
    <h1>NOUS RENDRE VISITE</h1>
    <p>Château des Salles<br/>
      1350 avenue de Montferrat<br/>
      83300 Draguignan
    </p>
  </div>
  <div className="item">
    <h1>NOUS CONTACTER</h1>
    <p>Julia : +33 6 76 91 37 19<br/>
      Baptiste : +33 6 52 68 87 05</p>
    <p>
      chateaudessalles@gmail.com
    </p>
  </div>
  <div className="item">
    <h1>NOUS SUIVRE</h1>
    <SocialIcon url="https://facebook.com" 
          fgColor={colors.olive} 
          bgColor="transparent" 
          style={{border:`2px solid ${colors.olive}`, borderRadius:'100%', height:'30px', width:'30px'}} /> 
    <SocialIcon url="https://instagram.com"
          fgColor={colors.olive} 
          bgColor="transparent" 
          style={{border:`2px solid ${colors.olive}`, borderRadius:'100%', height:'30px', width:'30px'}}/>
  </div>


  </InfoWrapper>
)

export default Infos
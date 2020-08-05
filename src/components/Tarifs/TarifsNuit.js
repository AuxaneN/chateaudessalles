import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const TarifsWrapper = styled.div`
  background-color:${colors.beige};
  padding: 20px; 
  margin-bottom:20px;
  width:max-content;
  p {
    font-weight:600;
    margin:0px;
  text-transform:uppercase;
  }
  .prix{
    font-size: 30px;
  }
`

const TarifsNuit = ({prix}) => (
  <TarifsWrapper>
    <p>Tarifs pour une nuit :<br/> - pour une personne : <span className="prix">{prix}</span> </p>
 
  </TarifsWrapper>
)

export default TarifsNuit
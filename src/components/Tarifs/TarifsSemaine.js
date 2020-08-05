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

const TarifsSemaine = ({prix, prix2}) => (
  <TarifsWrapper>
    <p>Tarifs :<br/> - pour une semaine : <span className="prix">{prix}</span> <br/> - pour une nuit : <span className="prix">{prix2}</span></p>
 
  </TarifsWrapper>
)

export default TarifsSemaine
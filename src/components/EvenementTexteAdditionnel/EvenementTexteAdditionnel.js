import React from 'react'
import colors from '../colors'

const EvenementTexteAdditionnel = ({texte}) => (
  <div style={{maxWidth:'70vw', margin:'auto', color:`${colors.olive}`, fontSize:'24px', fontWeight:'bolder'}}>
    {texte}
  </div>
)

export default EvenementTexteAdditionnel;
import React from 'react'
import styled from 'styled-components'

import colors from '../colors'

import Contact0 from '../images/Contact/Contact0';
import Contact1 from '../images/Contact/Contact1';
import Contact2 from '../images/Contact/Contact2';


const HotesWrapper = styled.div`
max-width:100vw;
width: 90vw;
margin:20px auto;
display:flex;
flex-direction:row;
justify-content:space-around;
height:300px;
color:${colors.olive};
>*{
  flex:1 1 20%;
  margin:10px;
}
> *:nth-child(3){
  flex:1 2 15%;
}

@media screen AND (max-width:800px){
  height:auto;
  flex-direction:column;
  > *{
    flex: 1 1 20%;
    height:100%;
  }
}
`

const Hotes = () => (
<HotesWrapper>
  <p>
  Baptiste Rhodius, fils de Marie-
  Véronique Cantilhion de Lacouture et
  Christophe Rhodius, exploite les terres
  du domaine en y cultivant des légumes et
  fruits biologiques, ainsi que de la vigne.
  En parallèle de cette activité, depuis
  2019, sa femme Julia et lui ont ouvert
  des chambres d’hôtes dans la bastide.
  La propriété est dans la famille depuis
  toujours, soit le XVIIe, siècle de la
  construction du Château.
  </p>
  <Contact0 />
  <Contact1 />
  <Contact2 />
</HotesWrapper>
)

export default Hotes
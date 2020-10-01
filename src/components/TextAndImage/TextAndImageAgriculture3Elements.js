import React from "react"

import TextAndImageAgriculture from "./TextAndImageAgriculture"
import styled from "styled-components"
import colors from "../colors"

const ElWrapper = styled.div`
  max-width: 100vw;
  width: 100%;

  display: flex;
  flex-direction: row;

  @media screen AND (max-width: 1000px) {
    flex-direction: column;
    span {
      display: none;
    }
  }
`

const TextAndImageAgriculture3Elements = props => (
  <ElWrapper>
    <TextAndImageAgriculture
      title={props.title}
      texte={props.texte}
      image={props.image}
      barre
      reversed
      style={{ flexWrap: "nowrap" }}
    />
    <TextAndImageAgriculture
      title={props.title2}
      texte={props.texte2}
      image={props.image2}
    />
  </ElWrapper>
)

export default TextAndImageAgriculture3Elements

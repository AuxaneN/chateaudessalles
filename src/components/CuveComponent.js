import React from "react"
import styled from "styled-components"
import colors from "./colors"
import Event3 from "./images/Evenements/Event3"
import EvenementTexteAdditionnel from "./EvenementTexteAdditionnel/EvenementTexteAdditionnel"
import CarouselCuve from "./Carousel/CarouselCuve"
const CuveWrapper = styled.div`
  width: 70vw;
  margin: 40px auto;
  border-left: 1px ${colors.olive} solid;
  .gatsby-image-wrapper {
    margin: 20px;
  }
  .tarif {
    margin-top: 20px;
    width: 200px;
    padding: 20px;
    flex: 0 0 40%;

    background: ${colors.beige};
    text-align: right;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    p {
      flex: 0 0 50%;
      margin: 0px;

      font-size: 24px;
      font-weight: bolder;
      color: ${colors.olive};
    }
  }
`

const CuveComponent = () => (
  <>
    <CuveWrapper>
      <CarouselCuve />
      <div className="tarif">
        <p>
          450€
          <br />
          TTC
        </p>
      </div>
    </CuveWrapper>

    <EvenementTexteAdditionnel
      texte={
        <p>
          - Le mobilier (tables et chaises) sont inclus dans la location <br />-
          Nombre maximum d’invités : 50 personnes
        </p>
      }
    />
  </>
)

export default CuveComponent

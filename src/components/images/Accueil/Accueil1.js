import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import colors from '../../colors';
import styled from 'styled-components';


const AccueilHero = styled(BackgroundImage)`
  max-width: 100vw;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
  min-height:600px;
  height:600px;
`

const Accueil1 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Accueil/accueil1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
  `)

  return <AccueilHero 
  Tag="section"
  className="hero"
  fluid={data.placeholderImage.childImageSharp.fluid}
  backgroundColor={colors.olive}
  />

}


export default Accueil1

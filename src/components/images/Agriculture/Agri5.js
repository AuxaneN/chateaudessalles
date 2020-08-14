import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const style = {
  overflow:'initial',
  height:'450px',
}
const Agri5 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Agriculture/agriculture_5.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth:700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img 
  fluid={data.placeholderImage.childImageSharp.fluid} 
  alt="Une poule fixe la caméra. Au fond se distinguent 3 autres poules."
  style={{overflow:'initial'}}
  imgStyle={style}
  />
}

export default Agri5

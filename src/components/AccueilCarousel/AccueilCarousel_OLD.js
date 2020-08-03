import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Carousel from '../Carousel/Carousel'

const thumbnail = graphql`
    fragment thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
const carouselImage = graphql`
  fragment carouselImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
const queryThumbnails = graphql`
  query{
    image0Thumbnail: file(relativePath: { eq: "Accueil/carrousel/carrousel_accueil0.jpg" }) {
        ...thumbnail
      }
    image1Thumbnail: file(relativePath: { eq: "Accueil/carrousel/carrousel_accueil1.jpg" }) {
        ...thumbnail
      }
    image2Thumbnail: file(relativePath: { eq: "Accueil/carrousel/carrousel_accueil2.jpg" }) {
        ...thumbnail
      }
    image3Thumbnail: file(relativePath: { eq: "Accueil/carrousel/carrousel_accueil3.jpg" }) {
        ...thumbnail
      }
  }
`
const queryCarouselImage = graphql`
  query{
    image0carouselImage: file(relativePath: { eq: "Accueil/carrousel/carrousel_accueil0.jpg" }) {
        ...carouselImage
      }
    image1carouselImage: file(relativePath: { eq: "Accueil/carrousel/carrousel_accueil1.jpg" }) {
        ...carouselImage
      }
    image2carouselImage: file(relativePath: { eq: "Accueil/carrousel/carrousel_accueil2.jpg" }) {
        ...carouselImage
      }
    image3carouselImage: file(relativePath: { eq: "Accueil/carrousel/carrousel_accueil3.jpg" }) {
        ...carouselImage
      }
  }
`

export const image0 = ({data}) => { return <Img fluid={data.image0carouselImage.childImageSharp.fluid} /> }
export const image1 = ({data}) => { return <Img fluid={data.image1carouselImage.childImageSharp.fluid} /> }
export const image2 = ({data}) => { return <Img fluid={data.image2carouselImage.childImageSharp.fluid} /> }
export const image3 = ({data}) => { return <Img fluid={data.image3carouselImage.childImageSharp.fluid} /> }
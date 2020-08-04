import React, {useState} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function SlideShow() {
  const [value, setValue] = useState(0);
  const allFile = useStaticQuery(
    graphql`
      query {
        mainImages: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Accueil/carrousel" }
          }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1900) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        thumbnailImages: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Accueil/carrousel" }
          }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      
    `
  )
  const onChange = value => {
  setValue(value);
  }
  return (
    <div>
      <Carousel
        value={value}
        onChange={onChange}
        plugins={[
          {
            resolve: slidesToShowPlugin,
            options: {
             numberOfSlides: 1
            }
          },
        ]}
        arrows
      >
       {allFile.mainImages.edges.map((image, index) => (
            <Img
            style={{maxWidth:'1900px', width:'100vw', height:'auto', maxHeight:'637px'}}
            key={index}
              fluid={image.node.childImageSharp.fluid}
            />
        ))}
      </Carousel>
      <Dots
        value={value}
        onChange={onChange}
        thumbnails={allFile.thumbnailImages.edges.map((image, index) => (
          <Img
          style={{maxWidth:'100px',width:'100px', height:'75px', maxHeight:'100px'}}
          key={index}
            fluid={image.node.childImageSharp.fluid}
          />
      ))}
      />
    </div>
  );

  
}

export default SlideShow;
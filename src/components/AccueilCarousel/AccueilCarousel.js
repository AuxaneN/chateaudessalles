import React, {useState} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function SlideShow() {
  const [value, setValue] = useState(0);
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
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
                fluid(maxWidth: 1200) {
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
          'arrows',
        ]}
      >
       {allFile.edges.map((image, index) => (
            <Img
            style={{maxWidth:'1200px',width:'100vw', height:'auto'}}
            key={index}
              fluid={image.node.childImageSharp.fluid}
            />
        ))}
      </Carousel>
      {/* <Dots
        value={this.state.value}
        onChange={this.onChange}
        thumbnails={thumbnails}
      /> */}
    </div>
  );

  
}

export default SlideShow;
import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import colors from "../colors"

import ResponsiveWrapper from "../ResponsiveWrapper"

const SectionWrapper = styled.div`
  margin: 40px;
  @media screen AND (max-width: 900px) {
    margin: initial;
  }
`

const FeedWrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  /* padding: 20px 0; */
  overflow-x: hidden;
  display: flex;
  flex-direction: row;

  scroll-behavior: smooth;
  img {
    flex: 0 0 300px;
    height: 300px !important;
    width: 300px !important;
    padding: 10px;
    margin-bottom: 0px;
  }
  @media screen AND (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    overflow-y: scroll;
    touch-action: pan-y;
    img {
      height: auto;
    }
  }
`
const ArrowLeft = styled.div`
  content: " ";
  display: block;

  min-height: 20px;
  min-width: 20px;
  height: 20px;
  width: 20px;

  transform: rotate(45deg);
  bottom: 135px;
  position: absolute;
  z-index: 98;

  cursor: pointer;
  border-bottom: 4px white solid;
  border-left: 4px white solid;

  left: 10px;

  z-index: 99;

  @media screen AND (max-width: 700px) {
    display: none;
  }
`
const ArrowRight = styled.div`
  content: " ";
  display: block;

  min-height: 20px;
  min-width: 20px;
  height: 20px;
  width: 20px;

  transform: rotate(45deg);
  bottom: 135px;
  right: 0px;
  position: absolute;
  z-index: 98;

  cursor: pointer;

  background: none;

  border-top: 4px white solid;
  border-right: 4px white solid;

  right: 20px;

  @media screen AND (max-width: 700px) {
    display: none;
  }
`

const InstagramFeed = () => {
  const [images, setImages] = useState([{ url: "", id: 1 }])

  useEffect(() => {
    const getImages = async () => {
      const tokenURL = "https://chateaudessalles-token.herokuapp.com/token.json"
      const res = await axios
        .get(tokenURL)
        .then(response => {
          // console.log(response)
          return response.data
        })
        .catch(error => console.log(error.message))

      // console.log(res)
      await axios
        .get(
          `https://graph.instagram.com/me/media?fields=id,media_url,media_type,caption&access_token=IGQVJWU2NkaEdxclRxci10NmxZAZAmt4QWM5ZAmp0ekN1aEtiLWU2cTZAwSDF1QXBMQkx1ZAHZAxazFrVlJheEFFQzJ1emNFQnNvdWp5bFNTcnB5aFZA4amJvTFZA0U1ZAaUklCM2pGT3pFU0V3`
        )
        .then(res => setImages(res.data.data))
        .catch(error => console.log(error))
    }
    getImages()
  }, [])

  const scrollLeft = el => {
    let instagramFeed = document.querySelector(".instagramfeed")
    instagramFeed.scrollLeft -= 300
  }
  const scrollRight = el => {
    let instagramFeed = document.querySelector(".instagramfeed")
    instagramFeed.scrollLeft += 300
  }
  return (
    <SectionWrapper
      style={{
        position: "relative",
      }}
    >
      <hr
        style={{
          maxWidth: "400px",
          width: "100vw",
          backgroundColor: colors.olive,
          margin: "40px auto",
        }}
      ></hr>
      <ResponsiveWrapper>
        <h1>Suivez-nous</h1>
      </ResponsiveWrapper>
      <ArrowLeft onClick={scrollLeft} />
      <ArrowRight onClick={scrollRight} />
      <FeedWrapper className="instagramfeed">
        {images.map(cur => {
          if (cur.media_type === "IMAGE") {
            return <img src={cur.media_url} key={cur.id} alt={cur.caption} />
          }
        })}
      </FeedWrapper>
    </SectionWrapper>
  )
}

export default InstagramFeed

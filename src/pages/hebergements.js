import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PartiesCommunesCarousel from '../components/Carousel/CarouselXIXPartiesCommunes'
import GrandeChambreCarousel from '../components/Carousel/CarouselXIXGrandeChambre'
import PetiteChambreCarousel from '../components/Carousel/CarouselXIXPetiteChambre'

const SecondPage = () => (
  <Layout>
    <SEO title="Hébergements" />
      <PartiesCommunesCarousel/>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignContent: 'flex-start', width: '100vw' }}>
      <GrandeChambreCarousel/>
      <PetiteChambreCarousel/>
    </div>

  </Layout>
)

export default SecondPage

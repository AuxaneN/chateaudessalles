import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PartiesCommunesCarousel from '../components/Carousel/CarouselXIXPartiesCommunes'
import GrandeChambreCarousel from '../components/Carousel/CarouselXIXGrandeChambre'
import PetiteChambreCarousel from '../components/Carousel/CarouselXIXPetiteChambre'
import Title from "../components/Title/Title"
import SubTitle from "../components/Title/SubTitle"

const SecondPage = () => (
  <Layout>
    <SEO title="Hébergements" />
    <Title title="LES CHAMBRES D’HÔTE" />
    <SubTitle title="Période XIXe siècle"/>
    <div className="XIX">
        <PartiesCommunesCarousel/>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignContent: 'flex-start', width: '100vw' }}>
        <GrandeChambreCarousel/>
        <PetiteChambreCarousel/>
      </div>
    </div>

  </Layout>
)

export default SecondPage

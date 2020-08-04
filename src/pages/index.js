import React from "react"

import colors from '../components/colors'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Accueil1 from '../components/images/Accueil/Accueil1'
import Accueil2 from '../components/images/Accueil/Accueil2'
import TextAndImage from "../components/TextAndImage/TextAndImage"

const text = `Le domaine actuel, formé de la bastide, de la chapelle, du parc et des terres
agricoles, fut constitué progressivement. Le nom de Salles provient du latin sala qui
signifie « résidence ». A travers l’histoire, ce domaine a été la résidence principale
ou secondaire de prieurs, de nobles et de bourgeois. Le quartier a été habité de
longue date comme en atteste la présence du dolmen de la Pierre de la Fée, daté
d’environ 2.500 av. J.-C., situé à proximité de l’entrée du domaine des Salles. La
bonne localisation des Salles, entre la côte Méditerranéenne et l’arrière-pays
provençal, a également favorisé son développement. Les cartes romaines, élaborées
sous l’empereur Auguste, montrent l’existence d’une voie romaine menant de la
commune de Riez, dans les Alpes de Haute-Provence, à la Via Aurelia reliant la
ville de Rome à l’axe du Rhône. Selon certains historiens, les Salles auraient été une
mutatio, c’est-à-dire une halte permettant aux agents de la poste impériale romaine
de changer de monture et d’abreuver leurs chevaux.`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ minWidth: `100vw`, height:'600px' }}>
      <Accueil1 />
    </div>
    <div style={{padding:`1rem`, backgroundColor: colors.beige}}>
      <h2 style={{textAlign:'center', margin:'0', padding:'0'}}>
      Découvrir le château des Salles, c’est cheminer <br/>
      à travers l'histoire de la Provence.
      </h2>
    </div>
    <TextAndImage text={text} image={<Accueil2 />}/>
  </Layout>
)
export default IndexPage

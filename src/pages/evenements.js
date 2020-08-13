import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EvenementsCarousel from "../components/Carousel/EvenementsCarousel"
import Title from '../components/Title/Title'
import TextAndImageEvent from "../components/TextAndImage/TextAndImageEvent"

import Event1 from "../components/images/Evenements/Event1"
import Event2 from "../components/images/Evenements/Event2"
import EvenementTexteAdditionnel from "../components/EvenementTexteAdditionnel/EvenementTexteAdditionnel"
import CuveComponent from "../components/CuveComponent"

const SecondPage = () => (
  <Layout>
    <SEO title="Événements" />
      <EvenementsCarousel/>
      <Title title="GRANDE SALLE DE RÉCEPTION DU CHÂTEAU" id="grandeSalle"/>
      <TextAndImageEvent 
      options={
      <>
        <h3>Option<br/>Lavande</h3>
        <p>Grande salle de réception du château <br/>
          + Bar patio
        </p>
      </>
      }
      tarif1="900"
      image={<Event1 />} 
      />
      <TextAndImageEvent 
      options={
      <>
      <h3>Option<br/>Olivier</h3>
      <p>Grande salle de réception du château <br/>
        + Bar patio<br/>
        + Extérieurs<br/>
        + Terrasse sous les platanes
      </p>
      </>
      }
      tarif1="550"
      name1="Journée"
      tarif2="900"
      name2="Soirée"
      image={<Event2 />} 
      reversed
      />
      <EvenementTexteAdditionnel texte={<p>- Le mobilier (tables et chaises) sont inclus dans la location <br/>- Nombre maximum d’invités : 50 personnes<br/>  - Pas de mariages</p>} />
      <Title title="SALLE DES CUVES ET SON BAR" id="cuve"/>
      <CuveComponent />

  </Layout>
)

export default SecondPage

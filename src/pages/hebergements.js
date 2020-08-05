import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PartiesCommunesCarousel from '../components/Carousel/CarouselXIXPartiesCommunes'
import GrandeChambreCarousel from '../components/Carousel/CarouselXIXGrandeChambre'
import PetiteChambreCarousel from '../components/Carousel/CarouselXIXPetiteChambre'
import XXPartiesCommunesCarousel from '../components/Carousel/CarouselXXPartiesCommunes'
import XXGrandeChambreCarousel from '../components/Carousel/CarouselXXGrandeChambre'
import XXPetiteChambreCarousel from '../components/Carousel/CarouselXXPetiteChambre'
import Title from "../components/Title/Title"
import SubTitle from "../components/Title/SubTitle"
import MailButton from "../components/MailButton/MailButton"
import GiteCarousel from "../components/Carousel/CarouselGite"
import TarifsSemaine from "../components/Tarifs/TarifsSemaine"

const SecondPage = () => (
  <Layout>
    <SEO title="Hébergements" />
    <Title title="LES CHAMBRES D’HÔTE" id="chambres"/>
    <SubTitle title="Période XIXe siècle"/>
    <div className="XIX"  style={{margin:'40px auto'}}>
        <PartiesCommunesCarousel/>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignContent: 'flex-start', width: '100vw' }}>
        <GrandeChambreCarousel/>
        <PetiteChambreCarousel/>
      </div>
      <p style={{textAlign:'center', fontSize:"24px", margin:"20px auto"}}>Petit déjeuner inclus, servi tous les matins dans la salle à manger ou sur la terrasse du château de 8h30 à 9h30.</p>
      <MailButton />
    </div>

    <SubTitle title="Période XXe siècle"/>
    <div className="XX"  style={{margin:'40px auto'}}>
        <XXPartiesCommunesCarousel/>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignContent: 'flex-start', width: '100vw' }}>
        <XXGrandeChambreCarousel/>
        <XXPetiteChambreCarousel/>
      </div>
      <p style={{textAlign:'center', fontSize:"24px", margin:"20px auto"}}>Petit déjeuner inclus, servi tous les matins dans la salle à manger ou sur la terrasse du château de 8h30 à 9h30.</p>

      <MailButton />
    </div>
    <Title title="LE GÎTE" id="gite"/>
      <SubTitle title="Période XIXe siècle"/>
    <div className="XIX"  style={{width:'1000px', margin:'40px auto'}}>
      <GiteCarousel/>
      <TarifsSemaine prix="1400€" prix2="500€"/>
      <p style={{textAlign:'center', fontSize:"24px", margin:"20px auto"}}>Location gîte sur un étage pour six personnes (trois chambres)</p>
    </div>
      <MailButton />

    <hr style={{width:'400px', color:'olive', margin:'40px auto'}}></hr>
    
    <div className="details"
    style={{
      width:'1000px',
      margin:'40px auto',
      fontSize:'1.2rem'
    }}
    >
      <h4>Détails</h4>
      <p>
      Piscine, parking gratuit, connexion wifi gratuite, chauffage central, literie d’hôtel de première qualité,
      boulodrome, chambre climatisée ou semi-climatisée, terrasse sous platanes, patio.
      </p>
      <p> Horaires d’arrivée tous les jours entre 16h00 et 18h00 <br/>  Horaires de départ tous les jours à 11h00 </p>
      <p>
        Visite du parc du château et de la chapelle sur demande.
      </p>
    </div>

  </Layout>
)

export default SecondPage

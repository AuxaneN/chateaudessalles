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
import ResponsiveWrapper from "../components/ResponsiveWrapper"

const SecondPage = () => (
  <Layout>
    <SEO title="Hébergements" />
    <Title title="LES CHAMBRES D’HÔTE" id="chambres"/>
    <ResponsiveWrapper>
    <SubTitle title="Période XIXe siècle"/>
    </ResponsiveWrapper>
    <div className="XIX"  style={{margin:'40px auto'}}>
      <ResponsiveWrapper>
        <PartiesCommunesCarousel/>
      </ResponsiveWrapper>
      <ResponsiveWrapper style={{ display: 'flex', justifyContent: 'space-evenly', alignContent: 'center', width: '100vw', flexWrap:'wrap' }}>
        <GrandeChambreCarousel/>
        <PetiteChambreCarousel/>
      </ResponsiveWrapper>
      <p style={{textAlign:'center', fontSize:"24px", margin:"20px auto"}}>Petit déjeuner inclus, servi tous les matins dans la salle à manger ou sur la terrasse du château de 8h30 à 9h30.</p>
      <MailButton />
    </div>

    <ResponsiveWrapper>
      
    <SubTitle title="Période XXe siècle"/>
    </ResponsiveWrapper>
    <div className="XX"  style={{margin:'auto'}}>
    <ResponsiveWrapper>
        <XXPartiesCommunesCarousel/>
    </ResponsiveWrapper>
      <ResponsiveWrapper style={{ display: 'flex', justifyContent: 'space-evenly', alignContent: 'center', width: '100vw', flexWrap:'wrap'}}>
        <XXGrandeChambreCarousel/>
        <XXPetiteChambreCarousel/>
      </ResponsiveWrapper>
      <p style={{textAlign:'center', fontSize:"24px", margin:"20px auto"}}>Petit déjeuner inclus, servi tous les matins dans la salle à manger ou sur la terrasse du château de 8h30 à 9h30.</p>

      <MailButton />
    </div>
    <Title title="LE GÎTE" id="gite"/>
      <SubTitle title="Période XIXe siècle"/>
    <div className="XIX"  style={{width:'100%', maxWidth:'1000px', margin:'40px auto'}}>
      <GiteCarousel/>
      <TarifsSemaine prix="1400€" prix2="500€"/>
      <p style={{textAlign:'center', fontSize:"24px", margin:"20px auto"}}>Location gîte sur un étage pour six personnes (trois chambres)</p>
    </div>
      <MailButton />

    <hr style={{maxWidth:'400px',width:'100vw', color:'olive', margin:'40px auto'}}></hr>
    
    <div className="details"
    style={{
      width:'100vw',
      maxWidth:'1000px',
      margin:'40px auto',
      fontSize:'1.2rem'
    }}
    >
      <ResponsiveWrapper>
        <h4>Détails</h4>
        <p>
        Piscine, parking gratuit, connexion wifi gratuite, chauffage central, literie d’hôtel de première qualité,
        boulodrome, chambre climatisée ou semi-climatisée, terrasse sous platanes, patio.
        </p>
        <p>Horaires d’arrivée tous les jours entre 16h00 et 18h00 <br/>Horaires de départ tous les jours à 11h00 </p>
        <p>
          Visite du parc du château et de la chapelle sur demande.
        </p>
      </ResponsiveWrapper>

    </div>

  </Layout>
)

export default SecondPage

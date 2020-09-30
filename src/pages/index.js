import React from "react"

import colors from "../components/colors"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScriptLoader from "../components/InstagramFeed/ScriptLoader"

import Accueil1 from "../components/images/Accueil/Accueil1"
import Accueil2 from "../components/images/Accueil/Accueil2"
import Accueil3 from "../components/images/Accueil/Accueil3"
import Accueil4 from "../components/images/Accueil/Accueil4"
import TextAndImage from "../components/TextAndImage/TextAndImage"
import InstagramFeed from "../components/InstagramFeed/InstagramFeed"
import AccueilCarousel from "../components/Carousel/AccueilCarousel"

const text1 = `Le domaine actuel, formé de la bastide, de la chapelle, du parc et des terres
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

const text2 = `Au Moyen-Âge, les terres du domaine des Salles ont ensuite
été mises en valeur par les moines établis au monastère de Saint-
Hermentaire de Draguignan, bâti au Ve siècle par l’abbaye de
Lérins. A partir du XIe siècle, le domaine des Salles fut exploité par
les prieurs de l’Abbaye de Saint-Pons de Nice qui y bâtirent une
chapelle rurale de style roman, appelée Notre-Dame des Salles. La
constitution d’un canal pour l’irrigation des parcelles a permis de
faire des Salles un domaine agricole.`

const text3 = `
A l’époque moderne, la famille Rasque de Laval acheta une grande
partie du domaine des Salles et engagea la construction d’une bastide
provençale, probablement dès le XVIe siècle. L’ensemble fut embelli
par François-Marie de Rasque de Laval, Premier Consul, maire de Draguignan
au moment de la Révolution. Ce dernier choisit d’ailleurs d’être
enterré à la chapelle de Notre-Dame des Salles. Par alliance et par
succession, la propriété des Salles devait passer ensuite de propriétaires
en propriétaires. A chaque famille, son siècle : la famille Truc de la
Valère au XIXe siècle, la famille Cantilhion de Lacouture au XXe siècle
et la famille Rhodius au XXIe siècle.
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <ScriptLoader /> */}
    <div style={{ height: "100", minHeight: "400px" }}>
      {/* <Accueil1 /> */}
      <AccueilCarousel />
    </div>
    <div style={{ padding: `1rem`, backgroundColor: colors.beige }}>
      <h2 style={{ textAlign: "center", margin: "0", padding: "0" }}>
        Découvrir le château des Salles, c’est cheminer <br />à travers
        l'histoire de la Provence.
      </h2>
    </div>
    <TextAndImage text={text1} image={<Accueil2 />} />
    <TextAndImage text={text2} image={<Accueil3 />} reversed />
    <TextAndImage text={text3} image={<Accueil4 />} />

    <InstagramFeed />
  </Layout>
)
export default IndexPage

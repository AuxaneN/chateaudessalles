import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Agri1 from '../components/images/Agriculture/Agri1'
import Agri2 from '../components/images/Agriculture/Agri2'
import Agri3 from '../components/images/Agriculture/Agri3'
import Agri4 from '../components/images/Agriculture/Agri4'
import Agri5 from '../components/images/Agriculture/Agri5'
import Agri6 from '../components/images/Agriculture/Agri6'
import Accueil3 from '../components/images/Accueil/Accueil3'

import TextAndImageWrapper from "../components/TextAndImage/TextAndImageAgriculture";
import TextAndImageAgriculture3Elements from "../components/TextAndImage/TextAndImageAgriculture3Elements"

const SecondPage = () => (
  <Layout>
    <TextAndImageWrapper 
    title="JARDIN DE LÉGUMES BIOLOGIQUES DE SAISON"
    texte="Un hectare de légumes biologiques de saison sont cultivés toute l’année, principalement à l’époque estivale et printanière, par le propriétaire, Baptiste Rhodius. Les choix des variétés anciennes et une attention particulière à l’état du sol sont privilégiés. Il est possible d’acheter directement sur place les légumes cultivés sur la propriété tous les mercredis de 16h30 à 19h, d’avril à novembre."
    image={<Agri1 />}
    />
    <TextAndImageWrapper 
    title="VIGNOBLE AOC"
    texte="Un hectare de vignes en AOC plantées en 2017 est cultivé en agriculture biologique sur le domaine. L’encépagement représente 80 % de grenache et 20 % de syrah. La taille est effectuée en gobelet, dans le respect de la biodiversité. Un hectare supplémentaire est en préparation, ainsi qu’une cave de vinification."
    image={<Agri2 />}
    reversed
    />
      <TextAndImageWrapper 
    title="OLIVERAIE"
    texte="Environ 200 arbres en cours de restructuration ont été plantés après le terrible gel de 1956 qui avait ravagé trois quart des oliviers de la région. Chaque année, le propriétaire récolte ses olives, accompagnées de son fils et de sa femme. Il obtient ainsi une récolte conséquence pour sa consommation personnelles."
    image={<Agri3 />}
    />
    <TextAndImageAgriculture3Elements 
    title="VERGER DE FRUITS DE
    VARIÉTÉS ANCIENNES"
    title2="POULAILLER FAMILIAL"
    texte="Une cinquantaine d’arbres fruitiers ont été plantés par le propriétaire. Le choix des variétés s’est porté sur des variétés anciennes de cerisiers, abricotiers, pruniers, pommiers, amandiers, figuiers."
    texte2="Une vingtaine de poules occupent le poulailler du domaine. Vous aurez la possibilité de déguster leurs oeufs au petit déjeuner de la chambre d’hôte ou en les achetant le mercredi au magasin du potager sur le domaine en vente directe."
    image={<Agri4 />}
    image2={<Agri5 />}
    />

      <TextAndImageWrapper 
    title="RUCHER"
    texte="Le propriétaire a installé quelques ruches sur le domaine afin de favoriser la pollinisation des fruits et légumes et d’en extraire le miel. Il les transhume sur les lavandes provençales en juin et sur la sarriettes en septembre."
    image={<Agri6 />}
    reversed
    />
      <TextAndImageWrapper 
    title="BASSIN DE TRUITES"
    texte="Un bassin daté du XVIIe siècle est alimenté par une source qui coule toute l’année. Vous pourrez y apercevoir des truites que la famille pêche régulièrement pour sa consommation personnelle."
    image={<Accueil3 />}
    />
    <SEO title="Agriculture"/>
  </Layout>
)

export default SecondPage

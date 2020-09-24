import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hist0 from "../components/images/Histoire/Hist0"
import Hist1 from "../components/images/Histoire/Hist1"
import Hist2 from "../components/images/Histoire/Hist2"
import Hist3 from "../components/images/Histoire/Hist3"
import Hist4 from "../components/images/Histoire/Hist4"

import styled from "styled-components"
import colors from "../components/colors"
import TextAndImageHistoire from "../components/TextAndImage/TextAndImageHistoire"

const CarteWrapper = styled.div`
  margin: 40px auto;
  position: relative;
  max-width: 100vw;
  max-height: 1000px;
  height: 100vh;
  overflow-x: hidden;
  .image {
    width: 1000px;
    max-width: 100vw;
    height: auto;
    position: absolute;
    top: 5em;
    left: 50%;
    transform: translateX(-50%);
  }
  .square {
    position: relative;
    width: 800px;
    max-width: 100vw;
    height: 600px;
    background-color: ${colors.beige};
    h2 {
      width: max-content;
      max-width: 80vw;
      position: relative;
      z-index: 2;
      color: ${colors.olive};
      box-sizing: content-box;
      margin: auto;
      padding: 20px 0px;
      ::after {
        content: "";
        display: block;
        width: 1000px;
        max-width: 100vw;
        min-height: 1px;
        min-width: 1px;
        background-color: ${colors.olive};

        position: absolute;
        top: 1rem;
        margin: 20px 0px;
        left: 105%;
        ${props => (props.reversed ? `left:100%;` : `right:100%;`)}

        z-index:2;
      }
    }
  }
  @media screen AND (max-width: 800px) {
    overflow: hidden;
    height: 70vh;
    .square {
      height: 100%;
      h2::after {
        display: none;
      }
    }
  }
  @media screen AND (max-width: 500px) {
    overflow-x: hidden;
    height: 50vh;
    .square {
      h2::after {
        display: none;
      }
    }
  }
`

const SecondPage = () => (
  <Layout>
    <SEO title="Histoire" />
    <CarteWrapper>
      <div className="square">
        <h2>Le château des Salles est un lieu empreint d'histoire</h2>
      </div>
      <div className="image">
        <Hist0 />
      </div>
    </CarteWrapper>

    <TextAndImageHistoire
      texte={
        <>
          <p>
            Le château des Salles est emblématique des bastides provençales.
            Remontant au moins au XVIIe siècle, le bâtiment a été agrandi
            progressivement jusqu’au XVIIIe siècle. C’est un lieu de résidence
            secondaire appelés, selon les cas « maison de campagne », « maison
            de maître » ou « bastide ». Il s’agit d’une villégiature champêtre,
            une « campagne » pour la famille Rasque de Laval qui exerce des
            fonctions politiques à Draguignan et dont la résidence principale
            demeure sur la place du Marché.
          </p>
          <p>
            La bastide répond à une double fonction : c’est un lieu de repos et
            de supervision des terres agricoles. Depuis le château des Salles,
            le propriétaire pouvait surveiller les activités du fermier qui
            exploitait la propriété. Au XVIIIe siècle, la bastide des Salles est
            agrandie sur la partie postérieure. Les propriétaires organisent de
            grandes réceptions sur le domaine. On doit à Jean François Rasque de
            Laval et à son fils François-Marie de Rasque de Laval
            l’embellissement de l’édifice principal qui lui donne son cachet.
            L’historien Frédéric Mireur affirme à ce sujet :
          </p>
          <p>
            « Ils firent oeuvre d’initiatives, d’hommes de progrès et de goût,
            en créant une des premières campagnes d’agrément en notre
            territoire, alors parsemé de quelques méchants bastidons ou de
            maisons de fermes très rustiques, la plupart inhabitées. »
          </p>
          <p>
            Voici la chronologie des propriétaires successifs du domaine des
            Salles :
          </p>
          <div
            style={{
              border: `3px ${colors.olive} solid`,
              textAlign: "center",
              padding: "20px",
            }}
          >
            <h2>FAMILLE RASQUE DE LAVAL (XVIIe – XIXe SIECLE)</h2>
            <p>
              Honoré de Rasque (XVIIe siècle)
              <br />
              Joseph de Rasque (XVIIe siècle)
              <br />
              Joseph II de Rasque (1673-1749)
              <br />
              Jean-François de Rasque de Laval (1710-1786)
              <br />
              François-Marie de Rasque de Laval (1743-1819)
              <br />
              Paulin de Rasque de Laval (1783-1848)
            </p>
            <h2> FAMILLE TRUC DE LA VALERE (XIXe SIECLE)</h2>
            <p>
              {" "}
              Nomadie de Rasque de Laval épouse de Gonzalve Truc de La Valère
              (1865)
              <br /> Ferréol Truc de La Valère, époux de Germaine Cantilhon de
              Lacouture (1890)
            </p>
            <h2> FAMILLE CANTILHION DE LACOUTURE (XXe SIECLE)</h2>
            <p>
              Jean-Baptiste Cantilhion de Lacouture (1912-1986)
              <br />
              Jean-Stéphane (1959) et Marie-Véronique Cantilhion de Lacouture
              (1964)
            </p>
            <h2 style={{ textTransform: "uppercase" }}>
              Famille Rhodius (XXIème siècle)
            </h2>
            <p> Marie-Véronique, Baptiste (1987) et Valentin Rhodius (1991)</p>
          </div>
        </>
      }
      title="LE CHATEAU"
      image={<Hist1 />}
      imageFlex="2 1 70%;"
    />
    <TextAndImageHistoire
      title="LA CHAPELLE RURALE NOTRE-DAME DES SALLES"
      texte={
        <>
          <p>
            Située en hauteur par rapport à la bastide, la chapelle
            Notre-Dame-des-Salles de style roman primitif, est, avec une partie
            du mur d’enceinte en pierres, l’ouvrage le plus ancien du domaine.
            Elle a été bâtie au XIe siècle dans une période marquée par un
            contexte politique troublé. Venus d’Afrique du Nord, les Sarrasins
            avaient multiplié les raids et pillages en Provence, désorganisant
            l’économie provençale avant d’être chassés par les armées du comte
            Guillaume Ier de Provence à la fin du Xe siècle. Ainsi, la
            construction d’une chapelle au quartier des Salles permettait
            d’étendre la foi chrétienne en Provence, encore marquée par le
            paganisme, et de relancer l’activité agricole à Draguignan.
          </p>
          <p>
            Les prieurs successifs, nommés par l’abbé de Saint-Pons à Nice,
            avaient pour mission d’assurer le culte religieux dans le quartier
            des Salles et d’exploiter le domaine foncier. Les prieurs envoyaient
            ensuite une partie des revenus du domaine agricole à l’abbaye de
            Saint-Pons. La chapelle était entourée d’un cimetière jusqu’au XVIe
            siècle. A côté de la chapelle, il existait un bâtiment pour loger le
            prieur. Menacé de ruines, celui-ci fut démoli en 1616.
          </p>
        </>
      }
      image={<Hist2 />}
      imageFlex="2 2 30%;"
      reversed
    />
    <TextAndImageHistoire
      texte={
        <>
          <p>
            En 1346, le prieuré de Notre-Dame des Salles fut supprimé et ses
            biens furent incorporés à celui de Saint-Hermentaire. Le prieur prit
            le titre de Saint-Hermentaire, Notre-Dame-des-Salles et Saint-
            Jacques. Ce dernier était tenu d’organiser des messes le dimanche à
            la chapelle des Salles. Or, le prieur de Saint-Hermentaire, de
            N.-D.-des-Salles et de Saint-Jacques fut accusé de négligence dans
            le cadre de son sacerdoce. Au XVIIe siècle, les habitants du
            quartier des Salles l’accusèrent de ne plus célébrer le culte
            dominical depuis le dimanche de la Croix de Mai (3 mai) jusqu’à la
            Saint-Michel (29 septembre). Ces derniers lui reprochèrent également
            de ne pas avoir changé la cloche de la chapelle qui avait été
            dérobée pendant les guerres de religion. La fête la plus importante
            de l’année était celle de l’Assomption le 15 août lors de laquelle
            des bals avec tambours étaient organisés.
          </p>
          <p>
            Avant la Révolution, les terres qui formaient, à l’origine, le
            prieuré des Salles, avait été aliénées, en grande partie, à la
            famille Rasque de Laval. Pendant la Révolution, le prieuré de
            Notre-Dame des Salles devint bien national avant d’être racheté par
            la famille Rasque de Laval en 1810. La consistance du domaine, tel
            que nous le connaissons aujourd’hui, date de cette époque.
          </p>
          <p>
            Depuis l’extérieur, on peut admirer le bon état de conservation de
            l’édifice qui a connu peu de rénovations depuis sa construction.
            Depuis l’entrée principale, une courte nef, sans transept, dessert
            un choeur sur lequel s’établit un autel en marbre logé dans une
            abside en « cul de four » (une voute à quatre sphères rappelant la
            forme du four à pain). La cloche actuelle a été fondue au XIXe
            siècle à Marseille. Jusqu’au début du XXe siècle, il existait dans
            la chapelle un diptyque de 1422 représentant des scènes de la Bible,
            sur l’un des volets figurait le thème du Buisson Ardent et sur
            l’autre, l’Annonciation.
          </p>
        </>
      }
      image={<Hist3 />}
      imageFlex="2 2 30%;"
    />

    <TextAndImageHistoire
      texte={
        <>
          <p>
            Les terres du domaine des Salles ont des fonctions essentiellement
            agricoles. La présence d’une source, de nombreux bassins et d’un
            canal ancien a permis une mise en valeur précoce du domaine.
          </p>
          <p>
            A l’époque moderne, la famille Rasque de Laval exploite la campagne
            des Salles à travers des contrats de fermage. Parmi les cultures
            exploitées, on retrouve les produits typiques de la trilogie
            méditerranéenne à savoir la vigne, le blé et l’olive. Les fermiers
            successifs ont également développé le maraîchage, notamment la
            culture des artichauts dont les propriétaires du domaine étaient
            particulièrement friands. Il faut encore citer la présence de
            muriers nécessaires à la sériciculture (élevage des vers à soie).
          </p>
          <p>
            La présence de vignes est ancienne. En haut de la propriété, une
            distillerie était en fonction jusque dans les années 1970, pour la
            production du marc de raisin. Les cuves se trouvaient dans la ferme.
          </p>
          <p>
            Au-delà de l’aspect productif, la campagne avait également un usage
            d’agrément. Le parc des Salles était planté de nombreuses essences
            dont le principal objectif était de rafraichir les abords de la
            bastide. Sur la terrasse, de nombreux platanes et marronniers très
            anciens devaient rendre les journées d’été plus supportables. C’est
            également le cas des fontaines construites dans le parc et
            alimentées par de nombreuses sources. Pièce maîtresse du parc, le
            profond et large bassin situé à proximité de la chapelle est entouré
            d’une rangée de cyprès. L’historien Fréderic Mireur décrit le parc
            en ces termes :
          </p>
          <p>
            « Un bassin supérieur de dimensions peu ordinaires, alimentant un
            petit jet d’eau vigoureux, l’un et l’autre enveloppés d’un rideau de
            cyprès ; une allée de peupliers de très belle venue ; des berceaux
            de verdure pleins d’ombre, de mystère et de cachette si
            impénétrables qu’elles dérobèrent plus d’une fois le maître aux
            perquisitions des sans-culottes ».
          </p>
          <p>
            Ainsi, le parc du château des Salles a pu avoir une autre fonction :
            celle de permettre à son propriétaire royaliste, François-Marie de
            Rasque de Laval, d’échapper, plus d’une fois, aux autorités
            révolutionnaires !
          </p>
        </>
      }
      title="LES TERRES AGRICOLES ET LES JARDINS"
      image={<Hist4 />}
      imageFlex="2 1 70%;"
    />
  </Layout>
)

export default SecondPage

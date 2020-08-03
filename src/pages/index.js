import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AccueilImages from '../components/images/Accueil/accueil'
import SlideShow from '../components/AccueilCarousel/AccueilCarousel'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SlideShow />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <AccueilImages />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)
export default IndexPage

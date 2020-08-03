import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page introuvable" />
    <h1>Page introuvable</h1>
    <p>Cette page n'existe pas !</p>
  </Layout>
)

export default NotFoundPage

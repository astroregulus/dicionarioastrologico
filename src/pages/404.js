import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Essa página não existe.</h1>
    <p>Estamos trabalhando para adicionar cada vez mais palavras! Nos acompanhe.</p>
    <p>Caso deseje sugerir uma nova palavra, <a href="https://forms.gle/nALmE1pdVX7mvVpi7" target="_blank">clique aqui</a></p>
  </Layout>
)

export default NotFoundPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Dicionário Astrológico</h1>

    <div style={{
          display: "flex",
          flexFlow: "column"
        }}>
      <Link to="/a">A</Link>
      <Link to="/c">C</Link>
    </div>

  </Layout>
)

export default IndexPage

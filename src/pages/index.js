import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const linkStyle = {
  textDecoration: "none",
  color:"white",
  width:"48px",
  height:"48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#011830",
  margin: "5px"
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Olá! Aqui você encontrará diversos termos astrológicos e seus significados/explicações.</p>

    <p>Clique na letra que deseja:</p>

    <div style={{
          display: "flex",
          flexFlow: "row",
        }}>
        <Link to="/a" style={linkStyle}>A</Link>
        <Link to="/c" style={linkStyle}>C</Link>

    </div>

  </Layout>
)

export default IndexPage

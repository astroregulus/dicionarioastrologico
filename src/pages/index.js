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

const letters = ["a","c","j","l","m","s","v"];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Olá! Aqui você encontrará diversos termos astrológicos e seus significados/explicações.</p>

    <p>Clique na letra que deseja:</p>

    <div style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap"
        }}>

        {letters.map( letter => <Link to={`/${letter}`} style={linkStyle}>{letter.toUpperCase()}</Link>)}

    </div>

  </Layout>
)

export default IndexPage

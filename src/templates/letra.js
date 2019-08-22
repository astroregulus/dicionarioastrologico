import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from 'gatsby'

const linkStyle = {
  textDecoration: "none",
  backgroundColor: "#011830",
  height: "32px",
  color: "white",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  marginBottom: "5px",
  justifyContent: "space-between"
}

const LetterPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
    pageContext: { letra }
  }) => (
  <Layout>
    <SEO title={`Letra ${letra.toUpperCase()}`} />
    <h1>{letra.toUpperCase()}</h1>
    <div style={{
      display: "flex",
      flexFlow: "column"
    }}>
      {edges.map(edge => <Link to={edge.node.frontmatter.path} style={linkStyle}>{edge.node.frontmatter.title} <span>></span></Link>)}
    </div>
  </Layout>
)

export default LetterPage

export const letterAQuery = graphql`
  query($globLetter: String!) {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___title]}, filter: {frontmatter: {path: {glob: $globLetter}}}) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from 'gatsby'

const LetterPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
    pageContext: { letra }
  }) => (
  <Layout>
    <SEO title={`Letra ${letra}`} />
    <h1>{letra}</h1>
    <div style={{
      display: "flex",
      flexFlow: "column"
    }}>
      {edges.map(edge => <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>)}
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

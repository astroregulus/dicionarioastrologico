import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LetterPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
    pageContext: { letra }
  }) => (
  <Layout>
    <SEO title={`Letra ${letra}`} />
    <h1>{letra}</h1>
    {edges.map(edge => <p>{edge.node.frontmatter.title}</p>)}
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

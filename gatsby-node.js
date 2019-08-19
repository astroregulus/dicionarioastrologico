/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const palavraTemplate = path.resolve(`src/templates/palavra.js`)
  const letraTemplate = path.resolve(`src/templates/letra.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: palavraTemplate,
      context: {}, // additional data can be passed via context
    })
  });
  const letters = ["a","c"];
  letters.forEach( letter => {
    createPage({
      path: `/${letter}`,
      component: letraTemplate,
      context: {
        globLetter: `/${letter}/*`,
        letra: `${letter}`
      }
    })
  })
}

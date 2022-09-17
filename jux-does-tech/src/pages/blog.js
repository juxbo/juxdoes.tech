import * as React from "react"
import { Link, graphql } from "gatsby"

import Background from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import ProjectList from "../components/project-list"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"

// TODO: Rename to project
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "juxdoes"
  const posts = data.allMarkdownRemark.nodes

  const parallaxRef = React.useRef(null)

  console.log(posts)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <ProjectList posts={posts} />
      <div className="section">
        <p>This page was built using GatsbyJS, deployed on AWS </p>
        {/* TODO: Find out if I need this shit */}
        <a href="/impressum">impressum</a>
        <a href="/privacy-policy">privacy-policy</a>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

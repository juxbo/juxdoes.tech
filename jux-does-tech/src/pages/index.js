import * as React from "react"
import { Link, graphql } from "gatsby"

import Background from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import BlogList from "../components/blog-list"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "juxdoes"
  const posts = data.allMarkdownRemark.nodes

  const parallaxRef = React.useRef(null)

  console.log(posts)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* TODO: Fix this container being limited by layout thingy */}
      <Parallax pages={3} ref={parallaxRef} style={{ left: 0 }}>
        {/* <button onClick={() => parallaxRef.current.scrollTo(4)}>f</button> */}
        {/* <Background /> */}
        <Intro
          startOffset={0.3}
          handler={() => {
            // TODO:
          }}
        />
        <About startOffset={1} />
        {/* <Background startOffset={1} /> */}
        <BlogList posts={posts} />
        {/* TODO: Built-with section */}
        <ParallaxLayer offset={2.5}>
          <div className="section">
            <p>This page was built using GatsbyJS, deployed on AWS </p>
            {/* TODO: Find out if I need this shit */}
            <a href="/impressum">impressum</a>
            <a href="/privacy-policy">privacy-policy</a>
          </div>
        </ParallaxLayer>
      </Parallax>
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

import * as React from "react"
import { Link, graphql } from "gatsby"

import Background from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import BlogList from "../components/blog-list"

import Aws from "../icons/aws.svg"
import Heart from "../icons/heart.svg"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Spring } from "@react-spring/web"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "juxdoes"
  const posts = data.allMarkdownRemark.nodes

  const parallaxRef = React.useRef(null)

  console.log(posts)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {/* TODO: Fix this container being limited by layout thingy */}
      <Parallax pages={3} ref={parallaxRef} style={{ left: 0 }}>
        {/* <button onClick={() => parallaxRef.current.scrollTo(4)}>f</button> */}
        {/* <Background /> */}
        <Intro
          startOffset={0.2}
          handler={() => {
            // TODO:
          }}
        />
        <About startOffset={1} />
        {/* <Background startOffset={1} /> */}
        <BlogList posts={posts} />
        {/* TODO: Built-with section */}
        <ParallaxLayer offset={3.8} speed={0.6} className="parallax-footer">
          <div className="section credits" style={{ fontSize: "12px" }}>
            <strong>
              Built with <Heart /> by{" "}
              <a href="https://github.com/mrzeldaguy">Jux</a>
            </strong>
            <p>
              Powered by <a href="https://www.gatsbyjs.com/">Gatsby</a>
              <br />
              Deployed on <Aws alt={"aws"} />
              <br />
              Background generated via{" "}
              <a href="https://www.svgbackgrounds.com">SVGBackgrounds.com</a>
            </p>
            {/* TODO: Find out if I need this shit */}
            <a href="/impressum" style={{ marginRight: ".5em" }}>
              impressum
            </a>
            <a href="/privacy-policy">privacy-policy</a>
          </div>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default Index

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
